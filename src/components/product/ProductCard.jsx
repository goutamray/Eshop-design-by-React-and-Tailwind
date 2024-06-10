import Button from "../button/Button"



const ProductCard = ({ data }) => {
  return (
    <div >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 lg:gap-12 sm:gap-4">
          {/* card products */}
          {
            data.map((item, index) => {
              return <div key={index} className="border group border-gray-300 rounded-md sm:rounded-md ">
                       <div className="relative ">
                           <img src={item.image} alt="" className="h-[180px] w-[260px] lg:w-[360px]  rounded-md sm:rounded-md "/>

                           {/* hover button  */}
                           <div className="hidden group-hover:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center group-hover:backdrop-blur-md justify-center items-center duration-300">
                              <Button textColor={"text-white"} bgColor={"bg-primary"} text={"Add To Cart"}/>
                           </div>

                           {/* product text */}
                           <div className="p-3 leading-6">
                            <p className="text-xl font-bold "> {item.title}</p>
                            <p className="text-md font-medium"><span className="text-primary font-medium text-md"> Price :</span> ${item.price} </p>
                           </div>

                        </div>
                    </div>
            })
          }
      </div>
  
    </div>
  )
}

export default ProductCard















