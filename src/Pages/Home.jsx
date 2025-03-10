import React from "react";
import MyNavbar from "../Components/navbar/Navbar";
import BodyContent from "../Components/content/BodyContent";
import Search from "../Components/Search";
import Categories from "../Components/Categories";
import JobSection from "../Components/JobSection";
import PostJob from "../Components/PostJob";
import Footer from "../Components/Footer";
import Carousels from "../Components/Carousel";
import PauseOnHover from "../Components/Carousel";
import Faq from "../Components/Faq";
import Tabs from "../Components/Tabs";

function Home() {
  return (
    <>
      <MyNavbar />
      <BodyContent />
      <Search />
      <Categories />
      <JobSection />
      <PostJob />
      <PauseOnHover />
      {/* <Tabs/> */}
      <Footer />
    </>
  );
}

export default Home;
