import { useState } from "react";

const FunctionalComponent = ({ namaBelakang, namaDepan }) => {
    const [value, setValue] = useState(0);

    const handlePlus = () => {
        setValue(value + 1);
    }

    const handleMinus = () => {
        setValue(value - 1);
    }


    return (
        <>
            <h3>Selamat Datang {namaDepan} {namaBelakang}, ini adalah komponent bagian Functional Component</h3>
            <button onClick={handleMinus}> - </button>
            <span> {value} </span>
            <button onClick={handlePlus}> + </button>
        </>
    )
}

export default FunctionalComponent;