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
            <div className="flex gap-2 items-center w-full lg:w-fit">
                <label htmlFor="page-drawer" className="btn md:hidden border-none shadow-none bg-transparent p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg>
                </label>
                <h1 className="text-primary-content text-xl font-bold">News Search</h1>
            </div>
            <div className="flex flex-1 flex-end gap-5 justify-center">
                <input type="text" placeholder="Search..." className="input input-bordered w-24 md:w-auto"
                value={searchTerm} onChange={handleOnChange}/>
                <button className="btn btn-neutral" onClick={onSearchClick}>
                    <p className="hidden md:block">Search</p>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 block md:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> </svg>                 
                </button>
            </div>
        </div> 
    );
}