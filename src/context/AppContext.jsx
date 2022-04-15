import React, { createContext, useContext, useEffect, useState, useRef } from 'react'


const AppContext = createContext()

export function AppProvider({ children }) {
    const [inputValue, setInputValue] = useState('')  
    const [screenValue, setScreenValue] = useState('')

    const handleInputClick = (e) => showInScreen(e.target.innerText)
    

    const showInScreen = (value) => {
        if (value === 'AC') setScreenValue('')
        else if (value === 'C') setScreenValue(screenValue.slice(0, -1))
        else if (value === '+/-') {
            setScreenValue(screenValue.includes('-') ?
                screenValue.slice(1) : `-${screenValue}`)}
        else if (screenValue.length >= 0 && screenValue.length <= 8) {
            
            setScreenValue(screenValue + value)
            
        }
    }








    const value = {
        inputValue,
        setInputValue,
        screenValue,
        setScreenValue,
        handleInputClick,
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export function useApp() {
    return useContext(AppContext)
}
