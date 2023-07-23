'use client';
import { Capitalise } from '@/utils/utils';
import styles from '@/styles/modules/Pokemon.module.scss';
import Image from 'next/image';
import { PokemonDataModel } from '@/interfaces/pokemon';

export default function PokemonData({ pokemonID, pokemonData } : {pokemonID : string, pokemonData : PokemonDataModel}) {
  return (
    <div className={`${styles.pokemon__data} shadow-md`}>
      <Image
        className={`mb-sm ${styles.portrait_large}`}
        alt={pokemonData.name}
        height={400}
        width={400}
        src={pokemonData.sprites.other.dream_world.front_default}
        priority={true}
      />

      <h2 className="h5 mb-0 text-center">
        {pokemonID} - {Capitalise(pokemonData.name)}
      </h2>

      <ol className="flex gap-2 justify-center">
        {pokemonData.types.map((type, index) => (
          <li key={index} className={`pokemon__type type-${type.type.name}`}>
            {Capitalise(type.type.name)}
          </li>
        ))}
      </ol>

      <p className="mb-0 text-center">Abilities</p>
      <ol className="flex gap-1 flex-wrap justify-center items-center">
        {pokemonData.abilities.map((ability, index) => (
          <li key={index} className={`pokemon__ability`}>
            {Capitalise(ability.ability.name)}
          </li>
        ))}
      </ol>

      <p className="mb-0 text-center">Stats</p>
      <ol className="flex flex-wrap gap-1 justify-center items-center">
        <li className={`pokemon__stat`}>Weight: {pokemonData.weight / 10}kgs</li>
        <li className={`pokemon__stat`}>Height: {pokemonData.height / 10} meters</li>

        {pokemonData.stats.map((stat, index) => (
          <li key={index} className={`pokemon__stat`}>
            {Capitalise(stat.stat.name)}: {stat.base_stat}
          </li>
        ))}
      </ol>
    </div>
  );
}
