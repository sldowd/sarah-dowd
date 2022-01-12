import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function Header({handleSetActivePage}) {

    return (
        <header>
            <Navbar fixed="top">
                <Navbar.Brand className="display:block" href="#home"></Navbar.Brand>
                <Nav className="justify-content-end flex-row flex-end">
                    <Nav.Item className="mx-2">
                        <Nav.Link as="div" style={{ cursor: 'pointer' }} onClick={() => handleSetActivePage('about')}>About</Nav.Link>
                    </Nav.Item >
                    <Nav.Item className="mx-2">
                        <Nav.Link as="div" style={{ cursor: 'pointer' }} onClick={() => handleSetActivePage('projects')}>Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="mx-2">
                        <Nav.Link as="div" style={{ cursor: 'pointer' }} onClick={() => handleSetActivePage('resume')}>Resume</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="mx-2">
                        <Nav.Link as="div" style={{ cursor: 'pointer' }} onClick={() => handleSetActivePage('contact')}>Contact</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
        </header>
    );
}

export default Header;