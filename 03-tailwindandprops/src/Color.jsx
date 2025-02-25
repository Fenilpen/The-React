

function Randomcolor (){
    function ChangeBlack(){
        document.body.style.backgroundColor = 'black'
    }
    function ChangeRed(){
        document.body.style.backgroundColor = 'red'
    }
    function ChangeGreen(){
        document.body.style.backgroundColor = 'green'
    }
    function ChangeBlue(){
        document.body.style.backgroundColor = 'blue'
    }
    function ChangeOrange(){
        document.body.style.backgroundColor = 'orange'
    }
    return(
        <>
        <h1 className="mb-4 font-semibold ">Random Color</h1>
        <div className="flex flex-row-reverse space-x-2 space-x-reverse border- rounded-xl p-2 bg-white" >
        <button className="bg-orange-400" onClick={ChangeOrange}>Orange</button>
        <button className="bg-blue-400" onClick={ChangeBlue}>Blue</button>
        <button className="bg-green-400" onClick={ChangeGreen}>Green</button>
        <button className="bg-red-400" onClick={ChangeRed}>Red</button>
        <button className="bg-gray-400" onClick={ChangeBlack}>Black</button>
        </div>
        </>
    )
}

export default Randomcolor
