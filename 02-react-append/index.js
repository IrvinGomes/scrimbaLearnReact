const page = (
    <div>
        <h1>My test to append</h1>
        <h3>Will this append?</h3>
        <ol>
            <li>yes</li>
            <li>no</li>
        </ol>
    </div>
);

// const root =  ReactDOM.createRoot(document.getElementById('root'));
// root.render(page)
const root = document.getElementById('root')
root.append(JSON.stringify(page))
//always returns as pure js, so append can't render the js