import { useEffect, useState, useCallback } from 'react'
import { getBrands, getModels, getYears, getVersions, getCar, TYPES_REQUEST } from '@modules/main/services/creditas'

const useCreditas = () => {
    const INITIAL_DATA = {
        brands: [],
        brands_selected: null,
        versions: [],
        versions_selected: null,
        years: [],
        years_selected: null,
        models: [],
        models_selected: null,
        getCar: {},
        car_information: {}
    }

    const [ form, setForm ] = useState(INITIAL_DATA)
    const [ loading, setLoading ] = useState(false)
    const [ errors, setErrors ] = useState(null)
    
    const updateForm = useCallback(({ key, value }) => {
        setForm({ ...form, [key]: value})
    }, [form, setForm])

    const getData = useCallback(async (type, params) => {
        try {
            const service = {
                [TYPES_REQUEST.BRANDS]: () => getBrands,
                [TYPES_REQUEST.MODELS]: () => getModels,
                [TYPES_REQUEST.VERSIONS]: () => getVersions,
                [TYPES_REQUEST.YEARS]: () => getYears,
                [TYPES_REQUEST.CARD_DETAIL]: () => getCar
            }
            setLoading(true)
            const getMethod = service[type]
            const data = await getMethod(params)
            updateForm({ key: type, value: data })
            setLoading(false)
        }catch(e) {
            setLoading(false)
            setErrors(e.message)
        }
    }, [updateForm])

    const clearCar = () => {
        setForm(INITIAL_DATA)
    }

    const buildForm = useCallback(() => {
        const {brands_selected: brand, models_selected: model, years_selected: year, versions_selected: version } = form
        return {
            brand,
            model,
            year,
            version,
        } 
    }, [form])

    const getRequestType = useCallback(() => {
        const {brands_selected: brand, models_selected: model, years_selected: year, versions_selected: version } = form
        let requestType = TYPES_REQUEST.BRANDS
        
        if (brand && !model) { requestType =  TYPES_REQUEST.MODELS }
        if (brand && model && !year) { requestType =  TYPES_REQUEST.YEARS }
        if (brand && model && year && !version) { requestType =  TYPES_REQUEST.VERSIONS }
        if (brand && model && year && version) { requestType =  TYPES_REQUEST.CARD_DETAIL }

        return requestType;
    }, [form])

    useEffect(() => { 
        getData(TYPES_REQUEST.BRANDS);
        console.log("first Request")
    }, [ getData ])

    useEffect(() => {
        const params = buildForm()
        getData(getRequestType(), buildForm())
        console.log("Do Request")
    }, [ form.brands_selected,form.models_selected, form.years_selected, form.versions_selected, buildForm, getData, getRequestType ])

    return { 
        models: {
            form,
            loading,
            errors,
            userChoose: buildForm()
        },
        operations: {
            updateForm,
            populateSelect: getData,
            clearCar,
            onClick: () => getData(TYPES_REQUEST.CARD_DETAIL)
        }
    }
};

export default useCreditas