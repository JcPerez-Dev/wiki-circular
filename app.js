// ============================================================
// CIRCULAR 2026
// NAVEGADOR DE SITUACIONES Y PROCEDIMIENTOS
// Provincia de Córdoba
// ============================================================

"use strict";

let procedimientos = [];

// ------------------------------------------------------------
// ELEMENTOS
// ------------------------------------------------------------

const home = document.getElementById("home");
const navigator = document.getElementById("navigator");
const procedure = document.getElementById("procedure");

const categories = document.getElementById("categories");
const choices = document.getElementById("choices");

const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

const categoryCount = document.getElementById("categoryCount");

const backHome = document.getElementById("backHome");

const breadcrumb = document.getElementById("breadcrumb");
const navTitle = document.getElementById("navTitle");
const navDescription = document.getElementById("navDescription");


// ------------------------------------------------------------
// DESCRIPCIONES
// ------------------------------------------------------------

const categoryDescriptions = {
    "Tecnología y conectividad":
        "Conectividad, correo institucional, netbooks y soporte técnico.",

    "Formación Situada":
        "Formación, certificaciones y gestión de SIPEC.",

    "Trayectorias educativas":
        "Acompañamiento y seguimiento de las trayectorias educativas.",

    "Convivencia":
        "Convivencia escolar, acuerdos institucionales y buen trato.",

    "Currículum":
        "Diseños curriculares, TransFORMAR@Cba y propuestas institucionales.",

    "Información y sistemas":
        "SGE, Relevamiento Anual, matrícula y sistemas de información.",

    "Evaluación":
        "Procesos y procedimientos relacionados con evaluación.",

    "Cooperadoras":
        "Asociaciones cooperadoras, asambleas y documentación.",

    "Cobertura de cargos":
        "Vacantes, cobertura, reubicaciones y altas.",

    "Bienestar":
        "Políticas y procedimientos relacionados con bienestar.",

    "Infraestructura":
        "Edificios escolares, mantenimiento y situaciones de infraestructura.",

    "Patrimonio":
        "Inventario, bienes institucionales, robos y vandalismo.",

    "Seguridad":
        "Seguridad institucional y espacios compartidos.",

    "Salud":
        "Salud y entornos educativos.",

    "Socioeducativo":
        "Iniciativas y propuestas socioeducativas.",

    "Calendario":
        "Fechas y acciones previstas para el ciclo lectivo.",

    "Otros":
        "Otros procedimientos contemplados en la Circular 2026."
};


// ------------------------------------------------------------
// INICIO
// ------------------------------------------------------------

document.addEventListener("DOMContentLoaded", iniciar);

async function iniciar() {

    try {

        const response = await fetch("./procedimientos.json", {
            cache: "no-store"
        });

        if (!response.ok) {
            throw new Error(
                "No se pudo cargar procedimientos.json"
            );
        }

        const data = await response.json();

        // El JSON actual tiene:
        // {
        //   ...
        //   "procedimientos": [...]
        // }

        if (!Array.isArray(data.procedimientos)) {
            throw new Error(
                "El archivo procedimientos.json no contiene el campo procedimientos."
            );
        }

        procedimientos = data.procedimientos;

        renderCategories();

        configurarEventos();

    } catch (error) {

        console.error(error);

        categories.innerHTML = `
            <div class="result-card">
                <div class="card-title">
                    No se pudieron cargar los procedimientos
                </div>

                <div class="card-description">
                    Verificá que procedimientos.json esté en la
                    misma carpeta que index.html.
                </div>
            </div>
        `;
    }
}


// ------------------------------------------------------------
// EVENTOS
// ------------------------------------------------------------

function configurarEventos() {

    // Botón volver
    if (backHome) {
        backHome.addEventListener("click", () => {
            mostrarHome();
        });
    }

    // Buscador
    if (searchForm) {

        searchForm.addEventListener("submit", function (event) {

            event.preventDefault();

            ejecutarBusqueda();
        });
    }

    if (searchInput) {

        searchInput.addEventListener("input", function () {

            const texto = searchInput.value.trim();

            if (texto.length === 0) {
                limpiarBusqueda();
            }
        });
    }
}


