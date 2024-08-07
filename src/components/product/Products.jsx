import ProductCard from "./ProductCard";
import { productData } from "../../../facker/data";

const Products = () => {
  return (
    <div className="mt-3 mb-12">
    <div className="container">
      <div >
        {/* header section */}
        <div className="flex justify-center flex-col items-center mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2 dark:text-gray-300 mt-5 xl:mt-0">Our Products </h1>
          <p className="text-xs text-gray-400"> Explore Our Products </p>
        </div>

        {/* body section */}
        <ProductCard data={productData}/> 

      </div>
    </div>
      
    </div>
  )
}

export default Products; 
