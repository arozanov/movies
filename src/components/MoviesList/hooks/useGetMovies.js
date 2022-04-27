import {useCallback, useEffect, useReducer} from "react";
import initialState from "../store/moviesStore";
import {reducer, setError, setLoading, setMovies} from "../store/reducer";
import getMovies from "@/api/services/moviesFetcher";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {debounce} from "@/components/MoviesList/utils/debouncer";

function useGetMovies(input) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const getDebouncedMovies = useCallback(debounce(getMovies, 600), [input]);

    useEffect(() => {
        if (!input) {
            dispatch(setLoading(false));
            return;
        }

        dispatch(setLoading(true));

        const cancelQuery = new AbortController();

        getDebouncedMovies(input, cancelQuery.signal)
            .then((response) => {
                if (!!response.length) {
                    dispatch(setMovies(response))
                    dispatch(setLoading(false))
                }
            })
            .catch((error) => {
                if (error.message !== 'canceled') {
                    dispatch(setError())
                    toast('🦄 Some error is happened... :(', {
                        position: "bottom-center",
                        autoClose: 2000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
            })

        return () => {
            cancelQuery.abort();
        };
    }, [input, getDebouncedMovies])

    return state;
}

export {useGetMovies};