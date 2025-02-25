import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Randomcolor from './Color'


function App() {

    let myObj = {
      username: "dew corpo",
      age: 24
    }
  
    let newarray = [1,2,3,4]
  
    return (
      <>
      {/* <h1 className="text-3xl font-bold bg-green-400 p-4 rounded-xl mb-4">
      Tailwind test
      </h1> */}
      {/* <Card username="Fenil" btnText="click Me"/>
      <Card username='Dew Corp'/> */}
      <Randomcolor/>
      </>
  )
}

export default App
