import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

function logout(){
    console.log("logout")
}

const TopNavBar = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">Handlooms.com</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Item>
                                Home
                            </Nav.Item>
                        </Nav>
                            <NavDropdown className="d-flex mx-5" title="Dropdown" id="nav-dropdown">
                                <NavDropdown.Item eventKey="4.1">Go</NavDropdown.Item>
                                <NavDropdown.Item eventKey="4.2">to</NavDropdown.Item>
                                <NavDropdown.Item eventKey="4.3">hell</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item eventKey="4.4" onClick={logout}>Logout</NavDropdown.Item>
                            </NavDropdown>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default TopNavBar