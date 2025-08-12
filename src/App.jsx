import { useState, useTransition } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'

function App() {
  const [count, setCount] = useState(20);

 const [isPending, startTransition] = useTransition();

  return (
    <div className=''>
   <Navbar setCount={setCount} ispending={isPending} />
   <div className='w-[90vw] mx-auto mt-12'>
   <Main startTransition={startTransition} ispending={isPending} count={count} />
   </div>
    </div>
  )
}

export default App
