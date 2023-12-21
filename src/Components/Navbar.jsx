import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

const CustomNavbar = () => {
    const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded(!expanded);

  const handleLinkClick = () => setExpanded(false);
    
  return (
    <Navbar expanded={expanded} fixed="top" expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={handleLinkClick}>
          <strong>HindExpress</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" onClick={handleToggle}/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Item className="my-1 mx-2">
              <Nav.Link as={Link} to="/" onClick={handleLinkClick}>
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="my-1 mx-2">
              <Nav.Link as={Link} to="/business" onClick={handleLinkClick}>
                Business
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="my-1 mx-2">
              <Nav.Link as={Link} to="/entertainment" onClick={handleLinkClick}>
                Entertainment
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="my-1 mx-2">
              <Nav.Link as={Link} to="/health" onClick={handleLinkClick}>
                Health
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="my-1 mx-2">
              <Nav.Link as={Link} to="/science" onClick={handleLinkClick}>
                Science
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="my-1 mx-2">
              <Nav.Link as={Link} to="/sports" onClick={handleLinkClick}>
                Sports
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="my-1 mx-2">
              <Nav.Link as={Link} to="/technology" onClick={handleLinkClick}>
                Technology
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
