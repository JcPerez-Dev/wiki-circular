const areas = [
  {
    id: "trayectorias",
    title: "Trayectorias",
    description: "Estudiantes, matrícula, pases, asistencia, calificaciones, acompañamiento e inclusión.",
    situations: [
      ["Alerta de trayectoria", "Me apareció una alerta de trayectoria y necesito saber qué hacer.", ["Validar el riesgo detectado.", "Registrar las intervenciones que se realicen durante el año.", "Consultar, cuando corresponda, intervenciones registradas en ciclos anteriores desde la Ficha del Estudiante.", "Si se necesita orientación o acompañamiento, recurrir a EPAE o a los actores territoriales correspondientes."]],
      ["Estudiante que no se presentó", "El estudiante estaba matriculado pero no se presentó.", ["Verificar que el estudiante no haya solicitado pase ni se haya presentado durante el ciclo vigente.", "Anular la matrícula para identificar correctamente la situación.", "En el motivo de baja consignar: “El estudiante no se presentó a la inscripción en este establecimiento”."]],
      ["Gestionar un pase", "Un estudiante solicita pase a otro establecimiento.", ["Registrar la solicitud de pase en el SGE.", "Realizar el seguimiento del pase pendiente.", "Asegurar la inscripción en la institución donde el estudiante se encuentra cursando.", "Si las instituciones involucradas no pueden resolverlo, corresponde la intervención de Supervisión."]],
      ["Registrar asistencia", "Necesito registrar la asistencia diaria.", ["Realizar la carga diaria de asistencia en los niveles donde el registro está disponible.", "Mantener actualizado el calendario institucional.", "En Secundaria, los preceptores pueden registrar inasistencias desde cursos/secciones incluso sin conexión; la aplicación permite sincronizar luego."]],
      ["Registrar calificaciones", "Necesito mantener actualizadas las calificaciones.", ["Registrar las calificaciones de manera continua en el Sistema de Gestión de Estudiantes.", "Evitar concentrar la carga exclusivamente al final de la primera o segunda etapa.", "Mantener disponible la información para que las familias puedan acompañar los procesos de aprendizaje."]],
      ["Vínculo familiar / Libreta Digital", "Una familia necesita acceder a Libreta Digital.", ["Verificar que exista el vínculo familiar en el Sistema de Gestión de Estudiantes.", "Generar el vínculo familiar cuando corresponda.", "La familia podrá visualizar la información disponible según el nivel."]],
      ["Analítico Digital", "Necesito confeccionar y enviar un analítico.", ["Confeccionar el Analítico Digital.", "Enviar a firma mediante el Sistema de Gestión de Estudiantes y SISFET Web.", "Para estudiantes que titularon en diciembre de 2025, el plazo indicado fue el 30/12/2025. Para quienes titulen en febrero de 2026, el plazo máximo indicado es 20/03/2026."]],
      ["Inclusión educativa", "Necesito acompañar una trayectoria educativa diversa.", ["Participar de la prueba piloto cuando la institución haya sido seleccionada.", "Fortalecer la identificación y registro de información relacionada con las trayectorias.", "Utilizar la información para el acompañamiento pedagógico y contextual."]],
      ["Informe / evaluación", "Necesito completar un informe o instancia de evaluación.", ["Consultar el cronograma del SGE.", "Completar el IEF, IPE o cierre correspondiente según nivel y período.", "Mantener actualizada la información en el sistema."]]
    ]
  },
  {
    id: "seguridad",
    title: "Seguridad",
    description: "Resguardo de bienes, robo, vandalismo y situaciones vinculadas al uso compartido de espacios.",
    situations: [
      ["Robo de un bien institucional", "Se produjo un robo.", ["Informar inmediatamente la situación al número establecido en la Circular.", "Realizar la correspondiente denuncia por CIDI.", "Iniciar una Multinota desde CIDI.", "Adjuntar el detalle y la causal correspondiente.", "Aplicar las indicaciones del Memo Conjunto 15/2024 y del memo específico mencionado en la Circular."]],
      ["Vandalismo", "Un bien institucional fue afectado por vandalismo.", ["Informar inmediatamente la situación al número establecido.", "Realizar la denuncia por CIDI.", "Iniciar una Multinota desde CIDI.", "Adjuntar detalle y causal.", "Aplicar el procedimiento indicado en la normativa correspondiente."]],
      ["Resguardo de bienes de valor", "Necesito resguardar o trasladar un bien de valor.", ["Consultar el Memo Conjunto 15/2024.", "Aplicar las indicaciones para traslado y registro en dependencias policiales cuando corresponda.", "Utilizar el contacto disponible las 24 horas para consultas sobre la situación."]],
      ["Uso compartido de espacios", "Necesitamos compartir un espacio entre instituciones.", ["Consultar y cumplir la Resolución 321/2024.", "Aplicar las disposiciones vigentes sobre uso compartido de espacios."]]
    ]
  },
  {
    id: "infraestructura",
    title: "Infraestructura",
    description: "Problemas edilicios y canales para realizar reclamos.",
    situations: [
      ["Problema de infraestructura en Córdoba Capital", "Tengo un problema edilicio y necesito realizar un reclamo.", ["Comunicarse a los teléfonos indicados por la Circular: 4602500 y/o 153859923.", "Describir claramente la situación para facilitar su seguimiento."]],
      ["Problema de infraestructura en el interior", "La institución está en el interior y necesita realizar un reclamo.", ["Comunicarse con FODEMEP al 351 2315615.", "También puede utilizarse el correo fodemeepcba@gmail.com."]],
      ["No sé a quién reclamar", "Tengo una situación edilicia pero no conozco el canal.", ["Identificar si la institución está en Córdoba Capital o en el interior.", "Utilizar el canal correspondiente indicado por la Circular.", "No inventar circuitos alternativos: esta Circular solamente establece los contactos señalados."]]
    ]
  },
  {
    id: "conectividad",
    title: "Conectividad",
    description: "Internet, correo institucional, netbooks y soporte técnico.",
    situations: [
      ["Problema de Internet", "La institución tiene problemas de conectividad.", ["Realizar el reclamo mediante SIT: https://sit.educacioncba.edu.ar", "Como alternativa, enviar el reclamo a soporte.escuelas@me.cba.gov.ar.", "La Circular indica que estos reclamos deben realizarse exclusivamente por esos canales."]],
      ["Problema con el correo institucional", "Tengo problemas con el correo institucional.", ["Realizar el reclamo mediante SIT.", "También puede utilizarse soporte.escuelas@me.cba.gov.ar.", "No derivar el reclamo a Supervisión o Dirección de Nivel."]],
      ["Netbook con problemas", "Una netbook necesita soporte técnico.", ["Ingresar el reclamo por SIT.", "También puede enviarse a soporte.escuelas@me.cba.gov.ar.", "El circuito contempla soporte técnico y desbloqueos."]],
      ["Netbook bloqueada", "Necesito desbloquear una netbook.", ["Realizar la solicitud por SIT.", "También puede utilizarse soporte.escuelas@me.cba.gov.ar.", "No utilizar Supervisión o Dirección de Nivel como canal de reclamo técnico."]]
    ]
  },
  {
    id: "bienestar",
    title: "Bienestar",
    description: "Convivencia, salud, ESI, festejos, participación estudiantil y proyectos de bienestar.",
    situations: [
      ["Situación de convivencia", "Necesito orientación o acompañamiento ante una situación de convivencia.", ["Consultar el Programa Convivencia Escolar y Buen Trato en Córdoba Capital.", "En el interior, recurrir a EPAE.", "Consultar materiales de acompañamiento y aprendizaje socioemocional."]],
      ["Festejo escolar", "Necesito planificar un festejo cuidado.", ["Trabajar acuerdos institucionales para el festejo.", "Utilizar recursos de sensibilización para estudiantes, escuelas y familias.", "La línea contempla especialmente UPD, Día del Estudiante y UUD.", "Se puede solicitar asesoramiento y acompañamiento institucional."]],
      ["Situación de salud", "Una situación emergente compromete la salud de la comunidad educativa.", ["Consultar la línea de Entornos Educativos Saludables.", "Solicitar asistencia técnica o realizar consultas a subdireccionsalud.edu.cba@gmail.com.", "La Circular contempla RCP, Heimlich, prevención de consumos, EduSalud, cuidado de la voz, kioscos y cantinas saludables, dengue y otras situaciones emergentes."]],
      ["ESI", "Necesito trabajar ESI en la institución.", ["Fortalecer la ESI en la vida institucional.", "Organizar la Jornada Educar en Igualdad.", "La jornada puede integrarse como temática en Córdoba en Acción.", "Consultar los recursos y materiales correspondientes."]],
      ["Centro de Estudiantes", "Queremos conformar o fortalecer un Centro de Estudiantes.", ["Solicitar capacitación, asistencia técnica y acompañamiento pedagógico.", "Contactar a relacionesestudiantiles.cba@gmail.com.", "Consultar el programa de Relaciones Estudiantiles."]],
      ["Proyecto de bienestar", "Queremos desarrollar un proyecto institucional de bienestar.", ["Trabajar dimensiones de bienestar como autonomía, participación, cuidado, convivencia, afectividad, proyecto de vida, salud, igualdad y recreación.", "Consultar los materiales disponibles.", "La Circular anuncia una convocatoria especial P.I.B.E.; sus bases y condiciones serán informadas oportunamente."]],
      ["Participación estudiantil", "Queremos participar de una iniciativa estudiantil.", ["Consultar Parlamentos Estudiantiles, Foros, Clubes y Campamentos, Cooperativas y Mutuales, o Agrupaciones Artísticas.", "Solicitar el acompañamiento indicado para cada iniciativa."]]
    ]
  }
];

