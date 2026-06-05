import { useEffect, useState } from "react";
import fetchAllPokemon from "./fetchPokemonAPI";

function App() {
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    fetchAllPokemon().then((data) => setPokemon(data));
  }, []);

  return <img src={pokemon} alt="" />;
}

// make this a ARRAY

export default App;

/*   useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/ditto")
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setPokemon((prev) => [
          ...prev,
          response.sprites.other["official-artwork"].front_default,
        ]);
      });
  }, []); */
