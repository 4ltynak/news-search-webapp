export default function FavouritesPanel({myFavourites, clearMyFavourites, isMobileOpen, toggleMobileMenu}){
    return (
        <div className={`flex flex-col bg-base-100 fixed inset-0 z-40 
            transition-all duration-500 ease-in-out
            lg:static lg:basis-1/5 lg:h-full lg:translate-x-0
            ${isMobileOpen ? "pointer-events-auto translate-x-0" : "pointer-events-none -translate-x-full"} 
            `}>
            <div className="flex bg-primary/50 h-15 px-5 py-2 sm:flex-col sm:justify-between md:flex-row w-full items-center">
                <p className="font-bold basis-1/8 lg:hidden" onClick={toggleMobileMenu}>X</p>
                <div className="flex-1 text-center">
                    <h2 className="text-primary-content xs:text-center">My Favourites</h2>
                </div>
                <div className="lg:basis-1/5 xs:flex">
                    <button className="btn btn-neutral xs:align-self-end" onClick={clearMyFavourites}>Clear</button>
                </div>
                
                
            </div>
            <div className="flex-1 flex-start">
                <ul className="list w-full">
                    {
                        myFavourites.map((article, index) => {
                            return (
                            <li key={index} className={`list-row h-16 hover:bg-secondary/20 hover:text-secondary-content hover:rounded-none cursor-pointer`}
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