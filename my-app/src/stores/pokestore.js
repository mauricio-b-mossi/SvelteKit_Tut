import { writable } from 'svelte/store';

// Same as use context api react but better
export const pokemon = writable([]);

const fetchPokemon = async (num) => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${num}`;
    const res = await fetch(url)
    const data = await res.json();
    const loadedPokemon = data.results.map((data, index) => {
        return {
            name: data.name,
            id: index + 1,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
        };
    });
    // setting the context to pokemon obj loaded pokemon
    pokemon.set(loadedPokemon);
}

// Remember to call function at the end
fetchPokemon(150);

// setTimeout(() => {
//     fetchPokemon(2)
// }, 3000)