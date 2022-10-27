import Pokemon from "./Pokemon";

export default function PokemonList({ pokemons }) {
    return (
        <div className="list-group list-group-flush rounded">
            {
                pokemons.map((pokemon) => (
                    <Pokemon key={pokemon.name} pokemon={pokemon} />
                ))
            }
        </div>
    )
}