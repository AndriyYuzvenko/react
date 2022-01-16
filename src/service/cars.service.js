import axios from "axios";
import axiosService from "./axioc.service";
import {urls} from "../url/url";

const CarsService = {
    create: (car) => axiosService.post(urls.cars,car).then(param => param.data),
    getAll: () => axiosService.get(urls.cars).then(param => param.data),
    getById: (id) => axiosService.get(`${urls.cars} ${id}`).then(param => param.data),
    upDataId: (id, car) => axiosService.patch(`${urls.cars}${id}`, car).then(param => param.data),
    deleteId: (id) => axiosService.delete(`${urls.cars}${id}`)
}

export const carsService = {
    CarsService
}