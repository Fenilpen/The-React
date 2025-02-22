import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


function Testing (){
  return(
    <>
    <h1>tested</h1>
    </>
  )
}

// const customReact = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'click here to go to google'
// }

const anotherElement = (
  <a href="https://google.com" target='_blank'>vimsit</a>
)

const anotherUser = 'chai aur code'

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com',target:'_blank'},
  'click me to visit google',
   anotherUser
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
