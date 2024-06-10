import { RxCross2 } from "react-icons/rx";

const Popup = ({ orderPopup, setOrderPopup}) => {
  return (
    <> 
    {
      orderPopup && 
        <div>
        <div  className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm ">
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white rounded-xl duration-200 w-[300px] dark:bg-gray-900 dark:text-white">
            {/* header part */}
            <div className="flex justify-between items-center ">
                <h1 className="text-gray-500 text-md font-medium"> Order Now </h1>
                <div>
                   <RxCross2    onClick={() => setOrderPopup(false)} className="text-gray-500 text-md font-medium cursor-pointer" />
                </div>
            </div>
  
               {/* form part  */} 
                      <div className="mt-4">
                          <input type="text" placeholder="Name" className="form-input"  />
                        </div>
                        <div className="mt-4">
                             <input type="text" placeholder="Email" className="form-input"  />
                        </div>
                        <div className="mt-4">
                             <input type="text" placeholder="Adress" className="form-input"  />
                        </div>
                        <div className="flex justify-center ">
                          <button className="bg-primary px-3 py-1 text-white rounded-full hover:scale-105  transition-all duration-300 mt-2"> Order Now </button>
                        </div>
          </div>
        </div>
        </div>
      
    }
  </>
  )
}

export default Popup












