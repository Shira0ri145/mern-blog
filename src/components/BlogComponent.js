import Navbar from './widget/navbar';

const BlogComponent=()=>{
    return (
        <div  className="container p-5">
            <Navbar />
            <div className="container p-5">
                <div className="container p-5">
                    <h1>Welcome to Blog</h1>
                    <a href="/create" className="btn btn-primary" >Create Blog</a>

                </div>
            </div>
            
        </div>

    )
}
export default BlogComponent;