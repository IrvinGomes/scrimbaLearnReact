import { useState } from "react";
import MemeForm from "./MemeForm";
import MemeImage from "./MemeImage";
import memeData from "../../public/memesData.js"

const Meme:React.FC<any> = ({})=>{
    const [text1, setText1] = useState('')
    const [text2, setText2] = useState('')
    const [memeImage, setMemeImage] = useState({})

    const changeImage = ()=>{
        const random = Math.floor(Math.random()*memeData.data.memes.length)
        setMemeImage(memeData.data.memes[random])
    }

    const setText = (firstText:string, secondText:string)=>{
       setText1(firstText)
       setText2(secondText)
       changeImage()
    }
    
    return (
        <main>
            <MemeForm setText={setText}/>
            <MemeImage text1={text1} text2={text2} memeImage={memeImage}/>
        </main>
    )
}

export default Meme;