// ------------------------------------------------------------
// CATEGORÍAS
// ------------------------------------------------------------

function obtenerCategorias() {

    const mapa = {};

    procedimientos.forEach(item => {

        const categoria = obtenerCategoria(item);

        if (!mapa[categoria]) {
            mapa[categoria] = [];
        }

        mapa[categoria].push(item);
    });

    return Object.entries(mapa)
        .sort((a, b) =>
            a[0].localeCompare(b[0], "es")
        );
}


// ------------------------------------------------------------
// RENDER CATEGORÍAS
// ------------------------------------------------------------

function renderCategories() {

    if (!categories) return;

    categories.innerHTML = "";

    const lista = obtenerCategorias();

    if (categoryCount) {
        categoryCount.textContent =
            `${lista.length} categorías`;
    }

    lista.forEach(([categoria, items]) => {

        const button = document.createElement("button");

        button.type = "button";
        button.className = "category-card";

        const descripcion =
            categoryDescriptions[categoria] ||
            "Situaciones y procedimientos relacionados con esta categoría.";

        button.innerHTML = `
            <span class="card-title">
                ${escapeHTML(categoria)}
            </span>

            <span class="card-description">
                ${escapeHTML(descripcion)}
            </span>

            <span class="card-arrow">
                ${items.length}
                ${items.length === 1 ? "procedimiento" : "procedimientos"}
                →
            </span>
        `;

        button.addEventListener("click", function () {

            mostrarCategoria(categoria, items);

        });

        categories.appendChild(button);
    });
}


// ------------------------------------------------------------
// MOSTRAR CATEGORÍA
// ------------------------------------------------------------

