import React from 'react'
import MyNavbar from '../Components/Navbar'
import BodyContent from '../Components/BodyContent'
import Search from '../Components/Search'
import Categories from '../Components/Categories'
import JobSection from '../Components/JobSection'
import PostJob from '../Components/PostJob'
import Footer from '../Components/Footer'


function Home() {
  return (
      <div>
      <MyNavbar/>
    <BodyContent />
    <Search />
    <Categories />
    <JobSection />
    <PostJob />
    <Footer />
      </div>
  )
}

export default Home