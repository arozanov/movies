import {Link, NavLink} from "react-router-dom";
import styles from "./header.module.scss";
import logo from "@/assets/icons/logo_leovegas_white.svg"

function Header() {
    return (
        <header>
            <div className={styles.header__container}>
                <Link to="/" className={styles.header__logo}>
                    <img src={logo} alt="Logo" className={styles.logo}/>
                </Link>
                <nav className={`${styles.header__menu} ${styles.menu}`}>
                    <ul className={styles.menu__list}>
                        <NavLink
                            style={setMenuColor}
                            to="/">
                            <li className={`${styles.menu__item} ${styles.menu__link}`}>Home</li>
                        </NavLink>
                        <NavLink
                            style={setMenuColor}
                            to="/favourites">
                            <li className={`${styles.menu__item} ${styles.menu__link}`}>Favourites</li>
                        </NavLink>
                        <NavLink
                            style={setMenuColor}
                            to="/watchLater">
                            <li className={`${styles.menu__item} ${styles.menu__link}`}>Watch Later</li>
                        </NavLink>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

function setMenuColor({isActive}) {
    return {
        color: isActive ? "black" : "grey",
    };
}

export {Header};