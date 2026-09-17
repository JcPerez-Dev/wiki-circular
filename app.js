// ============================================================
// CIRCULAR 2026 - NAVEGADOR DE SITUACIONES Y PROCEDIMIENTOS
// Ministerio de Educación - Córdoba
// ============================================================

let procedimientos = [];

// ------------------------------------------------------------
// ELEMENTOS DEL DOM
// ------------------------------------------------------------

const homeView = document.getElementById("homeView");
const navigatorView = document.getElementById("navigatorView");
const procedureView = document.getElementById("procedureView");

const categoriesContainer = document.getElementById("categories");
const situationsContainer = document.getElementById("situations");
const procedureContainer = document.getElementById("procedure");

const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

const backHomeBtn = document.getElementById("backHome");
const backNavigatorBtn = document.getElementById("backNavigator");

// ------------------------------------------------------------
// DESCRIPCIONES DE CATEGORÍAS
// ------------------------------------------------------------

const categoryDescriptions = {
    "Tecnología y conectividad":
        "Conectividad, correo institucional, netbooks y soporte técnico.",

    "Formación Situada":
        "Formación, certificaciones y gestión de SIPEC.",

    "Trayectorias educativas":
        "Acompañamiento, alertas e intervenciones sobre las trayectorias.",

    "Convivencia":
        "Acuerdos institucionales, convivencia escolar y buen trato.",

    "Currículum":
        "Diseños curriculares, TransFORMAR@Cba y propuestas institucionales.",

    "Información y sistemas":
        "SGE, Relevamiento Anual, matrícula y sistemas de información.",

    "Evaluación":
        "Evaluación institucional y procesos vinculados.",

    "Cooperadoras":
        "Asociaciones cooperadoras, asambleas y documentación.",

    "Cobertura de cargos":
        "Vacantes, cobertura, reubicaciones y altas.",

    "Bienestar":
        "Boleto Educativo Gratuito y otras políticas de bienestar.",

    "Infraestructura":
        "Mantenimiento, edificios y situaciones de infraestructura.",

    "Patrimonio":
        "Inventario, bienes institucionales, robos y vandalismo.",

    "Seguridad":
        "Seguridad institucional y espacios compartidos.",

    "Salud":
        "Situaciones relacionadas con salud y entornos educativos.",

    "Socioeducativo":
        "Iniciativas y propuestas socioeducativas.",

    "Calendario":
        "Fechas y acciones previstas para el ciclo lectivo.",

    "Otros":
        "Otros procedimientos y orientaciones de la Circular 2026."
};

// ------------------------------------------------------------
// INICIO
// ------------------------------------------------------------

document.addEventListener("DOMContentLoaded", iniciar);

async function iniciar() {

    try {

        const response = await fetch("procedimientos.json", {
            cache: "no-store"
        });

        if (!response.ok) {
            throw new Error(
                `No se pudo cargar procedimientos.json (${response.status})`
            );
        }

        const data = await response.json();

        // Admite tanto:
        // { procedimientos: [...] }
        // como directamente [...]
        if (Array.isArray(data)) {
            procedimientos = data;
        } else if (Array.isArray(data.procedimientos)) {
            procedimientos = data.procedimientos;
        } else if (Array.isArray(data.data)) {
            procedimientos = data.data;
        } else {
            throw new Error("El archivo procedimientos.json no contiene un listado válido.");
        }

        renderCategories();

        configurarEventos();

    } catch (error) {

        console.error("Error al iniciar la aplicación:", error);

        if (categoriesContainer) {
            categoriesContainer.innerHTML = `
                <div class="error-message">
                    <strong>No se pudieron cargar los procedimientos.</strong>
                    <p>
                        Verificá que <code>procedimientos.json</code>
                        se encuentre en la misma carpeta que esta página.
                    </p>
                    <small>${escapeHTML(error.message)}</small>
                </div>
            `;
        }
    }
}

// ------------------------------------------------------------
// EVENTOS
// ------------------------------------------------------------

