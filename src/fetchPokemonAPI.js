const pokemonNames = [
  "ditto",
  "eevee",
  "pikachu",
  "piplup",
  "togepi",
  "riolu",
  "meowth",
  "munchlax",
];

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
