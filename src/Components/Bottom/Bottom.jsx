import React from 'react'
import "./Bottom.css";
import Text from '../Text/Text';
import Language from '../Language/Language';

const Bottom = () => {
  return (
    <div className='bottom_black'>
      <div className='call'>
         <Text value={<p>Questions? Call <a href="#">000-800-919-1694</a></p>}/>
      </div>
      <div className='link'>
         <Text value={<p>FAQ</p>}/>
         <Text value={<p>Investor Relations</p>}/>
         <Text value={<p>Privacy</p>}/>
         <Text value={<p>Speed Test</p>}/>
         <Text value={<p>Help Centre</p>}/>
         <Text value={<p>Jobs</p>}/>
         <Text value={<p>Cookie Preferences</p>}/>
         <Text value={<p>Legal Notices</p>}/>
         <Text value={<p>Account</p>}/>
         <Text value={<p>Ways to Watch</p>}/>
         <Text value={<p>Corporate Information</p>}/>
         <Text value={<p>Only on Netflix</p>}/>
         <Text value={<p>Media Centre</p>}/>
         <Text value={<p>Terms of Use</p>}/>
         <Text value={<p>Contact Us</p>}/>
      </div>
      <div className='bot_lang'>
        <Language />
      </div>
      <div className='last'>
        <p>Netflix India</p>
      </div>
    </div>
  )
}

export default Bottom
