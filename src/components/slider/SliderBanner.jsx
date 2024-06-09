import { BannerData } from "../../../facker/data";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import Button from "../button/Button";

const SlideBanner = () => {
  var settings = {
    dots: false,
    arrow : false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplaySpeed : 4000,
    cssEase : "ease-in-out", 
    pauseOnHover : false,
    pauseOnFocus : true,
  };


  return (
    <>
      <div className="container mt-2">
        <div className="overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] hero-bg-color flex items-center justify-center ">
          <div className="container pb-8 sm:pb-0 ">
          {/* hero section  */}
          <Slider {...settings}>
              {
                BannerData.map((item, index) => {
                  return   <div key={index}>
                  {/* text section  */}
                     <div className="grid grid-cols-1 sm:grid-cols-2 ">
                          <div className="flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left  order-2 sm:order-1 relative z-10 ">
                            <h2 className="text-2xl sm:text-6xl lg:text-2xl font-bold"> {item.subTitle}</h2>
                            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold "> {item.title}</h2>
                            <h2 className="text-5xl text-white uppercase dark:text-white/5 sm:text-[50px] md:text-[100px] lg:text-[150px] font-bold "> {item.title2}</h2>
                            <div>
                                <Button text="Shop By Category" bgColor="bg-primary" textColor="text-white" /> 
                              </div>
                          </div>
                       {/* image section */}
                         <div className="order-1 sm:order-2">
                            <div>
                               <img src={item.img} alt="" className="h-[300px] w-[300px] sm:h-[450px] lg:w-[500px] sm:scale-105 lg:scale-110 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-40" />
                             </div>
                         </div>
                     </div>                          
                </div> 
                })
              }
           </Slider>
          </div>
        </div>
      </div>
    </>
  )
}

export default SlideBanner
