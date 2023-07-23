'use client';

import { Capitalise, getPokemonID } from '@/utils/utils';
import Image from 'next/image';
import styles from '@/styles/modules/Pokemon.module.scss';
import { useEffect, useState } from 'react';
import { getPokemon } from '@/fetch/fetch-pokemon';
import PokemonData from './PokemonData';
import { PokemonDataModel, PokemonModel } from '@/interfaces/pokemon';

export default function PokemonItem({ pokemon } : { pokemon : PokemonModel}) {
	const [pokemonData, setData] = useState<PokemonDataModel>();

	useEffect(() => {
		const fetchData = async () => {
			const data = await getPokemon(pokemon.name);
			setData(data);
		};
		fetchData();
	}, [pokemon.name]);


	return (
		<>
			{pokemonData && (
				<div className={`${styles.pokemon__item}`} key={pokemon.name}>
					<button className={`block w-full`}>
						<Image
							className={`mb-sm ${styles.portrait}`}
							alt={pokemon.name}
							height={400}
							width={400}
							src={pokemonData.sprites.other.dream_world.front_default}
							priority={true}
						/>
					</button>

					<h2 className="h5 mb-0 text-center">
						#0{getPokemonID(pokemon.url)} - {Capitalise(pokemon.name)}
					</h2>

					<PokemonData pokemonID={`#0${getPokemonID(pokemon.url)}`} pokemonData={pokemonData} />
				</div>
			)}
		</>
	);
}
