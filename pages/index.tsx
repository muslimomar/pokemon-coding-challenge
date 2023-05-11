import {useState, useEffect} from 'react';
import {useRouter} from 'next/router';
import {fetchPokemons, Pokemon} from '../services/api';
import PokemonCard from "@/components/PokemonCard";

const PokemonList = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [page, setPage] = useState(1);
    const router = useRouter();

    useEffect(() => {
        const fetch = async () => {
            const response = await fetchPokemons(page);
            setPokemons(response.results);
        };

        fetch();
    }, [page]);

    const handlePrevClick = () => {
        setPage(page - 1);
    };

    const handleNextClick = () => {
        setPage(page + 1);
    };

    const handlePokemonClick = (id: string) => {
        router.push(`/pokemons/${id}`);
    };

    const pokemonCards = pokemons.map((pokemon) => {
        return <PokemonCard key={pokemon.url} pokemon={pokemon} onClick={handlePokemonClick}/>;
    });

    return (
        <div className="flex flex-wrap -mx-4">
            {pokemonCards}
            <div className="w-full flex justify-center mt-8">
                <button
                    className={`bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg ${page === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    onClick={handlePrevClick}
                    disabled={page === 1}>Previous
                </button>
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg ml-4"
                    onClick={handleNextClick}
                    disabled={pokemons.length === 0}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default PokemonList;
