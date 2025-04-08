import React from "react";
import photo from "../assets/photo.avif";

const BoxesColumn = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 box-container p-4">
        <div className="box">
          <h1 className="text-xl font-bold mb-2">Beauty with brains</h1>
          <p>
            Start generating UI components, sections, pages, and code snippets
            with our custom trained GPT model based on open-source resources.
            The data we used to train this ChatGPT is based on our extensive
            collection of UI component examples, JS API references and data
            attributes interface from the Flowbite Library.
          </p>
          <button className="border-2 border-pink-500 bg-pink-500 text-white my-8 mx-3 px-6 py-3 rounded-full hover:bg-white hover:text-pink-500 transition duration-300 font-semibold">
            Explore
          </button>
        </div>
        <div className="left-box flex items-center justify-center">
          <img
            src="https://media.istockphoto.com/id/486976869/photo/happy-woman-presenting-with-open-hand-holding-something-blank.jpg?s=612x612&w=0&k=20&c=F5Z92g-F4eZnaQbX40Ind7fZuKQiVmc9bEmZugo-7Fg="
            className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain"
            alt="Flowbite Logo"
          />
        </div>
      </div>
    </>
  );
};

export default BoxesColumn;
