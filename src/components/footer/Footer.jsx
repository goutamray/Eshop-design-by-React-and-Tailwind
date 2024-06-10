import { MenuList } from "../../../facker/data"
import { FaLocationArrow } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoIosPhonePortrait } from "react-icons/io";


const Footer = () => {
  return (
    <div className="bg-white dark:bg-gray-900 ">
      <div className="container">
          <div className="grid md:grid-cols-3 pt-5 pb-16">
            {/* logo part */}
              <div className="space-y-3 py-3 px-4">
                 <h2 className="uppercase tracking-widest text-3xl lg:text-3xl text-primary font-semibold "> eshop </h2>
                 <p className="text-gray-600 text-sm lg:pr-24  dark:text-gray-400   lg:w-[380px] sm:w-[200px]"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, tempora quidem. </p>
                 <p> Made with 💖 by WebSquadBD </p>
                 <a href="#" className="px-3 py-1 bg-primary text-white text-sm rounded-full inline-block "> Visit our YouTube Channel </a>
              </div>
              <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-4 ">
                <div className="py-3">
                  <h2 className="text-md sm:text-left md:text-2xl font-bold text-black mb-3 dark:text-gray-300"> Important Links </h2>
                  {
                    MenuList.map((item, index) => {
                      return <li key={index} className="list-none text-gray-500 text-md "> 
                        <a href="#" className="py-1 inline-block font-medium hover:text-gray-300  "> {item.name} </a>
                      </li>
                    })
                  }
                </div>
                <div className="py-3 ">
                  <h2 className="text-xl sm:text-left md:text-2xl font-bold text-black mb-3 dark:text-gray-300"> Quick Links </h2>
                  {
                    MenuList.map((item, index) => {
                      return <li key={index} className="list-none text-gray-500 text-md "> 
                        <a href="#" className="py-1 inline-block font-medium hover:text-gray-300 "> {item.name} </a>
                      </li>
                    })
                  }
                </div>
                <div className="py-3">
                  <h2 className="text-xl sm:text-left md:text-2xl font-bold text-black dark:text-gray-300 " > Address </h2>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 mt-4">
                      <span className="text-xl text-gray-500"> <FaLocationArrow /> </span>
                      <p className="text-md text-gray-700 dark:text-gray-400 "> Rangpur, Mistripara </p>
                    </div>
                    <div  className="flex items-center gap-4">
                      <span className="text-xl text-gray-500"> <IoIosPhonePortrait /> </span>
                      <p className="text-md text-gray-700  dark:text-gray-400 " > +88 01755302053</p>
                    </div>
                    <div  className="flex items-center gap-4">
                      <span className="text-2xl lg:text-3xl hover:text-primary mt-2" > <BsInstagram /> </span>
                      <span  className="text-2xl lg:text-3xl mt-2 hover:text-primary"> <FaFacebook /> </span>
                      <span  className="text-2xl lg:text-3xl mt-2 hover:text-primary"> <FaLinkedin /> </span>
                      
                    </div>
                  </div>
                </div>
                 
              </div>
          </div>
      </div>
    </div>
  )
}

export default Footer













