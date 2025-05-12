import React from 'react'
import { useLocation } from 'react-router-dom'
import Filter from '../Components/Filter/Filter'
import MyNavbar from '../Components/navbar/Navbar'
import Footer from '../Components/Footer'

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