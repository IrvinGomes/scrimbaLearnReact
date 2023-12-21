const MemeImage:React.FC<any> = ({text1, text2, memeImage}:any)=>{
    return (
        <div className="memeImage">
            <img src={memeImage.url} alt={memeImage.name} className="memeImage-img"/>
            <span className="memeImage-text1">
                {text1}
            </span>
            <span className="memeImage-text2">
                {text2}
            </span>
        </div>
    )
}

export default MemeImage;