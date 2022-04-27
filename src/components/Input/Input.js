import styles from "./Input.module.scss";
import {ReactComponent as SearchIcon} from "@/assets/icons/search_icon.svg"

function Input({...props}) {

    return (
        <div className={styles.movies__search__container}>
            <div className={styles.search}>
                <div className={styles.search__form}>
                    <form onSubmit={event => event.preventDefault()} className={styles.form}>
                        <div className={styles.form__input}>
                            <SearchIcon className={styles.icon}/>
                            <input type="text" className={styles.input} {...props}
                                   placeholder="Find Movies"
                                   autoFocus=""
                                   autoCapitalize="off"
                                   autoCorrect="off"
                                   autoComplete="off"
                                   data-test="search-input"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export {Input};