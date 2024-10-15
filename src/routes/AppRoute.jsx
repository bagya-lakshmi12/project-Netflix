import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Page from '../pages/public/LandingPage/Page'
import SignIn from '../pages/auth/SignIn/SignIn'
import SignOut from '../pages/auth/SignOut/SignOut'
import Step_one from '../pages/auth/Step_one/Step_one'
import Step6 from '../pages/auth/Step_six/Step6'
import Home from '../pages/portal/Home/Home'
// import SignIn from '../pages/auth/SignIn/SignIn'


const AppRoute = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Page/>}/>
      </Routes>

      <Routes>
        <Route path='/signin' element={<SignIn/>}/>
      </Routes>

      <Routes>
        <Route path='/signout' element={<SignOut/>}/>
      </Routes>
      
      <Routes>
        <Route path='/signup/registration' element={<Step_one/>}/>
      </Routes>

      <Routes>
        <Route path='/regform' element={<Step6/>}/>
      </Routes>

      <Routes>
        <Route path='/home' element={<Home />}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default AppRoute
