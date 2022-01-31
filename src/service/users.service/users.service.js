import {axiosServicePlaceholder} from "../axios.service/axios.service";
import {urlsPlaceholder} from "../../urls/placeholder.urls/placeholder.urls";

export const usersService = {
    getUsers: () => axiosServicePlaceholder.get(urlsPlaceholder.users).then(item => item.data)
}