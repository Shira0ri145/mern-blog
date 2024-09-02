import { useState } from "react";
import Navbar from "./widget/navbar";

const FromComponent=()=>{
    const [state,setState] = useState({
      title:"",
      content:"",
      author:""  
    })
    const {title,content,author} = state
    const inputValue = name => event => {
        console.log(name,"=",event.target.value)
        setState({...state,[name]:event.target.value})
    }

    return (
        <div className="container p-5">
            <Navbar/>
            <div className="pt-5"></div>
            <div className="container p-5">
                <h1>FOrm page</h1>
                {JSON.stringify(state)}
                <form>
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
                    <input type="submit" value="Save" className="btn btn-primary" />
                    <a href="/blog" className="btn">ยกเลิก</a>
                </form>
            </div>
        </div>

    )
}
export default FromComponent;