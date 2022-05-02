import React from 'react'
import Main from '../template/main'

const headerProps = { //objeto criado, que irar ser passado para o componente Main
    icon: 'home',
    title: 'Inicio',
    subtitle: 'Olá Seja Bem Vindo'
}

export default props =>
        <Main {...headerProps}>
            <div className='display-4'>Bem Vindo!</div>
        </Main>