const page = (
    <div className="page">
        <img src="./logo.png" alt="logo" width="100px" style={{margin:"auto"}}/>
        <h1>React for Fun</h1>
        <ul>
            <li>Was fisrt released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100k stars on GitHub </li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(page)