import react from "react";
import { useApp } from "../../context/AppContext";
import { Container } from "./styles";
export function Screen() {
    const { screenValue } = useApp();
    
    return (
        <Container>
            <h2><span>{screenValue}</span></h2>
        </Container>
    )
}