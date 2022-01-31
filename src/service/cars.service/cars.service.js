import axiosService from "../axios.service/axios.service";
import {urlsCars} from "../../urls/cars.urls/cars.urls";

export const carsService = {
    getAll: () => axiosService.get(urlsCars.cars).then(item => item.data),
    create: (car) => axiosService.post(`${urlsCars.cars}`, car).then(item => item.data),
    deleteCar: (id) => axiosService.delete(`${urlsCars.cars}/${id}`)
}
