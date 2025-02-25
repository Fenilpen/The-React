

function Randomcolor (){
    function changecolor (color){
        console.log(color);
        document.body.style.backgroundColor = color
    }
    return(
        <>
        <h1 className="mb-4 font-semibold ">Random Color</h1>
        <div className="flex flex-row-reverse space-x-2 space-x-reverse border- rounded-xl p-2 bg-white" >
        <button className="bg-orange-400" onClick={()=>{changecolor('orange')}}>Orange</button>
        <button className="bg-blue-400" onClick={()=>{changecolor('blue')}}>Blue</button>
        <button className="bg-green-400" onClick={()=>{changecolor('green')}}>Green</button>
        <button className="bg-red-400" onClick={()=>{changecolor('red')}}>Red</button>
        <button className="bg-gray-400" onClick={()=>{changecolor('black')}}>Black</button>
        </div>
        </>
    )
}

export default Randomcolor
