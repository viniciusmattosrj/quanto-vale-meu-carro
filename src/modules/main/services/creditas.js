import Request from '@services/api'

const getBrands = async () => {
    try {
        const response = await Request.getBrands()
        return response.data
    }catch(e) {
        return e
    }
}

const getModels = async ( form ) => {
    try {
        const response = await Request.getModels(form)
        return response.data
    }catch(e) {
        return e
    }
}

const getYears = async ( form ) => {
    try {
        const response = await Request.getYears(form)
        const removeDuplicate =  [...new Set(response.data)].reverse()
        return removeDuplicate.sort().reverse()
    }catch(e) {
        return e
    }
}

const getVersions = async ( form ) => {
    try {
        const response = await Request.getVersions(form)
        return response.data
    }catch(e) {
        return e
    }
}

const getCar = async (form) => {
    try {
        const response = await Request.getCar(form)
        return response.data
    }catch(e) {
        return e
    }
}

const TYPES_REQUEST = {
    BRANDS: "Brands",
    MODELS: "Models",
    VERSIONS: "Versions",
    YEARS: "Years",
    CAR_DETAIL: "CarDetail",
}

export { getBrands, getModels, getYears, getVersions, getCar, TYPES_REQUEST }