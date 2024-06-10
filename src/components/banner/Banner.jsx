
const Banner = ({data }) => {
  return (
    <div className="min-h-[450px] flex justify-center item-center pt-12">
      <div className="container"  >
        <div  style={{backgroundColor : data.bgColor }} className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-2xl">
          {/* First column */}
             <div  className="p-6 sm:p-8">
              <p data-aos="fade-up" className="text-sm"> {data.discount}</p>
              <p data-aos="zoom-out" className="text-4xl lg:text-7xl uppercase font-bold"> {data.title}</p>
              <p data-aos="fade-up" className="text-sm"> {data.date}</p>
             </div>
          {/* Second column */}
          <div data-aos="zoom-in" className="h-full flex items-center">
            <img src={data.image} alt="" className="scale-125 w-[320px] md:[450px] mx-auto drop-shadow-2xl object-cover" />
          </div>      

          {/* Third column */}
          <div className="flex flex-col justify-center gap-4 p-6 sm:p-8">
              <p data-aos="zoom-out" className="text-md lg:text-xl font-bold"> {data.title2}</p>
              <p data-aos="fade-up"  className="text-2xl md:text-3xl font-bold lg:text-5xl"> {data.title3}</p>
              <p data-aos="fade-up" className="text-sm tracking-wide leading-5"> {data.title4}</p>
              <div  data-aos="fade-up" data-aos-offset="0" >
                  <button style={{color : data.bgColor}} className="bg-white text-md w-[120px] rounded-full px-3 py-2 "> Shop now </button>   
              </div>
             </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
