import {urlsAll} from "../urls/users";

const getUsers = () => {
    return fetch(urlsAll.users)
        .then(item => item.json())
}
const getById = (id) => {
    return fetch(`${urlsAll.users}/${id}`)
        .then(item => item.json())
}
export const usersService = {
    getUsers, getById
}