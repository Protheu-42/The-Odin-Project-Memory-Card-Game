import { useEffect, useState } from "react";
import fetchAllPokemon from "./fetchPokemonAPI";

function Card({ url, clickEvent }) {
  return (
    <li>
      <img src={url} onClick={() => clickEvent()} />
    </li>
  );
}

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [arrayOfChoices, setArrayOfChoices] = useState([]);

  let fetchedPokemon = Array.isArray(pokemon);

  function randomizingPokemonArray() {
    setPokemon(pokemon.sort(() => Math.random() - 0.5));
  }

  function handleClickEvent(data) {
    randomizingPokemonArray();
    console.log(pokemon);
    if (arrayOfChoices.includes(data)) {
      if (currentScore > bestScore) {
        setBestScore(currentScore);
        setCurrentScore(0);
        setArrayOfChoices([]);
      } else {
        setCurrentScore(0);
        setArrayOfChoices([]);
      }
    } else {
      setArrayOfChoices((prevArray) => [...prevArray, data]);
      setCurrentScore((prevScore) => prevScore + 1);
      if (currentScore > bestScore) {
        setBestScore(currentScore);
      }
    }
  }

  useEffect(() => {
    fetchAllPokemon().then((data) => setPokemon([...data]));
  }, []);

  if (fetchedPokemon) {
    return (
      <>
        <h2>Current Score: {currentScore}</h2>
        <h2>Best Score: {bestScore}</h2>
        <ul>
          {pokemon.map((eachPokemon) => {
            return (
              <Card
                key={eachPokemon}
                url={eachPokemon}
                clickEvent={() => handleClickEvent(eachPokemon)}
              />
            );
          })}
        </ul>
      </>
    );
  } else {
    return <h1>Loading</h1>;
  }
}

export default App;
