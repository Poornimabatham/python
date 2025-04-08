import React, { useState } from "react";
import GlobalComponent from "./GlobalComponent";
import Form from "./Form";
import { useNavigate } from "react-router-dom";
import RegistrationForm from "./RegistrationForm";
import Footer from "./Footer";
import BoxesColumn from "./BoxesColumn";

const Dashboard = () => {
  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false); // mobile menu toggle

  const logout = () => {
    navigate("/");
  };

  return (
    <>
      <div>
        <nav className="bg-white shadow-md">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a
              href="#"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img
                src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                className="h-12 sm:h-16"
                alt="Flowbite Logo"
              />
              <span className="text-xl sm:text-2xl font-semibold text-orange-500">
                Flowbite
              </span>
            </a>

            {/* Hamburger button */}
            <button
              className="md:hidden text-gray-800"
              onClick={() => setMenuOpen(!isMenuOpen)}
            >
              ☰
            </button>

            {/* Nav items */}
            <div
              className={`${
                isMenuOpen ? "block" : "hidden"
              } w-full md:flex md:items-center md:w-auto`}
            >
              <ul className="font-medium flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 space-y-2 md:space-y-0">
                {["Home", "About", "Services", "Pricing"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-900 md:p-0 hover:text-blue-700"
                    >
                      {item}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setModalOpen(true);
                    }}
                    className="text-gray-900 md:p-0 hover:text-blue-700"
                  >
                    Contact
                  </a>
                </li>
              </ul>

              {/* Buttons */}
              <div className="flex flex-col md:flex-row gap-2 md:gap-3 mt-4 md:mt-0 md:ml-6">
                <button className="text-white bg-blue-600 px-4 py-2 rounded-full font-medium">
                  Products
                </button>
                <button className="bg-white text-indigo-600 px-4 py-2 rounded-full font-semibold shadow-md hover:bg-indigo-500 hover:text-white transition">
                  Explore
                </button>
                <button
                  className="bg-white text-pink-600 px-4 py-2 rounded-full font-semibold shadow-md hover:bg-indigo-500 hover:text-white transition"
                  onClick={logout}
                >
                  Log Out
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div>
        <GlobalComponent />
      </div>
      <div>
        <BoxesColumn />
      </div>
      <div>
        <RegistrationForm />
      </div>
      <Footer />

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-md relative">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
              onClick={() => setModalOpen(false)}
            >
              ✕
            </button>
            <Form closeModal={() => setModalOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
