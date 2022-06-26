import React, { useEffect, useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link, useNavigate } from "react-router-dom";

const TopNavBar = () => {

    const [login, SetLogin] = useState([Boolean(localStorage.getItem('authToken'))]);
    // let navigate=useNavigate();
    const handleLogout = () => {
        SetLogin(false)
        localStorage.removeItem("authToken");
        // navigate('/');
    }

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
                    <Navbar.Brand>Handlooms.com</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">

                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Item>
                                <Link to="/home" >Home</Link>
                            </Nav.Item>
                        </Nav>

                        <Nav>
                            <Nav.Item>
                                <Link to="/cart"><img src="https://img.icons8.com/ios-glyphs/30/000000/shopping-cart--v1.png" alt="cart" id="cart" /></Link>
                            </Nav.Item>
                        </Nav>

                        {
                            login ?
                                <NavDropdown className="d-flex mx-5" title="Profile" id="nav-dropdown">
                                    <NavDropdown.Item eventKey="4.4" onClick={handleLogout}>Logout</NavDropdown.Item>
                                </NavDropdown>
                                :
                                <div onClick={() => {
                                    SetLogin(true)
                                }}><Link className="mx-5" to="/login"><p className="mx-5" id='login'>Login</p></Link></div>
                        }

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default TopNavBar