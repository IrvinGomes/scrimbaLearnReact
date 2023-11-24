const Header = ()=>{
	return (
		<nav className="header">
            <img src="./logo.png" alt="logo" width="50px" className="logo"/>
            <ul className="menu">
                <li className="menuItem">Pricing</li>
                <li className="menuItem">About</li>
                <li className="menuItem">Contact</li>
            </ul>
        </nav>
	)
}

const Content = ()=>{
	return (
		<div className="content">
			<h1>Reasons I'm excited to learn React</h1>
			<ul>
				<li>Most used js framework</li>
				<li>I work with it</li>
				<li>It pays me +100k yearly</li>
				<li>Need to learn more to be better developer</li>
			</ul>
		</div>
	)
}

const Footer = ()=>{
	return (
		<small className="footer">© 2023 Gomes development. All rights reserved.</small>
	)
}

const Page = ()=>{
    return (
        <div className="page">
            <Header/>
            <Content/>
            <Footer/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Page/>)
