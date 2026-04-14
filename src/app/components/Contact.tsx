"use client";
 
import { useState } from "react";
 
export default function Contact() {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });
  const [sent, setSent] = useState(false);
 
  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
 
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: conectar con tu servicio de email (Resend, EmailJS, Formspree, etc.)
    console.log("Formulario enviado:", form);
    setSent(true);
  }
 
  return (
    <section id="contact" className="portfolio-section portfolio-contact">
      <h2 className="portfolio-section-title">Contacto</h2>
 
      {sent ? (
        <p className="portfolio-section-text">
          ¡Gracias por tu mensaje! Te respondo a la brevedad.
        </p>
      ) : (
        <form className="portfolio-contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="nombre"
            placeholder="Tu nombre"
            className="portfolio-input"
            value={form.nombre}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Tu email"
            className="portfolio-input"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="mensaje"
            placeholder="Tu mensaje"
            className="portfolio-input"
            value={form.mensaje}
            onChange={handleChange}
            required
          />
          <button type="submit" className="portfolio-btn portfolio-btn-accent">
            Enviar
          </button>
        </form>
      )}
    </section>
  );
}