/* =========================================================
   CIRCULAR INICIO CICLO LECTIVO 2026
   ENSAC · Wiki operativa
   ========================================================= */


/* =========================================================
   DATOS
   ========================================================= */

const resources = [

  /* -------------------------------------------------------
     01 · TECNOPRESENTE
     ------------------------------------------------------- */

  {
    id: "tecnopresente",
    number: "01",
    title: "TECNOPRESENTE",
    subtitle: "Asistencias técnicas",

    what:
      "Servicio de asistencia técnica para resolver situaciones relacionadas con la conectividad a internet, el correo electrónico institucional y las netbooks.",

    use: [
      "Solicitar asistencia por problemas de conectividad.",
      "Comunicar inconvenientes con el correo electrónico institucional.",
      "Solicitar asistencia técnica para netbooks.",
      "Solicitar desbloqueo de netbooks."
    ],

    contactGroups: [
      {
        title: "Asistencia técnica",

        note:
          "Los reclamos deben realizarse exclusivamente a través de estos canales, sin intermediación de Supervisión o Dirección de Nivel.",

        contacts: [
          {
            label: "Sistema de asistencia",
            href: "https://sit.educacioncba.edu.ar",
            text: "sit.educacioncba.edu.ar",
            external: true
          },
          {
            label: "Correo :",
            href: "mailto:soporte.escuelas@me.cba.gov.ar",
            text: "soporte.escuelas@me.cba.gov.ar"
          }
        ]
      }
    ]
  },


  /* -------------------------------------------------------
     02 · BIENESTAR EDUCATIVO
     ------------------------------------------------------- */

  {
    id: "bienestar-educativo",
    number: "02",
    title: "BIENESTAR EDUCATIVO",
    subtitle: "Proyectos y experiencias institucionales",

    what:
      "Línea de trabajo que consolida proyectos y experiencias institucionales vinculadas con el bienestar educativo.",

    use: [
      "Promover la autonomía y la participación.",
      "Fortalecer el cuidado y el autocuidado.",
      "Favorecer el cuidado de los demás y la convivencia.",
      "Trabajar sobre afectividad y proyecto de vida.",
      "Promover la salud y el desarrollo integral.",
      "Favorecer el acceso a bienes culturales y sociales.",
      "Trabajar desde la igualdad y la no discriminación.",
      "Promover el disfrute y la recreación."
    ],

    contactGroups: [
      {
        title: "Materiales y herramientas",

        note:
          "Recursos y materiales de referencia para el trabajo institucional sobre bienestar educativo.",

        contacts: [
          {
            label: "Herramientas",
            href:
              "https://www.igualdadycalidadcba.gov.ar/SIPEC-CBA/SFI/herramientas02.php",
            text: "Materiales y herramientas",
            external: true
          }
        ]
      },

      {
        title: "P.I.B.E.",

        note:
          "Los Proyectos Institucionales de Bienestar Educativo cuentan con bases y condiciones que serán comunicadas oportunamente.",

        contacts: [
          {
            label: "Información",
            href:
              "https://www.igualdadycalidadcba.gov.ar/SIPEC-CBA/SFI/herramientas02.php",
            text: "Consultar materiales",
            external: true
          }
        ]
      }
    ]
  },


  /* -------------------------------------------------------
     03 · EPAE
     ------------------------------------------------------- */

  {
    id: "epae",
    number: "03",
    title: "EPAE",
    subtitle: "Equipos Profesionales de Acompañamiento Educativo",

    what:
      "Equipos interdisciplinarios y territoriales que generan condiciones institucionales y socioeducativas favorables para garantizar el derecho a aprender y acompañar las trayectorias educativas.",

    use: [
      "Solicitar orientación ante situaciones institucionales.",
      "Solicitar acompañamiento socioeducativo.",
      "Acompañar las trayectorias educativas.",
      "Favorecer el acceso, permanencia y egreso.",
      "Trabajar de manera situada y territorial."
    ],

    contactGroups: [
      {
        title: "Orientación y acompañamiento",

        note:
          "Para solicitar orientación y acompañamiento ante situaciones institucionales y socioeducativas.",

        contacts: [
          {
            label: "Teléfono: ",
            href: "tel:+543514462400",
            text: "(0351) 446-2400 · int. 2614"
          },
          {
            label: "Correo: ",
            href:
              "mailto:subdir.trayectoriaseducativas@gmail.com",
            text:
              "subdir.trayectoriaseducativas@gmail.com"
          }
        ]
      },

      {
        title: "Coordinación EPAE",

        note:
          "Canal de contacto del equipo coordinador.",

        contacts: [
          {
            label: "Correo: ",
            href:
              "mailto:equipocoordinador.epae@me.cba.gov.ar",
            text:
              "equipocoordinador.epae@me.cba.gov.ar"
          }
        ]
      }
    ]
  },


  /* -------------------------------------------------------
     04 · PROTAGONISMO ESTUDIANTIL
     ------------------------------------------------------- */

  {
    id: "protagonismo-estudiantil",
    number: "04",
    title: "PROTAGONISMO ESTUDIANTIL",
    subtitle: "Participación y organización estudiantil",

    what:
      "Conjunto de iniciativas destinadas a fortalecer la participación activa de las y los estudiantes en la vida institucional.",

    use: [
      "Participar en Parlamentos Estudiantiles.",
      "Participar en Foros Estudiantiles.",
      "Fortalecer los Centros de Estudiantes.",
      "Participar en clubes y campamentos estudiantiles.",
      "Desarrollar cooperativas y mutuales escolares.",
      "Participar en agrupaciones artísticas."
    ],

    contactGroups: [

      {
        title: "Parlamentos Estudiantiles",

        note:
          "Espacios de participación estudiantil que incluyen distintas modalidades y el Parlamento de Estudiantes Legisladores.",

        contacts: [
          {
            label: "Correo: ",
            href:
              "mailto:parlamentoestudiantilcba@gmail.com",
            text:
              "parlamentoestudiantilcba@gmail.com"
          }
        ]
      },

      {
        title: "Centros de Estudiantes",

        note:
          "Orientación, capacitación, asistencia técnica y acompañamiento pedagógico para Centros de Estudiantes.",

        contacts: [
          {
            label: "Correo: ",
            href:
              "mailto:relacionesestudiantiles.cba@gmail.com",
            text:
              "relacionesestudiantiles.cba@gmail.com"
          }
        ]
      },

      {
        title: "Clubes y campamentos",

        note:
          "Información y acompañamiento para las iniciativas de clubes y campamentos estudiantiles.",

        contacts: [
          {
            label: "Correo: ",
            href:
              "mailto:clubesestudiantilescba@gmail.com",
            text:
              "clubesestudiantilescba@gmail.com"
          }
        ]
      },

      {
        title: "Cooperativas y mutuales",

        note:
          "Canal para iniciativas vinculadas con cooperativismo y mutualismo escolar.",

        contacts: [
          {
            label: "Correo: ",
            href:
              "mailto:cooperativismo.educacional.cba@gmail.com",
            text:
              "cooperativismo.educacional.cba@gmail.com"
          }
        ]
      },

      {
        title: "Agrupaciones artísticas",

        note:
          "Canales vinculados con propuestas artísticas, coros y orquestas escolares.",

        contacts: [
          {
            label: "Artes integradas",
            href:
              "mailto:artesintegradas.edu.cba@gmail.com",
            text:
              "artesintegradas.edu.cba@gmail.com"
          },
          {
            label: "Coros y orquestas",
            href:
              "mailto:corosyorquestas.escuelas@gmail.com",
            text:
              "corosyorquestas.escuelas@gmail.com"
          }
        ]
      }
    ]
  },


  /* -------------------------------------------------------
     05 · AEC / AIC
     ------------------------------------------------------- */

  {
    id: "aec-aic",
    number: "05",
    title: "AEC / AIC",
    subtitle: "Acuerdos Escolares e Institucionales de Convivencia",

    what:
      "Los Acuerdos Escolares de Convivencia (AEC) y Acuerdos Institucionales de Convivencia (AIC) organizan los acuerdos institucionales vinculados con la convivencia.",

    use: [
      "Consultar los canales de orientación sobre convivencia.",
      "Solicitar acompañamiento ante situaciones de convivencia.",
      "Trabajar sobre el buen trato.",
      "Consultar aspectos vinculados con los acuerdos de convivencia."
    ],

    contactGroups: [

      {
        title: "Córdoba Capital",

        note:
          "Para instituciones educativas ubicadas en la ciudad de Córdoba.",

        contacts: [
          {
            label: "Teléfono: ",
            href: "tel:+543514642400",
            text: "464-2400 · int. 2514"
          },
          {
            label: "Correo: ",
            href:
              "mailto:convivenciaescolarybuentrato@cba.gov.ar",
            text:
              "convivenciaescolarybuentrato@cba.gov.ar"
          }
        ]
      },

      {
        title: "Interior de la Provincia",

        note:
          "Para instituciones del interior provincial, el acompañamiento se canaliza a través de EPAE.",

        contacts: [
          {
            label: "Teléfono: ",
            href: "tel:+543514462400",
            text: "0351-4462400 · int. 2614"
          },
          {
            label: "Correo: ",
            href:
              "mailto:equipocoordinador.epae@me.cba.gov.ar",
            text:
              "equipocoordinador.epae@me.cba.gov.ar"
          }
        ]
      }
    ]
  },


  /* -------------------------------------------------------
     06 · ENTORNOS EDUCATIVOS SALUDABLES
     ------------------------------------------------------- */

  {
    id: "entornos-educativos-saludables",
    number: "06",
    title: "ENTORNOS EDUCATIVOS SALUDABLES",
    subtitle: "Hábitos, prevención y cuidado",

    what:
      "Línea de trabajo orientada a promover hábitos saludables y fortalecer la escuela como espacio para enseñar y aprender prácticas de cuidado.",

    use: [
      "Trabajar hábitos saludables.",
      "Promover una cultura del cuidado.",
      "Abordar situaciones de salud en el ámbito educativo.",
      "Trabajar sobre RCP y maniobra de Heimlich.",
      "Abordar la prevención de consumos.",
      "Promover el cuidado de la voz docente.",
      "Trabajar sobre kioscos y cantinas saludables.",
      "Participar de propuestas como Tren de la Salud y Misión Dengue."
    ],

    contactGroups: [
      {
        title: "Subdirección de Salud Educativa",

        note:
          "Canal de contacto para las acciones y programas vinculados con entornos educativos saludables.",

        contacts: [
          {
            label: "Correo: ",
            href:
              "mailto:subdireccionsalud.edu.cba@gmail.com",
            text:
              "subdireccionsalud.edu.cba@gmail.com"
          }
        ]
      }
    ]
  },


  /* -------------------------------------------------------
     07 · INFRAESTRUCTURA
     ------------------------------------------------------- */

  {
    id: "infraestructura",
    number: "07",
    title: "INFRAESTRUCTURA",
    subtitle: "Canales para reclamos de infraestructura",

    what:
      "Canales destinados a comunicar y gestionar situaciones relacionadas con la infraestructura de los establecimientos educativos.",

    use: [
      "Realizar reclamos de infraestructura en Córdoba Capital.",
      "Canalizar reclamos de establecimientos del interior mediante FODEMEP."
    ],

    contactGroups: [

      {
        title: "Córdoba Capital",

        note:
          "Canal para comunicar reclamos y situaciones de infraestructura de establecimientos ubicados en Córdoba Capital.",

        contacts: [
          {
            label: "Teléfono: ",
            href: "tel:+543514602500",
            text: "460-2500"
          },
          {
            label: "Celular: ",
            href: "tel:+5493513859923",
            text: "15-385-9923"
          }
        ]
      },

      {
        title: "Interior de la Provincia",

        note:
          "Los reclamos de establecimientos del interior se canalizan a través de FODEMEP.",

        contacts: [
          {
            label: "FODEMEP",
            href: "tel:+5493512315615",
            text: "351-231-5615"
          },
          {
            label: "Correo: ",
            href:
              "mailto:fodemeepcba@gmail.com",
            text:
              "fodemeepcba@gmail.com"
          }
        ]
      }
    ]
  },


  /* -------------------------------------------------------
     08 · INVENTARIO
     ------------------------------------------------------- */

  {
    id: "inventario",
    number: "08",
    title: "INVENTARIO",
    subtitle: "Inventario de bienes inmuebles y útiles",

    what:
      "Procedimiento para mantener actualizado el inventario anual de bienes de los centros educativos y comunicar altas, bajas, robos o situaciones de vandalismo.",

    use: [
      "Actualizar anualmente el inventario institucional.",
      "Registrar altas de bienes.",
      "Comunicar bajas por obsolescencia o rezago.",
      "Comunicar robos.",
      "Comunicar situaciones de vandalismo.",
      "Iniciar la correspondiente Multinota mediante CIDI cuando corresponda."
    ],

    contactGroups: [

      {
        title: "Altas de inventario",

        note:
          "Para registrar bienes incorporados al inventario institucional. Se debe adjuntar el Excel correspondiente y enviar el correo con el asunto indicado por la Circular.",

        contacts: [
          {
            label: "Sección Patrimonial ",
            href:
              "mailto:seccionpatrimonial@me.cba.gov.ar",
            text:
              "seccionpatrimonial@me.cba.gov.ar"
          }
        ]
      },

      {
        title: "Robos y vandalismo",

        note:
          "Comunicación inmediata ante situaciones de robo o vandalismo. El contacto está habilitado todos los días y en cualquier horario.",

        contacts: [
          {
            label: "Llamadas / WhatsApp: ",
            href: "tel:+5493518039687",
            text: "351-8039687"
          }
        ]
      }
    ]
  },


  /* -------------------------------------------------------
     09 · SEGURIDAD
     ------------------------------------------------------- */

  {
    id: "seguridad",
    number: "09",
    title: "SEGURIDAD",
    subtitle: "Referencia Memorándum Conjunto N.º 15/2024",

    what:
      "La Circular mantiene vigente el Memorándum Conjunto N.º 15/2024, referido al resguardo de bienes de valor en los establecimientos educativos.",

    use: [
      "Consultar las indicaciones para el resguardo de bienes de valor.",
      "Consultar el procedimiento para la transferencia y registro de bienes valiosos en dependencias policiales.",
      "Comunicar situaciones de robo.",
      "Comunicar situaciones de vandalismo."
    ],

    contactGroups: [

      {
        title: "Referencia normativa",

        note:
          "La Circular remite al Memorándum Conjunto N.º 15/2024. El documento contiene las indicaciones operativas y el canal telefónico correspondiente.",

        contacts: [
          {
            label: "Memorándum",
            href: "#",
            text: "Memorándum Conjunto N.º 15/2024"
          }
        ]
      },

      {
        title: "Situaciones de robo o vandalismo",

        note:
          "Para comunicación inmediata de robos o vandalismo se utiliza el canal indicado para estos hechos. Hacer la denuncia correspondiente y el Multinota en CiDi",

        contacts: [
          {
            label: "Llamadas / WhatsApp: ",
            href: "tel:+5493518039687",
            text: "351-8039687"
          }
        ]
      }
    ]
  }

];


