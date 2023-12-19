import React from "react"

interface iHeaderProps {}

const Header:React.FC<iHeaderProps> = ({})=>{
    return (
        <div className="header">
            <img className="header-image" src="vite.svg" alt="header logo" />
            <h2 className="header-title">Meme Generator</h2>
            <h4 className="header-project">React Course - Meme Project</h4>
        </div>
    )
}

export default Header;