import React from "react";
import { Container, Navbar } from "react-bootstrap";

export default class NB extends React.Component {
    render() {
        return (
            <Navbar bg="success" data-bs-theme="dark" >
                <Container>
                    <Navbar.Brand>App News Class Component(Lifecycle Components)</Navbar.Brand>
                </Container>
            </Navbar>
        )
    }
}