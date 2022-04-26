import {fetcher} from "@/api/interceptors/axios";
import {MOVIES_HOST_URL} from "@/api/env/variables";

function getMovies(query, signal = null) {
    return fetcher.get(MOVIES_HOST_URL, {
            params: {
                query,
            },
            signal,
        }
    )
        .then(({data}) => data.results);
}

export default getMovies;