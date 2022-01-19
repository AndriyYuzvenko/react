import axiosService from "../axios.service/axios.service";
import {urls} from "../../urls/urls";

const albumsService = {
    getAll: () => axiosService.get(urls.albums).then(item => item.data)
}
export default albumsService