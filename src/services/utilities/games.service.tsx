import { Game } from "../../models/game.model";
import { FilterOptions } from "../../models/filter-options.model";

const getFilteredGames = (games: Game[], filterOptions: FilterOptions): Game[] => {
    let filteredGames = [...games]
        .filter((game) => {
            return (filterOptions.genre ? filterOptions.genre === game.genre : true) && 
            (filterOptions.platform ? filterOptions.platform === game.platform : true) && 
            (filterOptions.publisher ? filterOptions.publisher === game.publisher : true)
        });
    
    if (filterOptions.limit) filteredGames = limitGames(filteredGames, filterOptions.limit);

    return filteredGames;
};

const sortGames = (games: Game[], sortBy: string): Game[] => {
    let sortedGames = [...games];
    switch (sortBy) {
        case 'release_date':
            sortedGames.sort((a, b) => new Date(b.release_date).getTime() - new Date(a.release_date).getTime());
            break;
        case 'title':
            sortedGames.sort((a, b) => {
                if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
                else if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
                else return 0;
            });
            break;
        default:
            break;
    }
    return sortedGames;
};

const limitGames = (games: Game[], max: number): Game[] => {
   return games.slice(0, max); // returns shallow copy
};

export { getFilteredGames,  sortGames, limitGames};