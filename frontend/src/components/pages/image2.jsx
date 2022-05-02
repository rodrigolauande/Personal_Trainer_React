import React from 'react'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'

const images = [
    {
      original: '../../assets/foto1.png',
      thumbnail: '',
    },
    {
      original: '../../assets/foto2.png',
      thumbnail: '',
    },
    {
      original: '../../assets/foto3.png',
      thumbnail: '',
    },
  ];
  
  //class MyGallery extends React.Component {
    //render() {
      //return <ImageGallery items={images} />;
    //}
  //}

export default class imagens extends React.Component {
    render() {
        return (
            <ImageGallery items={images} />
        )
    }
}