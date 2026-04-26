import aboutImage from "../images/about/about-team.png";

function About() {
  return (
    <section className="about" id="about" aria-label="Sobre la empresa">
      <div className="about__container">
        <div className="about__content">
          <h2 className="about__title">
            Somos una empresa con personal capacitado por empresas certificadas
            para brindarte el mejor servicio
          </h2>

          <p className="about__text">
            Estamos capacitados en: formación de brigadas, búsqueda y rescate;
            primeros auxilios; contra incendio; recolección y transporte de
            residuo peligroso.
          </p>
        </div>

        <div className="about__image-container">
          <img
            className="about__image"
            src={aboutImage}
            alt="Personal capacitado de Cohilis en operación"
          />
        </div>
      </div>

      <p className="about__description">
        Tenemos la solución ideal para el manejo de residuos, con prioridad en
        el{" "}
        <span className="about__description-accent">
          cuidado del medio ambiente
        </span>
        .
      </p>
    </section>
  );
}

export default About;
