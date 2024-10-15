import React from 'react'
import "./Fifth.css";
import Text from '../Text/Text';

const Fifth = ({Img4}) => {
  return (
    <div className='fifth_black'>
      <div className='image_fifth'>
        <img src={Img4} alt="" className='img4'/>
      </div>
      <div className='content_fifth'>
        <Text value={<h1 className='create'>Create profiles for kids</h1>}/>
        <Text value={<p className='send'>Send children on adventures with their favourite <br></br>characters in a space made just for them—free with <br></br>your membership.</p>}/>
      </div>
    </div>
  )
}

export default Fifth
