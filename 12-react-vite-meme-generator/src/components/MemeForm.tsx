import memeData from "../../public/memesData.js";

const MemeForm: React.FC<any> = ({ setMeme, meme }) => {

	const handleSubmit = (event: any) => {
		event.preventDefault();
		const n=Math.floor(Math.random() * memeData.data.memes.length);
		setMeme((prevValue:any)=>({...prevValue, imageUrl:memeData.data.memes[n].url}))
	};

	const handleChange = (event:any)=>{
		const {name, value} = event.target;
		setMeme((prevValue:any)=>({...prevValue, [name]:value}))
	}

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
