import acopioTitle from "../images/-el-acopio-est--en-construcci-n-.png";
import virutaIcon from "../images/group-21@2x.png";
import filtroIcon from "../images/filtro-de-aceite-1.png";
import bateriasIcon from "../images/baterias-usadas.png";
import lavadoIcon from "../images/lavado-1.png";
import "../blocks/acopio.css";

function Acopio() {
  const items = [
    {
      title: "Filtros de aceite de motor",
      icon: filtroIcon,
    },
    {
      title: "Viruta impregnada de aceite",
      icon: virutaIcon,
    },
    {
      title: "Baterías usadas",
      icon: bateriasIcon,
    },
    {
      title: "Sólidos impregnados de aceite",
      icon: lavadoIcon,
    },
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

      <div className="acopio-page__types">
        {items.map((item) => (
          <article className="acopio-page__type" key={item.title}>
            <img
              className="acopio-page__icon-image"
              src={item.icon}
              alt={item.title}
            />

            <p>{item.title}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Acopio;