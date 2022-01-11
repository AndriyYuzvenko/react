import './App.css';
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import Coments from "./components/Coments/Coments";

function App() {
    return (
        <>
            <div className="App">
                <Users/>
                <Posts/>
            </div>
            <Coments/>
        </>
    );
}

export default App;
