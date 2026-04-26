function ServiceCard({ title, link, icon, iconAlt }) {
  return (
    <article className="service-card">
      <img className="service-card__icon" src={icon} alt={iconAlt || title} />

      <h3 className="service-card__title">{title}</h3>

      <a href={link} className="service-card__link">
        Ver más
      </a>
    </article>
  );
}

export default ServiceCard;
