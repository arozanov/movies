import {BrowserRouter as Router} from "react-router-dom";
import {Suspense} from 'react';
import {InternalRouter} from "@/router/router";
import {ErrorBoundary} from "@/components/ErrorBoundary";
import styles from './App.module.scss';
import {Header} from "@/components/Header";
import {getLocalMovies} from "@/store/moviesStore/moviesStore";
import {Footer} from "@/components/Footer";
import {ToastContainer} from "react-toastify";
import {Loader} from "@/components/Loader";

function App() {
    return (
        <div className={styles.wrapper}>
            <ToastContainer/>
            <Router>
                <Header/>
                <Suspense fallback={<SuspenseFallback/>}>
                    <ErrorBoundary>
                        <InternalRouter/>
                    </ErrorBoundary>
                </Suspense>
                <Footer/>
            </Router>
        </div>
    );
}

function SuspenseFallback() {
    return (
        <Loader/>
    );
}

getLocalMovies(["FAVOURITES", "WATCH_LATER"]);

export default App;