/* =========================================================
   ELEMENTOS DEL DOM
   ========================================================= */

const cardsEl = document.getElementById("cards");
const tocEl = document.getElementById("toc");
const searchEl = document.getElementById("search");
const resultCountEl = document.getElementById("result-count");
const emptyStateEl = document.getElementById("empty-state");


/* =========================================================
   UTILIDADES
   ========================================================= */

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}


function normalizeText(value = "") {
  return String(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}


function isExternalUrl(href = "") {
  return (
    href.startsWith("http://") ||
    href.startsWith("https://")
  );
}


/* =========================================================
   RENDER · CONTACTOS
   ========================================================= */

function renderContacts(contactGroups = [], contacts = []) {

  /*
   * Compatibilidad:
   * si algún recurso utiliza todavía "contacts"
   * en lugar de "contactGroups", también funciona.
   */

  if (
    (!contactGroups || contactGroups.length === 0) &&
    contacts &&
    contacts.length > 0
  ) {
    contactGroups = [
      {
        title: "Contacto",
        note: "",
        contacts
      }
    ];
  }

  if (!contactGroups || contactGroups.length === 0) {
    return "";
  }

  return `
    <section class="card-section contacts-section">

      <div class="section-label">
        Contacto
      </div>

      <div class="contact-groups">

        ${contactGroups
          .map((group) => {

            const groupTitle =
              escapeHtml(group.title || "Contacto");

            const groupNote =
              group.note
                ? `
                  <p class="contact-group-note">
                    ${escapeHtml(group.note)}
                  </p>
                `
                : "";

            const groupContacts =
              Array.isArray(group.contacts)
                ? group.contacts
                : [];

            return `
              <div class="contact-group">

                <h4>
                  ${groupTitle}
                </h4>

                ${groupNote}

                <div class="contacts">

                  ${groupContacts
                    .map((contact) => {

                      const label =
                        escapeHtml(
                          contact.label || "Contacto"
                        );

                      const text =
                        escapeHtml(
                          contact.text || contact.href || ""
                        );

                      const href =
                        escapeHtml(
                          contact.href || "#"
                        );

                      const external =
                        contact.external ||
                        isExternalUrl(contact.href);

                      return `
                        <a
                          class="contact-link"
                          href="${href}"
                          ${
                            external
                              ? 'target="_blank" rel="noopener noreferrer"'
                              : ""
                          }
                        >
                          <span class="contact-label">
                            ${label}
                          </span>

                          <span class="contact-value">
                            ${text}
                          </span>
                        </a>
                      `;
                    })
                    .join("")}

                </div>

              </div>
            `;
          })
          .join("")}

      </div>

    </section>
  `;
}


/* =========================================================
   RENDER · LISTAS
   ========================================================= */

function renderUseList(items = []) {

  if (!items.length) {
    return "";
  }

  return `
    <section class="card-section">

      <div class="section-label">
        Para qué se usa
      </div>

      <ul class="use-list">

        ${items
          .map(
            (item) => `
              <li>
                ${escapeHtml(item)}
              </li>
            `
          )
          .join("")}

      </ul>

    </section>
  `;
}


/* =========================================================
   RENDER · TARJETAS
   ========================================================= */

function renderCards(items = resources) {

  cardsEl.innerHTML = items
    .map((resource) => {

      const title =
        escapeHtml(resource.title);

      const subtitle =
        escapeHtml(resource.subtitle);

      const what =
        escapeHtml(resource.what);

      return `
        <article
          class="resource-card"
          id="${escapeHtml(resource.id)}"
          data-resource="${escapeHtml(
            normalizeText(
              [
                resource.number,
                resource.title,
                resource.subtitle,
                resource.what,
                ...(resource.use || []),
                ...(resource.contactGroups || [])
                  .flatMap((group) => [
                    group.title,
                    group.note,
                    ...(group.contacts || [])
                      .map((contact) => contact.text)
                  ])
              ].join(" ")
            )
          )}"
        >

          <div class="card-number">
            ${escapeHtml(resource.number)}
          </div>

          <div class="card-content">

            <header class="card-header">

              <p class="card-kicker">
                RECURSO
              </p>

              <h2>
                ${title}
              </h2>

              <p class="card-subtitle">
                ${subtitle}
              </p>

            </header>


            <section class="card-section">

              <div class="section-label">
                Qué es
              </div>

              <p class="card-description">
                ${what}
              </p>

            </section>


            ${renderUseList(resource.use)}


            ${renderContacts(
              resource.contactGroups,
              resource.contacts
            )}

          </div>

        </article>
      `;
    })
    .join("");
}


/* =========================================================
   RENDER · ÍNDICE
   ========================================================= */

function renderToc(items = resources) {

  tocEl.innerHTML = items
    .map(
      (resource) => `
        <a
          href="#${escapeHtml(resource.id)}"
          class="toc-link"
          data-target="${escapeHtml(resource.id)}"
        >
          <span class="toc-number">
            ${escapeHtml(resource.number)}
          </span>

          <span class="toc-title">
            ${escapeHtml(resource.title)}
          </span>
        </a>
      `
    )
    .join("");
}


/* =========================================================
   BÚSQUEDA
   ========================================================= */

function filterResources(query = "") {

  const normalizedQuery =
    normalizeText(query);

  if (!normalizedQuery) {
    return resources;
  }

  return resources.filter((resource) => {

    const contactText =
      (resource.contactGroups || [])
        .flatMap((group) => [
          group.title,
          group.note,
          ...(group.contacts || [])
            .flatMap((contact) => [
              contact.label,
              contact.text
            ])
        ])
        .join(" ");

    const searchableText = normalizeText(
      [
        resource.number,
        resource.title,
        resource.subtitle,
        resource.what,
        ...(resource.use || []),
        contactText
      ].join(" ")
    );

    return searchableText.includes(
      normalizedQuery
    );
  });
}


function updateSearch() {

  const query =
    searchEl.value || "";

  const filtered =
    filterResources(query);

  renderCards(filtered);
  renderToc(filtered);

  updateResultCount(
    filtered.length,
    resources.length,
    query
  );
}


function updateResultCount(
  visible,
  total,
  query
) {

  if (!resultCountEl) {
    return;
  }

  if (!query.trim()) {
    resultCountEl.textContent =
      `${total} recursos`;

    return;
  }

  resultCountEl.textContent =
    `${visible} ${
      visible === 1
        ? "resultado"
        : "resultados"
    }`;
}


/* =========================================================
   ESTADO VACÍO
   ========================================================= */

function updateEmptyState() {

  if (!emptyStateEl) {
    return;
  }

  const cards =
    cardsEl.querySelectorAll(
      ".resource-card"
    );

  emptyStateEl.hidden =
    cards.length !== 0;
}


/* =========================================================
   OBSERVAR CAMBIOS EN TARJETAS
   ========================================================= */

function refreshEmptyState() {
  updateEmptyState();
}


/* =========================================================
   NAVEGACIÓN SUAVE
   ========================================================= */

function setupSmoothNavigation() {

  document.addEventListener(
    "click",
    (event) => {

      const link =
        event.target.closest(
          'a[href^="#"]'
        );

      if (!link) {
        return;
      }

      const href =
        link.getAttribute("href");

      if (!href || href === "#") {
        return;
      }

      const target =
        document.querySelector(href);

      if (!target) {
        return;
      }

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

      history.replaceState(
        null,
        "",
        href
      );
    }
  );
}


/* =========================================================
   RESALTAR RECURSO ACTIVO
   ========================================================= */

function setupActiveToc() {

  const observer =
    new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (!entry.isIntersecting) {
            return;
          }

          const id =
            entry.target.id;

          document
            .querySelectorAll(".toc-link")
            .forEach((link) => {

              link.classList.toggle(
                "active",
                link.dataset.target === id
              );
            });
        });
      },
      {
        rootMargin:
          "-15% 0px -70% 0px",
        threshold: 0
      }
    );

  document
    .querySelectorAll(".resource-card")
    .forEach((card) => {
      observer.observe(card);
    });
}