function configurarEventos() {

    if (backHomeBtn) {
        backHomeBtn.addEventListener("click", mostrarInicio);
    }

    if (backNavigatorBtn) {
        backNavigatorBtn.addEventListener("click", mostrarNavegador);
    }

    if (searchInput) {
        searchInput.addEventListener("input", manejarBusqueda);
    }
}

// ------------------------------------------------------------
// CATEGORÍAS
// ------------------------------------------------------------

function obtenerCategorias() {

    const mapa = new Map();

    procedimientos.forEach(procedimiento => {

        const categoria =
            procedimiento.categoria ||
            procedimiento.categoría ||
            "Otros";

        if (!mapa.has(categoria)) {
            mapa.set(categoria, []);
        }

        mapa.get(categoria).push(procedimiento);
    });

    return Array.from(mapa.entries())
        .sort((a, b) => a[0].localeCompare(b[0], "es"));
}

// ------------------------------------------------------------
// RENDER DE CATEGORÍAS
// ------------------------------------------------------------

function renderCategories() {

    if (!categoriesContainer) return;

    const categorias = obtenerCategorias();

    categoriesContainer.innerHTML = "";

    if (!categorias.length) {

        categoriesContainer.innerHTML = `
            <div class="empty-message">
                No hay categorías disponibles.
            </div>
        `;

        return;
    }

    categorias.forEach(([categoria, items]) => {

        const card = document.createElement("button");

        card.type = "button";
        card.className = "category-card";

        const descripcion =
            categoryDescriptions[categoria] ||
            "Situaciones y procedimientos relacionados con esta categoría.";

        card.innerHTML = `
            <span class="category-title">
                ${escapeHTML(categoria)}
            </span>

            <span class="category-description">
                ${escapeHTML(descripcion)}
            </span>

            <span class="category-count">
                ${items.length}
                ${items.length === 1 ? "procedimiento" : "procedimientos"}
            </span>
        `;

        card.addEventListener("click", () => {
            mostrarSituaciones(categoria);
        });

        categoriesContainer.appendChild(card);
    });
}

// ------------------------------------------------------------
// MOSTRAR SITUACIONES DE UNA CATEGORÍA
// ------------------------------------------------------------

function mostrarSituaciones(categoria) {

    const items = procedimientos
        .filter(procedimiento => {

            const cat =
                procedimiento.categoria ||
                procedimiento.categoría ||
                "Otros";

            return cat === categoria;
        })
        .sort((a, b) => {

            const situacionA =
                a.situacion ||
                a.titulo ||
                a.nombre ||
                "";

            const situacionB =
                b.situacion ||
                b.titulo ||
                b.nombre ||
                "";

            return situacionA.localeCompare(situacionB, "es");
        });

    if (!situationsContainer) return;

    situationsContainer.innerHTML = "";

    const title = document.getElementById("navigatorTitle");

    if (title) {
        title.textContent = categoria;
    }

    if (!items.length) {

        situationsContainer.innerHTML = `
            <div class="empty-message">
                No se encontraron situaciones para esta categoría.
            </div>
        `;

    } else {

        items.forEach(item => {

            const button = document.createElement("button");

            button.type = "button";
            button.className = "situation-card";

            const situacion =
                item.situacion ||
                item.titulo ||
                item.nombre ||
                "Situación sin título";

            const nivel =
                item.nivel_modalidad ||
                item.nivel ||
                item.modalidad ||
                "";

            const seccion =
                item.seccion ||
                item.sección ||
                "";

            button.innerHTML = `
                <span class="situation-title">
                    ${escapeHTML(situacion)}
                </span>

                ${
                    nivel
                        ? `
                            <span class="situation-meta">
                                ${escapeHTML(nivel)}
                            </span>
                          `
                        : ""
                }

                ${
                    seccion
                        ? `
                            <span class="situation-section">
                                ${escapeHTML(seccion)}
                            </span>
                          `
                        : ""
                }
            `;

            button.addEventListener("click", () => {
                mostrarProcedimiento(item);
            });

            situationsContainer.appendChild(button);
        });
    }

    mostrarVista("navigatorView");
}

