import React from "react";

export default class ShowErrors extends React.Component{


    render() {
        return(
            <ul style={{ color: 'red' }}>
                {
                    this.props.error.map((error, i) => <li key={i}>{error}</li>)
                }
            </ul>
        )
    }
}