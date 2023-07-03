import React from "react";

class ClassComponent extends React.Component {
    state = {
        value: 0
    }

    handlePlus = () => {
        this.setState({ value: this.state.value + 1 });
    }

    handleMinus = () => {
        if (this.state.value > 0) {
            this.setState({ value: this.state.value - 1 });
        }
    }


    render() {
        return (
            <>
                <h3>Selamat datang {this.props.namaDepan} {this.props.namaBelakang}, ini adalah komponent bagian Class Component</h3>
                <button onClick={this.handleMinus}> - </button>
                <span> {this.state.value} </span>
                <button onClick={this.handlePlus}> + </button>
            </>
        );
    }
}

ClassComponent.defaultProps = {
    namaDepan: "Users",
    namaBelakang: "Default"
}

export default ClassComponent;