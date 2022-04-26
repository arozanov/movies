import {Input} from "@/components/Input";
import {MoviesList} from "@/components/MoviesList";
import {useState} from "react";
import {useGetMovies} from "@/components/MoviesList/hooks/useGetMovies";
import {Loader} from "@/components/Loader";
import styles from "./home.module.scss"

function Home() {
    const [input, setInput] = useState('')
    const {moviesList, isLoading, isError} = useGetMovies(input);

    function handleInput(event) {
        setInput(event.target.value);
    }

    if (isError) {
        return (
            <div className={styles.error__container}>Error</div>
        )
    }

    return (
        <div className={styles.movies}>
            <div className={styles.movies__container}>
                <div className={styles.movies__search}>
                    <Input
                        type="text"
                        placeholder="Find Movies"
                        autoFocus=""
                        autoCapitalize="off"
                        autoCorrect="off"
                        autoComplete="off"
                        value={input}
                        loading="lazy"
                        onChange={handleInput}
                    />
                </div>
                {!isLoading && <MoviesList movies={moviesList}/>}
            </div>
            <Loader loading={true}/>

        </div>
    );
}

export default Home;