import permiso1 from "../images/group-29@2x.png";
import permiso2 from "../images/group-30@2x.png";
import permiso3 from "../images/group-33@2x.png";
import permiso4 from "../images/group-31@2x.png";
import permiso5 from "../images/group-32.png";
import "../blocks/permisos.css";

function Permisos() {
  const permisos = [permiso1, permiso2, permiso3, permiso4, permiso5];

  return (
    <section className="permisos-page" id="permisos">
      <div className="permisos-page__hero">
        <h1 className="permisos-page__title">Nuestros permisos</h1>

        <p className="permisos-page__subtitle">
          ©️ Todos los derechos reservados a Cohilis SA de CV
        </p>
      </div>

      <div className="permisos-page__grid">
        {permisos.map((permiso, index) => (
          <article key={index} className="permisos-page__card">
            <img
              className="permisos-page__image"
              src={permiso}
              alt={`Permiso ${index + 1} de Cohilis`}
            />
          </article>
        ))}
      </div>
    </section>
  );
}

export default Permisos;