import React from 'react'
import Text from '../Text/Text'
import "./Third.css";

const Third = ({Img2}) => {
  return (
    <div className='third_black'>
      <div className='image_third'>
        <img src={Img2} alt="" className='img2'/>
      </div>
      <div className='content_third'>
        <Text value={<h1 className='down'>Download your shows <br />to watch offline</h1>}/>
        <Text value={<p className='save'>Save your favourites easily and always have something <br />to watch.</p>}/>
      </div>
    </div>
  )
}

export default Third
