import { OPEN_LIBRARY_SEARCH_URL } from "./constants";

export function searchResources(query) {
  return fetch(`${OPEN_LIBRARY_SEARCH_URL}?q=${encodeURIComponent(query)}&limit=12`)
    .then((res) => {
      if (!res.ok) {
        return Promise.reject(`Error: ${res.status}`);
      }

      return res.json();
    })
    .then((data) => data.docs || []);
}
