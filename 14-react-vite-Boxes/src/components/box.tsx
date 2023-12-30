const Box:React.FC<any> = ({on, handleBoxClick})=>{
    return (
        <div onClick={handleBoxClick} className={`box${on?" box-true":""}`}></div>
    )
}

export default Box;