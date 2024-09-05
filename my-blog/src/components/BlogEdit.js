import { useEffect, useState } from "react";
import Navbar from "./widget/navbar";
import axios from "axios";
import Swal from "sweetalert2";
import { useParams } from 'react-router-dom';
import { getToken } from "../service/authorize";

const BlogEdit=()=>{
    const { slug } = useParams();
    const [state,setState] = useState({
      title:"",
      content:"",
      author:"",
      slug:""
    })
    const {title,content,author} = state
    const inputValue = name => event => {
        //console.log(name,"=",event.target.value)
        setState({...state,[name]:event.target.value})
    }
    
    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API}/blog/${slug}`)
            .then(response => {
                const {title,content,author,slug} = response.data
                setState(prevState => ({...prevState, title, content, author, slug}))
            })
            .catch(err => {
                alert.error(err); // แสดงข้อผิดพลาดใน console แทนการใช้ alert
            });
    }, [slug]); // รวม slug เป็น dependency ของ useEffect

    const showUpdateForm=()=>{
        return(
            <form onSubmit={submitData}>  {/*Callback to sumbitData func*/}
            <div className="form-group">
                <label>Title name</label>
                <input type="text" className="form-control" value={title} onChange={inputValue("title")}/>
            </div>
            <div className="form-group">
                <label>Detail</label>
                <textarea className="form-control" value={content} onChange={inputValue("content")}></textarea>
            </div>
            <div className="form-group">
                <label>Author name</label>
                <input type="text" className="form-control" value={author} onChange={inputValue("author")}/>
            </div>
            <br/>
            <input type="submit" value="Update" className="btn btn-primary" />
            <a href="/blogs" className="btn">ยกเลิก</a>
        </form>
        )

    }
    

    const submitData=(e)=>{
         // ทำให้ข้อมูลใน console ยังค้างอยู่ไม่หายไป
         e.preventDefault();
         console.log("API URL = ",process.env.REACT_APP_API)
         axios
         .put(`${process.env.REACT_APP_API}/blog/${slug}`,{title,content,author},
            {
                headers:{
                    Authorization:`Bearer ${getToken()}`
                }
            })
         .then(response=>{
             // alert("Succesfully Save data");
             Swal.fire({
                 title: "Succesfully save data!",
                 text: "You succesfully create The content!",
                 icon: "success"
               });
                const {title,content,author,slug} = response.data
                // กรณี sumbit แล้วจะเขียนอีกจะเคลียค่าที่เขียนให้
                setState({...state,title,content,author,slug})
         })
         .catch(err=>{
             // alert(err.response.data.error)
             Swal.fire({
                 icon: "error",
                 title: "Oops...",
                 text: err.response.data.error
               });
         })

    }

    return (
        <div className="container p-5">
            <Navbar/>
            <div className="pt-5"></div>
            <div className="container p-5">
                <h1>Edit page</h1>
                {showUpdateForm()}
                
                
                
            </div>
        </div>

    )
}
export default BlogEdit;