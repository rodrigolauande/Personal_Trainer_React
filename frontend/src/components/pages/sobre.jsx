import React, { Component } from 'react'
import Main from '../template/main'
import Carousel from 'react-bootstrap/Carousel'

import Foto1 from '../../assets/imgs/foto3.JPG'
import Foto2 from '../../assets/imgs/foto5.png'
import Foto3 from '../../assets/imgs/foto7.JPG'
import Foto4 from '../../assets/imgs/foto9.jpg'
import Foto5 from '../../assets/imgs/foto10.JPG'
import Foto6 from '../../assets/imgs/foto11.JPG'

const headerProps = { //objeto criado, que irar ser passado para o componente Main
    icon: 'home',
    title: 'Quem é Rodrigo?',
    subtitle: 'Um pouco sobre mim!!!'
}

export default class sobre extends Component {
    render() {
        return (
            <Main {...headerProps}>       
            <div className='display-4'>Bem Vindo!</div>
            <hr />
            <p className="mb-0">Tenho mais de 10 anos de experiência em campo, utilizando
            a minha paixão por atividades físicas para transformar a vida das pessoas.
            Como Personal Trainer, trabalho com alunos homens e mulheres com 
            os mais diferentes níveis de desenvolvimento físico e objetivos.           
            </p>
          <Carousel>
          <Carousel.Item>
            <img
              className="image-gallery d-block w-100"
              src={Foto1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="image-gallery d-block w-100"
              src={Foto2}
              alt="Second slide"
            />
        
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="image-gallery d-block w-100"
              src={Foto3}
              alt="Third slide"
            />
        
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="image-gallery d-block w-100"
              src={Foto4}
              alt="Third slide"
            />
        
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="image-gallery d-block w-100"
              src={Foto5}
              alt="Third slide"
            />
        
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="image-gallery d-block w-100"
              src={Foto6}
              alt="Third slide"
            />
        
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
            </Main>
        )
    }
}

