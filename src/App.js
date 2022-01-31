import {Route, Routes} from "react-router-dom";

import './App.css';
import Menu from "./components/Menu/Menu";
import HomePage from "./Page/HomePage/HomePage";
import CarsPage from "./Page/CarsPage/CarsPage";
import UsersPage from "./Page/Userspage/UsersPage";
import PostPage from "./Page/PostsPage/PostPage";
import CommentsPage from "./Page/CommentsPage/CommentsPage";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<Menu/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'cars'} element={<CarsPage/>}/>
                    <Route path={'users'} element={<UsersPage/>}/>
                    <Route path={'posts'} element={<PostPage/>}/>
                    <Route path={'comments'} element={<CommentsPage/>}/>
                </Route>
            </Routes>

        </div>
    );
}

export default App;
