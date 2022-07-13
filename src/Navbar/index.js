import logo from '../invert_santa.png';
import './index.css';
import React from 'react';
import {Link} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navb from 'react-bootstrap/Navbar';
function Navbar() {
    return <Navb bg="dark" expand="lg" variant="dark">
        <Navb.Brand as={Link} to="/">
            <img src={logo} width="100" height="100" alt="" style={{ borderRadius: '50%', marginLeft: '20px' }}></img>
        </Navb.Brand>
        <Navb.Toggle aria-controls="basic-navbar-nav" />
        <Navb.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
            </Nav>
        </Navb.Collapse>
    </Navb>
}
export default Navbar;