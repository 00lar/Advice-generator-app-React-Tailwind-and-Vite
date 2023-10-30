import { createContext } from "react"


const CardContext = createContext();

const CardContextProvider = ({children}) => {
    return (
        <CardContext.Provider
        CardContext = {CardContext}
        >
            {children}
        </CardContext.Provider>
    )
}

export {CardContextProvider}