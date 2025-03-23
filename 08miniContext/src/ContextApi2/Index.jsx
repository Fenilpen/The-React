const { createContext } = require("react");

const BioContext = createContext(); 

const BioProvider = () => {

    const myName = 'fenil'

    return <BioContext.Provider value = {myName}>

    </BioContext.Provider>
}