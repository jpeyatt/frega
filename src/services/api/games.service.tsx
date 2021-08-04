import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Game } from '../../models/game.model';

const RAPIDAPI_KEY = process.env.REACT_APP_RAPIDAPI_KEY;
const RAPIDAPI_HOST = process.env.REACT_APP_RAPIDAPI_HOST;

const getGames = async (): Promise<Game[]> => {
  const options: AxiosRequestConfig = _createReqConfig('games');
  const resp: AxiosResponse = await axios.request(options);
  const games: Game[] = resp.data;
  return games;
};

const getGameDetails = async (id: string): Promise<Game> => {
  const options: AxiosRequestConfig = _createReqConfig('game', { id });
  const resp: AxiosResponse = await axios.request(options);
  const game: Game = resp.data;
  return game;
};

const _createReqConfig = (uri: string, params?: {}): AxiosRequestConfig => {
  const options: AxiosRequestConfig = {
    method: 'GET',
    url: `https://free-to-play-games-database.p.rapidapi.com/api/${uri}`,
    params,
    headers: {
      'x-rapidapi-key': RAPIDAPI_KEY,
      'x-rapidapi-host': RAPIDAPI_HOST
    }
  };
  return options;
}

export { getGames, getGameDetails };

// https://www.freetogame.com/api-doc