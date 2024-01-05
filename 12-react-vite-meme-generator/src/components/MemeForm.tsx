import { useEffect, useState } from "react";

const MemeForm: React.FC<any> = ({ setMeme, meme }) => {

	const [memeData, setMemeData] = useState([])

	const handleSubmit = (event: any) => {
		event.preventDefault();
		const n=Math.floor(Math.random() * memeData.length);
		setMeme((prevValue:any)=>({...prevValue, imageUrl:memeData[n].url}))
	};

	const handleChange = (event:any)=>{
		const {name, value} = event.target;
		setMeme((prevValue:any)=>({...prevValue, [name]:value}))
	}

	useEffect(()=>{
		fetch("https://api.imgflip.com/get_memes")
			.then(res=>res.json())
			.then(data => setMemeData(data.data.memes))
	},[])

	return (
		<form onSubmit={handleSubmit} className="form">
			<input type="text" name="topText" id="topText" value={meme.topText} className="form-input" onChange={handleChange}/>
			<input type="text" name="bottonText" id="bottonText" value={meme.bottonText} className="form-input" onChange={handleChange}/>
			<button type="submit" className="form-button">
				Get a new meme image 🖼
			</button>
		</form>
	);
};

export default MemeForm;
