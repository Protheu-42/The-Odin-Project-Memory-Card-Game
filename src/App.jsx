import { useEffect, useState } from "react";
import fetchAllPokemon from "./fetchPokemonAPI";

function App() {
  const [pokemon, setPokemon] = useState([]);
  let fetchedPokemon = Array.isArray(pokemon);

  useEffect(() => {
    fetchAllPokemon().then((data) => setPokemon([...data]));
  }, []);

  if (fetchedPokemon) {
    return (
      <>
        {pokemon.map((eachPokemon) => {
          return <img src={eachPokemon} alt="" />;
        })}
      </>
    );
  } else {
    return <h1>Loading</h1>;
  }
}

export default App;
