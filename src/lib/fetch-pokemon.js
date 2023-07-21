import { fetchFromRest } from './fetch';

export async function getAllPokemon(pagination) {
	const data = await fetchFromRest(pagination);
	return data;
}

export async function getPokemon(name) {
	const data = await fetchFromRest(`/${name}`);
	return data;
}
