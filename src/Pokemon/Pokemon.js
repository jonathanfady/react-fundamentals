import { useLayoutEffect, useState } from "react";
import { toTitle } from "../Cases";

export default function Pokemon({ pokemon }) {
    const [pokemonInfo, setPokemonInfo] = useState({})
    const [pokemonAbilities, setPokemonAbilities] = useState([])
    // const [pokemonMoves, setPokemonMoves] = useState([])
    const [pokemonSprites, setPokemonSprites] = useState({})
    const [pokemonTypes, setPokemonTypes] = useState([])
    const [loading, setLoading] = useState(true);

    useLayoutEffect(() => {
        if ((pokemon == null) || (pokemon.url == null)) return;

        setLoading(true)

        let controller = new AbortController();

        fetch(pokemon.url, {
            signal: controller.signal
        })
            .then(res => res.json())
            .then(obj => {
                setPokemonInfo(obj)
                setPokemonAbilities(obj.abilities)
                // setPokemonMoves(obj.moves)
                setPokemonSprites(obj.sprites)
                setPokemonTypes(obj.types)
                setLoading(false)
            })

        return () => (controller.abort());
    }, [pokemon])

    return (
        <div className="list-group-item list-group-item-warning">
            {
                loading ?
                    <>
                        <span className="spinner-border" role="status"></span>
                        <span className="ms-2">Loading...</span>
                    </>
                    :
                    <>
                        <img className="float-start" src={pokemonSprites.front_default} alt="" />
                        <img className="float-start" src={pokemonSprites.back_default} alt="" />
                        <div className="d-md-flex justify-content-between">
                            <h5>{toTitle(pokemon.name)}</h5>
                            <a href={pokemon.url} target="_blank" rel="noreferrer">{pokemon.url}</a>
                        </div>
                        <div className="d-md-flex justify-content-between">
                            <div className="d-md-flex flex-column">
                                <div>Type{pokemonTypes.length > 1 ? "s" : ""} : {pokemonTypes.map((item) => item.type.name).join(", ")}</div>
                                <div>Abilit{pokemonAbilities.length > 1 ? "ies" : "y"} : {pokemonAbilities.map((item) => item.ability.name).join(", ")}</div>
                            </div>
                            <div className="d-md-flex flex-column">
                                <div>Height : {pokemonInfo.height}</div>
                                <div>Weight : {pokemonInfo.weight}</div>
                            </div>
                        </div>
                        {/* <div className="col-8 text-truncate">Moves : {pokemonMoves.map((item) => item.move.name).join(", ")}</div> */}
                    </>
            }
        </div>
    )
}