const calendar = [
  ["02/02–27/02/2026", "Carga en SIPEC de vicedirectores y regentes (supervisiones)."],
  ["09/02–13/02/2026", "Actos públicos de cobertura de suplencias e interinatos de Inicial y Primaria."],
  ["18/02–23/02/2026", "Reubicación previa a LOM en Secundaria y Modalidades."],
  ["19/02–20/02/2026", "Formación Docente Situada: jornadas 2 y 3."],
  ["Febrero–marzo", "Finalización de matriculación definitiva, actualización de legajos, vínculos y calendario institucional."],
  ["30/03/2026", "Consolidación de matrícula."],
  ["31/03/2026", "Matrícula anual actualizada en SGE."],
  ["Marzo–mayo", "Prueba piloto del módulo Trayectorias Cuidadas en un conjunto de escuelas primarias."],
  ["Abril–mayo", "Carga de notas de mesas excepcionales y entrega de IEF."],
  ["Mayo–1ª semana de julio", "Relevamiento Anual 2026 y período de carga."],
  ["Mayo y octubre", "Primera y segunda toma de Prisma-FCL en los grupos indicados por la Circular."],
  ["Última semana de junio", "Cierre de Informes de Progreso Escolar en Inicial y Primaria."],
  ["1ª semana de julio", "Entrega del IPE en Secundaria."],
  ["03/07/2026", "Fecha límite indicada para elevar documentación de Asamblea Ordinaria de Cooperadoras."],
  ["Agosto–septiembre", "Preinscripciones escolares ciclo lectivo 2027."],
  ["Octubre", "Segunda entrega de IEF y actividades/encuentros estudiantiles indicados en la Circular."],
  ["Noviembre", "Matriculación de preinscripciones 2027."],
  ["07/12–11/12/2026", "Intensificación y profundización con todos los estudiantes."],
  ["11/12/2026", "Desde esta fecha pueden desarrollarse actos de fin de año."],
  ["14/12–18/12/2026", "Intensificación para estudiantes que no lograron los aprendizajes esperados; pueden desarrollarse coloquios y exámenes."],
  ["14/12–29/12/2026", "Autoevaluación institucional 2026."],
  ["21/12–29/12/2026", "Continuidad de coloquios, exámenes previos, libres y equivalentes."],
  ["Diciembre", "Cierre de IPE y valoración final IEF; inicio de matriculación definitiva 2027."]
];

