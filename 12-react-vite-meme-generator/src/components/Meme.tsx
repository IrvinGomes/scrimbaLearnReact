import { useState } from "react";
import MemeForm from "./MemeForm";
import MemeImage from "./MemeImage";

const Meme:React.FC<any> = ()=>{

    const [meme, setMeme] = useState({
        topText:"",
        bottonText:"",
        imageUrl:""
    })

    return (
        <main>
            <MemeForm setMeme={setMeme} meme={meme}/>
            <MemeImage meme={meme}/>
        </main>
    )
}

export default Meme;