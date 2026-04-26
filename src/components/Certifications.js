import { Link } from "react-router-dom";
import certificationLogos from "../images/certifications/certification-logos.png";

function Certifications() {
  return (
    <section className="certifications" aria-label="Certificaciones">
      <div className="certifications__container">
        <p className="certifications__text">
          Autorizados, certificados y registrados ante:
        </p>

        <div className="certifications__logos">
          <img
            className="certifications__logos-image"
            src={certificationLogos}
            alt="Logos de PROFEPA, Medio Ambiente y ASEA"
          />
        </div>

        <Link to="/permisos" className="certifications__button">
          Ver más
        </Link>
      </div>
    </section>
  );
}

export default Certifications;
