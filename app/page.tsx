import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import Herosection from './Components/HeroSection/Herosection';
import SideTableSection from './Components/SideTable/SideTable';
import ProductSection from './Components/Product/Product';
import NewArrivalSection from './Components/NewArrivals/NewArrival';
import OurBlogsSection from './Components/OurBlogs/OurBlogsSection';
import OurInstagram from './Components/OurInstagram/OurInstagram';
import Footer from './Components/Footer/Footer';

const page = () => {
  return (
    <div>
      <Navbar/>
      <Herosection/>
      <SideTableSection/>
      <ProductSection/>
      <NewArrivalSection/>
      <OurBlogsSection/>
      <OurInstagram/>
      <Footer/>
    </div>
  )
}

export default page
