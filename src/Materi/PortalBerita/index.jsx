import React from "react";
import { Container } from "react-bootstrap";
import NavBar from "./Component/NB";
import Search from "./Component/Search";
import Konten from "./Component/Konten";

export default class PortalBerita extends React.Component {
    state = {
        input: ''
    }

    getSrc = (input) => {
        this.setState({ input: input });
    }

    render() {
        return (
            <>
                <NavBar />
                <Container>
                    <Search input={this.getSrc} />
                    <Konten input={this.state.input} />
                </Container>
            </>
        )
    }
}