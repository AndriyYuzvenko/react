import './App.css';
import Cars from "./components/Cars/Cars";
import Form from "./components/Form/Form";
import {useState} from "react";
import {carsService} from "./service/cars.service";

function App() {
    const [car,setCar]=useState(null)

    const upDate=value=>{
        setCar(value)
    }

    const deleteCar =(car) => {
        console.log(car)
    }
    return (
        <div className="App">
            <Form upDate={upDate}/>
            <Cars car={car} deleteCar={deleteCar}/>
        </div>
    );
}

export default App;
