const REST_URL = process.env.NEXT_PUBLIC_API;

export async function fetchFromRest(query) {
	try {
		const res = await fetch(REST_URL + query);
		const json = await res.json();
		return json;
	} catch(error) {
		throw new Error(`Failed to fetch API : ${error}`);
	}
}
