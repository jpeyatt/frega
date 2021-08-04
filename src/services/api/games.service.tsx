import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Game } from '../../models/game.model';


const getGames = async (): Promise<Game[]> => {
  const options: AxiosRequestConfig = {
    method: 'GET',
    url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
    headers: {
      'x-rapidapi-key': 'c68910f192msh3238d4e085be35fp146c36jsn5491590686e2',
      'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };
  const resp: AxiosResponse = await axios.request(options);
  const games: Game[] = resp.data;
  return games;
};

const getGameDetails = async (id: string): Promise<Game> => {

  const options: AxiosRequestConfig = {
    method: 'GET',
    url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
    params: { id },
    headers: {
      'x-rapidapi-key': 'c68910f192msh3238d4e085be35fp146c36jsn5491590686e2',
      'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };

  const resp: AxiosResponse = await axios.request(options);
  const game: Game = resp.data;
  return game;
};

export { getGames, getGameDetails };

// https://www.freetogame.com/api-doc