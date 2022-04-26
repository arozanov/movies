import styles from './Loader.module.scss'
import {PuffLoader} from "react-spinners";

function Loader({loading}) {
    return (
        <div className={styles.loader__container}>
            <div className={styles.loader__wrapper}>
                {/*loader*/}
                <PuffLoader color="grey" loading={loading} size={50}/>
            </div>
        </div>
    )
}

export {Loader};