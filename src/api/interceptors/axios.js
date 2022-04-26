import axios from "axios";
import {API_KEY, MOVIES_HOST} from "@/api/env/variables";

const fetcher = axios.create();

fetcher.interceptors.request.use(function (config) {
    config.params.api_key = API_KEY;
    config.baseURL = MOVIES_HOST;
    return config;
}, function (error) {
    return Promise.reject(error);
});

export {fetcher};