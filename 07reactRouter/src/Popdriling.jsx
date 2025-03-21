import React, { useState } from "react";
import './App.css'

function Popdriling() {
  const [name,setname] = useState('fenil')
  return (
   <>
   <h1>this is ground floor</h1>
   <First data={'i am what'}/>
   </>
  )
}

function First({data}){

  return(
    <>
    <h1>this is first floor </h1>
    
    <Second data={data}/>
    </>
  )
}


function Second ({data}){
  return (
    <>
    <h1>this is second floor</h1>
    <Third data={data}/>
    </>
  )
}

function Third ({data}){
  return(
    <>
    <h1>this is third floor {data}</h1>
    </>
  )
}


export default Popdriling
