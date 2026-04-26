import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Contactanos() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    empresa: "",
    nombre: "",
    telefono: "",
    direccion: "",
    litros: "",
    fecha: "",
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
      <div className="contact-page__content">
        <p className="contact-page__eyebrow">Contáctanos</p>

        <h1 className="contact-page__title">
          Envía tus datos para recibir un presupuesto.
        </h1>

        <form className="contact-page__form" onSubmit={handleSubmit}>
          <label className="contact-page__field">
            <span>Nombre de la compañía</span>
            <input
              type="text"
              name="empresa"
              placeholder="Compañía"
              value={formData.empresa}
              onChange={handleChange}
            />
          </label>

          <label className="contact-page__field">
            <span>Nombre</span>
            <input
              type="text"
              name="nombre"
              placeholder="José Ortiz"
              value={formData.nombre}
              onChange={handleChange}
            />
          </label>

          <label className="contact-page__field">
            <span>Teléfono</span>
            <input
              type="text"
              name="telefono"
              placeholder="+52 000 000 0000"
              value={formData.telefono}
              onChange={handleChange}
            />
          </label>

          <label className="contact-page__field">
            <span>Dirección de recolección</span>
            <input
              type="text"
              name="direccion"
              placeholder="Av."
              value={formData.direccion}
              onChange={handleChange}
            />
          </label>

          <label className="contact-page__field">
            <span>Litros de aceite aproximados</span>
            <input
              type="text"
              name="litros"
              placeholder="Lts"
              value={formData.litros}
              onChange={handleChange}
            />
          </label>

          <label className="contact-page__field">
            <span>Fecha de recolección</span>
            <input
              type="text"
              name="fecha"
              placeholder="Día/Mes"
              value={formData.fecha}
              onChange={handleChange}
            />
          </label>

          <button type="submit" className="contact-page__button">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contactanos;