import React from 'react'
import { useLocation } from 'react-router-dom';
import MyNavbar from '../Components/Navbar'

function RecruiterCheckout() {

  const {state} = useLocation();
  const data  = state.stripeData
  console.log(data)
  return (
    <div>
        <MyNavbar/>
        <div>
          successfully
        </div>
    </div>
  )
}

export default RecruiterCheckout