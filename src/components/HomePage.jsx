import Header from "./Header";
import FavouritesPanel from "./FavouritesPanel";
import ResultsPanel from "./ResultsPanel";
import Alerts from "./Alerts";
import {useState, useEffect} from "react";


export default function HomePage() {
    const [keyword, setKeyword] = useState("");
    const [myFavourites, setMyFavourites] = useState( JSON.parse(localStorage.getItem("favourites")) ?? [] );
    const [page, setPage] = useState(1);

    const [error, setError] = useState({errorType: "", error: ""});
    const [isAlertOpen, setIsAlertOpen] = useState(false);

    const clearMyFavourites = () => {
        setMyFavourites([]);
    }
    
    const handleSetKeyword = (searchTerm) => {
        // input must not be empty
        if (searchTerm || searchTerm.trim().length > 0) {
            setKeyword(searchTerm);
            setPage(1);
        }
        
    }

    const handleNextPage = () => {
        //get next page of results when requested
        setPage(p => p+1);
    }

    const updateMyFavourites = (articleURL, articleToAdd) => {
    
        setMyFavourites(currentFavourites => { 
    
         // Check if already in list
            if (currentFavourites.some(article => article.url === articleURL)){

                setIsAlertOpen(true);
                return currentFavourites;
            }


            return [...currentFavourites, articleToAdd]});
    }

    // update localstorage when favourites list changes
    useEffect(() => {
        localStorage.setItem("favourites", JSON.stringify(myFavourites));
    }, [myFavourites]);

    return (
        <div className="h-screen">
            <div className="flex flex-col h-full">
                <Header keyword={keyword} handleSetKeyword={handleSetKeyword} setError={setError}/>
            <div className="flex-1 overflow-y-hidden">
                <div className="flex flex-row h-full">
                <FavouritesPanel myFavourites={myFavourites} clearMyFavourites={clearMyFavourites} handleSetKeyword={handleSetKeyword}/>
                <ResultsPanel keyword={keyword} page={page}
                updateMyFavourites={updateMyFavourites} handleNextPage={handleNextPage} myFavourites={myFavourites} setError={setError}/>
                </div>
            </div>
            </div>
            <div className="absolute z-40">
                {
                error.error.length > 0 &&
                <Alerts isAlertOpen={isAlertOpen} setIsAlertOpen={setIsAlertOpen} error={error} setError={setError}/>
                }
            </div>
        </div>
        
    );
}
            