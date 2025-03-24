import { createContext, useContext } from "react"
import { TheContext } from "./index";

export function Home () {

    const {data,info} = useContext(TheContext)
    
    return(
        <h1>This is self practice {data} and its {info}</h1>
    )
}


// notes
// const {data,info} = useContext(TheContext)

// Access the Value in a Child Component: When a component calls , 
// it gets the  from the nearest  in the hierarchy. If no  is found, 
// it will use the default value set during , 
// which, in your case, is  because you didn't specify one.
