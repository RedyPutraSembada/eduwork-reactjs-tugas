import React from "react";
import { Container } from "react-bootstrap";
import Formel from "./Component/Formel";
import ShowErrors from "./Component/ShowErrors";

class FormValidasi extends React.Component {
    state = {
        error: []
    }

    handleError = (error) => {
        this.setState({error: error})
    }
    
    render() {
        return (
            <Container className="my-5">
                <h2>Form Registrasi</h2>
                <ShowErrors error={this.state.error}/>
                <Formel receiveError={this.handleError}/>
            </Container>
        )
    }
}

export default FormValidasi;