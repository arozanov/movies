import initialState from "../moviesStore";
import {reducer, resetState, setError, setLoading, setMovies} from "../reducer";

const movies = [
    {
        "adult": false,
        "backdrop_path": "/2I90eTdWu1yQPXtvuMxGW4kgswP.jpg",
        "genre_ids": [
            878,
            10749,
            16
        ],
        "id": 604605,
        "original_language": "ja",
        "original_title": "HELLO WORLD",
        "overview": "Year 2027, The city of Kyoto has undergone tremendous advancement. Within the city lives Naomi Katagaki, an introvert and Ruri Ichigyō, a girl with a cold personality. Both share a love for reading books. Despite having similar interests, Naomi is afraid to approach Ruri due to her unfriendly nature.  One day, as Naomi goes out for a walk, a crimson aurora pierces through the sky for a brief moment. Shortly after, he sees a three-legged crow and a mysterious man who reveals himself to be Naomi from 10 years in the future, explaining that he has come to change a tragic event that happens to Ruri shortly after they start dating. Naomi follows his future self's instructions and starts getting closer to Ruri, determined to save her.  With the help of his future self, Naomi begins his preparations to save Ruri. Will he be able to change the future?",
        "popularity": 126.853,
        "poster_path": "/r6BWky420eJQ0KbtUTlY06ZzFwU.jpg",
        "release_date": "2019-09-20",
        "title": "Hello World",
        "video": false,
        "vote_average": 7.3,
        "vote_count": 180
    },
    {
        "adult": false,
        "backdrop_path": "/rvsPkUYhWZkAKMb2fnWHw5pNAjZ.jpg",
        "genre_ids": [
            35,
            10751,
            10749
        ],
        "id": 14030,
        "original_language": "en",
        "original_title": "Hello, Dolly!",
        "overview": "Dolly Levi is a strong-willed matchmaker who travels to Yonkers, New York in order to see the miserly \"well-known unmarried half-a-millionaire\" Horace Vandergelder. In doing so, she convinces his niece, his niece's intended, and Horace's two clerks to travel to New York City.",
        "popularity": 11.008,
        "poster_path": "/aPZOt9BR3gnk1RyX924ySq81S4P.jpg",
        "release_date": "1969-12-12",
        "title": "Hello, Dolly!",
        "video": false,
        "vote_average": 7,
        "vote_count": 242
    }
]

const state = {
    moviesList: [],
    isLoading: true,
    isError: false,
}

describe('working with reducer store', () => {
    test('set movies', () => {
        expect(reducer(state, setMovies(movies)).moviesList).toEqual(movies);
        expect(reducer(state, setMovies(movies)).isLoading).toBe(false);
        expect(reducer(state, setMovies(movies)).isError).toBe(false);
    });
    test('reset state', () => {
        expect(reducer(state, resetState())).toStrictEqual(initialState)
    });
    test('set error', () => {
        reducer(state, setMovies(movies));
        expect(reducer(state, setError()).isError).toBe(true);
    })
    test('set loading', () => {
        expect(reducer(state, setLoading(true)).isLoading).toBe(true);
    })
})