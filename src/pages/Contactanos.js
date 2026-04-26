import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Contactanos() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    telefono: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Datos enviados:", formData);

   
    navigate("/datos-enviados");
  };

  return (
    <section className="contact-page">
      <div className="contact-page__container">
        <h1 className="contact-page__title">Contáctanos</h1>

        <form className="contact-page__form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="empresa"
            placeholder="Empresa"
            value={formData.empresa}
            onChange={handleChange}
          />

          <input
            type="tel"
            name="telefono"
            placeholder="Teléfono"
            value={formData.telefono}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="mensaje"
            placeholder="Mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            rows="5"
            required
          />

          <button type="submit" className="contact-page__button">
            Enviar datos
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contactanos;