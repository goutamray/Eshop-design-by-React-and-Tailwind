
import { FaCarSide } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa"; 
import { FaWallet } from "react-icons/fa";
import { FaHeadphonesAlt } from "react-icons/fa"; 


// service data 
 const ServiceData = [
  {
   id : 1,
    icon : <FaCarSide className="text-primary text-4xl md:text-5xl "/>,
   title : "Free Shipping",
   desc : "Free Shipping On All Order"
  },
  {
   id : 2,
    icon : <FaCheckCircle className="text-primary text-4xl md:text-5xl "/>,
   title : "Safe Money",
   desc : "30 Days Money Back"
  },
  {
   id : 3,
    icon : <FaWallet className="text-primary text-4xl md:text-5xl "/>,
   title : "Secure Payment",
   desc : "All Payment Secure"
  },
  {
   id : 4,
    icon : <FaHeadphonesAlt className="text-primary text-4xl md:text-5xl "/>,
   title : "Online Supoort 24/7",
   desc : "Technical Support 24/7"
  },
 ]

const Service = () => {
  return (
    <>
      <div className="py-10 md:py-12">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8">
             {
              ServiceData.map((item, index) => {
                return <div key={index} className="flex gap-4"> 
                   {item.icon}
                   <div>
                    <h1 className="lg:text-xl md:text-2xl font-bold"> {item.title}</h1>
                    <h1 className="text-xs sm:text-md text-gray-400 mt-1"> {item.desc}</h1>
                   </div>
                </div>
              })
             }
          </div>
        </div>
      </div>
    </>
  )
}

export default Service