function mostrarCategoria(categoria, items) {

    mostrarNavigator();

    if (navTitle) {
        navTitle.textContent = categoria;
    }

    if (navDescription) {

        navDescription.textContent =
            categoryDescriptions[categoria] ||
            "Seleccioná una situación para consultar el procedimiento.";
    }

    if (breadcrumb) {

        breadcrumb.textContent =
            `Circular 2026 / ${categoria}`;
    }

    if (procedure) {

        procedure.classList.add("hidden");
        procedure.innerHTML = "";
    }

    if (!choices) return;

    choices.innerHTML = "";

    const ordenados = [...items].sort((a, b) => {

        const textoA = obtenerSituacion(a);
        const textoB = obtenerSituacion(b);

        return textoA.localeCompare(textoB, "es");
    });

    ordenados.forEach(item => {

        const button = document.createElement("button");

        button.type = "button";
        button.className = "choice-card";

        button.innerHTML = `
            <span>
                <span class="card-title">
                    ${escapeHTML(obtenerSituacion(item))}
                </span>

                ${renderMeta(item)}
            </span>
        `;

        button.addEventListener("click", function () {

            mostrarProcedimiento(item);
        });

        choices.appendChild(button);
    });

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ------------------------------------------------------------
// METADATA
// ------------------------------------------------------------

function renderMeta(item) {

    const partes = [];

    const nivel = convertirTexto(
        item.nivel_modalidad ||
        item.nivel ||
        item.modalidad
    );

    const seccion =
        item.seccion ||
        item.sección ||
        "";

    if (nivel) {
        partes.push(nivel);
    }

    if (seccion) {
        partes.push(seccion);
    }

    if (!partes.length) {
        return "";
    }

    return `
        <span class="card-description">
            ${escapeHTML(partes.join(" · "))}
        </span>
    `;
}


// ------------------------------------------------------------
// PROCEDIMIENTO
// ------------------------------------------------------------

function mostrarProcedimiento(item) {

    mostrarNavigator();

    if (choices) {
        choices.innerHTML = "";
    }

    if (navTitle) {
        navTitle.textContent = "Procedimiento";
    }

    if (navDescription) {
        navDescription.textContent =
            "Información contenida en la Circular Inicio Ciclo Lectivo 2026.";
    }

    if (breadcrumb) {

        breadcrumb.textContent =
            `Circular 2026 / ${obtenerCategoria(item)}`;
    }

    if (!procedure) return;

    procedure.classList.remove("hidden");

    const categoria = obtenerCategoria(item);
    const situacion = obtenerSituacion(item);

    let html = "";

    html += `
        <div>
            <span class="card-description">
                ${escapeHTML(categoria)}
            </span>

            <h3>
                ${escapeHTML(situacion)}
            </h3>
        </div>
    `;

    agregarBloque(
        "Qué hacer",
        item.que_hacer,
        html,
        value => {
            html = value;
        }
    );

    agregarBloque(
        "Dónde",
        item.donde,
        html,
        value => {
            html = value;
        }
    );

    agregarBloque(
        "Contacto",
        item.contacto,
        html,
        value => {
            html = value;
        }
    );

    agregarBloque(
        "Plazos",
        item.plazos,
        html,
        value => {
            html = value;
        }
    );

    agregarBloque(
        "Aclaración",
        item.aclaraciones ||
        item.aclaracion,
        html,
        value => {
            html = value;
        }
    );

    // --------------------------------------------------------
    // FUENTE
    // --------------------------------------------------------

    const fuente = convertirTexto(item.fuente);
    const paginas = convertirTexto(
        item.paginas ||
        item.páginas
    );

    if (fuente || paginas) {

        html += `
            <div class="source">

                <h4>Fuente</h4>

                ${
                    fuente
                        ? `<p>${formatText(fuente)}</p>`
                        : ""
                }

                ${
                    paginas
                        ? `<p>Páginas: ${escapeHTML(paginas)}</p>`
                        : ""
                }

            </div>
        `;
    }

    procedure.innerHTML = html;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ------------------------------------------------------------
// AGREGAR BLOQUE
// ------------------------------------------------------------

function agregarBloque(titulo, contenido, html, callback) {

    const texto = convertirTexto(contenido);

    if (!texto) {
        callback(html);
        return;
    }

    html += `
        <div>
            <h4>${escapeHTML(titulo)}</h4>
            <div>
                ${formatText(texto)}
            </div>
        </div>
    `;

    callback(html);
}


// ------------------------------------------------------------
// BUSCADOR
// ------------------------------------------------------------

function ejecutarBusqueda() {

    if (!searchInput || !searchResults) return;

    const termino = normalizar(searchInput.value);

    if (!termino) {

        limpiarBusqueda();
        return;
    }

    const palabras = termino
        .split(/\s+/)
        .filter(Boolean);

    const resultados = procedimientos
        .map(item => {

            const texto = obtenerTextoBuscable(item);

            let coincidencias = 0;

            palabras.forEach(palabra => {

                if (texto.includes(palabra)) {
                    coincidencias++;
                }
            });

            return {
                item,
                coincidencias
            };

        })
        .filter(resultado =>
            resultado.coincidencias > 0
        )
        .sort((a, b) => {

            if (
                b.coincidencias !==
                a.coincidencias
            ) {
                return (
                    b.coincidencias -
                    a.coincidencias
                );
            }

            return obtenerSituacion(a.item)
                .localeCompare(
                    obtenerSituacion(b.item),
                    "es"
                );
        })
        .slice(0, 15);

    renderResultadosBusqueda(
        resultados,
        termino
    );
}


// ------------------------------------------------------------
// TEXTO BUSCABLE
// ------------------------------------------------------------

function obtenerTextoBuscable(item) {

    const campos = [
        item.id,
        item.seccion,
        item.sección,
        item.situacion,
        item.categoria,
        item.categoría,
        item.nivel_modalidad,
        item.nivel,
        item.modalidad,
        item.keywords,
        item.palabras_clave,
        item.palabrasClave,
        item.que_hacer,
        item.donde,
        item.contacto,
        item.plazos,
        item.aclaraciones,
        item.fuente
    ];

    return normalizar(
        campos
            .map(convertirTexto)
            .join(" ")
    );
}


// ------------------------------------------------------------
// RESULTADOS
// ------------------------------------------------------------

function renderResultadosBusqueda(
    resultados,
    termino
) {

    searchResults.innerHTML = "";

    if (!resultados.length) {

        searchResults.innerHTML = `
            <div class="result-card">

                <div class="card-title">
                    No encontramos una coincidencia directa.
                </div>

                <div class="card-description">
                    Probá con otra palabra o elegí una categoría.
                </div>

            </div>
        `;

        return;
    }

    const etiqueta = document.createElement("div");

    etiqueta.className = "search-label";

    etiqueta.textContent =
        `${resultados.length} resultado${
            resultados.length === 1 ? "" : "s"
        } para "${termino}"`;

    searchResults.appendChild(etiqueta);

    resultados.forEach(resultado => {

        const item = resultado.item;

        const button = document.createElement("button");

        button.type = "button";
        button.className = "result-card";

        button.innerHTML = `
            <div class="card-title">
                ${escapeHTML(
                    obtenerSituacion(item)
                )}
            </div>

            <div class="card-description">
                ${escapeHTML(
                    obtenerCategoria(item)
                )}
            </div>
        `;

        button.addEventListener("click", function () {

            searchInput.value = "";

            searchResults.innerHTML = "";

            mostrarProcedimiento(item);

        });

        searchResults.appendChild(button);
    });
}


// ------------------------------------------------------------
// NAVEGACIÓN
// ------------------------------------------------------------

function mostrarHome() {

    if (home) {
        home.classList.remove("hidden");
    }

    if (navigator) {
        navigator.classList.add("hidden");
    }

    if (procedure) {
        procedure.classList.add("hidden");
    }

    if (searchResults) {
        searchResults.innerHTML = "";
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function mostrarNavigator() {

    if (home) {
        home.classList.add("hidden");
    }

    if (navigator) {
        navigator.classList.remove("hidden");
    }

    if (procedure) {
        procedure.classList.add("hidden");
    }
}


// ------------------------------------------------------------
// OBTENER CAMPOS
// ------------------------------------------------------------

function obtenerCategoria(item) {

    return convertirTexto(
        item.categoria ||
        item.categoría ||
        "Otros"
    );
}


function obtenerSituacion(item) {

    return convertirTexto(
        item.situacion ||
        item.titulo ||
        item.nombre ||
        "Situación sin título"
    );
}


// ------------------------------------------------------------
// CONVERTIR ARRAYS / VALORES A TEXTO
// ------------------------------------------------------------

function convertirTexto(valor) {

    if (
        valor === null ||
        valor === undefined
    ) {
        return "";
    }

    if (Array.isArray(valor)) {

        return valor
            .map(item => convertirTexto(item))
            .filter(Boolean)
            .join(" · ");
    }

    if (
        typeof valor === "object"
    ) {

        return Object.values(valor)
            .map(item => convertirTexto(item))
            .filter(Boolean)
            .join(" · ");
    }

    return String(valor);
}


// ------------------------------------------------------------
// NORMALIZAR
// ------------------------------------------------------------

function normalizar(texto) {

    return convertirTexto(texto)
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[¿?¡!.,;:()[\]{}"'“”‘’]/g, " ")
        .replace(/\s+/g, " ")
        .trim();
}


// ------------------------------------------------------------
// FORMATEAR TEXTO
// ------------------------------------------------------------

function formatText(texto) {

    let resultado =
        escapeHTML(
            convertirTexto(texto)
        );

    resultado = resultado
        .replace(
            /(https?:\/\/[^\s<]+)/g,
            '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>'
        );

    resultado = resultado
        .replace(/\n/g, "<br>");

    return resultado;
}


// ------------------------------------------------------------
// ESCAPE HTML
// ------------------------------------------------------------

function escapeHTML(valor) {

    return String(valor ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


// ------------------------------------------------------------
// LIMPIAR BUSQUEDA
// ------------------------------------------------------------

function limpiarBusqueda() {

    if (!searchResults) return;

    searchResults.innerHTML = "";
}
