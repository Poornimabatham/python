import React, { useState } from "react";
import GlobalComponent from "./GlobalComponent";
import Form from "./Form";
import { NavLink, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate(); // Use useNavigate hook

  const [isModalOpen, setModalOpen] = useState(false);

  const logout = () => {
    navigate("/");
  };
  return (
    <>
      <div>
        <nav className="bg-white shadow-md">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a
              href="https://flowbite.com/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img
                src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                className="h-20"
                alt="Flowbite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-orange-500">
                Flowbite
              </span>
            </a>

            <div className="flex items-center gap-6">
              <ul className="font-medium flex flex-col md:flex-row p-4 md:p-0 mt-4 md:mt-0 space-y-2 md:space-y-0 md:space-x-8 rounded-lg md:border-0">
                <li>
                  <a
                    href="#"
                    className="text-gray-900 md:p-0 hover:text-blue-700"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-900 md:p-0 hover:text-blue-700"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-900 md:p-0 hover:text-blue-700"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-900 md:p-0 hover:text-blue-700"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault(); // ✅ Prevent default anchor behavior
                      setModalOpen(true); // ✅ Open modal
                    }}
                    className="text-gray-900 md:p-0 hover:text-blue-700"
                  >
                    Contact
                  </a>
                </li>
              </ul>

              <div className="flex items-center gap-3">
                <button className="text-white bg-blue-600 px-5 py-2 rounded-full font-medium">
                  Products
                </button>
                <button className="bg-white text-indigo-600 px-6 py-2 rounded-full font-semibold shadow-md hover:bg-indigo-500 hover:text-white transition duration-300">
                  Explore
                </button>
                <button
                  className="bg-white text-pink-600 px-6 py-2 rounded-full font-semibold shadow-md hover:bg-indigo-500 hover:text-white transition duration-300"
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

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
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
