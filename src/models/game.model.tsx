export interface Game {
    id: number;
    title: string;
    developer: string;
    game_url: string;
    genre: string;
    platform: string;
    publisher: string;
    release_date: string;
    short_description: string;
    thumbnail: string;
    freetogame_profile_url: string;
    status?: string;
    description?: string;
    minimum_system_requirements?: MinSystemRequirements;
    screenshots?: Screenshot[]
}

interface MinSystemRequirements {
    os: string;
    processor: string;
    memory: string;
    graphics: string;
    storage: string;
}

interface Screenshot {
    id: number;
    image: string;
}

