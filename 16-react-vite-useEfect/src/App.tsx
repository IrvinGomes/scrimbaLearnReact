import { useEffect, useState } from 'react'
import './App.css'

function App() {

	const [starWarsData, setStarWarsData] = useState({})
	const [count, setCount] = useState(1)

  useEffect(()=>{
    fetch(`https://swapi.dev/api/people/${count}`)
      .then(res => res.json())
      .then(data => setStarWarsData(data))
	},[count])
	// dependency array - contain values that if they change will cause the effect to run
  // if the array is empty, it will cause the effect to run only once(when the page loads)

	return (
		<div className='app'>
      {starWarsData.name && <div className='app wrapper'>
        <h3>StartWars Character</h3>
        <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        <button onClick={()=>setCount(prevCount=>prevCount+1)}>Get Next Character</button>
      </div>}
		</div>
	)
}

export default App
