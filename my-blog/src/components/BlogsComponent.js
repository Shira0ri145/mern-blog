import Navbar from './widget/navbar';
import axios from 'axios';
import {useState,useEffect} from "react"
import { Link } from 'react-router-dom';

const BlogsComponent=()=>{
    const [blogs,setBlogs] = useState([])

    const fetchData=()=>{
        axios.get(`${process.env.REACT_APP_API}/blogs`)
        .then(response=>{
            setBlogs(response.data)
        })
        .catch(err=>alert(err));
    }
    useEffect(()=>{
        fetchData()
    },[])

    return (
        <div  className="container p-5">
            <Navbar />
            <div className="container p-5">
                <div className="container p-5">
                    <h1>Welcome to Blog</h1>
                    <a href="/create" className="btn btn-primary" >Create Blog</a>
                    {/* {JSON.stringify(blogs)} */}
                    {blogs.map((blog,index)=>(
                        <div className='row' key={{index}} style={{borderBottom:'1px solid silver'}}>
                            <div className='col pt-3 pb-2'>
                                <Link to={`/blog/${blog.slug}`} style={{ color: 'inherit' }}>
                                    <h2>
                                        {blog.title}
                                    </h2>
                                </Link>
                                <p>{blog.content.substring(0,180)} <p className='fw-bold' style={{display:'inline'}}>..อ่านต่อ</p></p>
                                <p className='text-muted'>Author : {blog.author} , date : {blog.createdAt}</p>

                            </div>

                        </div>
                    ))}

                </div>
            </div>
            
        </div>

    )
}
export default BlogsComponent;