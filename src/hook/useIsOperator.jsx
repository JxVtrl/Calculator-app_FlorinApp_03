export const useIsOperator = (value) => {
    if (value === '*' || value === '/' || value === '+' || value === '-') return 1
    else return 0
}
    
     