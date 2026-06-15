import { useEffect, useState } from "react";
import fetchAllPokemon from "./fetchPokemonAPI";
import Card from "./components/Card";

function App() {
  const [pokemonArray, setPokemonArray] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [alreadyClickedArray, setAlreadyClickedArray] = useState([]);

  let pokemonArrayReady = Array.isArray(pokemonArray);

  function randomizingPokemonArray() {
    setPokemonArray(pokemonArray.sort(() => Math.random() - 0.5));
  }

  function compareScores() {
    if (currentScore > bestScore) {
      setBestScore(currentScore);
    }
  }

  function handleClickEvent(pokemon) {
    randomizingPokemonArray();
    if (alreadyClickedArray.includes(pokemon)) {
      compareScores();
      setCurrentScore(0);
      setAlreadyClickedArray([]);
    } else {
      setAlreadyClickedArray((previousPokemon) => [
        ...previousPokemon,
        pokemon,
      ]);
      setCurrentScore((prevScore) => prevScore + 1);
      compareScores();
    }
  }

  useEffect(() => {
    fetchAllPokemon().then((data) => setPokemonArray([...data]));
  }, []);

  if (pokemonArrayReady) {
    return (
      <>
        <h2>Current Score: {currentScore}</h2>
        <h2>Best Score: {bestScore}</h2>
        <ul>
          {pokemonArray.map((eachPokemon) => {
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
