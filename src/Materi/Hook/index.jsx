import { Container } from "react-bootstrap";
import NBR from "./Component/NBR"
import SR from "./Component/SR";
import { useState } from "react";
import Pages from "./Component/Pages";

const NewsFunction = () => {
    let [input, setInput] = useState('');

    const handleInput = (value) => {
        setInput(input = value);
        console.log(input);
    };
    return (
        <>
            <NBR />
            <Container>
                <SR input={handleInput} />
                <Pages input={input} />
            </Container>
        </>
    )
}

export default NewsFunction;