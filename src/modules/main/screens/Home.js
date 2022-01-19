import React, { useEffect, useState } from 'react'
import Layout from '@components/Layout'
import useCreditas from '@modules/main/hooks/useCreditas'
import ListBrands from '@modules/main/components/ListBrands'
import ListModels from '@modules/main/components/ListModels'
import ListYears from '@modules/main/components/ListYears'
import ListVersions from '@modules/main/components/ListVersions'
import CarDetail from '@modules/main/components/CarDetail'
// import Select from '@modules/main/components/Select'
import DisplayErrors from '@modules/main/components/DisplayErrors'
import Banner from '@components/Banner'
import { Grid, Box, Button } from '@material-ui/core'
import { FORM_KEYS } from '@modules/main/utils';
//import { TYPES_REQUEST } from '@modules/main/services/creditas'

const Home = () => {
    const { models, operations } = useCreditas()

    return (
        <Layout>
            <Banner /> 
            {/* <DisplayErrors errors={models.errors} /> */}
            <Grid container spacing={2} alignItems="center" direction="row" > 
                {/* <Select id="combo-box-brand" value={models.userChoose.brand} data={models.form.brands} onChange={(event, value) => operations.updateForm(FORM_KEYS.BRAND, value)} label="Marca" /> */}
                {/* <ListBrands brands={models.form.brands} form={models.userChoose} onChange={operations.updateForm} />
                <ListModels models={models.form.models} form={models.userChoose} onChange={operations.updateForm} />  
                <ListYears years={models.form.years} form={models.userChoose} onChange={operations.updateForm} />
                <ListVersions versions={models.form.versions} form={models.userChoose} onChange={operations.updateForm} />  */}
                <Grid item xs={12} md={2} lg={2}> 
                    <Box textAlign='center'>
                        <Button fullWidth variant="contained" color="primary" disableElevation onClick={operations.resetForm}>
                            Limpar
                        </Button>
                    </Box>
                </Grid>          
            </Grid> 
            <CarDetail data={models.form.car_information} form={models.userChoose} loading={models.loading} />
        </Layout>
    )
}

export default Home