// ------------------------------------------------------------
// MOSTRAR PROCEDIMIENTO
// ------------------------------------------------------------

function mostrarProcedimiento(item) {

    if (!procedureContainer) return;

    const situacion =
        item.situacion ||
        item.titulo ||
        item.nombre ||
        "Procedimiento";

    const queHacer =
        item.que_hacer ||
        item.queHacer ||
        item.procedimiento ||
        "";

    const donde =
        item.donde ||
        "";

    const contacto =
        item.contacto ||
        "";

    const plazos =
        item.plazos ||
        "";

    const aclaraciones =
        item.aclaraciones ||
        item.aclaracion ||
        "";

    const fuente =
        item.fuente ||
        "";

    const paginas =
        item.paginas ||
        item.páginas ||
        "";

    const nivel =
        item.nivel_modalidad ||
        item.nivel ||
        item.modalidad ||
        "";

    const seccion =
        item.seccion ||
        item.sección ||
        "";

    let html = "";

    html += `
        <div class="procedure-header">
            <span class="procedure-label">
                ${escapeHTML(
                    item.categoria ||
                    item.categoría ||
                    "Procedimiento"
                )}
            </span>

            <h2>
                ${escapeHTML(situacion)}
            </h2>

            ${
                nivel
                    ? `
                        <p class="procedure-meta">
                            ${escapeHTML(nivel)}
                        </p>
                      `
                    : ""
            }

            ${
                seccion
                    ? `
                        <p class="procedure-section">
                            ${escapeHTML(seccion)}
                        </p>
                      `
                    : ""
            }
        </div>
    `;

    if (queHacer) {

        html += `
            <section class="procedure-block">
                <h3>Qué hacer</h3>
                <div>
                    ${formatText(queHacer)}
                </div>
            </section>
        `;
    }

    if (donde) {

        html += `
            <section class="procedure-block">
                <h3>Dónde</h3>
                <div>
                    ${formatText(donde)}
                </div>
            </section>
        `;
    }

    if (contacto) {

        html += `
            <section class="procedure-block">
                <h3>Contacto</h3>
                <div>
                    ${formatText(contacto)}
                </div>
            </section>
        `;
    }

    if (plazos) {

        html += `
            <section class="procedure-block">
                <h3>Plazos</h3>
                <div>
                    ${formatText(plazos)}
                </div>
            </section>
        `;
    }

    if (aclaraciones) {

        html += `
            <section class="procedure-block">
                <h3>Aclaración</h3>
                <div>
                    ${formatText(aclaraciones)}
                </div>
            </section>
        `;
    }

    if (fuente || paginas) {

        html += `
            <section class="procedure-source">
                <h3>Fuente</h3>

                ${
                    fuente
                        ? `
                            <p>
                                ${formatText(fuente)}
                            </p>
                          `
                        : ""
                }

                ${
                    paginas
                        ? `
                            <p>
                                <strong>Páginas:</strong>
                                ${escapeHTML(String(paginas))}
                            </p>
                          `
                        : ""
                }
            </section>
        `;
    }

    procedureContainer.innerHTML = html;

    mostrarVista("procedureView");
}

// ------------------------------------------------------------
// BÚSQUEDA
// ------------------------------------------------------------

