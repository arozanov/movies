import styles from "./Input.module.scss";
import  {ReactComponent as SearchIcon} from "@/assets/icons/search_icon.svg"

function Input({value, ...props}) {

    return (
        <div className={styles.search}>
            <div className={styles.search__form}>
                <form onSubmit={event => event.preventDefault()} className={styles.form}>
                    <div className={styles.form__input}>
                        <SearchIcon className={styles.icon}/>
                        <input type="text" className={styles.input} {...props}/>
                    </div>
                </form>
            </div>
        </div>
    );
}

export {Input};