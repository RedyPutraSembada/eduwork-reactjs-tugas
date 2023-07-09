import React from "react";
import { Container } from "react-bootstrap";

export default class Home extends React.Component {
    render() {
        return (
            <Container className="d-flex justify-content-center py-5">
                <a href="/component" className="btn btn-primary p-3 m-3">Component Materi 19</a>
                <a href="/portofolio" className="btn btn-primary p-3 m-3">Styling Component Materi 20</a>
                <a href="/registrasi" className="btn btn-primary p-3 m-3">Form Validasi Materi 23</a>
                <a href="/berita" className="btn btn-primary p-3 m-3">Lifecycle Components Materi 24</a>
                <a href="/berita-function" className="btn btn-primary p-3 m-3">Function Components Materi 25</a>
                <a href="/redux" className="btn btn-primary p-3 m-3">Redux Materi 27</a>
            </Container>
        )
    }
}