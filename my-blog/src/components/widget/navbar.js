import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar =()=>{
    return(
        <nav className="bg-nav fixed-top">
            <div className="nav-container">
                <Link className="navbar-logo" to="/">Mercuone Blog</Link>
                <ul className="navbar-list">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </div>
        </nav>
    )
}; export default Navbar