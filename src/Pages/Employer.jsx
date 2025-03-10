import React from 'react'
import Employers from '../Components/Employer'
import MyNavbar from '../Components/navbar/Navbar'
import Pricing from '../Components/Pricing'

function Employer() {
  return (
    <div>
        <MyNavbar/>
        <Employers/>
        <Pricing/>
    </div>
  )
}

export default Employer