import React, { useEffect, useState } from "react";
import logo from "../assets/photo3.jpg";
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
    <>
      <div className="grid-container">
        <div className="header  bg-pink-300  text-white shadow-md rounded-2xl ">
          <Herosection />
        </div>

        {/* ✅ Display articles from API */}
        {products.slice(0, 8).map((item) => (
          <div className="flex flex-wrap gap-y-2 justify-center">
            <div key={item.id} className="article">
              <div className="article-content">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="article-img"
                />
                <div className="article-text">
                  <h4>{item.title}</h4>
                  <p className="text-black">{item.description}</p>
                  <div className="my-4">
                    <h1 className="font-bold  my-4">
                      ⭐ Rating - {item.rating}
                    </h1>
                    <h1 className="font-bold  my-4">Brand - {item.brand}</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>

    
  );
};

export default GlobalComponent;