const contacts = [
  ["Soporte técnico / Conectividad", "SIT y soporte de escuelas", "https://sit.educacioncba.edu.ar", "https://sit.educacioncba.edu.ar"],
  ["Soporte técnico", "Correo", "soporte.escuelas@me.cba.gov.ar", "mailto:soporte.escuelas@me.cba.gov.ar"],
  ["EPAE", "Orientación y acompañamiento", "(0351) 4462400 int. 2614", "tel:+543514462400"],
  ["EPAE", "Correos", "equipocoordinador.epae@me.cba.gov.ar", "mailto:equipocoordinador.epae@me.cba.gov.ar"],
  ["Convivencia Escolar y Buen Trato", "Córdoba Capital", "(0351) 4642400 int. 2514", "tel:+543514642400"],
  ["Convivencia Escolar y Buen Trato", "Correo", "convivenciaescolarybuentrato@cba.gov.ar", "mailto:convivenciaescolarybuentrato@cba.gov.ar"],
  ["Salud", "Asistencia técnica y consultas", "subdireccionsalud.edu.cba@gmail.com", "mailto:subdireccionsalud.edu.cba@gmail.com"],
  ["Relaciones Estudiantiles", "Centros de Estudiantes", "relacionesestudiantiles.cba@gmail.com", "mailto:relacionesestudiantiles.cba@gmail.com"],
  ["Infraestructura · Capital", "Reclamos", "4602500 / 153859923", "tel:+543514602500"],
  ["Infraestructura · Interior", "FODEMEP", "351 2315615", "tel:+543512315615"],
  ["Infraestructura · Interior", "Correo", "fodemeepcba@gmail.com", "mailto:fodemeepcba@gmail.com"],
  ["Cooperadoras", "Subdirección de Cooperadoras Escolares", "cooperadoras@me.cba.gov.ar", "mailto:cooperadoras@me.cba.gov.ar"],
  ["Formación Situada", "Consultas sobre carga SIPEC", "formacionsituadacba@gmail.com", "mailto:formacionsituadacba@gmail.com"],
  ["Parlamentos Estudiantiles", "Programa", "parlamentoestudiantilcba@gmail.com", "mailto:parlamentoestudiantilcba@gmail.com"]
];

