import { useState } from 'react'
import './App.css'
import { Home } from "./ContextApi/Home";
import { ContextPro } from "./ContextApi";

function App() {
 return (
   <ContextPro>
    <Home/>
    </ContextPro>
 )
}

export default App
