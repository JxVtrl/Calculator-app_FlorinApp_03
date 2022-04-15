import react, { useState, useEffect } from "react";
import { Container } from "./styles";
import { useApp } from "../../context/AppContext";

export function InputPad() {
    const { handleInputClick } = useApp();
    
    return (
        <Container onClick={handleInputClick}>
            <ul>
                <li>AC</li>
                <li>C</li>
                <li>+/-</li>
            </ul>
            <ul>
                <li>.</li>
                <li>+</li>
                <li>-</li>
                <li>*</li>
                <li>/</li>
                <li>=</li>
            </ul>
            <ul>
                <li>0</li>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
                <li>8</li>
                <li>9</li>
            </ul>
        </Container>
    )
}