import axios from "axios";
import React from "react";
import { Row } from "react-bootstrap";

export default class Konten extends React.Component {

    state = {
        u: `https://newsapi.org/v2/top-headlines?`,
        q: 'q=&',
        c: `country=us&`,
        ak: `apiKey=d4c14ef9e6504f48b095da1191dee657`,
    }

    componentDidMount() {
        let api = `${this.state.u}${this.state.q}${this.state.c}${this.state.ak}`;
        let row = document.getElementById('data');
        let col = '';
        axios.get(api)
            .then(function (response) {
                response.data.articles.forEach(data => {
                    col += `
                    <div class="col d-flex justify-content-center py-2">
                        <div class="card" style="width: 18rem;">
                            <img src="${data.urlToImage}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${data.title}</h5>
                                <p class="card-text">${data.description}</p>
                                <a href="${data.url}" class="btn btn-primary">Read More...</a>
                            </div>
                        </div>
                    </div>
                    `;
                });
                row.innerHTML = col;
            })
            .catch(function (error) {
                // handle error 
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }

    handleInput(input) {
        let api = `${this.state.u}${input}${this.state.c}${this.state.ak}`;
        let row = document.getElementById('data');
        let col = '';
        axios.get(api)
            .then(function (response) {
                response.data.articles.forEach(data => {
                    col += `
                    <div class="col d-flex justify-content-center py-2">
                        <div class="card" style="width: 18rem;">
                            <img src="${data.urlToImage}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${data.title}</h5>
                                <p class="card-text">${data.description}</p>
                                <a href="${data.url}" class="btn btn-primary">Read More...</a>
                            </div>
                        </div>
                    </div>
                    `;
                });
                row.innerHTML = col;
            })
            .catch(function (error) {
                // handle error 
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }

    render() {
        let input = this.props.input;
        if (input !== '') {
            this.handleInput(`q=${input}&`);
        }
        return (
            <Row id="data">
            </Row>
        )
    }
}