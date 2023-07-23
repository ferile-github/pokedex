import PokemonItem from '@/components/pokemon/PokemonItem';
import { getAllPokemon } from '@/fetch/fetch-pokemon';
import { env } from 'process';
import Button from '@/components/ui/button';

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
					<Button style="primary" link={`1`} title='Next' />
				</li>
			</ol>

			<div className={`grid sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-xs mb-md`}>
				{allPokemon.results.map((pokemon) => (
					<PokemonItem key={pokemon.name} pokemon={pokemon} />
				))}
			</div>

			<ol className="flex justify-between  mb-[400px]">
				<li></li>
				<li>
					<Button style="primary" link={`1`} title='Next' />
				</li>
			</ol>
		</>
	);
}
