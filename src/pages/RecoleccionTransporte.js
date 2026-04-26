import recoleccionHero from "../images/frame-62.png";
import recoleccionGraphic from "../images/group-46@2x.png";
import "../blocks/recoleccion-transporte.css";

function RecoleccionTransporte() {
  return (
    <section className="recoleccion-transporte">
      <div
        className="recoleccion-transporte__hero"
        style={{
          backgroundImage: `linear-gradient(
            180deg,
            rgba(7, 28, 0, 0.3) 0%,
            rgba(7, 28, 0, 1) 100%
          ), url(${recoleccionHero})`,
        }}
      >
        <div className="recoleccion-transporte__hero-content">
          <h1 className="recoleccion-transporte__title">
            Nosotros vamos por tu aceite
          </h1>
          <p className="recoleccion-transporte__subtitle">
            Contamos con unidades de carga verificadas y autorizadas para el
            manejo de residuos.
          </p>
        </div>
      </div>

      <div className="recoleccion-transporte__content">
        <div className="recoleccion-transporte__text-block">
          <h2 className="recoleccion-transporte__heading">
            ¿En qué condiciones tiene que estar el aceite?
          </h2>

          <div className="recoleccion-transporte__text">
            <p>
              Te ofrecemos la flexibilidad de recibir el aceite en la
              presentación que mejor se adapte a tus necesidades.
            </p>
            <p>
              Además, contamos con un equipo altamente capacitado para
              garantizar una recolección eficiente y sin inconvenientes.
            </p>
          </div>
        </div>

        <div className="recoleccion-transporte__image-wrapper">
          <img
            className="recoleccion-transporte__image"
            src={recoleccionGraphic}
            alt="Proceso de recolección y transporte de aceite"
          />
        </div>
      </div>
    </section>
  );
}

export default RecoleccionTransporte;