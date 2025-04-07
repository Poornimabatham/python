import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate(); // Use useNavigate hook

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    setValues((prevalues) => ({
      ...prevalues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting:", values); // Debugging
    axios
      .post("http://localhost:3000/api/v1/login", values)
      .then((res) => {
        console.log("Response Status:", res.status);
        if (res.status === 200) {
          alert("Login successful!");
          navigate("/dashboard"); // Use navigate function for redirection
          console.log("Login successful, response data:", res.data);
        } else {
          alert(`Login attempt returned status: ${res.status}`);
        }
      })
      .catch((err) => {
        console.log("Error:", err);
        if (err.response && err.response.data && err.response.data.message) {
          alert(`Login failed: ${err.response.data.message}`);
        } else {
          alert("Login failed due to a network error or other issue.");
        }
      });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      {/* Parent container */}
      <form
        className="max-w-sm mx-auto bg-white p-8 rounded-md shadow-md"
        onSubmit={handleSubmit} // Use onSubmit for form submission
      >
        {/* Form */}
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
            placeholder="name@flowbite.com"
            required
            name="email"
            value={values.email}
            onChange={handlechange}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
            required
            name="password"
            value={values.password}
            onChange={handlechange}
          />
        </div>
        <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <input
              id="terms"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              required
            />
          </div>
          <label
            htmlFor="terms"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            I agree with the{" "}
            <a
              href="#"
              className="text-blue-600  text-center hover:underline dark:text-blue-500"
            >
              terms and conditions
            </a>
          </label>
        </div>
        <div className="flex space-x-4">
          {/* Container for button and link */}
          <button type="submit" className="btn-gradient-custom w-1/2">
            Login here
          </button>
          <NavLink
            to="/signup"
            className="block w-1/2 text-center text-sm text-white hover:underline bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-2 rounded-md"
          >
            Signup
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default Login;
