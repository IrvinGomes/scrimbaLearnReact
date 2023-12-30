const Box:React.FC<any> = ({id, on, handleBoxClick})=>{
    const handleClick = ()=>{
        handleBoxClick(id)
    }
    return (
        <div onClick={handleClick} className={`box${on?" box-true":""}`}></div>
    )
}

export default Box;