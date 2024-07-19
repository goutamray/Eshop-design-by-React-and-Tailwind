
import earphone from "../../assets/ear.png"
import watch from "../../assets/watch.png"
import mackbook from "../../assets/macbook.png"
import Button from "../button/Button"

const Category = () => {
  return (
    <>
      <div className="py-8">
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* first col */}
                <div className="py-10 pl-5 bg-gradient-to-r from-black/90 to-black/70 text-white rounded-2xl relative h-[320px] flex items-end ">
                    <div>
                      <div className="mb-4">
                        <p className="mb-[2px] text-gray-400 "> Enjoy </p>
                        <p className="text-2xl font-semibold mb-[2px]"> With </p>
                        <p className="text-4xl  lg:text-5xl  font-bold opacity-20 mb-2 "> Earphone </p>
                        <Button text={"Browse"} bgColor={"bg-primary"} textColor={"text-white"}/> 
                      </div>
                    </div>
                    <img src={earphone}  alt="" className="w-[320px] absolute bottom-0" />
                </div>

              {/* second col */}
              <div className="py-10 pl-5 bg-gradient-to-r from-brandYellow/90 to-brandYellow/70 text-white rounded-2xl relative h-[320px] flex items-end ">
                    <div>
                      <div className="mb-4">
                        <p className="mb-[2px] text-white "> Enjoy </p>
                        <p className="text-2xl font-semibold mb-[2px]"> With </p>
                        <p className="text-4xl  lg:text-5xl  font-bold opacity-40 mb-2 "> Gadget </p>
                        <Button text={"Browse"} bgColor={"bg-white" }textColor={"text-brandYellow"}/> 
                      </div>
                    </div>
                    <img src={watch}  alt="" className="w-[320px] absolute -right-4 lg:top-[40px]" />
                </div>

              {/* third col */}
              <div className="py-10 xl:col-span-2 pl-5 bg-gradient-to-r from-primary/90 to-primary/70 text-white rounded-2xl relative h-[320px] flex items-end ">
                    <div>
                      <div className="mb-4">
                        <p className="mb-[2px] text-white "> Enjoy </p>
                        <p className="text-2xl font-semibold mb-[2px]"> With </p>
                        <p className="text-4xl  lg:text-5xl  font-bold opacity-40 mb-2 "> Laptop </p>
                        <Button text={"Browse"} bgColor={"bg-white" }textColor={"text-primary"}/> 
                      </div>
                    </div>
                    <img src={mackbook}  alt="" className="w-[250px] absolute top-1/2 -translate-y-1/2 -right-0 " />
                </div>

            </div>
        </div>
      </div>
    </>
  )
}

export default Category











