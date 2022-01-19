import './App.css';
import {Route, Routes} from "react-router-dom";
import Menu from "./components/Menu/Menu";
import HomePage from "./page/HomePage/HomePage";
import UsersPage from "./page/UsersPage/UsersPage";
import AlbumsPage from "./page/AlbumsPage/AlbumsPage";
import PhotosPage from "./page/PhotosPage/PhotosPage";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<Menu/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'users'} element={<UsersPage/>}>
                        <Route path={':id/albums'} element={<AlbumsPage/>}>
                            <Route path={':albumId/photos'} element={<PhotosPage/>}/>
                        </Route>
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
