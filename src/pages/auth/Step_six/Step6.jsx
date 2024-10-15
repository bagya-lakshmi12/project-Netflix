import React from 'react'
import "./Step6.css";
import Logo from '../../../Components/Logo/Logo';
import z from "..//..//..//assets/Netflix-Logo.wine.svg";
import Text from '../../../Components/Text/Text';
import Btn from '../../../Components/Btn/Btn';
import FooterWhite from '../../../Components/FooterWhite/FooterWhite';
import { Link } from 'react-router-dom';

const Step6 = () => {
  return (
    <div className='step6_main'>
      <div className='step6_logo'>
         <Logo net={z}/>
         <p>Sign Out</p>
         <hr />
      </div>
      <div className='step6_main2'>
      <Text value={<p>STEP <b>1</b> OF <b>3</b></p>} className='step6_step'/>
      <Text value={<p>Create a password to start <br />your membership</p>} className='step6_create'/>
      <Text value={<p>Just a few more steps and you're done! <br /> We hate paperwork, too</p>} className='step6_just'/>
      <input type='text' placeholder='Email' className='step6_mail'/>
      <br />
      <br />
      <input type='password' placeholder='Add a password' className='step6_pass'/>
      <br />
      <br />
      <Link to={'/home'}>
      <Btn val6={"Next"} height9="height9"/>
      </Link>
      </div>
      <div className='step6_foot'>
        <FooterWhite />
      </div>
    </div>
  )
}

export default Step6
