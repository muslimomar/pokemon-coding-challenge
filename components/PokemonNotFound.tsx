import React from 'react';

function PokemonNotFound() {
    return (
        <div className="container mx-auto px-4 py-8 flex justify-center items-center h-screen">
            <div className="text-center">
                <h1 className="text-3xl font-bold mb-4">Pokemon not found</h1>
                <p className="text-lg">Sorry, the Pokemon you requested could not be found.</p>
            </div>
        </div>
    );
}

export default PokemonNotFound;