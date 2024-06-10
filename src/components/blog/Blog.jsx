import { BlogData } from "../../../facker/data"

const Blog = () => {
  return (
    <div className="mb-8">
      <div className="container">
        <div>
          {/* header section */}
            <div className="flex justify-center flex-col items-center mb-8">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2 dark:text-gray-300"> Recent News </h1>
              <p className="text-xs text-gray-400"> Explore Our Blogs </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:gap-4  md:gap-8 ">
              {
                BlogData.map((item, index) => {
                    return <div key={index} className="shadow">
                          <div className="overflow-hidden rounded-2xl hover:rounded-2xl">
                            <img src={item.image} alt="" className="w-full rounded-2xl h-[220px] mb-2 object-cover hover:scale-105 duration-500"/>
                            <div className="space-y-2 p-4">
                              <p className="text-xs text-gray-500 dark:text-gray-300"> {item.date}</p>
                              <h2 className="text-black text-xl dark:text-gray-200 font-bold"> {item.title}</h2>
                              <p className="text-sm text-gray-600 dark:text-gray-400"> {item.desc }</p>
                            </div>
                          </div>
                    </div>
                })
              }
            </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
