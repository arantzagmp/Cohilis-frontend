import checkGraphic from "../images/vector.png";
import "../blocks/datos-enviados.css";

function DatosEnviados() {
  return (
    <section className="datos-page">
      <img
        className="datos-page__bg"
        src={checkGraphic}
        alt=""
        aria-hidden="true"
      />

      <div className="datos-page__content">
        <h1 className="datos-page__title">
          Tus datos han sido enviados.
        </h1>

        <p className="datos-page__subtitle">
          Gracias, pronto te contactaremos.
        </p>
      </div>
    </section>
  );
}

export default DatosEnviados;