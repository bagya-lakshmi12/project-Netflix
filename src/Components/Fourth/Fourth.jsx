import React from 'react'
import Text from '../Text/Text'
import "./Fourth.css";

const Fourth = ({Img3,Vid2}) => {
  return (
    <div className='fourth_black'>
      <div className='content_four'>
        <Text value={<h1 className='every'>Watch everywhere</h1>}/>
        <Text value={<p className='stream'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>}/>
      </div>
        
      <div className='image_four'>
        <img src={Img3} alt="" className='img3'/> 
        <video src={Vid2} alt="video" typeof="m4v" muted autoPlay loop className='vid2'></video>
      </div>
    </div>
  )
}

export default Fourth
