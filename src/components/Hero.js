import heroBackground from "../images/hero/hero-background.png";

function Hero() {
  return (
    <section
      className="hero"
      aria-label="Sección principal"
      style={{
        backgroundImage: `linear-gradient(
          180deg,
          rgba(1, 34, 8, 0.22) 0%,
          rgba(1, 37, 9, 0.48) 30%,
          rgba(0, 28, 6, 0.88) 68%,
          rgba(0, 27, 7, 1) 100%
        ), url(${heroBackground})`,
      }}
    >
      <div className="hero__container">
        <div className="hero__content">
          <h1 className="hero__title">
            Optimiza tus procesos y contribuye por un{" "}
            <span className="hero__title-accent">
              México sin contaminación
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Hero;
