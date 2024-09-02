import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from "./App"
import FromComponent from "./components/FormComponent"
import BlogsComponent from './components/BlogsComponent';


const MyRoute=()=>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact Component={App}/>
                <Route path="/blogs" exact Component={BlogsComponent}/>
                <Route path="/create" exact Component={FromComponent}/>
            </Routes>
        </BrowserRouter>
    )

    
}

export default MyRoute;