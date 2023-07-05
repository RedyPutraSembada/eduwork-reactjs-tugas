import React from "react";
import { Form, InputGroup } from "react-bootstrap";

export default class Search extends React.Component {

    state = {
        input: ''
    }



    render() {
        return (
            <InputGroup className="my-3" >
                <Form.Control
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="basic-addon1"
                    onChange={e => this.setState({ input: e.target.value }, e => this.props.input(this.state.input))} value={this.state.name}
                />
            </InputGroup>
        )
    }
}