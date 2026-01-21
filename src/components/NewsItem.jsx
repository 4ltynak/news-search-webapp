import { useState, useEffect } from "react";

export default function NewsItem({article, updateMyFavourites, myFavourites, setError}){
    const [isHovered, setIsHovered] = useState(false);

    const addToFavourites = () => {
        if (!isDuplicate) {
            updateMyFavourites(article.url, article);
        } else {
            setError({errorType: "info", error: "Item is already in favourites list!"});
        }
        
    }

    function handleImageError(e){
        e.target.src= "https://placehold.net/600x400.png";
    }

     // check if current article is in favourites list
    const isDuplicate = myFavourites.some((fav) => fav.url === article.url);


    // If source includes "The", remove The and show the initial of next word as avatar
    const avatar = article.source.name.includes("The") ? article.source.name[4] : article.source.name[0];

    // Extract only date and not time of article published
    const publishDate = article.publishedAt.split("T")[0]

    return (
        <div className="card bg-base-100 w-full shadow-sm flex flex-col h-full col-span-1">
                <div className="flex flex-row w-full py-2 px-3 items-center h-20">
                    <div className="avatar avatar-placeholder">
                        <div className="bg-neutral text-neutral-content w-10 rounded-full">
                            <span className="text-xl">{avatar}</span>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5">
                        <div className="text-sm">{article.source.name}</div>
                        <div className="text-xs text-base-content/50">{publishDate}</div>
                    </div>
                </div>
                <div className="flex-1 relative flex flex-col" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                    {
                        !isHovered && (
                            <>
                            <figure className="max-h-36 overflow-hidden">
                                <img
                                src={article.image}
                                onError={handleImageError}
                                alt={article.title}
                                className="object-cover"/>
                            </figure>
                            <div className="card-body">
                                <p className="line-clamp-3 leading-relaxed">{article.title}</p>
                            </div>
                            </>
                        )
                    }
                    {
                        isHovered && (
                            <div className="card-body flex-1 flex flex-col justify-center items-center">
                                <p className="text-center">{article.title}</p>
                                <button className="btn btn-neutral w-max">
                                    <a href={article.url} target="_blank">Read More</a></button>
                            </div>
                        )
                    }
                </div>
                
                <div className="card-actions flex justify-between p-2">
                    <div className="basis-1/3">
                        <button className="btn btn-secondary btn-circle btn-link btn-neutral hover:bg-base-200" onClick={addToFavourites}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill={isDuplicate ? "currentColor" : "none"} viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-[1.2em]"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
                    </button>
                    </div>
                    <div className="flex-1">
                    <button className="btn btn-neutral lg:hidden">
                        Read More
                    </button>
                    </div>

                </div>
        </div>
    )
}