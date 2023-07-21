import { Suspense } from "react";
import Loading from "@/app/loading";
import { getPokemon } from "@/lib/fetch-pokemon";
import PokemonSingle from "@/components/pokemon/PokemonSingle";

export default async function Page({params}) {
	const pokemon = await getPokemon(params.name);

	return (
		<Suspense fallback={ <Loading /> }>
			<PokemonSingle pokemon={pokemon} />
		</Suspense>
	);
}
