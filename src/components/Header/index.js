import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function Header(props) {
    const {
        categories = [],
        setCurrentCategory,
        contactSelected,
        currentCategory,
        setContactSelected,
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
                        <Nav.Link href="#Projects" onClick={() => setContactSelected(true)}>Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="mx-2">
                        <Nav.Link href="#Resume" onClick={() => setContactSelected(true)}>Resume</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="mx-2">
                        <Nav.Link href="#Contact" onClick={() => setContactSelected(true)}>Contact</Nav.Link>
                    </Nav.Item>
                    {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === category.name && !contactSelected && 'navActive'
                }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                  setContactSelected(false);
                }}
              >
                {(category.name)}
              </span>
            </li>
          ))}
                </Nav>
            </Navbar>
        </header>
    );
}

export default Header;