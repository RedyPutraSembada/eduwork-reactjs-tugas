import React from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import * as Validator from "validatorjs";

class Formel extends React.Component {
    state = {
        name: "",
        email: "",
        password: "",
        nohp: "",
        gender: "",
        alamat: "",
        errors: []
    }

    async handleEror(validation) {

        validation.passes();
        await this.setState({
            errors: [
                ...validation.errors.get('name'),
                ...validation.errors.get('email'),
                ...validation.errors.get('password'),
                ...validation.errors.get('nohp'),
                ...validation.errors.get('gender'),
                ...validation.errors.get('alamat'),
            ]
        }, () => this.props.receiveError(this.state.errors));

        if (this.state.errors.length === 0) {
            alert(`
            Nama = ${this.state.name}
            Email = ${this.state.email}
            Password = ${this.state.password}
            NoHp = ${this.state.nohp}
            Gender = ${this.state.gender}
            Alamat = ${this.state.alamat}
            `);

            this.setState({
                name: "",
                email: "",
                password: "",
                nohp: "",
                gender: "",
                alamat: "",
                errors: []
            });
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, password, nohp, gender, alamat } = this.state;

        let data = { name, email, password, nohp, gender, alamat };

        let rules = {
            name: 'required',
            email: 'required|email',
            password: 'min:8|required',
            nohp: 'required|numeric',
            gender: 'required',
            alamat: 'required'
        }

        let validation = new Validator(data, rules);
        this.handleEror(validation);

    }
    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Nama :</Form.Label>
                    <Form.Control type="text" placeholder="Masukan Nama..." name="nama" onChange={e => this.setState({ name: e.target.value })} value={this.state.name} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email :</Form.Label>
                    <Form.Control type="email" placeholder="Masukan email" name="email" onChange={e => this.setState({ email: e.target.value })} value={this.state.email} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password :</Form.Label>
                    <Form.Control type="password" placeholder="Password..." name="password" onChange={e => this.setState({ password: e.target.value })} value={this.state.password} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>No Hp :</Form.Label>
                    <Form.Control type="number" placeholder="Masukan No Hp..." name="nohp" onChange={e => this.setState({ nohp: e.target.value })} value={this.state.nohp} />
                </Form.Group>

                <Form.Select aria-label="Default select example" name="gender" onChange={e => this.setState({ gender: e.target.value })} value={this.state.gender}>
                    <option>~ Jenis Kelamin ~</option>
                    <option value="Laki-laki">Laki - Laki</option>
                    <option value="Wanita">Wanita</option>
                </Form.Select>

                <FloatingLabel controlId="floatingTextarea2" className="my-2" label="Masukan Alamat Anda...">
                    <Form.Control
                        as="textarea"
                        placeholder="Masukan Alamat Anda..."
                        style={{ height: '100px' }}
                        name="alamat"
                        onChange={e => this.setState({ alamat: e.target.value })}
                        value={this.state.alamat}
                    />
                </FloatingLabel>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        )
    }
}

export default Formel;