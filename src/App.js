import {Route, Routes} from "react-router-dom";

import './App.css';
import HomePage from "./pages/HomePage/HomePage";
import Menu from "./components/Menu/Menu";
import UsersPage from "./pages/UsersPage/UsersPage";
import PostsPage from "./pages/PostsPage/PostsPage";
import UserDetailsPage from "./pages/UserDetailsPage/UserDetailsPage";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<Menu/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'users'} element={<UsersPage/>}>
                        <Route path={':id'} element={<UserDetailsPage/>}>
                            <Route path={'posts'} element={<PostsPage/>}/>
                        </Route>
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
