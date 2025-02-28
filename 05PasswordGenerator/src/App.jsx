import { useState,useCallback,useEffect,useRef} from 'react'

function App() {
  const [length, setLength] = useState()
  const [numberAllowed,setNumberAllowed] = useState(false)
  const [charAllowed,setCharAllowed] = useState(true)
  const [password,setPassword] = useState(8)

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if (numberAllowed) str += '0123456789'
    if (charAllowed) str += '~!@#$%^&*()_+'
    
    for(let i = 0; i < length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    
    setPassword(pass)


  },[length,numberAllowed,charAllowed,setPassword])

  const copyPasswordInClipboard = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,101)
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])


  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
      <h1 className='text-white text-center my-3 pt-2'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4 '>
        <input type="text" value={password} className='outline-none w-full py-1 px-3 bg-white' placeholder='password' readOnly ref={passwordRef}/>
        <button onClick={copyPasswordInClipboard} className='bg-blue-900 px-3'>Copy</button>
      </div>
    <div className='flex items-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input type='range' min={6} max={100} value={length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}}/>
        <label>length: {length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input type='checkbox' defaultChecked={numberAllowed} id='numberinput' onChange={()=>{
          setNumberAllowed((prev)=> !prev)
        }}/>
        <label htmlFor='numberinput'>Numbers</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input type='checkbox' defaultChecked={charAllowed} id='characterInput' onChange={()=>{
          setCharAllowed((prev) => !prev)
        }}/>
        <label htmlFor='characterInput'> Characters</label>
      </div>
    </div>
    </div>
     
  </>
  )
}

export default App


// notes about hooks

// useCallback (memoizing): Think of it as a tool for memoizing functions. When you have functions that you pass down to child components, 
// using useCallback ensures that the function reference stays the same unless its dependencies change. 
// This helps in preventing unnecessary re-renders, optimizing performance.

// useEffect (run): This is your go-to hook for running side effects like data fetching, updating the DOM, or setting up subscriptions. 
// It runs after the component renders and can re-run based on the dependencies you specify.

// So, while useCallback helps in keeping functions stable, 
// useEffect is used to handle side effects that need to be executed after render.
