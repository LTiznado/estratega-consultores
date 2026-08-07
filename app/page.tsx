import { ContactForm } from "./ContactForm";

const services = [
  {
    number: "01",
    title: "Reestructuración empresarial",
    text: "Diseñamos y negociamos soluciones privadas o concursales para recuperar viabilidad y proteger valor.",
  },
  {
    number: "02",
    title: "Refinanciación de obligaciones",
    text: "Estructuramos acuerdos sostenibles entre empresas, acreedores e inversionistas.",
  },
  {
    number: "03",
    title: "Liquidación de patrimonios",
    text: "Conducimos procesos societarios y concursales con orden, transparencia y rigor legal.",
  },
  {
    number: "04",
    title: "Diagnóstico financiero",
    text: "Identificamos riesgos, brechas de liquidez y escenarios para tomar decisiones a tiempo.",
  },
  {
    number: "05",
    title: "Valorización de negocios",
    text: "Determinamos el valor económico de empresas y activos para transacciones y decisiones estratégicas.",
  },
  {
    number: "06",
    title: "Asesoría integral",
    text: "Integramos la perspectiva financiera, tributaria, contable y legal en una sola estrategia.",
  },
];

const team = [
  { name: "Carlos Corbella", role: "Gerente General", area: "Estrategia y procesos concursales", photo: "https://estrategaconsultores.com.pe/images/equipo/CarlosCorbella.png" },
  { name: "Mónica Del Águila", role: "Gerente Legal", area: "Derecho corporativo y concursal", photo: "https://estrategaconsultores.com.pe/images/equipo/MonicaDelAguila.jpg" },
  { name: "Felipe Sosa", role: "Consultor Financiero", area: "Finanzas y valorización", photo: "https://estrategaconsultores.com.pe/images/equipo/FelipeSosa.png" },
  { name: "Néstor Miranda", role: "Consultor Financiero", area: "Diagnóstico y modelamiento financiero", photo: "https://estrategaconsultores.com.pe/images/equipo/NestorMiranda.png" },
  { name: "Alonso Vigo", role: "Abogado del Área Procesal", area: "Estrategia procesal y corporativa", photo: "https://estrategaconsultores.com.pe/images/equipo/AlonsoVigo.jpg" },
  { name: "Frank Espinoza", role: "Abogado de Reestructuración", area: "Insolvencias y procesos concursales", photo: "https://estrategaconsultores.com.pe/images/equipo/FrankEspinoza.png" },
];

const situations = [
  "La presión de caja empieza a cerrar opciones.",
  "Los acreedores exigen un plan creíble y ejecutable.",
  "El directorio necesita una opinión independiente.",
  "Se debe decidir entre reestructurar, vender o liquidar.",
  "Una transacción exige una valorización defendible.",
  "El proceso concursal requiere conducción especializada.",
];

const mandates = [
  { value: "US$ 50 MM", title: "Plan de reestructuración", text: "Elaboración, negociación y aprobación de un plan con múltiples acreedores y objetivos de continuidad." },
  { value: "US$ 80 MM", title: "Acuerdo global de refinanciación", text: "Preparación financiera y acompañamiento estratégico para alcanzar un acuerdo sostenible." },
  { value: "50+", title: "Procesos corporativos", text: "Mandatos de refinanciación, reestructuración y liquidación administrados, asesorados o supervisados." },
];

const insights = [
  { tag: "Reestructuración", title: "¿Reestructurar o liquidar? Cinco señales para decidir a tiempo", read: "Lectura propuesta · 6 min" },
  { tag: "Liquidez", title: "Flujo de caja de 13 semanas: la primera herramienta en una crisis", read: "Lectura propuesta · 5 min" },
  { tag: "Concursal", title: "Qué espera una junta de acreedores de un plan realmente viable", read: "Lectura propuesta · 7 min" },
];

