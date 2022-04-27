import styles from './Loader.module.scss';
import {LoaderIcon} from "@/components/Loader/LoaderIcon";

function Loader() {
    return (
        <div className={styles.loader__container}>
            <div className={styles.loader__wrapper}>
                <LoaderIcon/>
            </div>
        </div>
    )
}

export {Loader};