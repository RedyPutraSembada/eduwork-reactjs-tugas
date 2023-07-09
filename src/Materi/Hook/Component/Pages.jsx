import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Pages = (props) => {
    const [input, setInput] = useState(null);
    const [data, setData] = useState([]);


    useEffect(() => {
        setInput(props.input);
    }, [props.input]);

    useEffect(() => {
        let u = `https://newsapi.org/v2/top-headlines?`;
        let q = 'q=&';
        let c = `country=us&`;
        let ak = `apiKey=d4c14ef9e6504f48b095da1191dee657`;
        let api = `${u}${input != null ? `q=${input}&` : q}${c}${ak}`;
        axios.get(api)
            .then(function (response) {
                setData(response.data.articles);
            })
            .catch(function (error) {
                // handle error 
                console.log(error);
            })
            .finally(function () {
            });
    }, [input]);

    return (
        <Row>
            {
                data.map((item, i) => (
                    <Col key={`card-${i}`}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={`${item.urlToImage}`} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>
                                    {item.description}
                                </Card.Text>
                                <Link to={item.url} target="_blank"><Button>Read More</Button></Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))
            }
        </Row>
    )
}
export default Pages;