import { useState } from "react";
import Navbar from "./widget/navbar";
import axios from "axios";
import Swal from "sweetalert2";

const BlogEdit=()=>{
    const [state,setState] = useState({
      title:"",
      content:"",
      author:""  
    })
    const {title,content,author} = state
    const inputValue = name => event => {
        //console.log(name,"=",event.target.value)
        setState({...state,[name]:event.target.value})
    }

    const submitData=(e)=>{
    //     // ทำให้ข้อมูลใน console ยังค้างอยู่ไม่หายไป
    //     e.preventDefault();
    //     console.log("API URL = ",process.env.REACT_APP_API)
    //     axios.post(`${process.env.REACT_APP_API}/create`,{title,content,author})
    //     .then(response=>{
    //         // alert("Succesfully Save data");
    //         Swal.fire({
    //             title: "Succesfully save data!",
    //             text: "You succesfully create The content!",
    //             icon: "success"
    //           });

    //         // กรณี sumbit แล้วจะเขียนอีกจะเคลียค่าที่เขียนให้
    //         // setState({...state,title:"",content:"",author:""})
    //     })
    //     .catch(err=>{
    //         // alert(err.response.data.error)
    //         Swal.fire({
    //             icon: "error",
    //             title: "Oops...",
    //             text: err.response.data.error
    //           });
    //     })

    }

    return (
        <div className="container p-5">
            <Navbar/>
            <div className="pt-5"></div>
            <div className="container p-5">
                <h1>Edit page</h1>
                
            </div>
        </div>

    )
}
export default BlogEdit;