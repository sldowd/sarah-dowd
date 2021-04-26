import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function Header(props) {
    const {
        contactSelected,
        setContactSelected
    } = props;

    return (
        <header>
            <Navbar fixed="top">
                <Navbar.Brand className="display:block" href="#home">Sarah Dowd</Navbar.Brand>
                <Nav className="justify-content-end flex-row flex-end">
                    <Nav.Item className="mx-2">
                        <Nav.Link href="#about" onClick={() => setContactSelected(false)}>About</Nav.Link>
                    </Nav.Item >
                    <Nav.Item className="mx-2">
                        <Nav.Link href="#Portfolio">Portfolio</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="mx-2">
                        <Nav.Link href="#Resume">Resume</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="mx-2">
                        <Nav.Link href="#Contact" onClick={() => setContactSelected(true)}>Contact</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
        </header>
    );
}

export default Header;