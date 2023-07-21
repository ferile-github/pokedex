'use client';

import { Capitalise } from '@/utils/utils';
import Image from 'next/image';
import Link from 'next/link';


export default function PokemonSingle({ pokemon }) {

  return (
    <article>
      <header className="flex gap-gutter items-center mb-lg">
        <Image alt={pokemon.name} src={pokemon.sprites.other.dream_world.front_default} width={100} height={100} />
        <h1 className="mb-0">{Capitalise(pokemon.name)}</h1>
      </header>

      <Link href="/pokemon">Back</Link>

      <h2>Type</h2>

      <ol>
        {pokemon.types.map((type, index) => (
          <li key={index}>{type.type.name}</li>
        ))}
      </ol>

      <h2>Abilities</h2>
      <ol>
        {pokemon.abilities.map((ability, index) => (
          <li key={index}>{ability.ability.name}</li>
        ))}
      </ol>

    </article>
  );
}
