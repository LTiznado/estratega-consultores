"use client";

import { useState } from "react";

const scenarios = [
  {
    code: "01",
    label: "Tensión de caja",
    title: "La liquidez está reduciendo el margen de maniobra.",
    priority: "Prioridad inmediata",
    window: "Primeras 72 h",
    route: "Estabilización + refinanciación",
    steps: ["Construir flujo de caja de 13 semanas", "Priorizar pagos y preservar continuidad", "Preparar una posición creíble ante acreedores"],
    parties: ["Directorio", "Gerencia", "Acreedores"],
  },
  {
    code: "02",
    label: "Presión de acreedores",
    title: "Los intereses están desalineados y la negociación se estanca.",
    priority: "Alineamiento crítico",
    window: "Primeros 7 días",
    route: "Negociación + plan de viabilidad",
    steps: ["Mapear posiciones y restricciones", "Definir escenarios de recuperación", "Estructurar términos y hoja de negociación"],
    parties: ["Empresa", "Bancos", "Proveedores"],
  },
  {
    code: "03",
    label: "Viabilidad en duda",
    title: "El directorio necesita decidir qué preservar y qué transformar.",
    priority: "Decisión estratégica",
    window: "Diagnóstico rápido",
    route: "Evaluación independiente + escenarios",
    steps: ["Separar síntomas de causas", "Contrastar continuidad, venta o salida", "Cuantificar impacto para cada stakeholder"],
    parties: ["Accionistas", "Directorio", "Inversionistas"],
  },
  {
    code: "04",
    label: "Salida ordenada",
    title: "La recuperación ya no es razonable y toca proteger el valor residual.",
    priority: "Control del proceso",
    window: "Ruta estructurada",
    route: "Liquidación societaria o concursal",
    steps: ["Inventariar activos, obligaciones y contingencias", "Elegir el mecanismo de salida", "Ejecutar con transparencia y trazabilidad"],
    parties: ["Junta", "Acreedores", "Liquidador"],
  },
];

export function DecisionRoom() {
  const [active, setActive] = useState(0);
  const scenario = scenarios[active];

  return (
    <div className="decisionConsole">
      <div className="consoleBar">
        <span><i /> Sala de decisión</span>
        <small>Simulador demostrativo · No recopila datos</small>
      </div>
      <div className="consoleBody">
        <div className="scenarioRail" aria-label="Seleccione una situación">
          <p>¿Qué está ocurriendo?</p>
          {scenarios.map((item, index) => (
            <button className={index === active ? "active" : ""} key={item.code} onClick={() => setActive(index)} aria-pressed={index === active}>
              <span>{item.code}</span><strong>{item.label}</strong><b aria-hidden="true">→</b>
            </button>
          ))}
        </div>

        <div className="scenarioAnalysis" aria-live="polite">
          <div className="analysisMeta"><span>{scenario.priority}</span><small>{scenario.window}</small></div>
          <h3>{scenario.title}</h3>
          <div className="routeLabel"><small>Ruta inicial sugerida</small><strong>{scenario.route}</strong></div>
          <ol>{scenario.steps.map((step) => <li key={step}>{step}</li>)}</ol>
          <div className="partyTags">{scenario.parties.map((party) => <span key={party}>{party}</span>)}</div>
        </div>

        <div className="decisionMap" aria-hidden="true">
          <div className="mapRing ringA" /><div className="mapRing ringB" /><div className="mapAxis axisX" /><div className="mapAxis axisY" />
          <div className="mapCore"><small>Escenario</small><strong>{scenario.code}</strong><span>activo</span></div>
          <span className="mapNode nodeA">Finanzas</span><span className="mapNode nodeB">Legal</span><span className="mapNode nodeC">Operación</span>
        </div>
      </div>
      <div className="consoleFooter"><p>El resultado real depende de información financiera, legal y operativa validada.</p><a href="#contacto">Revisar mi situación con un consultor <span>↗</span></a></div>
    </div>
  );
}
