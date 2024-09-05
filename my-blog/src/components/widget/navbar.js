import '../Styles/navbar.css';
import { Link,useNavigate } from 'react-router-dom';
import { getUser,logout } from '../../service/authorize';

const Navbar =()=>{
    const navigate = useNavigate();
    return(
        <nav className="bg-nav fixed-top">
            <div className="nav-container">
                <Link className="navbar-logo" to="/">Mercuone Blogs</Link>
                <ul className="navbar-list">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/blogs">Blogs</Link></li>
                    <li><Link to="/about">About</Link></li>
                    {
                        !getUser() && (
                            <li><Link to="/login" className='btn btn-outline-light px-4'> Login </Link></li>
                        )
                    }
                    {
                        getUser() && (
                            <li><button className='btn btn-outline-light px-4' onClick={()=>logout(()=>navigate("/"))}> Logout </button></li>
                        )
                    }
                    
                </ul>
            </div>
        </nav>
    )
}; export default Navbar