const areaGrid = document.getElementById("areaGrid");
const resultsSection = document.getElementById("resultsSection");
const resultsList = document.getElementById("resultsList");
const resultsTitle = document.getElementById("resultsTitle");
const searchInput = document.getElementById("searchInput");
const modal = document.getElementById("detailModal");
const modalContent = document.getElementById("modalContent");

function renderAreas() {
  areaGrid.innerHTML = areas.map((area, i) => `
    <button class="area-card" data-area="${area.id}">
      <span class="area-number">0${i + 1}</span>
      <h3>${area.title}</h3>
      <p>${area.description}</p>
      <span class="area-count">${area.situations.length} situaciones</span>
    </button>
  `).join("");
  document.querySelectorAll(".area-card").forEach(btn => {
    btn.addEventListener("click", () => showArea(btn.dataset.area));
  });
}

function showArea(id) {
  const area = areas.find(a => a.id === id);
  if (!area) return;
  resultsSection.hidden = false;
  resultsTitle.textContent = area.title;
  resultsList.innerHTML = area.situations.map((s, index) => `
    <button class="result-card" data-area="${area.id}" data-index="${index}">
      <span class="tag">${area.title}</span>
      <h3>${s[0]}</h3>
      <p>${s[1]}</p>
    </button>
  `).join("");
  document.querySelectorAll(".result-card").forEach(card => {
    card.addEventListener("click", () => {
      const a = areas.find(x => x.id === card.dataset.area);
      showDetail(a, Number(card.dataset.index));
    });
  });
  document.querySelectorAll(".area-card").forEach(x => x.classList.toggle("active", x.dataset.area === id));
  resultsSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

function showDetail(area, index) {
  const s = area.situations[index];
  modalContent.innerHTML = `
    <p class="eyebrow">${area.title}</p>
    <h2 id="modalTitle">${s[0]}</h2>
    <p>${s[1]}</p>
    <h3>Qué hacer</h3>
    ${s[2].map((step, i) => `<div class="step"><strong>${i + 1}.</strong> ${step}</div>`).join("")}
    ${area.id === "conectividad" ? `<a class="resource" href="https://sit.educacioncba.edu.ar" target="_blank" rel="noopener">Ir a SIT</a>` : ""}
  `;
  modal.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.hidden = true;
  document.body.style.overflow = "";
}
document.querySelectorAll("[data-close]").forEach(el => el.addEventListener("click", closeModal));
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

function renderCalendar() {
  document.getElementById("calendarList").innerHTML = calendar.map(item => `
    <div class="timeline-item">
      <div class="timeline-date">${item[0]}</div>
      <div class="timeline-title">${item[1]}</div>
    </div>
  `).join("");
}

function renderContacts() {
  document.getElementById("contactGrid").innerHTML = contacts.map(c => `
    <article class="contact-card">
      <h3>${c[0]}</h3>
      <p>${c[1]}</p>
      <a href="${c[3]}" ${c[3].startsWith("http") ? 'target="_blank" rel="noopener"' : ""}>${c[2]}</a>
    </article>
  `).join("");
}

function search(term) {
  const q = term.trim().toLowerCase();
  if (!q) {
    resultsSection.hidden = true;
    return;
  }
  const matches = [];
  areas.forEach(area => {
    area.situations.forEach((s, index) => {
      const haystack = [area.title, s[0], s[1], ...s[2]].join(" ").toLowerCase();
      if (haystack.includes(q)) matches.push({ area, s, index });
    });
  });
  resultsSection.hidden = false;
  resultsTitle.textContent = `${matches.length} resultado${matches.length === 1 ? "" : "s"} para “${term}”`;
  resultsList.innerHTML = matches.length ? matches.map((m, i) => `
    <button class="result-card" data-area="${m.area.id}" data-index="${m.index}">
      <span class="tag">${m.area.title}</span>
      <h3>${m.s[0]}</h3>
      <p>${m.s[1]}</p>
    </button>
  `).join("") : `<div class="note-card"><p>No encontramos una situación con ese término. Probá con “pase”, “matrícula”, “robo”, “Internet”, “convivencia”, “ESI” o “asistencia”.</p></div>`;
  document.querySelectorAll(".result-card").forEach(card => {
    card.addEventListener("click", () => {
      const a = areas.find(x => x.id === card.dataset.area);
      showDetail(a, Number(card.dataset.index));
    });
  });
  resultsSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

searchInput.addEventListener("input", e => search(e.target.value));
document.getElementById("showAllBtn").addEventListener("click", () => {
  searchInput.value = "";
  resultsSection.hidden = false;
  resultsTitle.textContent = "Todas las situaciones";
  resultsList.innerHTML = areas.flatMap(area => area.situations.map((s, index) => `
    <button class="result-card" data-area="${area.id}" data-index="${index}">
      <span class="tag">${area.title}</span>
      <h3>${s[0]}</h3>
      <p>${s[1]}</p>
    </button>
  `)).join("");
  document.querySelectorAll(".result-card").forEach(card => {
    card.addEventListener("click", () => {
      const a = areas.find(x => x.id === card.dataset.area);
      showDetail(a, Number(card.dataset.index));
    });
  });
  resultsSection.scrollIntoView({ behavior: "smooth", block: "start" });
});

window.addEventListener("scroll", () => {
  document.getElementById("siteHeader").classList.toggle("scrolled", window.scrollY > 20);
});

renderAreas();
renderCalendar();
renderContacts();
