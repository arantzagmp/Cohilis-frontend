import { Link } from "react-router-dom";
import logoCohilis from "../images/brand/logo-cohilis.png";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__bar">
          <Link to="/" className="header__logo-link" aria-label="Cohilis inicio">
            <img
              className="header__logo"
              src={logoCohilis}
              alt="Cohilis S.A. de C.V."
            />
          </Link>

          <nav className="header__nav" aria-label="Navegación principal">
            <Link to="/recoleccion-y-transporte" className="header__link">
              Recolección
            </Link>

            <Link to="/acopio" className="header__link">
              Acopio
            </Link>

            <Link to="/linea-de-transporte" className="header__link">
              Línea de transporte
            </Link>
          </nav>

          <Link to="/contactanos" className="header__button">
            Cotiza hoy
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;