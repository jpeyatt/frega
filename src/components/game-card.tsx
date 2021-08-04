import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { Game } from "../models/game.model";
import { PlatformIcon } from "./platform-icon";

interface IGameProps {
    game: Game | null;
};

const formatShortDescription = (description: string, limit: number): string => {
    if (description.length > limit) {
        return description.slice(0, limit) + ' ...';
    } else {
        return description;
    }
}

const GameCard: FunctionComponent<IGameProps> = ({ game }) => {

    return (
        <Link to={`/game/${game?.id}`} className="
            w-80 flex-3 mx-6 my-6 
            rounded text-white bg-theme-dark2 
            shadow-lg inline-block transform 
            hover:scale-105 transition-transform
        ">
            
            <div className="flex flex-col py-4 px-4 bg-theme-dark2 h-full w-full absolute opacity-0 hover:opacity-100 transition-opacity">
                <div className="text-theme-orange text-center text-lg mt-6 mb-2 z-10">{game?.title}</div>
                <div className="text-white text-center text-sm z-10">{formatShortDescription(game?.short_description || '', 165)}</div>
                <div className="bg-theme-dark h-full w-full absolute top-0 left-0 z-0 bg-opacity-75"></div>
            </div>
            
            <img src={game?.thumbnail} alt="" className="rounded" />
            <div className="absolute top-2 bg-opacity-90 right-2 bg-theme-dark2 rounded">
                <PlatformIcon platform={game?.platform ? game.platform : ''} />
            </div>
        </Link>
    );
};

export default GameCard;