import {Movie} from "@/components/Movie";
import styles from "./MoviesList.module.scss"

function MoviesList({movies}) {

    return (
        <div>
            {movies ? movies.map((movie) => {
                return (
                    <Movie key={movie.id} movie={movie}/>
                )
            }) : <div className={styles.moviesList__container}/>}
        </div>
    )
}

export {MoviesList};