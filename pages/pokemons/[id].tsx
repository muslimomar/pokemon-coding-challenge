import {GetServerSideProps} from 'next';
import {fetchPokemonDetails, PokemonDetails} from '@/services/api';
import PokemonNotFound from "@/components/PokemonNotFound";
import Image from "next/image";

const PokemonDetails = ({pokemon}: { pokemon?: PokemonDetails }) => {

    if (!pokemon) return <PokemonNotFound />;

    return (
        <div className="p-4 bg-gray-100">
            <h1 className="text-3xl font-bold mb-4">{pokemon.name}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex justify-center items-center">
                    <Image src={pokemon.sprites.front_default} alt={pokemon.name} className="w-64 h-64 object-contain" width={200} height={200}/>
                </div>
                <div className="flex flex-col">
                    <div className="mb-4">
                        <h2 className="text-xl font-bold mb-2">Species:</h2>
                        <p>{pokemon.species.name}</p>
                    </div>
                    <div className="mb-4">
                        <h2 className="text-xl font-bold mb-2">Stats:</h2>
                        <ul>
                            {pokemon.stats.map((stat) => (
                                <li key={stat.stat.name} className="flex justify-between items-center mb-2">
                                    <p>{stat.stat.name}</p>
                                    <p>{stat.base_stat}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="mb-4">
                        <h2 className="text-xl font-bold mb-2">Types:</h2>
                        <ul>
                            {pokemon.types.map((type) => (
                                <li key={type.slot} className="mb-2">
                                    <p className="bg-blue-500 text-white py-1 px-2 rounded-lg">{type.type.name}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="mb-4">
                        <h2 className="text-xl font-bold mb-2">Weight:</h2>
                        <p>{pokemon.weight} lbs</p>
                    </div>
                    <div className="mb-4">
                        <h2 className="text-xl font-bold mb-2">Moves:</h2>
                        <ul>
                            {pokemon.moves.slice(0, 5).map((move) => (
                                <li key={move.move.name} className="mb-2">
                                    <p>{move.move.name}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps<{pokemon?: PokemonDetails}> = async (context) => {
    const id = context.query.id as string;

    try {
        const pokemon = await fetchPokemonDetails(id);
        return {props: {pokemon}};
    } catch (error) {
        console.error(error);
        return {props: {}};
    }
};

export default PokemonDetails;
