import React from "react";
import NavBar from "./Component/NavBar";
import Slider from "./Component/Slider";
import Content from "./Component/Content";

export default class Portofolio extends React.Component {
    render() {
        return (
            <>
                <NavBar />
                <Slider />
                <Content />
            </>
        )
    }
}