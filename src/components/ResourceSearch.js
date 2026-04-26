import { useEffect, useState } from "react";

import { searchResources } from "../utils/api";
import { DEFAULT_SEARCH_QUERY, RESULTS_PER_PAGE } from "../utils/constants";

function ResourceSearch() {
  const [searchQuery, setSearchQuery] = useState(DEFAULT_SEARCH_QUERY);
  const [resources, setResources] = useState([]);
  const [visibleCards, setVisibleCards] = useState(RESULTS_PER_PAGE);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (query) => {
    setIsLoading(true);
    setErrorMessage("");
    setHasSearched(true);
    setVisibleCards(RESULTS_PER_PAGE);

    searchResources(query)
      .then((data) => {
        setResources(data);
      })
      .catch(() => {
        setResources([]);
        setErrorMessage(
          "No pudimos cargar la información. Inténtalo de nuevo más tarde."
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    setIsLoading(true);
    setHasSearched(true);

    searchResources(DEFAULT_SEARCH_QUERY)
      .then((data) => {
        setResources(data);
      })
      .catch(() => {
        setResources([]);
        setErrorMessage(
          "No pudimos cargar la información. Inténtalo de nuevo más tarde."
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchQuery.trim() || DEFAULT_SEARCH_QUERY);
  };

  const handleShowMore = () => {
    setVisibleCards(visibleCards + RESULTS_PER_PAGE);
  };

  const visibleResources = resources.slice(0, visibleCards);
  const hasResults = resources.length > 0;
  const canShowMore = visibleCards < resources.length;

  return (
    <section className="resource-search" aria-labelledby="resource-search-title">
      <div className="resource-search__container">
        <p className="resource-search__eyebrow">Recursos ambientales</p>
        <h2 className="resource-search__title" id="resource-search-title">
          Busca información sobre reciclaje y manejo de residuos.
        </h2>

        <form className="resource-search__form" onSubmit={handleSubmit}>
          <label className="resource-search__label" htmlFor="resource-search-input">
            Tema de búsqueda
          </label>
          <div className="resource-search__form-row">
            <input
              className="resource-search__input"
              id="resource-search-input"
              type="search"
              name="search"
              placeholder="Ej. recycling, waste oil, circular economy"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              required
            />
            <button className="resource-search__button" type="submit">
              Buscar
            </button>
          </div>
        </form>

        {isLoading && (
          <div className="resource-search__preloader" aria-label="Cargando resultados" />
        )}

        {!isLoading && errorMessage && (
          <p className="resource-search__message">{errorMessage}</p>
        )}

        {!isLoading && hasSearched && !errorMessage && !hasResults && (
          <p className="resource-search__message">No se ha encontrado nada</p>
        )}

        {!isLoading && hasResults && (
          <div className="resource-search__results">
            {visibleResources.map((resource) => (
              <article className="resource-search__card" key={resource.key}>
                <h3 className="resource-search__card-title">
                  {resource.title || "Recurso sin título"}
                </h3>
                <p className="resource-search__card-text">
                  Autor: {resource.author_name?.[0] || "Autor no disponible"}
                </p>
                <p className="resource-search__card-text">
                  Año: {resource.first_publish_year || "Año no disponible"}
                </p>
                <a
                  className="resource-search__card-link"
                  href={`https://openlibrary.org${resource.key}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver recurso
                </a>
              </article>
            ))}
          </div>
        )}

        {!isLoading && canShowMore && (
          <button
            className="resource-search__show-more"
            type="button"
            onClick={handleShowMore}
          >
            Mostrar más
          </button>
        )}
      </div>
    </section>
  );
}

export default ResourceSearch;
