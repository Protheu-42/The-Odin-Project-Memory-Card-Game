const fetchPokemonApi = (name) =>
  fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      return response.sprites.other["official-artwork"].front_default;
    });

let array = [];

const fetchAllPokemon = () =>
  fetchPokemonApi("ditto").then((data) => {
    array.push(data);
    return array;
  });
export default fetchAllPokemon;
