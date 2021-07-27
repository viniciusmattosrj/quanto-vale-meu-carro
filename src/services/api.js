import axios from "axios"
import { API_URL } from '@config/enviroments'

const requestInstance  = axios.create({ baseURL: API_URL })
const getBrands = () => {
    return requestInstance.get(`/brands`);
}

const getModels = ({ brand }) => {
    if (!brand) {
        throw new Error('Brand is required')
    } 
    return requestInstance.get(`/brands/${brand}/models`)
}

const getYears = ({ brand, model }) => {
    if (!brand  || !model){
        throw new Error('Missing required fields')
    } 
    return requestInstance.get(`/brands/${brand}/models/${model}/years`)
}

const getVersions = ({ brand, model, year }) => {
    if (!year) {
        throw new Error('Year is required')
    }
    return requestInstance.get(`/brands/${brand}/models/${model}/years/${year}/versions`)
}

const getCar = ({ brand, model, year, version }) => {
    if (!version) {
        throw new Error('VersionId is required')
    }
    return requestInstance.get(`/brands/${brand}/models/${model}/years/${year}/versions/${version}`)
}

const Request = {
    getBrands, getModels, getYears, getVersions, getCar
}

export default Request