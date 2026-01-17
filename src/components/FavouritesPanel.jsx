export default function FavouritesPanel(){
    return (
        <div className="flex flex-col basis-1/5 h-full">
            <div className="flex xs:flex-col md:flex-row p-5 w-full items-center">
                <div className="basis-4/5">
                    <h2>My Favourites</h2>
                </div>
                <div className="basis-1/5">
                    <button className="btn btn-neutral">Clear</button>
                </div>
                
                
            </div>
            <div className="flex-1 flex-start">
                <ul className="list bg-base-100 rounded-box shadow-md">
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