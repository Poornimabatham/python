import React, { useEffect, useState } from "react";
import axios from "axios";
import Herosection from "./Herosection";

const GlobalComponent = () => {
  const [products, setProducts] = useState([]);

  const getPost = () => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        console.log(res.data.products);
        setProducts(res.data.products);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div className="p-4">
      {/* Hero Section */}
      <div className="bg-pink-300 text-white shadow-md rounded-2xl mb-6">
        <Herosection />
      </div>

      {/* Product Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  m gap-6 border-2 border-white-500 py-6  px-8 my-7">
        {products.slice(0, 8).map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 my-6"
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="font-semibold text-lg text-gray-800">
                {item.title}
              </h4>
              <p className="text-gray-600 text-sm">{item.description}</p>
              <div className="mt-3">
                <p className="font-bold text-sm">⭐ Rating: {item.rating}</p>
                <p className="font-bold text-sm">Brand: {item.brand}</p>
                <button className="border-2 border-pink-500 bg-pink-500 text-white my-8 mx-3 px-3 py-1 rounded-full hover:bg-white hover:text-pink-500 transition duration-300 font-semibold">
                  Check more
                </button> 
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GlobalComponent;
