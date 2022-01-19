import axiosService from "../axios.service/axios.service";
import {urls} from "../../urls/urls";

const photosService = {
    getAll: () => axiosService.get(urls.photos).then(item => item.data)
}
export default photosService