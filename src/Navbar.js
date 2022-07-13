import logo from './images/invert_santa.png';
import './App.css';
import React from 'react';
import {Link} from "react-router-dom";
function Navbar() {
    return <nav className="navbar navbar-dark bg-dark navbar-expand">
        <a className="navbar-brand" href="#">
            <img src={logo} width="100" height="100" alt="" style={{ borderRadius: '50%', marginLeft: '20px' }}></img>
        </a>
        <div className="navbar-collapse collapse">
            <ul className='navbar-nav ms-auto'>
                <li className="nav-item"><Link className="nav-link" to='/'>Home</Link></li>
                <li className="nav-item"><Link className="nav-link" to='/about'>About me</Link></li>
                <li className="nav-item"><Link className="nav-link" to='/contact'>Contact me</Link></li>
            </ul>
        </div>
    </nav>
}
export default Navbar;