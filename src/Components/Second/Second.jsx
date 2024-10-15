import React from 'react'
import "./Second.css";
import Text from '../Text/Text';


const Second = ({Img, Vid}) => {
  return (
    <div className='second_black'>
      <div className='content_sec'>
        <Text value={<h1 className='enjoy'>Enjoy on your TV</h1>}/>
        <Text value={<p className='tv'>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>}/>
      </div>
        
      <div className='image_sec'>
        <img src={Img} alt="" className='img1'/> 
        <video src={Vid} alt="video" typeof="m4v" muted autoPlay loop className='vid1'></video>
      </div>

      
      
    </div>
  )
}

export default Second
