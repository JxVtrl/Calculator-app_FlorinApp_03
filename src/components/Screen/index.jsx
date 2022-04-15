import react from "react";
import { useApp } from "../../context/AppContext";

export function Screen() {
    const { screenValue } = useApp();
    
    return (
        <div>
            <h2><span>{screenValue}</span></h2>
        </div>
    )
}