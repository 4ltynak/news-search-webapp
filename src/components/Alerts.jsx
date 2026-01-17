import { useState, useEffect } from "react";

export default function Alerts({error, setError}){
    const [isOpen, setIsOpen] = useState(false);
    
    console.log("Error: ", error);

    function setSeverity() {
        if (error.errorType === "info") {
            return "alert-info";
        } else {
            return "alert-error"
        }
    }
    
    useEffect(() => {
        if (error.error.length > 0) {
            setIsOpen(true);
        }

        // close after 3s
        const timer = setTimeout(() => {
            setIsOpen(false);
            setError({errorType: "", error: ""});
        } , 3000);

        return () => clearInterval(timer);

    }, [error, setError]);

    return (
    <div className="toast toast-end toast-end">
        {
            error.error.length > 0 && (
            <div className={`alert ${setSeverity()} ${isOpen ? "block" : "hidden"} `}>
                <span>{error.error}</span>
            </div>
            )
        }
        
    </div>
    );
}