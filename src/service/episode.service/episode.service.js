import axiosService from "../../service/axios.service/axios.service";
import {urls} from "../../urls/urls";

const episodeService = {
    getAll: (pageID) => axiosService.get(urls.episode + '?page=' + pageID).then(item => item.data)
}

export default episodeService