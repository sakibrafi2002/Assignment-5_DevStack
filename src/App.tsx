import { useEffect, useState } from 'react';
import './App.css'
import Navbar from './components/shared/Navbar'
import type { ITechnology } from './utils/types'
import Technologies from './components/ui/technologies/Technologies';

function App() {
  const [data, setData] = useState<ITechnology[]>([])

  useEffect(()=> {
    fetch("/data.json").then((res) => res.json()).then((res) => setData(res))
  }, [])
  
  return (
    <>
      <Navbar></Navbar>
      <Technologies data={data}></Technologies>
    </>
  )
}

export default App
