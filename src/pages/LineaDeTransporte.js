import heroImage from "../images/frame-51.png";
import unidadImage from "../images/img-4794-1.png";
import safetyGraphic from "../images/vector-3@2x.png";
import "../blocks/linea-de-transporte.css";

function LineaDeTransporte() {
  return (
    <section className="linea-page">
      <img
        className="linea-page__hero-image"
        src={heroImage}
        alt="Línea de transporte"
      />

      <div className="linea-page__hero">
        <h1 className="linea-page__title">Línea de transporte</h1>

        <p className="linea-page__subtitle">
          Para más información, llame directo al{" "}
          <span className="linea-page__phone">+52 914 108 4030</span>
        </p>
      </div>

      <div className="linea-page__units">
        <img
          className="linea-page__units-image"
          src={unidadImage}
          alt="Unidad de transporte Cohilis"
        />

        <h2 className="linea-page__section-title">Nuestras unidades</h2>

        <p className="linea-page__text">
          Están certificadas para el manejo de residuo peligroso en todo el país.
        </p>

        <p className="linea-page__text">
          Transportamos aceites, solventes y asfaltos.
        </p>
      </div>

      <div className="linea-page__security">
        <div className="linea-page__security-text">
          <h2 className="linea-page__section-title">
            Para nosotros la seguridad es innegociable, por lo cual:
          </h2>

          <p className="linea-page__text">
            Las maniobras de carga son responsabilidad del expedidor.
          </p>

          <p className="linea-page__text">
            Las maniobras de descarga son responsabilidad del cliente o
            destinatario.
          </p>
        </div>

        <img
          className="linea-page__security-image"
          src={safetyGraphic}
          alt="Seguridad"
        />
      </div>
    </section>
  );
}

export default LineaDeTransporte;