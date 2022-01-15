import './App.css';
import Forms from "./components/Forms/Forms";
import Users from "./components/Users/Users";
import {usersService} from "./service/user.service";
import {useEffect, useState} from "react";

function App() {
    const [users, setUsers] = useState([])
    const [filterUsers, setFilterUsers] = useState([])
    useEffect(() => {
        usersService.getUsers()
            .then(item => {
                setUsers(item)
                setFilterUsers(item)
            })
    }, [])
    const getFilter = (item) => {
        let filterArray = [...users]
        console.log(item)
        if (item.name) {
            filterArray = filterArray.filter(user => user.name.toLowerCase().includes(item.name.toLowerCase()))
        }
        if (item.username) {
            filterArray = filterArray.filter(user => user.username.toLowerCase().includes(item.username.toLowerCase()))
        }
        if (item.email) {
            filterArray = filterArray.filter(user => user.email.toLowerCase().includes(item.email.toLowerCase()))
        }
        setFilterUsers(filterArray)
    }
    return (
        <div className="App">
            <Forms getFilter={getFilter}/>
            <Users users={filterUsers}/>
        </div>
    );
}

export default App;
