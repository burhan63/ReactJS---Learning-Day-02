import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User1 from './User'
import User from './User'
import Header,{HeaderMenu} from './Header'
import Example from './JSX_Exm'
import MyJSXExcersice from './JSX_Excersice'
import JSX_CurlyBraces from './JSX_With_Curly_Braces'
import Objects_Prcatice from './objects'
import Testing_Function from './functions'
import Change_State from './State'
import Calculator from './State_Calculator'

function App() {
  const [counter, Setcounter] = useState(0)

  return (
    <>
    {/* <Header />
    <HeaderMenu/>
    <Example/>
    <h1>Counter : {counter}</h1>
    <User />
    <button onClick={()=>Setcounter(counter + 1)}>Increase Count</button>
    
    <button onClick={()=> Setcounter(counter -1)}>Decrease Counter</button> */}
    {/* <MyJSXExcersice/> */}
    {/* <JSX_CurlyBraces/> */}
    {/* <Objects_Prcatice/> */}
    {/* <Testing_Function/> */}
    {/* <Change_State/> */}
    <Calculator/>

    </>
  )
}

export default App

