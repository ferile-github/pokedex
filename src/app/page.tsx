import PokemonItem from '@/components/pokemon/PokemonItem';
import { getAllPokemon } from '../lib/fetch-pokemon';
import Link from 'next/link';
import { env } from 'process';

export const metadata = {
  title: 'Pokedex',
  description: 'The Pokedex',
};

export default async function Page() {
  const allPokemon = await getAllPokemon(`?offset=0&limit=${env.NEXT_PUBLIC_PAGINATION}`);

  return (
    <>
      <ol className="flex justify-between mb-lg">
				<li></li>
        <li>
            <Link className="flex p-2 text-white" href={`1`}>
              Next Page
            </Link>
        </li>
      </ol>

      <div className={`grid sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-xs mb-[400px]`}>
        {allPokemon.results.map((pokemon) => (
          <PokemonItem key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
    </>
  );
}
