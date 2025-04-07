import React, { useState } from "react";
import axios from "axios";

const Form = ({ closeModal }) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    msg: "",
  });

  const formSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/v1/ContactUs", values)
      .then((res) => {
        if (res.status === 200) {
          alert("Contact successful!");
          setValues({ name: "", email: "", msg: "" });
          closeModal(); // ✅ CLOSE MODAL
        }
      })
      .catch((error) => {
        console.error("Submission error:", error);
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          console.log("Submission failed:", error.response.data.message);
        } else {
          console.log("Network or server issue.");
        }
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4 text-center">Contact Us</h2>
      <form className="space-y-4" onSubmit={formSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          name="name"
          value={values.name}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          name="email"
          value={values.email}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          name="msg"
          value={values.msg}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full font-medium"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Form;
