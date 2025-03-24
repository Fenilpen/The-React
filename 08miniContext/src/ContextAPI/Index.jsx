import { createContext } from "react";

export const TheContext =  createContext()

export const ContextPro = ({children}) => {
    
    const data = "fenil practicing"
    const info = "ContextAPI"

    return (
    
    <TheContext value={{data,info}}>
        {children}
    </TheContext>

    )
}
