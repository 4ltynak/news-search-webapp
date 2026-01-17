import {useState} from "react";

export default function Header({keyword, handleSetKeyword, setError}){
    const [searchTerm, setSearchTerm] = useState(keyword ?? "");
    const [isEmpty, setIsEmpty] = useState(true);
    
    const handleOnChange = (e) => {
        setSearchTerm(e.target.value);

        if (e.target.value.trim().length > 0) {
            setIsEmpty(false);
        } else {
            setIsEmpty(true);
        }
    }

    const onSearchClick = () => {
        if (isEmpty) {
            setError({errorType: "error", error: "Search field cannot be empty"})
        } else {
            handleSetKeyword(searchTerm);
        }
        
    }

    return(
        <div className="navbar bg-primary sticky top-0 z-10 bg-base-100 shadow-sm px-5 flex items-center w-full">
            <div className="flex basis-1/3 gap-2 items-center xs:flex-between w-full">
            <label htmlFor="page-drawer" className="btn md:hidden"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg>
            </label>
                <h1 className="text-primary-content text-xl font-bold">News Search</h1>
            </div>
            <div className="flex flex-1 basis-1/3 flex-end gap-5 justify-center">
                <input type="text" placeholder="Search..." className="input input-bordered w-24 md:w-auto"
                value={searchTerm} onChange={handleOnChange}/>
                <button className="btn btn-neutral" onClick={onSearchClick}>Search</button>
            </div>
            <div className="basis-1/3 flex justify-end"></div>
        </div> 
    );
}