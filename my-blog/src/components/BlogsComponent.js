import Navbar from './widget/navbar';
import axios from 'axios';
import {useState,useEffect} from "react"
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

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

    // Delete
    const confirmDelete=(slug)=>{
        Swal.fire({
            title:"You really want to delete this blog?",
            icon:"warning",
            confirmButtonText: "Yes",
            showCancelButton:true
          }).then((result)=>{
            // when confirm
            if(result.isConfirmed){
                deleteBlog(slug)
            }
          })
    }

    const deleteBlog=(slug)=>{
        axios
        .delete(`${process.env.REACT_APP_API}/blog/${slug}`)
        .then(response=>{
            Swal.fire({
                icon: "success",
                title: response.data.message,
                showConfirmButton: false,
                timer: 1500
              });
            fetchData() //ให้มันอัพเดท
        }).catch(err=>console.log(err))
    }

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
                                <Link className='btn btn-outline-success' to={`/blog/edit/${blog.slug}`}> Edit </Link> &nbsp;
                                <button className='btn btn-outline-danger' onClick={()=>confirmDelete(blog.slug)}> Delete </button>


                            </div>

                        </div>
                    ))}

                </div>
            </div>
            
        </div>

    )
}
export default BlogsComponent;