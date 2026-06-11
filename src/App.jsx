import { useEffect, useState } from "react";
import fetchAllPokemon from "./fetchPokemonAPI";

function Card({ url }) {
  return (
    <li>
      <img src={url} />
    </li>
  );
}

function App() {
  const [pokemon, setPokemon] = useState([]);
  let fetchedPokemon = Array.isArray(pokemon);

  useEffect(() => {
    fetchAllPokemon().then((data) => setPokemon([...data]));
  }, []);

  if (fetchedPokemon) {
    return (
      <>
        <ul>
          {pokemon.map((eachPokemon) => {
            return <Card key={eachPokemon} url={eachPokemon} />;
          })}
        </ul>
      </>
    );
  } else {
    return <h1>Loading</h1>;
  }
}

export default App;
