import { useState } from "react"
import { Form, InputGroup } from "react-bootstrap";

const SR = (props) => {
    let [value, setValue] = useState('');

    return (
        <InputGroup className="my-3" >
            <Form.Control
                placeholder="Search"
                aria-label="Search"
                aria-describedby="basic-addon1"
                onChange={e => setValue(value = e.target.value, props.input(value))}
            />
        </InputGroup>
    )
}

export default SR;