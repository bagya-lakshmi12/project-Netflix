import React from 'react'
import "./SignOut.css";
import Logo from '../../../Components/Logo/Logo';
import z from "..//..//..//assets/Netflix-Logo.wine.svg";
import Btn from '../../../Components/Btn/Btn';
import { Link } from 'react-router-dom';
import Footer from '../../../Components/Footer/Footer';

const SignOut = () => {
  return (
    <>
    <div>
      <div className='sec_page'>
      <div className='sec_logo'>
        <Logo net={z}/>
         <div className='black_opa'>
           <div className='form'>
               <h1 className='sign_head'>Sign In</h1>
               <input type="text" placeholder='Email or mobile number' className='box1'/>
               <br /><br />
               <p className='msg'>Message and data rates may apply</p>
               <br /><br />
               <Btn val3={"Send sign-in code"} height3="height3" position3="position3" bg3="bg3" color3="color3" size3="size3" radius3="radius3"/>
               <br />
               <p className='or_2'>OR</p>
               <br />
               <Link to={'/signin'}>
               <Btn val4={"Use Password"} height4="height4" position4="position4" bg4="bg4" color4="color4" size4="size4" radius4="radius4"/>
               </Link>
               <br />
               <p className='forgot'>Forgot email or phone number?</p>
               <input type="checkbox" />Remember me
               <br />
               <p className='new'>New to Netflix? <Link to={'/signup/registration'}><button className='SignUp2'>Sign up now.</button></Link></p>
               <br />
               <p className='this'>This page is protected by Google reCAPTCHA to <br />ensure you're not a bot. <span className='learn'>Learn more.</span></p>
           </div>
         </div>
      </div>
    </div>
    </div>
    <Footer />
    </>
  )
}

export default SignOut
