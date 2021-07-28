import './index.css'
import React from 'react'
import Header from '@components/Header'
import { Container } from '@material-ui/core'

const Layout = ({children}) => {

    return (
        <Container>
            <Header />
            <main className="container-main">{children}</main>
        </Container>
    )
}

export default Layout