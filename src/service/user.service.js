import {urlsAll} from "../url/url";

const getUsers = () => {
    return fetch(urlsAll.users)
        .then(item => item.json())
}
export const usersService = {
    getUsers
}