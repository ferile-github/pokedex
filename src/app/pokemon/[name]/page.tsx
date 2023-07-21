import { Suspense } from "react";
import Loading from "@/app/loading";

import { Metadata } from 'next';
import { env } from "process";
import { getAllPokemonPaths, getPokemon } from "@/lib/fetch-pokemon";
import { Capitalise } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";
import PokemonSingle from "@/components/pokemon/PokemonSingle";

export default async function Page({params}) {
	const pokemon = await getPokemon(params.name);

	return (
		<Suspense fallback={ <Loading /> }>
			<PokemonSingle pokemon={pokemon} />
		</Suspense>
	);
}
