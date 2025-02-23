import React, { useState } from "react";


function States(){
    const [button,Setbutton] = useState(10)

    function addition(){
        Setbutton(button + 1)
    }
    function minus(){
        Setbutton(button - 1)
    }
    
    return(
    <>  
    <button onClick={addition}>addition</button>
    <br/>
    <button onClick={minus}>minus</button>
    <h1>this is number 1 {button}</h1>
    <h1>this is number 2 {button}</h1>
    <h1>this is number 3 {button}</h1>
    <h1>this is number 4 {button}</h1>
    </>

    )

}

export default States
