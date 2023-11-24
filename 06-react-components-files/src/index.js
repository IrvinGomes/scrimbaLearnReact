import ReactDOM from 'react-dom/client';
import './index.css'
import Header from './components/header';
import Footer from './components/footer';
import Content from './components/content';

const Page = ()=>{
    return (
        <div className="page">
			<Header />
            <Content/>
            <Footer/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Page/>)
