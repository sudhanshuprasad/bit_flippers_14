import React, { useEffect, useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link } from "react-router-dom";

const TopNavBar = () => {

    const [login, SetLogin] = useState([Boolean(localStorage.getItem('authToken'))]);
    const handleLogout = () => {
        SetLogin(false)
        localStorage.removeItem("authToken");
    }


    //check if user has already logged in
    useEffect(() => {
        if (Boolean(localStorage.getItem('authToken'))) {
            SetLogin(true);
        }
        else {
            SetLogin(false);
        }
    }, [])

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

                        <Nav>
                            <Nav.Item>
                                <Link to="/cart"><img src="https://img.icons8.com/ios-glyphs/30/000000/shopping-cart--v1.png" alt="cart" id="cart"/></Link>
                            </Nav.Item>
                        </Nav>

                        <NavDropdown className="d-flex mx-5" title="Profile" id="nav-dropdown">
                            <NavDropdown.Item eventKey="4.1">Go</NavDropdown.Item>
                            <NavDropdown.Item eventKey="4.2">to</NavDropdown.Item>
                            <NavDropdown.Item eventKey="4.3">hell</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item eventKey="4.4" onClick={handleLogout}>Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default TopNavBar