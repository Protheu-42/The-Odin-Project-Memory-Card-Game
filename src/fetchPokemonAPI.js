const pokemonNames = ["ditto", "eevee"];
let pokemonArray = [];

const fetchPokemonApi = (pokemonName) =>
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) => response.json())
    .then((response) => {
      return response.sprites.other["official-artwork"].front_default;
    });
/* 
const fetchAllPokemon = () =>
  fetchPokemonApi("ditto").then((data) => {
    if (pokemonArray.includes(data)) {
      return pokemonArray;
    } else {
      pokemonArray.push(data);
      return pokemonArray;
    }
  });
 */

async function fetchAllPokemon() {
  try {
    const fetchPromises = pokemonNames.map((pokemonName) =>
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`),
    );
    const responses = await Promise.all(fetchPromises);
    const data = await Promise.all(
      responses.map((res) => {
        return res.json();
      }),
    );
    const sprite = data.map(
      (cel) => cel.sprites.other["official-artwork"].front_default,
    );

    return sprite;
  } catch (error) {
    console.error("fetch failed" + error);
  }
}

export default fetchAllPokemon;
