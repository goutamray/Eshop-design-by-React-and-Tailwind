import Banner from './components/banner/Banner'
import Category from './components/category/Category'
import Category2 from './components/category/Category2'
import Navbar from './components/navbar/Navbar'
import Service from './components/servise/Service'
import SlideBanner from './components/slider/SliderBanner'


import headphone from "../src/assets/headphone.png"
import Products from './components/product/Products'
import Banner2 from './components/banner/Banner2'


import smartwatch2 from "../src/assets/smartwatch2.png"

// get small banner  data
const SmallBanner = {
  discount : "30% OFF",
  title : "FINE SMILE",
  date : "10 Jan to 28 Jan", 
  image : headphone,
  title2 : "Air Solo Bass",
  title3 : "Winter Sale",
  title4 : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
  bgColor : "#f42c37"
}

// get small banner  data
const SmallBanner2 = {
  discount : "30% OFF",
  title : "HAPPY HOURS",
  date : "14 Jan to 28 Jan", 
  image : smartwatch2,
  title2 : "Smart Solo",
  title3 : "Winter Sale",
  title4 : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
  bgColor : "#2dcc6f"
}
 

function App() {

  return (
    <div className='bg-white dark:bg-slate-900 dark:text-white duration-200 overflow-hidden '>
      <Navbar /> 
      <SlideBanner /> 
      <Category /> 
      <Category2 /> 
      <Service /> 
      <Banner data={SmallBanner} /> 
      <Products /> 
      <Banner2 data2={SmallBanner2} /> 

    </div>
  )
}

export default App
