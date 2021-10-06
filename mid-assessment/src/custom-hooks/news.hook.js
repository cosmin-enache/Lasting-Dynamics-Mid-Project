import { useContext } from "react";
import NewsContext from "../context/news.context";

const useNews = () => {
    const { newsData, setNewsData } = useContext(NewsContext);

    return [newsData, setNewsData];
};

export default useNews;