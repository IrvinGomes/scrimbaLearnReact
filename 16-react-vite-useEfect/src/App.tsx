import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [starWarsData, setStarWarsData] = useState({})

  useEffect(()=>{
    fetch("https://swapi.dev/api/people/1")
      .then(res => res.json())
      .then(data => setStarWarsData(data))
  })

  return (
    <div>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  )
}

export default App
