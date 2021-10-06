import axios from "axios";
import CONFIG from "./config";

const { API_KEY, NEWS_COUNTRY_CODE } = CONFIG.NEWS_API;

const NEWS_ENDPOINT = `https://newsapi.org/v2/top-headlines?country=${NEWS_COUNTRY_CODE}&apiKey=${API_KEY}`;

export const fetchNewsData = async (setStateCallback) => {
    try {
        const response = await axios.get(NEWS_ENDPOINT);
        const dataToSet = response.data.articles;

        if (!dataToSet) throw new Error("Data is undefined!");

        setStateCallback(dataToSet);
    } catch ({ message }) {
        console.error(message);
    }
};
