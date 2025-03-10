import React from 'react'
import { useLocation } from 'react-router-dom'
import Filter from '../Components/Filter'
import Footer from '../Components/Footer'
import MyNavbar from '../Components/navbar/Navbar'

function FilterCat() {

  const location = useLocation()
  const tag = location.pathname.split("/")[2];
  return (
    <div>
        <MyNavbar/>
        <Filter tags={tag}/>
        <Footer/>
    </div>
  )
}

export default FilterCat