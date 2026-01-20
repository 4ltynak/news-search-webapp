import { useState, useEffect } from "react";
import NewsItem from "./NewsItem";

export default function ResultsPanel({keyword, page, updateMyFavourites, handleNextPage, setError, myFavourites}){
    const GNewsApiKey = import.meta.env.VITE_GNEWS_API_KEY;

    const [news, setNews] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    
    const fetchArticles = async (keyword, page) => {
        
        // initial render only
        if (news === null){
            setIsLoading(true);
        }   

        if (keyword.length > 0 ){

            try {
                let URL = `https://corsproxy.io/?url=https://gnews.io/api/v4/search?q=${keyword}&lang=en&max=8&page=${page}`;

                const response = await fetch(URL, {
                    headers: {
                        "X-Api-Key": GNewsApiKey
                    }
                });
                
                const data = await response.json();
                const articles = data.articles;

                // check if the returned list is not empty
                if(articles.length > 0) {

                    // if on first search or on new search
                    if (news === null || page === 1)
                    {
                        setNews(articles);
                    } else {
                        setNews(current => [...current, ...articles]);
                    }
                    
                } else {
                    setError({errorType: "error", errorMessage: "No articles to retrieve."});
                }

            } catch (err) {
                console.log("Search error: ", err);
            } finally {
                setIsLoading(false);
            }
        }
    
    }

    useEffect(() => {
        console.log("News: ", news);
        if (keyword.length > 0){
            if (page === 1) {
                setIsLoading(true);
            }
            fetchArticles(keyword, page);
        }
        
    }
    , [page, keyword]);    

    return(
        <div className={`flex-1 overflow-y-auto grid grid-cols-1 items-center bg-base-200 md:grid-cols-2 xl:grid-cols-4 gap-x-12 gap-y-8
        p-5 ${!news ? "items-center" : "items-start"} justify-items-center`}>
            {
                // while awaiting results
                isLoading && (
                <div className="lg:col-span-8 text-8xl">
                    <span className="loading loading-spinner loading-xl"></span>
                </div>
                )
            }
            {   
                // on initial render
                !news && !isLoading && (
                    <h3 className="text-3xl text-center col-span-4">Search to get started...</h3>
                )
            }
            {
                
                news && !isLoading && (
                    <>
                        {
                            news.map((article) => {
                            return (
                                <NewsItem article={article} updateMyFavourites={updateMyFavourites} myFavourites={myFavourites}/>
                            )
                            })
                        }
                        <div className="col-span-1 lg:col-span-4 flex justify-center">
                            <button className="btn btn-secondary text-secondary-content text-center" onClick={handleNextPage}>Load More</button>
                        </div>
                        
                    </>

                )
            }
        </div>
    );
}