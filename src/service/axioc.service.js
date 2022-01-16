import axios from "axios";
import urlApi from "../url/url";

const axiosService = axios.create({
    baseURL: urlApi
});

export default axiosService