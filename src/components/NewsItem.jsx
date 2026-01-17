export default function NewsItem({article, updateMyFavourites, myFavourites}){
    const addToFavourites = () => {
        updateMyFavourites(article.url, article);
    }

     // check if current article is in favourites list
    const isDuplicate = myFavourites.some((fav) => fav.url === article.url);


    // If source includes "The", remove The and show the initial of next word as avatar
    const avatar = article.source.name.includes("The") ? article.source.name[4] : article.source.name[0];

    // Extract only date and not time of article published
    const publishDate = article.publishedAt.split("T")[0]

    return (
        <div className="card bg-base-100 w-full shadow-sm flex flex-col">
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
    )
}