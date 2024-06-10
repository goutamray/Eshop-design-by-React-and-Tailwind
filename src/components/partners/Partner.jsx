import brand1 from "../../assets/partner1.png"
import brand2 from "../../assets/partner2.png"
import brand3 from "../../assets/partner3.png"
import brand4 from "../../assets/partner4.png"
import brand5 from "../../assets/partner5.png"

const Partner = () => {
  return (
    <div className="py-8 mt-20 mb-3 hidden md:block bg-gray-200 dark:bg-white/10 ">
      <div className="container">
          <div className="grid grid-cols-5 gap-3 place-content-center opacity-50 ">
            <img src={brand1} alt="" className="w-[80px] dark:invert mx-auto " />
            <img src={brand2} alt="" className="w-[80px] dark:invert mx-auto " />
            <img src={brand3} alt="" className="w-[80px] dark:invert mx-auto " />
            <img src={brand4} alt="" className="w-[80px] dark:invert mx-auto " />
            <img src={brand5} alt="" className="w-[80px] dark:invert mx-auto " />
          </div>
      </div>
    </div>
  )
}

export default Partner; 














