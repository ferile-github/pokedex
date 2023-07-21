import PokemonItem from '@/components/pokemon/PokemonItem';
import { getAllPokemon } from '../../lib/fetch-pokemon';
import { env } from 'process';
import Link from 'next/link';

export const metadata = {
  title: 'Pokedex',
  description: 'The Pokedex',
};

export default async function Page({ params }) {
  const page = parseInt(params.paging);
  const pagination:Number = parseInt(env.NEXT_PUBLIC_PAGINATION);
  let nextPage = page + 1;
  let previousPage = page - 1;

  const offset = pagination * page;
  const allPokemon = await getAllPokemon(`?offset=${offset}&limit=${pagination}`);
  const limit = 16;

  return (
    <>
      <ol className="flex justify-between mb-lg">
        <li>
          {page !== 0 && (
            <Link className="flex p-2 text-white" href={`${previousPage}`}>
              Previous Page
            </Link>
          )}
        </li>

        <li>
          {limit !== nextPage && (
            <Link className="flex p-2 text-white" href={`${nextPage}`}>
              Next Page
            </Link>
          )}
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
