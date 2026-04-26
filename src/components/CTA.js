import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="cta" id="cta" aria-label="Llamado a la acción">
      <div className="cta__container">
        <p className="cta__text">Estás a un paso de ser parte del cambio.</p>
        <h2 className="cta__title">Trabaja con nosotros.</h2>

        <Link to="/contactanos" className="cta__button">
          Cotiza hoy
        </Link>
      </div>
    </section>
  );
}

export default CTA;