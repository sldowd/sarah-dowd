import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {

    return (
        <header>
            <Navbar fixed="top">
                <Navbar.Brand className="display:block" href="#home">Sarah Dowd</Navbar.Brand>
                <Nav className="justify-content-end flex-row flex-end">
                    <Nav.Item className="mx-2">
                        <Nav.Link as="div"><Link to="/">About</Link></Nav.Link>
                    </Nav.Item >
                    <Nav.Item className="mx-2">
                        <Nav.Link as="div"><Link to="/projects">Projects</Link></Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="mx-2">
                        <Nav.Link as="div"><Link to="/resume">Resume</Link></Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="mx-2">
                        <Nav.Link as="div"><Link to="/contact">Contact</Link></Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
        </header>
    );
}

export default Header;