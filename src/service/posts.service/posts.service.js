import {axiosServicePlaceholder} from "../axios.service/axios.service";
import {urlsPlaceholder} from "../../urls/placeholder.urls/placeholder.urls";

export const postsService = {
    getPost: () => axiosServicePlaceholder.get(urlsPlaceholder.posts).then(item => item.data)
}