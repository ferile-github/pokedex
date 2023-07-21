import PageTitle from '@/components/global/PageTitle';
import PokemonItem from '@/components/pokemon/PokemonItem';
import {getAllPokemon} from '../../lib/fetch-pokemon'

export const metadata = {
  title: 'Pokedex',
  description: 'The Pokedex',
}

export default async function Projects() {
	const allPokemon = await getAllPokemon('?offset=0&limit=151');

	return (

		<div className={`grid sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-xs mb-[400px]`}>
			{allPokemon.results.map( (pokemon) => (
				<PokemonItem key={pokemon.name} pokemon={pokemon} />
			))}
		</div>

	);
}
