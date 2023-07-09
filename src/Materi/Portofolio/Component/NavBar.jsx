import React from "react";
import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import logo from "./../../../assets/img/edwork.png";

export default class NavBar extends React.Component {
    render() {
        return (
            <Navbar bg="light" data-bs-theme="light" collapseOnSelect expand="lg" className="">
                <Container>
                    <Navbar.Brand href=""><img src={logo} alt="logo" width="80" height="30" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto" />
                        <Nav>
                            <Nav.Link >Home</Nav.Link>
                            <NavDropdown title="Menu" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link >Login</Nav.Link>
                            <Nav.Link ><Button className="btn btn-primary">Register</Button></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}