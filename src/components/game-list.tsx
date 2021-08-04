import { FunctionComponent, useContext, useEffect, useState } from "react";
import { GamesContext } from "../App";
import { FilterOptions } from "../models/filter-options.model";
import GameCard from "./game-card";
import { getFilteredGames, sortGames } from '../services/utilities/games.service'
import { Game } from "../models/game.model";


interface IGamesProps {
    filterOptions: FilterOptions;
    title: string;
    sortBy: string;
}

const GameList: FunctionComponent<IGamesProps> = ({ filterOptions, title, sortBy }) => {
    const gamesContext = useContext(GamesContext);
    const [games, setGames] = useState<Game[]>([]);

    useEffect(() => {
        let filteredGames = getFilteredGames(gamesContext, filterOptions);
        if (sortBy && sortBy !== '') filteredGames = sortGames(filteredGames, sortBy);
        setGames(filteredGames)
    }, [filterOptions, sortBy, gamesContext]);

    return (
        <section className="flex flex-col">
            <h1 className="text-center my-8 text-4xl text-theme-orange">{title}</h1>
            <div className="flex px-8 flex-wrap items-center justify-evenly">
                {
                    games.map((game) => (
                        <GameCard key={game.id} game={game} />
                    ))
                }
            </div>
        </section>
    );
}

export default GameList;