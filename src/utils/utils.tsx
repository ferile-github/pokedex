export function Capitalise(word) {
	word = word.replace('-', ' ');
	return word.charAt(0).toUpperCase() + word.slice(1);
}

export function getPokemonID(word) {
	const myArray = word.split("/");
	return myArray[myArray.length - 2]
}
