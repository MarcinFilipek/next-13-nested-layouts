import { use } from "react";

async function getPokemon({ name }) {
  const res = fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  return (await res).json();
}

export default function Page({ params }) {
  const data = use(getPokemon({ name: params.name }));
  return <p>{data.name}</p>;
}

export async function generateStaticParams() {
  const res = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0"
  );
  const data = await res.json();
  const pokemons = data.results;
  return pokemons.map((pokemon) => ({
    name: pokemon.name,
  }));
}
