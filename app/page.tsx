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
  { initials: "CC", name: "Carlos Corbella", role: "Gerente General", area: "Estrategia y procesos concursales" },
  { initials: "MD", name: "Mónica Del Águila", role: "Gerente Legal", area: "Derecho corporativo y concursal" },
  { initials: "FS", name: "Felipe Sosa", role: "Consultor Financiero", area: "Finanzas y valorización" },
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
          <a href="#equipo">Equipo</a>
          <a className="navCta" href="#contacto">Solicitar consulta</a>
        </nav>
        <details className="mobileMenu">
          <summary aria-label="Abrir menú"><span /><span /></summary>
          <nav aria-label="Navegación móvil">
            <a href="#firma">La firma</a><a href="#servicios">Servicios</a>
            <a href="#experiencia">Experiencia</a><a href="#equipo">Equipo</a>
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
            Reestructuración, refinanciación y liquidación empresarial con experiencia concursal acreditada.
          </p>
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

      <section className="section intro" id="firma">
        <div className="sectionLabel"><span>01</span> La firma</div>
        <div className="introCopy">
          <p className="eyebrow">Una mirada completa al negocio</p>
          <h2>Protegemos valor.<br />Recuperamos viabilidad.</h2>
          <p className="largeText">Integramos administración, derecho, contabilidad y economía para diseñar soluciones ejecutables, no diagnósticos aislados.</p>
          <a className="textLink" href="#metodo">Cómo trabajamos <span>→</span></a>
        </div>
        <aside className="statement">
          <span>“</span>
          <p>Nos involucramos en cada proyecto como si fuera propio, con independencia, confidencialidad y compromiso con el resultado.</p>
        </aside>
      </section>

      <section className="section servicesSection" id="servicios">
        <div className="sectionLabel"><span>02</span> Servicios</div>
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
        <div className="sectionLabel"><span>03</span> Nuestro método</div>
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
        <div className="sectionLabel"><span>04</span> Equipo</div>
        <div className="sectionHeading">
          <div><p className="eyebrow">Experiencia interdisciplinaria</p><h2>Especialistas que hablan el mismo lenguaje.</h2></div>
          <p>Consultores financieros y abogados con trayectoria en procesos corporativos complejos.</p>
        </div>
        <div className="teamGrid">
          {team.map((person) => (
            <article className="personCard" key={person.name}>
              <div className="portrait"><span>{person.initials}</span></div>
              <div><h3>{person.name}</h3><p>{person.role}</p><small>{person.area}</small></div>
            </article>
          ))}
        </div>
        <a className="textLink teamLink" href="#contacto">Conocer al equipo completo <span>→</span></a>
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
        <div><a href="#servicios">Servicios</a><a href="#equipo">Equipo</a><a href="#contacto">Contacto</a><a href="https://www.linkedin.com/company/estratega-consultores-s-a-c/about/">LinkedIn</a></div>
        <small>© 2026 Estratega Consultores. Maqueta demostrativa.</small>
      </footer>
    </main>
  );
}
