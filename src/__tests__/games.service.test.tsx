import MockGames from '../mocks/games.mock';
import { sortGames, limitGames, getFilteredGames } from '../services/utilities/games.service';
import { Game } from '../models/game.model';
import { FilterOptions } from '../models/filter-options.model';

let games: Game[];

beforeEach(() => {
    games = MockGames;
})

describe('sortGames', () => {

    test('orders by release_date properly', () => {
        const gamesOrderedByDate = sortGames(games, 'release_date').splice(0,10);
        const releaseDates = gamesOrderedByDate.map(game => game.release_date);
        expect(new Date(releaseDates[0]).getTime()).toBeGreaterThan(new Date(releaseDates[1]).getTime());
        expect(new Date(releaseDates[1]).getTime()).toBeGreaterThan(new Date(releaseDates[gamesOrderedByDate.length-1]).getTime());
    });
    
    test('orders by title properly', () => {
        const gamesOrderedByTitle= sortGames(games, 'title').splice(0,10);
        const titles = gamesOrderedByTitle.map(game => game.title);
        expect(_isSorted(titles[0], titles[1])).toEqual(true);
        expect(_isSorted(titles[1], titles[titles.length-1])).toEqual(true);
    });

});

describe('limitGames', () => {

    test('limitGames returns correct size game array', () => {
        expect(limitGames(games, 10).length).toBe(10);
        expect(limitGames(games, 1).length).toBe(1);
        expect(limitGames(games, 8).length).toBe(8);
    });

});

describe('getFilteredGames', () => {

    test('should return only Shooter games when expected', () => {
        const filterOptions: FilterOptions = {
            genre: 'Shooter'
        };
        const shooterGames = getFilteredGames(games, filterOptions);
        const genres = new Set();
        shooterGames.map(game => genres.add(game.genre));
        expect(genres.has('Shooter')).toBeTruthy();
        expect(genres.size).toBe(1);
    });
    
    test('should return only MMORPG games when expected', () => {
        const filterOptions: FilterOptions = {
            genre: 'MMORPG'
        };
        const shooterGames = getFilteredGames(games, filterOptions);
        const genres = new Set();
        shooterGames.map(game => genres.add(game.genre));
        expect(genres.has('MMORPG')).toBeTruthy();
        expect(genres.size).toBe(1);
    });

});

const _isSorted = (wordA: string, wordB: string): boolean => {
    return wordA.toLowerCase() < wordB.toLowerCase();
};