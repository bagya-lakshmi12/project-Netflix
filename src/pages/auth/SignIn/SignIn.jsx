import React from 'react'
import "./SignIn.css";
import Logo from '../../../Components/Logo/Logo';
import z from "..//..//..//assets/Netflix-Logo.wine.svg"
import Btn from '../../../Components/Btn/Btn';
import Footer from '../../../Components/Footer/Footer';
// import Btn from '../../../Components/Btn/Btn';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <>
    <div className='sec_page'>
      <div className='sec_logo'>
        <Logo net={z}/>
         <div className='black_opa'>
           <div className='form'>
               <h1 className='sign_head'>Sign In</h1>
               <input type="text" placeholder='Email or mobile number' className='box1'/>
               <br /><br />
               <input type="password" placeholder='Password' className='box2'/>
               <br /><br />
               <Btn value1={"Sign In"} height1="height1" width1="width1" position1="position1" bg1="bg1" color1="color1" size1="size1" radius1="radius1"/>
               <br />
               <p className='or'>OR</p>
               <br />
               <Link to={'/signout'}>
               <Btn value2={"Use a sign-in code"} height1="height2" width1="width2" position1="position2" bg1="bg2" color1="color2" size2="size2" radius2="radius2"/>
               </Link>
               <br />
               <p className='forgot'>Forgot password?</p>
               <input type="checkbox" />Remember me
               <br />
               <p className='new'>New to Netflix? <Link to={'/signup/registration'}><button className='SignUp'>Sign up now.</button></Link></p>
               <br />
               <p className='this'>This page is protected by Google reCAPTCHA to <br />ensure you're not a bot. <span className='learn'>Learn more.</span></p>
           </div>
         </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default SignIn
