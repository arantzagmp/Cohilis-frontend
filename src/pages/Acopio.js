import acopioTitle from "../images/-el-acopio-est--en-construcci-n-.png";
import virutaIcon from "../images/group-21@2x.png";
import "../blocks/acopio.css";

function Acopio() {
  const items = [
    "Filtros de aceite de motor",
    "Viruta impregnada de aceite",
    "Baterías usadas",
    "Sólidos impregnados de aceite",
  ];

  return (
    <section className="acopio-page">
      <div className="acopio-page__hero">
        <img
          className="acopio-page__title-image"
          src={acopioTitle}
          alt="¡El acopio está en construcción!"
        />
        <p className="acopio-page__subtitle">
          Pero continuamos recolectando, transportando y enviando a disposición
          final.
        </p>
      </div>

      <div className="acopio-page__content">
        <h2 className="acopio-page__heading">Tipos de residuos que acopiamos</h2>

        <div className="acopio-page__grid">
          <article className="acopio-page__card">
            <div className="acopio-page__icon" />
            <p>{items[0]}</p>
          </article>

          <article className="acopio-page__card">
            <img
              className="acopio-page__icon-image"
              src={virutaIcon}
              alt="Viruta impregnada de aceite"
            />
            <p>{items[1]}</p>
          </article>

          <article className="acopio-page__card">
            <div className="acopio-page__icon" />
            <p>{items[2]}</p>
          </article>

          <article className="acopio-page__card">
            <div className="acopio-page__icon" />
            <p>{items[3]}</p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Acopio;