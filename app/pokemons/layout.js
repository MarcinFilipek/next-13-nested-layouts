import Link from "next/link";
import { use } from "react";

async function getPokomons() {
  const res = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0"
  );
  return res.json();
}

export default function Layout({ children }) {
  const data = use(getPokomons());
  const pokemons = data.results;

  return (
    <div className="flex">
      <ul className="pr-10 text-sm">
        {pokemons.map((pokemon) => (
          <li key={pokemon.name}>
            <Link href={`/pokemons/${pokemon.name}`}>{pokemon.name}</Link>
          </li>
        ))}
      </ul>
      <div>{children}</div>
    </div>
  );
}
