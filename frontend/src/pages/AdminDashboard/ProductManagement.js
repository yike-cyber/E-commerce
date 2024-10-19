// ProductManagement.js
import React, { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext";

const ProductManagement = () => {
  const { products } = useContext(ProductContext);
  console.log("products", products);

  return (
    <section className="bg-white shadow-md p-4 rounded-lg mb-6">
      <h2 className="font-semibold text-lg">Product Management</h2>
      <div className="flex justify-between mt-2">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Add Product
        </button>
      </div>
      <div className="mt-4">
        <ul>
          {products.length > 0 ? (
            products.map((product) => (
              <li
                key={product.id}
                className="flex justify-between p-2 border-b"
              >
                <span>{product.title}</span>
                <span>${product.price}</span>
              </li>
            ))
          ) : (
            <li className="p-2 text-gray-600">No products available.</li>
          )}
        </ul>
      </div>
    </section>
  );
};

export default ProductManagement;