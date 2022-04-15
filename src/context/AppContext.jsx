import React, { createContext, useContext, useEffect, useState, useRef } from 'react'
import { useIsOperator } from '../hook/useIsOperator'

const AppContext = createContext()

export function AppProvider({ children }) {
    const [inputValue, setInputValue] = useState('')  
    const [screenValue, setScreenValue] = useState('0')

    const handleInputClick = (e) => showInScreen(e.target.innerText)
    

    const showInScreen = (value) => {
        if (value.length <= 3) {
            if (value === '=') showTheResult()
            else if (value === 'AC') setScreenValue('0')
            else if (value === 'C') setScreenValue(screenValue.slice(0, -1))
            else if (value === '+/-') {
                setScreenValue(screenValue.includes('-') ?
                    screenValue.slice(1) : `-${screenValue}`)}
            else if (screenValue.length >= 0 && screenValue.length <= 8) {
                if (value === '*' || value === '/' || value === '+' || value === '-') {
                    if (
                        screenValue[screenValue.length - 1] !== value ||
                        screenValue[screenValue.length - 1] !== '*' ||
                        screenValue[screenValue.length - 1] !== '/' ||
                        screenValue[screenValue.length - 1] !== '+' ||
                        screenValue[screenValue.length - 1] !== '-'
                    ) setScreenValue(screenValue + value)
                } else {
                    if (screenValue[0] === '0') setScreenValue(screenValue.slice(1) + value)
                    else setScreenValue(screenValue + value)
                }
            }
        }
    }

    const showTheResult = () => {
        // se o ultimo digito for um operador
        if (useIsOperator(screenValue[screenValue.length - 1]))
            setScreenValue(screenValue.slice(0, -1))

        if (screenValue.includes('*') || screenValue.includes('/')) {
            // get first operator
            for (let i = 0; i < screenValue.length; i++) {
                
            }
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