/* =========================================================
   ACTUALIZAR OBSERVER DESPUÉS DE UNA BÚSQUEDA
   ========================================================= */

function refreshActiveToc() {

  document
    .querySelectorAll(".toc-link")
    .forEach((link) => {
      link.classList.remove("active");
    });

  setupActiveToc();
}


/* =========================================================
   EVENTOS DE BÚSQUEDA
   ========================================================= */

function setupSearch() {

  if (!searchEl) {
    return;
  }

  searchEl.addEventListener(
    "input",
    () => {

      updateSearch();

      refreshEmptyState();
      refreshActiveToc();
    }
  );
}


/* =========================================================
   TECLA ESC
   ========================================================= */

function setupEscapeSearch() {

  document.addEventListener(
    "keydown",
    (event) => {

      if (
        event.key === "Escape" &&
        document.activeElement === searchEl
      ) {

        searchEl.value = "";

        updateSearch();

        refreshEmptyState();

        searchEl.blur();
      }
    }
  );
}


/* =========================================================
   INICIALIZACIÓN
   ========================================================= */

function init() {

  renderCards(resources);

  renderToc(resources);

  updateResultCount(
    resources.length,
    resources.length,
    ""
  );

  refreshEmptyState();

  setupSearch();

  setupEscapeSearch();

  setupSmoothNavigation();

  setupActiveToc();
}


/* =========================================================
   EJECUTAR
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  init
);
