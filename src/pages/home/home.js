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
            <>
                <div className={styles.movies}>
                    <div className={styles.movies__container}>
                        <Input value={input} onChange={handleInput}/>
                    </div>
                </div>
                <div className={styles.error__container}>Error</div>
            </>
        );
    }

    return (
        <div className={styles.movies}>
            <div className={styles.movies__container}>
                <Input value={input} onChange={handleInput}/>
                {isLoading ? <Loader/> : <MoviesList movies={moviesList}/>}
            </div>
        </div>
    );
}

export default Home;