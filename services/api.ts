import axios from 'axios';

const API_URL = 'https://pokeapi.co/api/v2';

export interface Pokemon {
    name: string;
    url: string;
}

export interface PokemonDetails {
    name: string;
    url: string;
    sprites: {
        front_default: string;
    };
    species: {
        name: string;
    };
    stats: {
        base_stat: number;
        stat: {
            name: string;
        };
    }[];
    types: {
        slot: number;
        type: {
            name: string;
        };
    }[];
    weight: number;
    moves: {
        move: {
            name: string;
        };
    }[];
}

type FetchPokemonsResponse = {
    count: number;
    next: string | null;
    previous: string | null;
    results: Pokemon[];
}

const api = axios.create({baseURL: API_URL});

export const fetchPokemons = async (page: number) => {
    const limit = 16;
    const offset = (page - 1) * limit;
    const response = await api.get<FetchPokemonsResponse>(`/pokemon?limit=${limit}&offset=${offset}`);
    return response.data;
};

export const fetchPokemonDetails = async (id: string) => {
    const response = await api.get<PokemonDetails>(`/pokemon/${id}`);
    return response.data;
};
