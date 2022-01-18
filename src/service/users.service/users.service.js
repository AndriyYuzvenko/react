import axiosService from "../axios.service/axios.service";
import {urls} from "../urls/urls";

const usersService = {
    getAll: () => axiosService.get(urls.users).then(item => item.data),
    getById: (id) => axiosService.get(`${urls.users}/${id}`).then(item => item.data)
}
export default usersService