const Box:React.FC<any> = ({on, handleBoxClick})=>{
    return (
        <button onClick={handleBoxClick} className={`box${on?" box-true":""}`}></button>
    )
}

export default Box;