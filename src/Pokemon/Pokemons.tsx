import { useState, useEffect } from "react";
import Pagination from "./Pagination";
import PokemonList from "./PokemonList";

export default function Pokemons() {
    const [pokemons, setPokemons] = useState([]);
    const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon/?limit=10");
    const [nextPageUrl, setNextPageUrl] = useState();
    const [previousPageUrl, setPreviousPageUrl] = useState();
    const [count, setCount] = useState(0);

    useEffect(() => {
        let controller = new AbortController();

        fetch(currentPageUrl, {
            signal: controller.signal
        })
            .then(res => res.json())
            .then(obj => {
                setNextPageUrl(obj.next);
                setPreviousPageUrl(obj.previous);
                setCount(obj.count);
                setPokemons(obj.results);
            });

        return () => (controller.abort());
    }, [currentPageUrl])

    function goToPreviousPage() {
        setCurrentPageUrl(previousPageUrl)
    }

    function goToNextPage() {
        setCurrentPageUrl(nextPageUrl)
    }

    return (
        <>
            <h5>Pokemon list from <a href="https://pokeapi.co/" target="_blank" rel="noreferrer">https://pokeapi.co/</a></h5>
            <div className="w-50">
                <Pagination
                    goToPreviousPage={previousPageUrl ? goToPreviousPage : null}
                    goToNextPage={nextPageUrl ? goToNextPage : null}
                    length={pokemons.length}
                    count={count} />
                <PokemonList pokemons={pokemons} />
            </div>
        </>
    )
}