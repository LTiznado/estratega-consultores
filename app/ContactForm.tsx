"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function submitDemo(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <form className="contactForm" onSubmit={submitDemo}>
      <div className="formTop"><span>Consulta confidencial</span><small>Respuesta en 1 día hábil</small></div>
      <label>Nombre y apellido<input name="name" autoComplete="name" required placeholder="Ej. María Rodríguez" /></label>
      <div className="formRow">
        <label>Empresa<input name="company" autoComplete="organization" placeholder="Nombre de la empresa" /></label>
        <label>Teléfono<input name="phone" type="tel" autoComplete="tel" placeholder="+51 999 999 999" /></label>
      </div>
      <label>Correo corporativo<input name="email" type="email" autoComplete="email" required placeholder="nombre@empresa.com" /></label>
      <label>¿Cómo podemos ayudarle?<textarea name="message" required rows={4} placeholder="Describa brevemente la situación..." /></label>
      <label className="check"><input type="checkbox" required /><span>Acepto la Política de Privacidad y el tratamiento confidencial de mis datos.</span></label>
      <button className="button primary submitButton" type="submit">Enviar consulta <span>↗</span></button>
      {sent && <p className="demoSuccess" role="status"><strong>Demostración:</strong> la consulta está lista. En el sitio final se enviará al equipo de Estratega.</p>}
    </form>
  );
}
