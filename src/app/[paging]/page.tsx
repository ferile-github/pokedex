import PokemonItem from '@/components/pokemon/PokemonItem';
import { getAllPokemon } from '../../lib/fetch-pokemon';
import { env } from 'process';
import Link from 'next/link';
import Button from '@/components/ui/button';

export const metadata = {
	title: 'Pokedex',
	description: 'The Pokedex',
};

export default async function Page({ params }) {
	const page = parseInt(params.paging);
	const pagination:Number = parseInt(env.NEXT_PUBLIC_PAGINATION);
	let nextPage:Number = page + 1;
	let previousPage:Number = page - 1;

	const offset:Number = pagination * page;
	const allPokemon = await getAllPokemon(`?offset=${offset}&limit=${pagination}`);
	const pageLimit = 16;

	return (
		<>
			<ol className="flex justify-between mb-lg">
				<li>
					{page !== 0 && (
						<Button style="primary" link={`${previousPage}`} title='Previous' />
					)}
				</li>

				<li>
					{pageLimit !== nextPage && (
						<Button style="primary" link={`${nextPage}`} title='Next' />
					)}
				</li>
			</ol>

			<div className={`grid sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-xs mb-md`}>
				{allPokemon.results.map((pokemon) => (
					<PokemonItem key={pokemon.name} pokemon={pokemon} />
				))}
			</div>

			<ol className="flex justify-between mb-[400px]">
				<li>
					{page !== 0 && (
						<Button style="primary" link={`${previousPage}`} title='Previous' />
					)}
				</li>

				<li>
					{pageLimit !== nextPage && (
						<Button style="primary" link={`${nextPage}`} title='Next' />
					)}
				</li>
			</ol>
		</>
	);
}
