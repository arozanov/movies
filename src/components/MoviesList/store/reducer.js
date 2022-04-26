import initialState from "./moviesStore";

const MOVIES_SET_SUCCESS = 'MOVIES_SET_SUCCESS';
const MOVIES_SET_ERROR = 'MOVIES_SET_ERROR';
const MOVIES_SET_LOADING = 'MOVIES_SET_LOADING';
const RESET_STATE = 'RESET_STATE';


export function setMovies(movies) {
    return {
        type: MOVIES_SET_SUCCESS,
        payload: {
            moviesList: movies,
            isLoading: false,
            isError: false,
        },
    };
}

export function setError() {
    return {
        type: MOVIES_SET_ERROR,
        payload: {
            isLoading: false,
            isError: true,
        }
    }
}

export function setLoading(loading) {
    return {
        type: MOVIES_SET_LOADING,
        payload: {
            isLoading: loading,
            isError: false,
        }

    }
}

export function resetState() {
    return {
        type: RESET_STATE,
        payload: {
            ...initialState
        }
    }
}

export const reducer = (state, action) => {
    switch (action.type) {
        case MOVIES_SET_SUCCESS:
            return {
                ...state,
                moviesList: action.payload.moviesList,
                isLoading: action.payload.isLoading,
                isError: action.payload.isError,
            };
        case MOVIES_SET_ERROR:
            return {
                ...state,
                isLoading: action.payload.isLoading,
                isError: action.payload.isError,
            };
        case MOVIES_SET_LOADING:
            return {
                ...state,
                isLoading: action.payload.isLoading,
                isError: action.payload.isError,
            };
        case RESET_STATE:
            return {
                ...action.payload
            };
        default:
            return state;
    }
}