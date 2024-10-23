import { useContext } from "react";
import Product from "./Product";
import { ProductContext } from "../contexts/ProductContext";

const ProductLists = ({ products }) => {
  const { filteredProducts, onFilterProducts } = useContext(ProductContext);
  if (!filteredProducts) {
    return (
      <div className="grid sm:grid-cols-8 bg-gray-50 lg:grid-cols-10  sm:content-start gap-1 w-full ">
        {products.map((product, key) => (
          <Product product={product} key={key} />
        ))}
      </div>
    );
  }
  if (filteredProducts) {
    return (
      <div className="grid sm:grid-cols-8 bg-gray-50 lg:grid-cols-10  sm:content-start gap-1 w-full ">
        {filteredProducts.map((product, key) => (
          <Product product={product} key={key} />
        ))}
      </div>
    );
  }
};

export default ProductLists;
