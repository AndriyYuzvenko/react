import axiosService from "../axios.service/axios.service";
import {urls} from "../../urls/urls";

const charactersService = {
    getAll: (getId) => axiosService.get(urls.character+'?page='+getId).then(item => item.data)
}
export default charactersService