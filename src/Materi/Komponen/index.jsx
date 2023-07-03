import React from "react";
import ClassComponent from "./Pembahasan/ClassComponent";
import FunctionalComponent from "./Pembahasan/FunctionalComponent";

class Komponen extends React.Component {
    render() {
        return (
            <>
                <ClassComponent />
                <FunctionalComponent namaDepan="Redy Putra" namaBelakang="Sembada" />
            </>
        )
    }
}
export default Komponen;