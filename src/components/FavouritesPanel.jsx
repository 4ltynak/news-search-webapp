export default function FavouritesPanel({myFavourites, clearMyFavourites}){
    return (
        <div className="flex flex-col basis-1/5 h-full">
            <div className="flex bg-base-300 px-5 py-2 xs:flex-col md:flex-row w-full items-center">
                <div className="basis-4/5">
                    <h2>My Favourites</h2>
                </div>
                <div className="basis-1/5">
                    <button className="btn btn-neutral" onClick={clearMyFavourites}>Clear</button>
                </div>
                
                
            </div>
            <div className="flex-1 flex-start">
                <ul className="list shadow-md">
                    {
                        myFavourites.map((article, index) => {
                            return (
                            <li key={index} className="list-row"
                            onClick={() => window.open(article.url, "_blank")}
                            >
                                <div>
                                    <div className="text-xs font-semibold">
                                        {article.title}
                                    </div>
                                </div>    
                            </li> 
                            )
                        })
                    }
                    <li className="list-row">
                        <div>
                        <div className="text-xs font-semibold">
                            Headline
                        </div>
                        </div>    
                    </li>
                    <li className="list-row">
                        <div>
                        <div className="text-xs font-semibold">
                            Headline
                        </div>
                        </div>    
                    </li>            
                </ul>
            </div>
        </div>
    )

}