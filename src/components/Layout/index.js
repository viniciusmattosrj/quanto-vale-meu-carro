import './index.css'
import React from 'react'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { Container } from '@material-ui/core'

const Layout = ({children}) => {

    return (
        <Container>
            <Header />
            <main className="container-main">{children}</main>
            <Footer />
        </Container>
    )
}

export default Layout