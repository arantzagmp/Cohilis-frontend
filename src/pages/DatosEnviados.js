import checkGraphic from "../images/vector.png";
import "../blocks/datos-enviados.css";

function DatosEnviados() {
  return (
    <section className="datos-page">
      <div className="datos-page__content">
        <img
          className="datos-page__icon"
          src={checkGraphic}
          alt="Datos enviados correctamente"
        />
        <h1 className="datos-page__title">Tus datos han sido enviados.</h1>
        <p className="datos-page__subtitle">
          Gracias, pronto te contactaremos.
        </p>
      </div>
    </section>
  );
}

export default DatosEnviados;