import React from 'react'
import Text from '../Text/Text';
import "./FooterWhite.css";
import Language_Sec from '../Language_Second/Language_Sec';

const FooterWhite = () => {
  return (
    <div className='foot_white'>
      <div className='phone_white'>
         <Text value={<p>Questions? Call 000-800-919-1694</p>}/>
      </div>
      <div className='footwhite_link'>
         <Text value={<p>FAQ</p>}/>
         <Text value={<p>Help Centre</p>}/>
         <Text value={<p>Netflix Shop</p>}/>
         <Text value={<p>Terms of Use</p>}/>
         <Text value={<p>Privacy</p>}/>
         <Text value={<p>Cookie Preferences</p>}/>
         <Text value={<p>Corporate Information</p>}/>
      </div>
      <div className='lang_globe'>
        <Language_Sec />
      </div>

    </div>
  )
}

export default FooterWhite
