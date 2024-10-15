import React from 'react'
import "./Navbar.css";
import Text from '../Text/Text';
import { FaEdit, FaQuestion, FaSmile } from 'react-icons/fa';
import { FaPerson } from 'react-icons/fa6';

const Navbar = ({smile, netlogo, childlogo}) => {
  return (
    <>
    <div className='nav_main'>
      <div className='nav_image'>
        <img src={netlogo} alt="" />
      </div>
      <div className='nav_one'>
        <a href="/">Home</a>
        <a href="/">TV Shows</a>
        <a href="/">Movies</a>
        <a href="/">New & Popular</a>
        <a href="/">My List</a>
        <a href="/">Browse by languages</a>
      </div>
      <div className='nav_two'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
          <a href="/">Children</a>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
          </svg>
          <div className='navsmile'>
             <img src={smile} alt=""/>
             <div className='nav-children'>
                <div className='child-photo'>
                  <div>
                    <img src={childlogo} alt="" />
                  </div>
                  <div>
                    <Text value={<p>Children</p>} className='hover-child'/>
                  </div>
                </div>
                <div className='pencil'>
                   <FaEdit size={"25px"}/><Text value={<p>Manage Profiles</p>} className='hover-manage'/> 
                </div>
                <div className='profile'>
                   <FaSmile size={"25px"}/><Text value={<p>Transfer Profile</p>} className='hover-trans'/> 
                </div>
                <div className='account'>
                   <FaPerson size={"25px"}/><Text value={<p>Account</p>} className='hover-acc'/> 
                </div>
                <div className='help-centre'>
                   <FaQuestion size={"25px"}/><Text value={<p>Help Centre</p>} className='hover-help'/> 
                </div>
                <hr />
                <Text value={<p >Sign out of Netflix</p>} className='hover-sign'/>
             </div>
          </div>
      </div>
    </div>
    </>
  )
}

export default Navbar




























// import React from 'react'
// import "./Navbar.css";
// // import Logo from '../../../Components/Logo/Logo';
// // import z from "..//..//..//assets/Netflix-Logo.wine.svg";
// // import smile from "..//..//assets/profile.png"
// import Text from '../Text/Text';
// import { FaEdit, FaQuestion, FaSmile, FaDog } from 'react-icons/fa';

// const Navbar = ({smile, netlogo, childlogo}) => {
//   return (
//     <>
//     <div className='nav_main'>
//       <div className='nav_image'>
//         <img src={netlogo} alt="" />
//       </div>
//       <div className='nav_one'>
//         <a href="/">Home</a>
//         <a href="/">TV Shows</a>
//         <a href="/">Movies</a>
//         <a href="/">New & Popular</a>
//         <a href="/">My List</a>
//         <a href="/">Browse by languages</a>
//       </div>
//       <div className='nav_two'>
//           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
//   <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
// </svg>
//           <a href="/">Children</a>
//           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
//   <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
// </svg>
//           <div className='navsmile'>
//              <img src={smile} alt=""/>
//           </div>
//       </div>
//     </div>
//     <div className='nav-children'>
//         <div className='child-photo'>
//              <div>
//                 <img src={childlogo} alt="" />
//              </div>
//              <div>
//                  <Text value={<p>Children</p>}/>
//              </div>
//         </div>
//         <div className='pencil'>
//            <FaEdit size={"25px"}/><Text value={<p>Manage Profiles</p>}/> 
//         </div>
//         <div className='profile'>
//            <FaSmile size={"25px"}/><Text value={<p>Transfer Profile</p>}/> 
//         </div>
//         <div className='account'>
//            <FaDog size={"25px"}/><Text value={<p>Account</p>}/> 
//         </div>
//         <div className='help-centre'>
//            <FaQuestion size={"25px"}/><Text value={<p>Help Centre</p>}/> 
//         </div>
//         <hr />
//         <Text value={<p className='home-signout'>Sign out of Netflix</p>}/>

//     </div>
//     </>
//   )
// }

// export default Navbar
