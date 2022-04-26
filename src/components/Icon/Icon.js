import styles from "./icon.module.scss";

function Icon({Icon, active, handleToggle = null}) {

    function handlerButton() {
        if (handleToggle) {
            handleToggle()
        }
    }

    return (
        <button
            className={styles.button}
            onClick={handlerButton}
        >
            <div className="">
                <Icon className={active ? `${styles.icon} ${styles.focus}` : styles.icon}/>
            </div>
        </button>
    );
}

export {Icon};