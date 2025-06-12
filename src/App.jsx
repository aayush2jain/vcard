import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/sidebar'
import Body from './components/body'
function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="bg-black h-auto md:h-[100vh] px-[6%] md:px-0 overflow-x-hidden  flex flex-col md:flex-row">
  <Sidebar />
  <Body />
</div>

  )
}

export default App
