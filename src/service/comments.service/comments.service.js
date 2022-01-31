import {axiosServicePlaceholder} from "../axios.service/axios.service";
import {urlsPlaceholder} from "../../urls/placeholder.urls/placeholder.urls";

export const commentsService = {
    getComments: () => axiosServicePlaceholder.get(urlsPlaceholder.comments).then(item => item.data)
}