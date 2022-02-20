export async function get({ params }) {
	// getting info from request
	const id = page.params.id;
	// requesting
	const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
	const res = await fetch(url);
    const pokeman = await res.json();
    return {
        status: 200,
        body: pokeman
    }
}
