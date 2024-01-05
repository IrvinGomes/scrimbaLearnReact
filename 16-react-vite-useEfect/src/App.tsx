import { useEffect, useState } from 'react'
import './App.css'

function App() {

	const [starWarsData, setStarWarsData] = useState({})
	const [count, setCount] = useState(1)

	console.log('render outside')

  useEffect(()=>{
    console.log('render inside')

    fetch(`https://swapi.dev/api/people/${count}`)
      .then(res => res.json())
      .then(data => setStarWarsData(data))
	},[count])
	//dependency array - contain values that if they change will cause the effect to run

	return (
		<div>
			<pre>{JSON.stringify(starWarsData, null, 2)}</pre>
			<h3>the count {count}</h3>
			<button onClick={()=>setCount(prevCount=>prevCount+1)}>add</button>
		</div>
	)
}

export default App
