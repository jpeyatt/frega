
import React, { createContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import GameList from './components/game-list';
import GameDetails from './components/game-details';
import Spinner from './components/spinner';
import { Game } from './models/game.model';
import { getGames } from './services/api/games.service';
import Header from './components/header';
import { getGenres } from './services/utilities/games-data.service';
import Footer from './components/footer';

const GamesContext = createContext<Game[]>([]);

function App() {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [genres, setGenres] = useState<string[]>([]);

  useEffect(() => {
    getGames().then(resp => {
      setGames(resp.sort((a, b) => {
        if (a.title < b.title) return -1;
        else if (a.title > b.title) return 1;
        return 0;
      }));
      setGenres(getGenres(resp));
      setLoading(false);
    });
  }, []);

  return (
    <div className="bg-header bg-contain bg-no-repeat bg-theme-dark">
      <div className="min-h-screen py-8 text-theme-light">

        <Header />

        {
          loading ?
            <Spinner /> :
            <GamesContext.Provider value={games}>
              <Router>
                <Switch>

                  <Route path="/game/:gameId">
                    <GameDetails />
                  </Route>

                  {/* Default Home Render */}
                  <Route path="/">
                  <div className="w-full flex justify-center text-2xl mb-12">
                    <h2>Find a Game to play for FREE!</h2>
                  </div>
                    {
                      (genres.map(genre =>
                        <GameList 
                          key={genre} 
                          title={`Latest ${genre}`} 
                          sortBy="release_date" 
                          filterOptions={{ genre, limit: 8 }} 
                        />
                      ))
                    }
                  </Route>

                </Switch>
              </Router>
            </GamesContext.Provider>
        }

      </div>
      <Footer />

    </div>
    
  );
}

export default App;
export { GamesContext };
