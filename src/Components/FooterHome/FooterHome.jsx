import React, { useState } from 'react'
import "./FooterHome.css";
import { FaCopyright, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import Text from '../Text/Text';
// import Btn from '../Btn/Btn';

const FooterHome = () => {
  const [codeDisplay, setCodeDisplay] = useState('Service Code');

  function generateRandomCode() {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }

  const handleMouseDown = () => {
    setCodeDisplay(generateRandomCode());
  };

  const handleMouseUp = () => {
    setCodeDisplay('Service Code');
  };
  return (
    <div className='foot-home'>
    <div className='home-icons'>
      <div className='face-home'>
        <FaFacebook />
      </div>
      <div className='insta-home'>
        <FaInstagram />
      </div>
      <div className='twit-home'>
        <FaTwitter />
      </div>
      <div className='you-home'>
        <FaYoutube />
      </div>
      </div>
      <div className='link-home'>
         <Text value={<p>Audio Description</p>}/>
         <Text value={<p>Investor Relations</p>}/>
         <Text value={<p>Legal Notices</p>}/>
         <Text value={<p>Help Centre</p>}/>
         <Text value={<p>Jobs</p>}/>
         <Text value={<p>Cookie Preferences</p>}/>
         <Text value={<p>Gift Cards</p>}/>
         <Text value={<p>Terms of Use</p>}/>
         <Text value={<p>Corporate Information</p>}/>
         <Text value={<p>Media Centre</p>}/>
         <Text value={<p>Privacy</p>}/>
         <Text value={<p>Contact Us</p>}/>
      </div>
      <div className='button-home'>
        <button
        onMouseDown={handleMouseDown} 
        onMouseUp={handleMouseUp}>
          {codeDisplay}
        </button>
      </div>
      <div className='end-home'>
        <div className='copy-home'>
            <FaCopyright />
        </div>
        <div className='text-home'>
            <Text value={<p>1997-2024 Netflix,Inc.</p>}/>
        </div>
      </div>
    </div>
  )
}

export default FooterHome

