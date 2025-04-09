import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    repeatpassword: "",
  });
  const [passwordMatchError, setPasswordMatchError] = useState("");
  const [passwordStrengthError, setPasswordStrengthError] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
    // Clear password strength error when the user types
    if (name === 'password') {
      setPasswordStrengthError("");
    }
  };

  const checkPasswordStrength = (password) => {
    const hasMinLength = password.length >= 6;
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasDigit = /[0-9]/.test(password);

    return hasMinLength && hasSpecialChar && (hasUpperCase || hasLowerCase) && hasDigit;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPasswordMatchError("");
    setPasswordStrengthError("");

    if (values.password !== values.repeatpassword) {
      setPasswordMatchError("Passwords do not match");
      return;
    }

    if (!checkPasswordStrength(values.password)) {
      setPasswordStrengthError(
        "Password must be at least 6 characters long and contain at least one special character, one uppercase or lowercase letter, and one digit."
      );
      return;
    }

    console.log("Submitting:", values);
    axios
      .post("http://localhost:3000/api/v1/signup", {
        name: values.name,
        email: values.email,
        password: values.password,
        repeatpassword: values.repeatpassword,
      })
      .then((res) => {
        if (res.status === 200) {
          alert("Signup successful!");
          navigate("/");
          console.log("signup successful, response data:", res.data);
        } else if (res.status === 400) {
          alert("Email id already exist!");
        } else {
          console.log("Signup Unsuccessful!");
        }
        setValues({
          name: "",
          email: "",
          password: "",
          repeatpassword: "",
        });
        navigate("/");
      })
      .catch((error) => {
        console.error("Signup error:", error);
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          console.log("Signup failed:", error.response.data.message);
        } else {
          console.log("Signup failed due to a network error or other issue.");
        }
      });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        className="max-w-sm mx-auto bg-white p-8 rounded-md shadow-md"
        onSubmit={handleSubmit}
      >
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Full name
          </label>
          <input
            type="text"
            id="name"
            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
            placeholder="Your Name"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
        </div>
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
            onChange={handleChange}
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
            onChange={handleChange}
          />
          {console.log(passwordStrengthError)}
          { passwordStrengthError && (
            <p className="text-red-500 text-sm">{passwordStrengthError}</p>
          )}
        </div>
        <div className="mb-5">
          <label
            htmlFor="repeat-password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Repeat password
          </label>
          <input
            type="password"
            id="repeatpassword"
            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
            name="repeatpassword"
            value={values.repeatpassword}
            onChange={handleChange}
          />
          {passwordMatchError && (
            <p className="text-red-500 text-sm">{passwordMatchError}</p>
          )}
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
              className="text-blue-600  text-center hover:underline dark:text-blue-500"
            >
              terms and conditions
            </a>
          </label>
        </div>
        <button type="submit" className="btn-gradient-custom  block mx-auto">
          Signup here
        </button>
      </form>
    </div>
  );
};

export default Signup;