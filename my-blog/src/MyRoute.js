import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from "./App"
import FromComponent from "./components/FormComponent"
import BlogsComponent from './components/BlogsComponent';
import BlogDetails from './components/BlogDetails';


const MyRoute=()=>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact Component={App}/>
                <Route path="/blogs" exact Component={BlogsComponent}/>
                <Route path="/create" exact Component={FromComponent}/>
                <Route path="/blog/:slug" exact Component={BlogDetails}/>
            </Routes>
        </BrowserRouter>
    )

    
}

export default MyRoute;