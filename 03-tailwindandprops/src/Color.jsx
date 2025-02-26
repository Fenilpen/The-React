import { useState } from "react";

function Color (){
    const [color,setColor] = useState('purple')    
   
    return(
        <div className="w-full h-screen duration-200"
        style={{backgroundColor: color}}>
          <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2"> 
            <div className="flex xlex-wrap justify-center
            gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
                <button
                onClick={()=> setColor('red')}
                className="outline-none px-4 py-1 rounded-xl text-white shadow-lg"
                style={{backgroundColor: 'Red'}}
                >Red</button>
                <button
                onClick={()=> setColor('orange')}
                className="outline-none px-4 py-1 rounded-xl text-white shadow-lg"
                style={{backgroundColor: 'Orange'}}
                >Orange</button>
                <button
                onClick={()=> setColor('green')}
                className="outline-none px-4 py-1 rounded-xl text-white shadow-lg"
                style={{backgroundColor: 'green'}}
                >Green</button>
                <button
                onClick={()=> setColor('blue')}
                className="outline-none px-4 py-1 rounded-xl text-white shadow-lg"
                style={{backgroundColor: 'Blue'}}
                >Blue</button>
                <button
                onClick={()=> setColor('black')}
                className="outline-none px-4 py-1 rounded-xl text-white shadow-lg"
                style={{backgroundColor: 'black'}}
                >Black</button>
                </div>  
          </div>  
        </div>
    )
}
export default Color

