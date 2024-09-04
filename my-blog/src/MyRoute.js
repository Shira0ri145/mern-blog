import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from "./App"
import FromComponent from "./components/FormComponent"
import BlogsComponent from './components/BlogsComponent';
import BlogDetails from './components/BlogDetails';
import BlogEdit from './components/BlogEdit';


const MyRoute=()=>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact Component={App}/>
                <Route path="/blogs" exact Component={BlogsComponent}/>
                <Route path="/create" exact Component={FromComponent}/>
                <Route path="/blog/:slug" exact Component={BlogDetails}/>
                <Route path='/blog/edit/:slug' exact Component={BlogEdit}/>
            </Routes>
        </BrowserRouter>
    )

    
}

export default MyRoute;