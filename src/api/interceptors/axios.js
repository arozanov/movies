import axios from "axios";

const fetcher = axios.create();

fetcher.interceptors.request.use(function (config) {
    config.params.api_key = process.env.REACT_APP_API_KEY;
    config.baseURL = process.env.REACT_APP_MOVIES_HOST;
    return config;
}, function (error) {
    return Promise.reject(error);
});

export {fetcher};