import { useEffect, useState } from "react";
import fetchAllPokemon from "./fetchPokemonAPI";
import Card from "./components/Card";
import "./styles/app.css";

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
        <header>
          <div>
            <p>Current Score: {currentScore}</p>
            <p>Best Score: {bestScore}</p>
          </div>
          <p>Click in the pokemon bellow without repeat</p>
        </header>
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
