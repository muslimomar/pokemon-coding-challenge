import React from 'react';
import Image from 'next/image';
import {Pokemon} from "@/services/api";
import {extractPokemonId, getPokemonImageById} from "@/utils/pokemon";

interface Props {
    pokemon: Pokemon;
    onClick: (id: string) => void;
}

function PokemonCard({pokemon, onClick}: Props) {
    const pokemonId = extractPokemonId(pokemon);

    return (
        <div key={pokemon.name} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-8">
            <div
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => onClick(pokemonId)}>
                <Image
                    alt={pokemon.name}
                    src={getPokemonImageById(pokemonId)}
                    className="w-full h-48 object-contain"
                    width={200}
                    height={200}
                />
                <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2 capitalize">{pokemon.name}</h2>
                </div>
            </div>
        </div>
    );
}

export default PokemonCard;