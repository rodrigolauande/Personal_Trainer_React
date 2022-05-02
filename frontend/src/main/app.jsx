import './app.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Home from '../components/home/home'

import Nav from '../components/template/nav'
import Routes from './routes'
import Footer from '../components/template/footer'

export default props =>
    <BrowserRouter>
        <div className="app">
            <Nav />
            <Home />
            <Routes />        
            <Footer />
        </div>
    </BrowserRouter>
    