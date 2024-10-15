import React from 'react'
import "./Step5.css";
import Logo from '../../../Components/Logo/Logo';
import z from "..//..//..//assets/Netflix-Logo.wine.svg";
import Text from '../../../Components/Text/Text';
import Btn from '../../../Components/Btn/Btn';
import FooterWhite from '../../../Components/FooterWhite/FooterWhite';


const Step5 = () => {
  return (
    <div className='step5_main'>
      <div className='step5_logo'>
         <Logo net={z}/>
         <p>Sign Out</p>
         <hr />
      </div>
      <div className='step5_main2'>
          <div className='step5_lock'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
</svg>
</div>
           <Text value={<p>STEP <b>4</b> OF <b>4</b></p>} className='step5_step'/>
           <Text value={<p>Choose how to pay</p>} className='step5_choose'/>
           <Text value={<p>Your payment is encrypted and you can change your <br />payment method at anytime.</p>} className='step5_your'/>
           <Text value={<p>Secure for peace of mind. <br />
            Cancel easily online.</p>} className='step5_secure'/>
            <Text value={<p>End-to-end encrypted <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
  <path fillRule="evenodd" d="M8 1a3.5 3.5 0 0 0-3.5 3.5V7A1.5 1.5 0 0 0 3 8.5v5A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 11.5 7V4.5A3.5 3.5 0 0 0 8 1Zm2 6V4.5a2 2 0 1 0-4 0V7h4Z" clipRule="evenodd" />
</svg>
</p>} className='step5_end'/>
            
            <Btn val6={"Credit or Debit Card"} height7="height7"/>
            <Btn val6={"UPI AutoPay"} height8="height8"/>
            <div className='step5_foot'>
              <FooterWhite />
            </div>
      </div>
    </div>
  )
}

export default Step5
