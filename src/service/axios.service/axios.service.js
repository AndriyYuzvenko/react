import axios from "axios";

import baseURL from "../../urls/cars.urls/cars.urls";
import baseURLPlaceholder from "../../urls/placeholder.urls/placeholder.urls"
const axiosService = axios.create({baseURL})

export const axiosServicePlaceholder=axios.create({baseURL:baseURLPlaceholder})

export default axiosService