export default function Home() {
  return (
    <main>
      <header className="siteHeader">
        <a className="brand" href="#inicio" aria-label="Estratega Consultores, inicio">
          <span className="brandMark" aria-hidden="true"><i /></span>
          <span className="brandWords"><strong>ESTRATEGA</strong><small>CONSULTORES</small></span>
        </a>
        <nav className="desktopNav" aria-label="Navegación principal">
          <a href="#firma">La firma</a>
          <a href="#servicios">Servicios</a>
          <a href="#experiencia">Experiencia</a>
          <a href="#casos">Casos</a>
          <a href="#equipo">Equipo</a>
          <a className="navCta" href="#contacto">Solicitar consulta</a>
        </nav>
        <details className="mobileMenu">
          <summary aria-label="Abrir menú"><span /><span /></summary>
          <nav aria-label="Navegación móvil">
            <a href="#firma">La firma</a><a href="#servicios">Servicios</a>
            <a href="#experiencia">Experiencia</a><a href="#casos">Casos</a><a href="#equipo">Equipo</a>
            <a href="#contacto">Solicitar consulta</a>
          </nav>
        </details>
      </header>

      <section className="hero" id="inicio">
        <div className="heroGrid" aria-hidden="true" />
        <div className="heroContent">
          <p className="eyebrow light">Consultoría corporativa especializada · Lima, Perú</p>
          <h1>Decisiones complejas.<br /><em>Estrategias claras.</em></h1>
          <p className="heroLead">
            Acompañamos a empresas, acreedores y directorios en reestructuraciones, refinanciaciones y liquidaciones donde el tiempo y la ejecución importan.
          </p>
          <div className="heroAudience"><span>Empresas</span><span>Acreedores</span><span>Directorios</span><span>Inversionistas</span></div>
          <div className="heroActions">
            <a className="button primary" href="#contacto">Solicitar evaluación confidencial <span>↗</span></a>
            <a className="textLink lightLink" href="#experiencia">Conocer nuestra experiencia <span>↓</span></a>
          </div>
        </div>
        <div className="heroVisual" aria-hidden="true">
          <div className="visualImage" />
          <div className="visualFrame" />
          <div className="visualNote"><strong>Enfoque integral</strong><span>Financiero · Legal · Contable</span></div>
        </div>
        <div className="heroProof">
          <span>Acreditados por</span>
          <strong>INDECOPI</strong>
          <small>Resolución N.º 4295-2007/CCO</small>
        </div>
      </section>

      <section className="metrics" aria-label="Indicadores de experiencia">
        <div><strong>16+</strong><span>Años de<br />experiencia</span></div>
        <div><strong>50+</strong><span>Procesos<br />asesorados</span></div>
        <div><strong>US$ 1,445 MM</strong><span>Patrimonios<br />administrados</span></div>
        <p>Experiencia verificable para actuar con criterio cuando cada decisión importa.</p>
      </section>

      <section className="situationsSection" aria-labelledby="situations-title">
        <div className="sectionLabel"><span>01</span> Cuándo intervenir</div>
        <div className="situationsIntro">
          <p className="eyebrow">El momento correcto cambia el resultado</p>
          <h2 id="situations-title">Nos buscan cuando la decisión no puede esperar.</h2>
          <p>Actuar temprano amplía las alternativas. Entramos para ordenar la información, alinear intereses y convertir presión en una ruta concreta.</p>
        </div>
        <div className="situationsList">
          {situations.map((situation, index) => <div key={situation}><span>0{index + 1}</span><p>{situation}</p><b aria-hidden="true">→</b></div>)}
        </div>
      </section>

      <section className="section intro" id="firma">
        <div className="sectionLabel"><span>02</span> La firma</div>
        <div className="introCopy">
          <p className="eyebrow">Una mirada completa al negocio</p>
          <h2>Protegemos valor.<br />Recuperamos viabilidad.</h2>
          <p className="largeText">Integramos administración, derecho, contabilidad y economía para diseñar soluciones ejecutables, no diagnósticos aislados.</p>
          <a className="textLink" href="#metodo">Cómo trabajamos <span>→</span></a>
        </div>
        <aside className="statement">
          <span>“</span>
          <p>Nos involucramos en cada proyecto como si fuera propio, con independencia, confidencialidad y compromiso con el resultado.</p>
          <div className="seniorSignal"><strong>Dirección senior</strong><small>en cada mandato</small></div>
        </aside>
      </section>

      <section className="section servicesSection" id="servicios">
        <div className="sectionLabel"><span>03</span> Servicios</div>
        <div className="sectionHeading">
          <div><p className="eyebrow">Capacidad multidisciplinaria</p><h2>Soluciones para cada etapa de una decisión crítica.</h2></div>
          <p>Desde el diagnóstico inicial hasta la ejecución y el seguimiento de acuerdos.</p>
        </div>
        <div className="serviceGrid">
          {services.map((service) => (
            <article className="serviceCard" key={service.number}>
              <span>{service.number}</span><h3>{service.title}</h3><p>{service.text}</p>
              <a href="#contacto" aria-label={`Consultar por ${service.title}`}>Consultar <b>↗</b></a>
            </article>
          ))}
        </div>
      </section>

      <section className="section mandateSection" id="casos">
        <div className="sectionLabel"><span>04</span> Experiencia representativa</div>
        <div className="sectionHeading">
          <div><p className="eyebrow">Resultados sin comprometer confidencialidad</p><h2>La experiencia se demuestra en la ejecución.</h2></div>
          <p>Mandatos anonimizados basados en la experiencia comunicada por la firma.</p>
        </div>
        <div className="mandateGrid">
          {mandates.map((mandate, index) => (
            <article className="mandateCard" key={mandate.title}>
              <div className="mandateTop"><span>0{index + 1}</span><small>Mandato representativo</small></div>
              <strong>{mandate.value}</strong><h3>{mandate.title}</h3><p>{mandate.text}</p>
              <div className="mandateLine" />
            </article>
          ))}
        </div>
      </section>

      <section className="expertise" id="experiencia">
        <div className="expertisePanel">
          <p className="eyebrow light">Experiencia en contextos exigentes</p>
          <h2>Convertimos incertidumbre en una ruta de acción.</h2>
          <p>Más de cincuenta procesos en sectores diversos nos permiten anticipar riesgos, ordenar intereses y ejecutar soluciones realistas.</p>
          <div className="sectorList"><span>Industria</span><span>Construcción</span><span>Comercio</span><span>Servicios</span><span>Inmobiliario</span></div>
        </div>
        <div className="expertiseFigure" aria-hidden="true">
          <div className="ring ringOne" /><div className="ring ringTwo" />
          <div className="figureCenter"><small>Visión</small><strong>360°</strong><span>del negocio</span></div>
        </div>
      </section>

      <section className="section process" id="metodo">
        <div className="sectionLabel"><span>05</span> Nuestro método</div>
        <div className="sectionHeading compact">
          <div><p className="eyebrow">De la complejidad a la ejecución</p><h2>Un proceso claro, de principio a fin.</h2></div>
        </div>
        <div className="processGrid">
          <article><span>01</span><h3>Entender</h3><p>Revisamos la situación financiera, legal y operativa con absoluta confidencialidad.</p></article>
          <article><span>02</span><h3>Diseñar</h3><p>Construimos escenarios, alineamos intereses y definimos una estrategia viable.</p></article>
          <article><span>03</span><h3>Ejecutar</h3><p>Negociamos, implementamos y acompañamos cada hito hasta lograr el resultado.</p></article>
        </div>
      </section>

      <section className="section teamSection" id="equipo">
        <div className="sectionLabel"><span>06</span> Equipo</div>
        <div className="sectionHeading">
          <div><p className="eyebrow">Experiencia interdisciplinaria</p><h2>Especialistas que hablan el mismo lenguaje.</h2></div>
          <p>Consultores financieros y abogados con trayectoria en procesos corporativos complejos.</p>
        </div>
        <div className="teamGrid">
          {team.map((person) => (
            <article className="personCard" key={person.name}>
              <div className="portrait" style={{ backgroundImage: `linear-gradient(180deg, transparent 45%, rgba(7,21,39,.32)), url(${person.photo})` }} role="img" aria-label={`Fotografía de ${person.name}`} />
              <div><h3>{person.name}</h3><p>{person.role}</p><small>{person.area}</small></div>
            </article>
          ))}
        </div>
        <a className="textLink teamLink" href="#contacto">Conocer al equipo completo <span>→</span></a>
      </section>

      <section className="section insightsSection" id="insights">
        <div className="sectionLabel"><span>07</span> Perspectivas</div>
        <div className="sectionHeading">
          <div><p className="eyebrow">Criterio para quienes deciden</p><h2>Conocimiento que ayuda a actuar antes.</h2></div>
          <p>Una línea editorial propuesta para posicionar a Estratega como referente en situaciones especiales.</p>
        </div>
        <div className="insightsGrid">
          {insights.map((insight, index) => (
            <article className="insightCard" key={insight.title}>
              <div className={`insightVisual visual0${index + 1}`}><span>{insight.tag}</span><b>0{index + 1}</b></div>
              <small>{insight.read}</small><h3>{insight.title}</h3><span className="insightAction">Contenido editorial propuesto ↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="assetBand">
        <div><p className="eyebrow light">Activos en venta</p><h2>Oportunidades seleccionadas, información transparente.</h2></div>
        <div className="assetTypes"><span>Inmuebles</span><span>Maquinarias</span><span>Otros activos</span></div>
        <a className="button outline" href="#contacto">Consultar disponibilidad <span>↗</span></a>
      </section>

      <section className="contactSection" id="contacto">
        <div className="contactIntro">
          <p className="eyebrow light">Conversemos</p>
          <h2>Una conversación a tiempo puede cambiar el resultado.</h2>
          <p>Cuéntenos brevemente su situación. Un consultor senior se pondrá en contacto con usted.</p>
          <div className="contactData"><span>Miraflores, Lima – Perú</span><span>+51 1 241 6407</span><span>notificaciones@estrategaconsultores.com.pe</span></div>
        </div>
        <ContactForm />
      </section>

      <footer>
        <a className="brand footerBrand" href="#inicio" aria-label="Volver al inicio">
          <span className="brandMark" aria-hidden="true"><i /></span>
          <span className="brandWords"><strong>ESTRATEGA</strong><small>CONSULTORES</small></span>
        </a>
        <p>Consultoría corporativa · Reestructuración · Liquidación</p>
        <div><a href="#servicios">Servicios</a><a href="#casos">Casos</a><a href="#insights">Perspectivas</a><a href="#contacto">Contacto</a><a href="https://www.linkedin.com/company/estratega-consultores-s-a-c/about/">LinkedIn</a></div>
        <small>© 2026 Estratega Consultores. Maqueta demostrativa.</small>
      </footer>
    </main>
  );
}
