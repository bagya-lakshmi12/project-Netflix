import React from 'react'
import Logo from '../../../Components/Logo/Logo';
import z from "..//..//..//assets/Netflix-Logo.wine.svg"
import "./Step_one.css";
import Text from "..//..//..//Components/Text/Text";
import Btn from '../../../Components/Btn/Btn';
import { FaLaptop } from 'react-icons/fa';
import { FaTv } from 'react-icons/fa';
import { FaTablet } from 'react-icons/fa';
import { FaMobile } from 'react-icons/fa';
import FooterWhite from '../../../Components/FooterWhite/FooterWhite';
import { Link } from 'react-router-dom';
// import Language_Sec from '../../../Components/Language_Second/Language_Sec';


const Step_one = () => {
  return (
    <div className='stepone_main'>
      <div className='stepone_logo'>
        <Logo net={z} />
        <hr />
      </div>
      <div className='stepone_sign'>
        <p className='hov'>Sign In</p>
      </div>
      <div className='stepone_main2'>
        <div className='stepone_img'>
          <FaLaptop size={"80px"} color='red' />
          <FaTv size={"100px"} color='red' />
          <FaTablet size={"60px"} color='red' />
          <FaMobile size={"20px"} color='red' />
        </div>
        <p className='stepone_step'>STEP <b>1</b> OF <b>3</b></p>
        <Text value={<h1>Finish setting up your <br />account</h1>} className='stepone_finish' />
        <Text value={<p>Netflix is personalised for you. <br />Create a password to watch on any <br />device at any time.</p>} className='stepone_net' />
        <Link to={'/regform'}>
          <Btn val5={"Next"} height5="height5" />
        </Link>
      </div>
      <div className='stepone_foot'>
        <FooterWhite />
      </div>
    </div>
  )
}

export default Step_one
