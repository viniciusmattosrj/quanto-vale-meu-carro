import React, { useEffect, useState } from 'react'
import Layout from '@components/Layout'
import useCreditas from '@modules/main/hooks/useCreditas'
import ListBrands from '@modules/main/components/ListBrands'
import ListModels from '@modules/main/components/ListModels'
import ListYears from '@modules/main/components/ListYears'
import ListVersions from '@modules/main/components/ListVersions'
import CarDetail from '@modules/main/components/CarDetail'
import DisplayErrors from '@modules/main/components/DisplayErrors'
import Footer from '@components/Footer'
import Banner from '@components/Banner'
import { Grid } from '@material-ui/core'


export const FORM_KEYS = {
    BRAND: 'brand',
    MODEL: 'model',
    YEAR: 'year',
    VERSION: 'version',
}
const Home = () => {
    const { 
        getBrands, brands, 
        getModels, models, 
        getYears, years, 
        getVersions, versions, 
        getCar, car,
        errors
     } = useCreditas()

    const INITIAL_STATE = { brand:null, model:null, year:null, version: null } 
    const [ form, setForm ] = useState(INITIAL_STATE)

    const changeForm = (key, value) => {
        setForm({ ...form, [ key ] : value })
    }

    const resetForm = () => {
        setForm({ brand:null, model:null, year:null, version: null })
    }

    useEffect(() => { getBrands() }, [ getBrands ])

    useEffect(() => {        
        if (form.brand) { getModels( form ) } 
    }, [ form.brand, getModels ] )

    useEffect(() => {        
        if (form.model) { getYears( form ) } 
    }, [ form.model, getYears ] )

    useEffect(() => {        
        if (form.year) { getVersions( form ) } 
    }, [ form.year, getVersions ] )

    useEffect(() => {        
        if (form.version) { getCar( form ) } 
    }, [ form.version, getCar ] )
   
    return (
        <Layout>
            <Banner /> 
            <Footer /> 
            <DisplayErrors errors={errors} />
            <Grid container alignItems="center" direction="row" >
                <ListBrands brands={brands} onChange={changeForm} />
                <ListModels models={models} form={form} onChange={changeForm} /> 
                <ListYears years={years} form={form} onChange={changeForm} />
                <ListVersions versions={versions} form={form} onChange={changeForm} />
            </Grid> 
            <CarDetail data={car} form={form} />
        </Layout>
    )
}

export default Home