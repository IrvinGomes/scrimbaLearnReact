const MemeForm:React.FC<any> = ({setText})=>{
    
    const handleSubmit = (event:any)=>{
        event.preventDefault()
        const text1 = event.target.text1.value
        const text2 = event.target.text2.value
        setText(text1, text2)
    }
    return (
        <form onSubmit={handleSubmit} className="form">
            <input type="text" name="text1" id="text1" className="form-input"/>
            <input type="text" name="text2" id="text2" className="form-input"/>
            <button type="submit" className="form-button">Get a new meme image 🖼</button>
        </form>
    )
}

export default MemeForm;