import './App.css';
import {Route, Routes} from "react-router-dom";
import Menu from "./page/Menu/Menu";
import EpisodePage from "./page/EpisodePage/EpisodePage";
import CharactersPAge from "./page/CharactersPage/CharactersPAge";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<Menu/>}>
                    <Route index element={<EpisodePage/>}/>
                    <Route path={`episode/:id`} element={<CharactersPAge/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
