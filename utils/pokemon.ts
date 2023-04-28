import {Pokemon} from "@/services/api";

export const extractPokemonId = (pokemon: Pokemon) => pokemon.url.split('/').at(-2) as string;

export const getPokemonImageById = (pokemonId: string) => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;