export default function FavouritesPanel({myFavourites, clearMyFavourites}){
    return (
        <div className="hidden md:block flex flex-col basis-1/5 h-full">
            <div className="flex bg-primary/50 h-15 px-5 py-2 xs:flex-col md:flex-row w-full items-center">
                <div className="basis-4/5">
                    <h2 className="text-primary-content">My Favourites</h2>
                </div>
                <div className="basis-1/5">
                    <button className="btn btn-neutral" onClick={clearMyFavourites}>Clear</button>
                </div>
                
                
            </div>
            <div className="flex-1 flex-start">
                <ul className="list w-full">
                    {
                        myFavourites.map((article, index) => {
                            return (
                            <li key={index} className={`list-row h-15 hover:bg-secondary/20 hover:text-secondary-content hover:rounded-none cursor-pointer`}
                            onClick={() => window.open(article.url, "_blank")}
                            >
                                <div className="p-2">
                                    <div className="text-xs font-semibold text-ellipsis truncate">
                                        {article.title}
                                    </div>
                                </div>    
                            </li> 
                            )
                        })
                    }         
                </ul>
            </div>
        </div>
    )

}