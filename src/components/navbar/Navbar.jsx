import { DropList, MenuList } from "../../../facker/data"
import { IoIosSearch } from "react-icons/io"; 
import { FaCartShopping } from "react-icons/fa6"; 
import { FaCaretDown } from "react-icons/fa";
import DarkMode from "./DarkMode";



const Navbar = () => {
  return (
    <>
      <div className="bg-white dark:bg-gray-900 dark:text-white shadow duration-300 z-40 relative ">
        <div className="py-4">
          <div className="container flex justify-between items-center">
            {/* logo & menu section  */}
              <div className="flex items-center gap-5">
                <a className="text-primary font-semibold text-2xl tracking-widest uppercase sm:text-3xl " href="#"> Eshop </a>
           
                {/* menu  */}
                <div className="hidden lg:block"> 
                  <ul className="flex items-center gap-4">
                    {
                      MenuList.map((item, index) => {
                        return <li key={index}> 
                          <a className="text-md font-medium inline-block px-4 text-gray-500 hover:text-black dark:hover:text-white duration-300" href={item.url}> {item.name} </a>
                        </li>
                      })
          
                    }
                        <li className="relative group cursor-pointer"> 
                          <a href="#" className="flex items-center gap-1 font-semibold text-gray-500 dark:hover:text-white py-2">
                            Quick link <span> <FaCaretDown className="group-hover:rotate-180 duration-300"/></span>
                          </a>
                          <div className="absolute  z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 px-3 py-2 dark:text-white "> 
                              <ul className=" top-6 left-0 space-y-2">
                              {
                                DropList.map((item, index) => {
                                  return <li key={index}> 
                                    <a className="text-gray-500 hover:text-black dark:hover:text-white duration-200 inline-block w-full hover:bg-primary/20 p-2 rounded-md font-semibold" href={item.url}> {item.name}</a> 
                                  </li>
                                })
                              }                      
                            </ul>
                          </div>
                        </li>
                  </ul>
                </div>
              </div>

            {/* nav bar right section */}
              <div className="flex justify-between items-center">
                {/* input search */}
                 <div className="relative group hidden sm:block ">
                    <input type="text" placeholder="Search" className="search-bar"/>
                    <IoIosSearch className="text-xl text-gray-600 dark:text-gray-400 top-1/2 right-3 absolute -translate-y-1/2 group-hover:text-primary duration-300"/> 
                 </div>
              {/* cart button  */}
              <button className="relative p-3 ">
                  <FaCartShopping className="text-xl text-gray-600 dark:text-gray-400 "/>
                  <div className="h-4 w-4 rounded-full bg-red-500 text-white absolute top-0 right-0 flex items-center justify-center text-xs">
                    4 
                  </div>
              </button>
              {/* dark mode  */}
                <div className="ml-3">
                   <DarkMode /> 
                </div>
              </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar















