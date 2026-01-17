import { useState, useEffect } from "react";

export default function ResultsPanel({keyword, page, updateMyFavourites, handleNextPage, handleError, myFavourites}){
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
                let URL = `https://gnews.io/api/v4/search?q=${keyword}&lang=en&max=8&page=${page}&apikey=${GNewsApiKey}`;

                const response = await fetch(URL);
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
                    handleError("No more articles to retrieve.");
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
        <div className="basis-4/5 grid grid-cols-1 items-center bg-base-200 xs:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-12 p-5 justify-items-center">
            {isLoading && (
                <div className="text-5xl">
                <span className="loading loading-spinner loading-xl"></span>
                </div>)
            }
            <div className="card bg-base-100 w-96 shadow-sm flex flex-col">
                <div className="flex flex-row w-full py-2 px-3 items-center">
                    <div className="avatar avatar-placeholder">
                        <div className="bg-neutral text-neutral-content w-10 rounded-full">
                            <span className="text-xl">D</span>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5">
                        <div className="text-xs">Publisher</div>
                        <div className="text-xs">Date</div>
                    </div>
                </div>
                <figure>
                    <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions justify-start">
                    <button className="relative -left-3 -bottom-3 btn btn-circle btn-link btn-secondary hover:bg-base-200">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-[1.2em]"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
                    </button>
                    </div>
                </div>
            </div>
            <div className="card bg-base-100 w-96 shadow-sm flex flex-col">
                <div className="flex flex-row w-full py-2 px-3 items-center">
                    <div className="avatar avatar-placeholder">
                        <div className="bg-neutral text-neutral-content w-10 rounded-full">
                            <span className="text-xl">D</span>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5">
                        <div className="text-xs">Publisher</div>
                        <div className="text-xs">Date</div>
                    </div>
                </div>
                <figure>
                    <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions justify-start">
                    <button className="relative -left-3 -bottom-3 btn btn-circle btn-link btn-secondary hover:bg-base-200">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-[1.2em]"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
                    </button>
                    </div>
                </div>
            </div>
            <div className="card bg-base-100 w-96 shadow-sm flex flex-col">
                <div className="flex flex-row w-full py-2 px-3 items-center">
                    <div className="avatar avatar-placeholder">
                        <div className="bg-neutral text-neutral-content w-10 rounded-full">
                            <span className="text-xl">D</span>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5">
                        <div className="text-xs">Publisher</div>
                        <div className="text-xs">Date</div>
                    </div>
                </div>
                <figure>
                    <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions justify-start">
                    <button className="relative -left-3 -bottom-3 btn btn-circle btn-link btn-secondary hover:bg-base-200">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-[1.2em]"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
                    </button>
                    </div>
                </div>
            </div>
            

        </div>
    );
}