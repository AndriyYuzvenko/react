import './App.css';
import {Route, Routes} from "react-router-dom";
import Menu from "./components/menu/menu";
import HomePage from "./page/homePage/homePage";
import UsersPage from "./page/usersPage/usersPage";
import AlbumsPage from "./page/albumsPage/albumsPage";
import PhotosPage from "./page/PhotosPage/PhotosPage";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<Menu/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'users'} element={<UsersPage/>}>
                        <Route path={':id'} element={<AlbumsPage/>}>
                            <Route path={'albums'} element={<PhotosPage/>}/>
                        </Route>
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
