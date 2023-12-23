import memeData from "../../public/memesData.js";

const MemeForm: React.FC<any> = ({ setMeme }) => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
    setMeme({
      topText: event.target.text1.value,
      bottonText: event.target.text2.value,
      imageUrl:
        memeData.data.memes[
          Math.floor(Math.random() * memeData.data.memes.length)
        ].url,
    });
  };

  const changeTopText = (event:any)=>{
    setMeme((prevMeme:any)=>({...prevMeme, topText:event.target.value}))
  }

  const changeBottonText = (event:any)=>{
    setMeme((prevMeme:any)=>({...prevMeme, bottonText:event.target.value}))
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <input type="text" name="text1" id="text1" className="form-input" onChange={changeTopText}/>
      <input type="text" name="text2" id="text2" className="form-input" onChange={changeBottonText}/>
      <button type="submit" className="form-button">
        Get a new meme image 🖼
      </button>
    </form>
  );
};

export default MemeForm;
