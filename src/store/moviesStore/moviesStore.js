export const FAVOURITES = 'FAVOURITES';
export const WATCH_LATER = 'WATCH_LATER';

export const store = {}

export function setStoreMovie(key, movie, local = null) {
    store[key] = {...store[key], [movie.id]: movie}
    if (!local) {
        window.localStorage.setItem(key, JSON.stringify(store[key]))
    }
}

export function getStoreMovie(key, movie) {
    return !!store[key]?.[movie.id];
}

export function deleteStoreMovie(key, movie) {
    delete store[key]?.[movie.id];
    window.localStorage.setItem(key, JSON.stringify(store[key]))
}

export function getLocalMovies(keys) {
    for (let i = 0; i < keys.length; i++) {
        const movies = window.localStorage.getItem(keys[i]);
        if (movies) {
            const moviesParsed = JSON.parse(movies);
            store[keys[i]] = {...store[keys[i]], ...moviesParsed}
        }
    }
    return store;
}

export function resetStore() {
    for (const key in store) {
        delete store[key];
    }
}