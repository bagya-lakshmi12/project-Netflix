import React from 'react'
import "./Step_three.css";
import Logo from '../../../Components/Logo/Logo';
import z from "..//..//..//assets/Netflix-Logo.wine.svg";
import Text from '../../../Components/Text/Text';
import Btn from '../../../Components/Btn/Btn';
import FooterWhite from '../../../Components/FooterWhite/FooterWhite';

const Step_three = () => {
  return (
    <div className='stepthree_main'>
      <div className='stepthree_logo'>
         <Logo net={z}/>
         <p>Sign Out</p>
         <hr />
      </div>
      <div className='stepthree_main2'>
         <div className='roundtick'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
</svg>
         </div>

         <p className='stepthree_step'>STEP <b>1</b> OF <b>3</b></p>
         <Text value={<h1>Choose your plan.</h1>} className='stepthree_choose'/>
         <div className='svg_tick'>
            <div className='tick_content'>
               <div>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>
               </div>
               <div>
                  <Text value={<p>No commitments, cancel <br />anytime.</p>} className='stepthree_no'/>
               </div>
            </div>
            <div className='tick_content'>
               <div>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>
               </div>
               <div>
                  <Text value={<p>Everything on Netflix for one <br />low price.</p>} className='stepthree_every'/>
               </div>
            </div>
            <div className='tick_content'>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>
                </div>
                <div>
                    <Text value={<p>No ads and no extra fees. Ever.</p>} className='stepthree_ads'/>
                </div>
            </div>
             
         </div>
         <Btn val5={"Next"} height6="height6"/>
      </div>
      <div className='stepthree_foot'>
         <FooterWhite />
      </div>
    </div>
  )
}

export default Step_three
