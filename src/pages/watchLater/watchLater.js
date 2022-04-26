import {MoviesList} from "@/components/MoviesList";
import {getLocalMovies} from "@/store/moviesStore/moviesStore";
import styles from "./watchLater.module.scss"

function WatchLater() {

    let {WATCH_LATER: movies} = getLocalMovies(["WATCH_LATER"]);
    movies = movies ? Object.values(movies) : null;

    return (
        <div className={styles.watchLater__container}>
            <MoviesList movies={movies}/>
        </div>
    );
}

export default WatchLater;