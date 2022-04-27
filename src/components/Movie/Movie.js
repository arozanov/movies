import {POSTER_URL} from "@/components/Movie/env/config";
import styles from './Movie.module.scss'
import {ReactComponent as WatchLater} from "@/assets/icons/watch_later_grey.svg"
import {ReactComponent as AddFavourites} from "@/assets/icons/add_favourites_grey.svg"
import {Icon} from "@/components/Icon";
import placeholder from "@/assets/images/dummy_220x330_ffffff_cccccc_poster-is-not-available.png"
import {deleteStoreMovie, FAVOURITES, getStoreMovie, setStoreMovie, WATCH_LATER} from "@/store/moviesStore/moviesStore";
import {useState} from "react";
import {toast} from "react-toastify";

const toastOptions = {
    position: "bottom-center",
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
}



function Movie({movie}) {

    const [watchLater, setWatchLater] = useState(getStoreMovie(WATCH_LATER, movie))
    const [favourite, setFavourite] = useState(getStoreMovie(FAVOURITES, movie))

    function handleWatchLater() {
        if (watchLater) {
            deleteStoreMovie(WATCH_LATER, movie)
            setWatchLater(false);
            toast('🦄 Removed from Watch Later list :)', toastOptions);
        } else {
            setStoreMovie(WATCH_LATER, movie)
            setWatchLater(true);
            toast('🦄 Added to Watch Later list :)', toastOptions);
        }
    }

    function handleFavourite() {
        if (favourite) {
            deleteStoreMovie(FAVOURITES, movie)
            setFavourite(false);
            toast('🦄 Removed from Favourites list :)', toastOptions);

        } else {
            setStoreMovie(FAVOURITES, movie)
            setFavourite(true);
            toast('🦄 Added to Favourites list :)', toastOptions);
        }
    }

    return (
        <div className={styles.movie}>
            <div className={styles.movie__image__wrapper}>
                <img
                    src={movie.poster_path ? `${POSTER_URL}${movie.poster_path}` : placeholder}
                    alt={movie.title}
                    className={styles.movie__image}
                    loading="lazy"
                />
            </div>
            <div className={styles.movie__description}>
                <div className={styles.header__wrapper}>
                    <div className={styles.header__icons}>
                        <Icon Icon={WatchLater} active={watchLater} handleToggle={handleWatchLater}/>
                        <Icon Icon={AddFavourites} active={favourite} handleToggle={handleFavourite}/>
                    </div>
                    <div className={styles.movie__title__header}>{movie.title}
                    </div>
                </div>

                <div className={styles.movie__overview}>
                    {movie.overview}
                </div>
            </div>

        </div>

    )
}

export {Movie};