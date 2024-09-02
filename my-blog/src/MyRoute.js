import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from "./App"
import FromComponent from "./components/FormComponent"
import BlogComponent from './components/BlogComponent';


const MyRoute=()=>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact Component={App}/>
                <Route path="/blog" exact Component={BlogComponent}/>
                <Route path="/create" exact Component={FromComponent}/>
            </Routes>
        </BrowserRouter>
    )

    
}

export default MyRoute;