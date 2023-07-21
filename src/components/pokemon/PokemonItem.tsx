'use client';

import { Capitalise, getPokemonID } from '@/utils/utils';
import Image from 'next/image';
import styles from '@/styles/modules/Pokemon.module.scss';
import { useState } from 'react';
import { getPokemon } from '@/lib/fetch-pokemon';
import { env } from 'process';
import PokemonData from './PokemonData';

export default function PokemonItem({ pokemon }) {
  const [pokemonData, setData] = useState(null);
  const imageUrl = env.NEXT_PUBLIC_SPRITE_URL;

  function portraitURL(url) {
    return `${imageUrl}/other/dream-world/${getPokemonID(url)}.svg`;
  }

  async function fetchData() {
    const data = await getPokemon(pokemon.name);
    setData(data);
  }

  return (
    <div className={`${styles.pokemon__item} relative`} key={pokemon.name}>
      <button onMouseOver={fetchData} className="block w-full">
        <Image
          className={`mb-sm ${styles.portrait}`}
          alt={pokemon.name}
          height={400}
          width={400}
          src={portraitURL(pokemon.url)}
          priority={true}
        />
      </button>

      <h2 className="h5 mb-0 text-center">
				#0{getPokemonID(pokemon.url)} - {Capitalise(pokemon.name)}
			</h2>

      {pokemonData && <PokemonData pokemonID={`#0${getPokemonID(pokemon.url)}`} pokemonData={pokemonData} />}
    </div>
  );
}
