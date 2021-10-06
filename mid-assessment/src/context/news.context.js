import { createContext, useState } from "react";

const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
    const [newsData, setNewsData] = useState(null);

    return (
        <NewsContext.Provider value={{ newsData, setNewsData }}>
            {children}
        </NewsContext.Provider>
    );
};

export default NewsContext;