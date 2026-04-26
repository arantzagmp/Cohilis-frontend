import { Link } from "react-router-dom";

function ServiceCard({ title, link, icon, iconAlt }) {
  return (
    <article className="service-card">
      <img className="service-card__icon" src={icon} alt={iconAlt || title} />

      <h3 className="service-card__title">{title}</h3>

      <Link to={link} className="service-card__link">
        Ver más
      </Link>
    </article>
  );
}

export default ServiceCard;
