import './nav.css'
import React from 'react'
import logo from '../../assets/imgs/logo.png'
import { Link } from 'react-router-dom'


export default props =>
    <aside className="menu-area">
        <Link to="/" className="logo d-flex align-items-center justify-content-center">
            <img src={logo} alt="logo" />
        </Link>
        <nav className="menu d-flex align-items-center justify-content-center text-light">
            <Link to="/sobre">
                <i className="fa fa-home text-light"></i> Sobre 
            </Link>
            <Link to="/presencial">
                <i className="fa fa-user text-light"></i> Aulas Presenciais
            </Link>
            <Link to="/online">
                <i className="fa fa-mobile text-light"></i> Aulas Online
            </Link>
            <Link to="/contato">
                <i className="fa fa-envelope text-light"></i> Contato
            </Link>
            <Link to="/usercad">
                <i className="fa fa-envelope text-light"></i> Inscreva-se
            </Link>
        </nav>
    </aside>