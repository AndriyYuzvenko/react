import {useState} from "react";

import './App.css';
import Cars from "./components/Cars/Cars";
import Form from "./components/Form/Form";

function App() {
    const [car, setCar] = useState(null)

    const upDate = value => {
        setCar(value)
    }

    return (
        <div className="App">
            <Form upDate={upDate}/>
            <Cars car={car} upDate={upDate}/>
        </div>
    );
}

export default App;
