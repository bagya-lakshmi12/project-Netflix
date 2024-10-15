import React from 'react'
import Text from '../Text/Text'
import "./Footer.css";
import Language from '../Language/Language';

const Footer = () => {
  return (
    <div className='foot_black'>
      <div className='phone'>
         <Text value={<p>Questions? Call 000-800-919-1694</p>}/>
      </div>
      <div className='foot_link'>
         <Text value={<p>FAQ</p>}/>
         <Text value={<p>Help Centre</p>}/>
         <Text value={<p>Terms of Use</p>}/>
         <Text value={<p>Privacy</p>}/>
         <Text value={<p>Cookie Preferences</p>}/>
         <Text value={<p>Corporate Information</p>}/>
      </div>
      <div className='foot_lang'>
        <Language />
      </div>
    </div>
  )
}

export default Footer
