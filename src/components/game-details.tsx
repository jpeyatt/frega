import { FunctionComponent, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Game } from "../models/game.model";
import { getGameDetails } from "../services/api/games.service";
import Spinner from "./spinner";

interface IGameDetailsParams {
    gameId: string;
}

const GameDetails: FunctionComponent = () => {
    let { gameId } = useParams<IGameDetailsParams>();
    const [game, setGame] = useState<Game>();
    const [loading, setLoading] = useState<boolean>(true);
    const history = useHistory();

    const onGoBackClickHandler = (): void => {
        history.goBack();
    }

    useEffect(() => {
        getGameDetails(gameId)
            .then(game => {
                setGame(game);
                setLoading(false);
        });
    }, [gameId]);

    return loading ? 
    (
        <Spinner />
    ) :
    (
        <div className="flex my-8">
            <div className="rounded-md max-w-5xl relative m-auto inline-flex items-center flex-col bg-theme-dark2 py-8 px-8">

                <button onClick={onGoBackClickHandler} className="absolute px-4 py-2 rounded bg-opacity-80 hover:bg-opacity-95 transition-opacity bg-theme-orange text-theme-light left-4 top-4">Go Back</button>
                <div className="text-3xl my-4 text-theme-orange">{game?.title}</div>

                <div className="my-4 flex justify-center items-center w-full flex-col md:flex-row">
                    <div>
                        <a href={game?.game_url} rel="noreferrer" target="_blank">
                            <img className="rounded opacity-90 hover:shadow-lg hover:opacity-100 transition-all" src={game?.thumbnail} alt="" />
                        </a>
                    </div>
                    <div className="mx-0 my-4 md:my-0 md:mx-8">
                        <div className="my-1"><span className="text-theme-orange">Publisher:</span> {game?.publisher}</div>
                        <div className="my-1"><span className="text-theme-orange">Developer:</span> {game?.developer}</div>
                        <div className="my-1"><span className="text-theme-orange">Genre:</span> {game?.genre}</div>
                        <div className="my-1"><span className="text-theme-orange">Released:</span> {game?.release_date}</div>
                        <div className="my-1"><span className="text-theme-orange">Platform(s):</span> {game?.platform}</div>
                    </div>
                </div>

                <div className="py-4 px-4 text-center">{game?.description}</div>

                <div className="flex flex-wrap justify-evenly items-center my-4">
                    {
                        game?.screenshots ? game.screenshots.map(screenshot =>
                            screenshot ?
                                <div key={screenshot.id} className="my-2">
                                    <a href={screenshot.image} rel="noreferrer" target="_blank">
                                        <img className="rounded max-w-md opacity-90 hover:shadow-lg hover:opacity-100 transition-all" src={screenshot.image} alt="" />
                                    </a>
                                </div>
                                : <></>
                        ) : null
                    }
                </div>

            </div>
        </div>
    )
};

export default GameDetails;