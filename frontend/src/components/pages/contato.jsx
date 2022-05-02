import React, { Component } from 'react'
import Main from '../template/main'

import Instagram from '../../assets/imgs/instagram.png'
import Facebook from '../../assets/imgs/facebook.png'
import WhatsApp from '../../assets/imgs/whatsapp.png'
import Linkdin from '../../assets/imgs/linkdin.png'

const headerProps = { //objeto criado, que irar ser passado para o componente Main
    icon: 'envelope',
    title: 'Contato',
    subtitle: 'Faça um teste, entre contato para mais informações'
}

export default class contato extends Component {
    render() {
        return (
            <Main {...headerProps}>
            <div class="rede">
            <a href="https://www.instagram.com/rodrigo.lauande/">
                <img src={Instagram}/> 
            </a>
            <a href="https://www.facebook.com/rodrigo.lauande.5/">
                <img src={Facebook}/>
            </a>
            <a href="https://api.whatsapp.com/send/?phone=5511969364133&text&app_absent=0">
                <img src={WhatsApp}/>
            </a>
            <a href="https://www.linkedin.com/in/rodrigo-henrique-lauande-6314411ab/">
                <img src={Linkdin}/>
            </a>
                   
           
            </div>
            </Main>
        )
    }
}