import ServiceCard from "./ServiceCard";

function Services({ services = [] }) {
  return (
    <section className="services" id="services" aria-label="Servicios">
      <div className="services__container">
        <h2 className="services__title">¡Conoce nuestros servicios!</h2>

        <div className="services__list">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              link={service.link}
              icon={service.icon}
              iconAlt={service.iconAlt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
