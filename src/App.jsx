import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignInSignUp from './SignInSignUp/SignInSignUp'
import NewComp from './NewComp'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NewComp/>
    </>
  )
}

export default App
