import {fetcher} from "@/api/interceptors/axios";

function getMovies(query, signal = null) {
    return fetcher.get(process.env.REACT_APP_MOVIES_HOST_URL, {
            params: {
                query,
            },
            signal,
        }
    )
        .then(({data}) => data.results);
}

export default getMovies;