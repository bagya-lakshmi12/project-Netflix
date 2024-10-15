import React from 'react'
import "./Step_two.css";
import Logo from '../../../Components/Logo/Logo';
import z from "..//..//..//assets/Netflix-Logo.wine.svg";
import Text from '../../../Components/Text/Text';
import Btn from '../../../Components/Btn/Btn';
import FooterWhite from '../../../Components/FooterWhite/FooterWhite';

const Step_two = () => {
  return (
    <div className='steptwo_main'>
      <div className='steptwo_logo'>
         <Logo net={z}/>
         <p>Sign In</p>
         <hr />
      </div>
      {/* <div className='steptwo_sign'>
        
      </div> */}
      <div className='steptwo_main2'>
         <p className='steptwo_step'>STEP <b>1</b> OF <b>3</b></p>
         <Text value={<h1>Welcome back! <br />Joining Netflix is easy.</h1>} className='steptwo_wel'/>
         <Text value={<p>Enter your password and you'll be watching in no <br /> time.</p>} className='steptwo_enter'/>
         <Text value={<p>Email <br /> <b>bagyalakshmi27112002@gmail.com</b></p>} className='steptwo_email'/>
         <input type="text" placeholder='Enter your password' />
         <Text value={<p>Forgot your password?</p>} className='steptwo_forgot'/>
         <Btn val5={"Next"} height52="height52"/>
      </div>
      <div className='steptwo_foot'>
         <FooterWhite />
      </div>
    </div>
  )
}

export default Step_two
