import {MoviesList} from "@/components/MoviesList";
import {getLocalMovies} from "@/store/moviesStore/moviesStore";
import styles from "./favourites.module.scss"

function Favourites() {

    let {FAVOURITES: movies} = getLocalMovies(["FAVOURITES"]);
    movies = movies ? Object.values(movies) : null;

    return (
        <div className={styles.favourites__container}>
            <MoviesList movies={movies}/>
        </div>
    );
}

export default Favourites;