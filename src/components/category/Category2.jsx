
import gaming from "../../assets/gaming.png"
import man2 from "../../assets/wire.png"
import speaker from "../../assets/speaker.png"
import Button from "../button/Button"


const Category2 = () => {
  return (
    <>
         <div className="py-8">
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* first col */}

              <div className="py-10 col-span-2 pl-5 bg-gradient-to-r from-gray-400/90 to-gray-200/100 text-white rounded-2xl relative h-[320px] flex items-end ">
                    <div>
                      <div className="mb-4">
                        <p className="mb-[2px] text-gray-200 "> Enjoy </p>
                        <p className="text-2xl font-semibold mb-[2px]"> With </p>
                        <p className="text-4xl  lg:text-5xl  font-bold opacity-40 mb-2 "> Laptop </p>
                        <Button text={"Browse"} bgColor={"bg-primary" }textColor={"text-white"}/> 
                      </div>
                    </div>
                    <img src={gaming}  alt="" className="w-[250px] absolute top-1/2 -translate-y-1/2 -right-0 overflow-hidden" />
              </div>

                

              {/* second col */}
              <div className="py-10 pl-5 bg-gradient-to-r from-brandGreen/90 to-brandGreen/70 text-white rounded-2xl relative h-[320px] flex items-end ">
                    <div>
                      <div className="mb-4">
                        <p className="mb-[2px] text-white "> Enjoy </p>
                        <p className="text-2xl font-semibold mb-[2px]"> With </p>
                        <p className="text-4xl  lg:text-5xl   font-bold opacity-40 mb-2 ">Earphone  </p>
                        <Button text={"Browse"} bgColor={"bg-white" }textColor={"text-brandGreen"}/> 
                      </div>
                    </div>
                    <img src={man2}  alt="" className="w-[310px] absolute right-1 lg:top-[40px]" />
                </div>

              {/* third col */}
              <div className="py-10 pl-5 bg-gradient-to-r from-brandBlue/90 to-brandBlue/70 text-white rounded-2xl relative h-[320px] flex items-end ">
                    <div>
                      <div className="mb-4">
                        <p className="mb-[2px] text-white "> Enjoy </p>
                        <p className="text-2xl font-semibold mb-[2px]"> With </p>
                        <p className="text-4xl  lg:text-5xl  font-bold opacity-20 mb-2 ">  Gadget </p>
                        <Button text={"Browse"} bgColor={"bg-white"} textColor={"text-brandBlue"}/> 
                      </div>
                    </div>
                    <img src={speaker}  alt="" className="w-[180px] absolute bottom-0 -right-0" />
                </div>

            </div>
        </div>
      </div>
    </>
  )
}

export default Category2



