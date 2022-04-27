import axios from "axios";

const fetcher = axios.create();

fetcher.interceptors.request.use(function (config) {
    config.params.api_key = process.env.API_KEY;
    config.baseURL = process.env.MOVIES_HOST;
    return config;
}, function (error) {
    return Promise.reject(error);
});

export {fetcher};