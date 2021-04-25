import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function Header() {
    return (
        <header>
            <Navbar fixed="top">
                <Navbar.Brand href="#home">Sarah Dowd</Navbar.Brand>
                <Nav className="justify-content-end">
                    <Nav.Item>
                        <Nav.Link href="/About">About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/Portfolio">Portfolio</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/Resume">Resume</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/Contact">Contact</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
        </header>
    );
}

export default Header;