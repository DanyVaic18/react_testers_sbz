import { useState, useEffect, useCallback, useDeferredValue } from "react";
import debounce from "lodash.debounce";

const DebounceTest = () => {
  const [query, setQuery] = useState("");
  const [allPokemon, setAllPokemon] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);

  // `useDeferredValue` mantiene los resultados previos mientras se actualizan
  const deferredQuery = useDeferredValue(query);

  // Obtener la lista completa de Pokémon una sola vez
  useEffect(() => {
    const fetchAllPokemon = async () => {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=100000",
        );
        const data = await response.json();
        setAllPokemon(data.results);
      } catch (error) {
        console.error("Error al cargar Pokémon:", error);
      }
    };
    fetchAllPokemon();
  }, []);

  // Crear la función `debouncedSearch` con `useCallback`
  const debouncedSearch = useCallback(
    (searchTerm: string) => {
      // Crea la función debounced dentro de `useCallback`
      const search = debounce(() => {
        const filtered = allPokemon.filter((pokemon: { name: string }) =>
          pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()),
        );
        setFilteredResults(filtered);
      }, 500);

      // Llamamos a la función debounced
      search();
    },
    [allPokemon], // Dependemos de `allPokemon` para actualizar los resultados
  );

  // Cuando cambia el `deferredQuery`, ejecutamos la búsqueda debounced
  useEffect(() => {
    debouncedSearch(deferredQuery);
  }, [deferredQuery, debouncedSearch]);
  return (
    <div>
      <h2>Buscar Pokémon</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Escribe un nombre..."
      />
      <ul>
        {filteredResults
          .slice(0, 20)
          .map((pokemon: { name: string }, index) => (
            <li key={index}>{pokemon?.name}</li>
          ))}
      </ul>
      <PlaziStoreTitleSearch />
    </div>
  );
};

export default DebounceTest;

const PlaziStoreTitleSearch = () => {
  const [query, setQuery] = useState(""); // Entrada del usuario
  const [filteredResults, setFilteredResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // Llamada a la API de búsqueda
  const fetchPokemon = async (searchTerm: string) => {
    if (!searchTerm) return; // Si la búsqueda está vacía, no hacemos nada

    setLoading(true); // Iniciamos el estado de carga
    try {
      const response = await fetch(
        `https://api.escuelajs.co/api/v1/products/?title=${searchTerm.toLowerCase()}`,
      );
      const data = await response.json();
      console.log(data);
      setFilteredResults(data || []);
    } catch (error) {
      console.error("Error al buscar item:", error);
    } finally {
      setLoading(false); // Terminamos la carga
    }
  };

  // `debouncedSearch` para hacer la búsqueda con un retraso de 500ms
  const debouncedSearch = useCallback((query:string) => {
    const start = debounce((searchTerm: string) => {
      fetchPokemon(searchTerm); // Llamada a la API debounced
    }, 500); // 500ms de retraso después de que el usuario deje de escribir
    start(query);
  }, []);

  // Efecto para detectar cambios en el input
  useEffect(() => {
    debouncedSearch(query); // Llamar a la búsqueda debounced
  }, [query, debouncedSearch]); // Ejecuta cuando `query` cambia

  return (
    <div>
      <h2>Tienda de Platzi </h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)} // Actualizamos el estado de `query`
        placeholder="Escribe un nombre..."
      />
      {loading && <p>Cargando...</p>}{" "}
      {/* Mostrar un mensaje mientras cargamos los resultados */}
      <ul>
        {filteredResults.length === 0 && !loading ? (
          <p>No se encontraron resultados.</p>
        ) : (
          filteredResults
            .slice(0, 25)
            .map((item: { title: string }, index) => (
              <li key={index}>{item.title}</li>
            ))
        )}
      </ul>
    </div>
  );
};
