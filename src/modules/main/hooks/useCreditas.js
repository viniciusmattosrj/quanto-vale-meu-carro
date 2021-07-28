import { useState, useCallback } from 'react'
import Request from '@services/api'

const useCreditas = () => {
    const [ loading, setLoading ] = useState(false)
    const [ brands, setBrands ] = useState([])
    const [ models, setModels ] = useState([])
    const [ years, setYears ] = useState([])
    const [ versions, setVersions ] = useState([])
    const [ car, setCar ] = useState(null)  
    const [ errors, setErrors ] = useState(null)
    const getBrands = useCallback(async () => {
        try {
            const response = await Request.getBrands()
            setBrands(response.data)
        }catch(e) {
            setErrors(e.message)
        }
    }, []) 

    const getModels = useCallback(async ( form ) => {
        try {
            const response = await Request.getModels(form)
            setModels(response.data)
        }catch(e) {
            setErrors(e.message)
        }
    }, []) 

    const getYears = useCallback(async ( form ) => {
        try {
            const response = await Request.getYears(form)
            const removeDuplicate =  [...new Set(response.data)].reverse()
            setYears(removeDuplicate)
        }catch(e) {
            setErrors(e.message)
        }
    }, []) 

    const getVersions = useCallback(async ( form ) => {
        try {
            const response = await Request.getVersions(form)
            setVersions(response.data)
        }catch(e) {
            setErrors(e.message)
        }
    }, [])

    const getCar = useCallback(async (form) => {
        try {
            setLoading(true);
            const response = await Request.getCar(form)
            setLoading(false);
            setCar(response.data)
        }catch(e) {
            setErrors(e.message)
        }
    }, [])

    const clearCar = () => {
        setCar(null)
    }
    
    return { 
        getBrands, brands, 
        getModels, models, 
        getYears, years, 
        getVersions, versions, 
        getCar, car, clearCar,
        errors, loading
    }
};

export default useCreditas