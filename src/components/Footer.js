import logoCohilis from "../images/brand/logo-cohilis.png";

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer__container">
        <div className="footer__brand">
          <img className="footer__logo-image" src={logoCohilis} alt="Cohilis S.A. de C.V." />
          <p className="footer__copyright">
            © 2026 Derechos reservados por Cohilis S.A. de C.V.
          </p>
        </div>

        <div className="footer__info">
          <div className="footer__column">
            <h3 className="footer__heading">Horario de oficina</h3>
            <p className="footer__text">Lunes - Sábado:</p>
            <p className="footer__text">9:00-17:00</p>
          </div>

          <div className="footer__column">
            <h3 className="footer__heading">Dirección</h3>
            <p className="footer__text">
              Carretera Vía corta Cunduacán Comalcalco Km 17+000,
              Ranchería Pechucalco, Cunduacán, Tabasco.
            </p>
          </div>

          <div className="footer__column">
            <h3 className="footer__heading">Teléfono</h3>
            <p className="footer__text">+52 914 108 4030</p>
            <p className="footer__text">+52 993 160 6894</p>
          </div>

          <div className="footer__column">
            <h3 className="footer__heading">Correo</h3>
            <p className="footer__text">cohilis.acopio@yahoo.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
