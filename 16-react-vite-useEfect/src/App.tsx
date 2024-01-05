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
		<div>
			<pre>{JSON.stringify(starWarsData, null, 2)}</pre>
			<h3>the count {count}</h3>
			<button onClick={()=>setCount(prevCount=>prevCount+1)}>add</button>
		</div>
	)
}

export default App
