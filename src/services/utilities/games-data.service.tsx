import { Game } from "../../models/game.model"

const getTitles = (games: Game[]): Map<number, string> => {
    const titles = new Map<number, string>();
    games.map(game => titles.set(game.id, game.title.trim()));
    return titles;
}

const getGenres = (games: Game[]): string[] => {
    const genres = new Set<string>();
    games.map(game => genres.add(game.genre.trim()));
    return Array.from(genres);
}

const getPlatforms = (games: Game[]): Set<string> => {
    const platforms = new Set<string>();
    games.map(game => platforms.add(game.platform.trim()));
    return platforms;
}

const getPublishers = (games: Game[]): Set<string> => {
    const publishers = new Set<string>();
    games.map(game => publishers.add(game.publisher.trim()));
    return publishers;
}

export { getTitles, getGenres, getPlatforms, getPublishers };