function manejarBusqueda(event) {

    const termino = normalizar(event.target.value.trim());

    if (!searchResults) return;

    if (!termino) {

        searchResults.innerHTML = "";
        searchResults.classList.remove("active");

        return;
    }

    const palabras = termino
        .split(/\s+/)
        .filter(Boolean);

    const resultados = procedimientos
        .map(item => {

            const texto = normalizar(
                [
                    item.situacion,
                    item.categoria,
                    item.categoría,
                    item.seccion,
                    item.sección,
                    item.nivel_modalidad,
                    item.nivel,
                    item.modalidad,
                    item.keywords,
                    item.palabras_clave,
                    item.palabrasClave,
                    item.que_hacer,
                    item.donde,
                    item.contacto
                ]
                    .filter(Boolean)
                    .join(" ")
            );

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
        .filter(resultado => resultado.coincidencias > 0)
        .sort((a, b) => {

            if (b.coincidencias !== a.coincidencias) {
                return b.coincidencias - a.coincidencias;
            }

            const aTitle =
                a.item.situacion ||
                a.item.titulo ||
                "";

            const bTitle =
                b.item.situacion ||
                b.item.titulo ||
                "";

            return aTitle.localeCompare(bTitle, "es");
        })
        .slice(0, 12);

    renderSearchResults(resultados);
}

// ------------------------------------------------------------
// RESULTADOS DE BÚSQUEDA
// ------------------------------------------------------------

function renderSearchResults(resultados) {

    searchResults.innerHTML = "";

    searchResults.classList.add("active");

    if (!resultados.length) {

        searchResults.innerHTML = `
            <div class="search-empty">
                No encontramos una coincidencia directa.
                Probá con otra palabra o elegí una categoría.
            </div>
        `;

        return;
    }

    resultados.forEach(resultado => {

        const item = resultado.item;

        const button = document.createElement("button");

        button.type = "button";
        button.className = "search-result";

        const situacion =
            item.situacion ||
            item.titulo ||
            item.nombre ||
            "Situación";

        const categoria =
            item.categoria ||
            item.categoría ||
            "Otros";

        button.innerHTML = `
            <span class="search-result-title">
                ${escapeHTML(situacion)}
            </span>

            <span class="search-result-category">
                ${escapeHTML(categoria)}
            </span>
        `;

        button.addEventListener("click", () => {

            searchInput.value = "";
            searchResults.innerHTML = "";
            searchResults.classList.remove("active");

            mostrarProcedimiento(item);
        });

        searchResults.appendChild(button);
    });
}

// ------------------------------------------------------------
// NAVEGACIÓN
// ------------------------------------------------------------

function mostrarInicio() {

    mostrarVista("homeView");

    if (searchInput) {
        searchInput.value = "";
    }

    if (searchResults) {
        searchResults.innerHTML = "";
        searchResults.classList.remove("active");
    }
}

function mostrarNavegador() {

    mostrarVista("navigatorView");
}

function mostrarVista(id) {

    const vistas = [
        homeView,
        navigatorView,
        procedureView
    ];

    vistas.forEach(view => {

        if (!view) return;

        view.classList.remove("active");

        view.setAttribute("aria-hidden", "true");
    });

    const vista = document.getElementById(id);

    if (!vista) return;

    vista.classList.add("active");
    vista.setAttribute("aria-hidden", "false");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// ------------------------------------------------------------
// NORMALIZACIÓN DE TEXTO
// ------------------------------------------------------------

function normalizar(texto) {

    return String(texto || "")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[¿?¡!.,;:()[\]{}"'“”‘’]/g, " ")
        .replace(/\s+/g, " ")
        .trim();
}

// ------------------------------------------------------------
// FORMATEO DE TEXTO
// ------------------------------------------------------------

function formatText(texto) {

    if (texto === null || texto === undefined) {
        return "";
    }

    let value = String(texto).trim();

    if (!value) {
        return "";
    }

    // Escapamos primero para evitar HTML no deseado
    value = escapeHTML(value);

    // Saltos de línea
    value = value.replace(/\r\n/g, "\n");
    value = value.replace(/\r/g, "\n");

    // Convierte URLs en enlaces
    value = value.replace(
        /(https?:\/\/[^\s<]+)/g,
        '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>'
    );

    // Saltos de línea
    value = value.replace(/\n/g, "<br>");

    return value;
}

// ------------------------------------------------------------
// ESCAPE HTML
// ------------------------------------------------------------

function escapeHTML(value) {

    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
