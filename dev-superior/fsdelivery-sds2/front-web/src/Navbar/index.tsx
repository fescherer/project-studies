import './style.css';
import {ReactComponent as Logo} from './Logo.svg';
import { Link } from 'react-router-dom';

function Navbar(){
    return (
        <nav className = "main-navbar">
            <Logo></Logo>
            <Link to="/" className="logo-text">FS Delivery</Link>
        </nav>
    )
}

export default Navbar;