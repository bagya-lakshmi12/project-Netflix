import React from 'react'
import "./Page.css";
import Input from '../../../Components/Input/Input';
import Text from '../../../Components/Text/Text';
import Second from '../../../Components/Second/Second';
import a from "..//..//..//assets/tv.png";
import b from "..//..//..//assets/tvVideo1.m4v";
import c from "..//..//..//assets/strangeThings.jpg";
import Third from '../../../Components/Third/Third';
import Fourth from '../../../Components/Fourth/Fourth';
import d from "..//..//..//assets/tvImg2.png";
import e from "..//..//..//assets/tvVideo2.m4v";
import Fifth from '../../../Components/Fifth/Fifth';
import f from "..//..//..//assets/children.png";
import Bottom from '../../../Components/Bottom/Bottom';
import Nav from '../../../Components/Button/Nav';
import l from "..//..//..//assets/Netflix-Logo.wine.svg";
import Faq from "..//..//..//Components/FAQ/Faq";
// import Language from '../../../Components/Language/Language';
// import SignIn from '../../auth/SignIn/SignIn';
// import Footer from '../../../Components/Footer/Footer';
// import SignOut from '../../auth/SignOut/SignOut';
// import Step_one from '../../auth/Step_one/Step_one';
// import Step_two from '../../auth/Step_two/Step_two';
// import Step_three from '../../auth/Step_three/Step_three';
// import Step4 from '../../auth/Step_four/Step4';
// import Step5 from '../../auth/Step_five/Step5';
// import Step6 from '../../auth/Step_six/Step6';

const Page = () => {
  return (
    <div className='main'>
      <div className='firstchild'>
         <Nav logo={l}/>
         <Input />
         
         <Text value="Unlimited movies, TV shows and more" size="size" color="color" position="position"/>
         <Text value={<p className='watch'>Watch anywhere. Cancel anytime. </p> }/>
         <Text value={<p className='ready'>Ready to watch? Enter your email to create or restart your membership. </p> }/>
         
      </div>
      <div className="secondchild">
          <Second Img={a}  Vid={b}/> 
      </div>
      
      <div className="thirdchild">
           <Third Img2={c}/>
      </div>

      <div className="fourthchild">
          <Fourth Img3={d}  Vid2={e}/> 
      </div>

      <div className="fifthchild">
           <Fifth Img4={f}/>
      </div>

      <div className='accord'>
        <h1 className='head'>Frequently Asked Questions</h1>
          <Faq />
          <div className='readyy'>
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
            <div className='inp'>
              <Input />
              </div>
          </div>
      </div>

      <div className="bottomchild">
           <Bottom />
           
      </div>

      {/* <div className='sec_child'>
        <SignIn />
        <Footer />
      </div>

      {/* <div className='third_child'>
        <SignOut />
        <Footer />
      </div>

      <div className='stepone'>
        <Step_one />
      </div>

      <div className='steptwo'>
        <Step_two />
      </div>

      <div className='stepthree'>
        <Step_three />
      </div>

      <div className='stepfour'>
        <Step4 />
      </div>

      <div className='stepfive'>
        <Step5 />
      </div> */} 

      {/* <div>
        <Step6 />
      </div> */}
      
    </div>

  )
}

export default Page















