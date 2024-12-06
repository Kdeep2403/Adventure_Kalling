import React, { useState } from "react";
import { FaInstagram, FaFacebookF, FaPinterestP } from 'react-icons/fa'; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("Error sending message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred.");
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="relative">
        <img src="/images/contact.jpg" alt="Contact" className="w-full h-[90vh] object-cover opacity-70"/>
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-white text-4xl md:text-6xl font-medium font-serif">Contact</h1>
          <h4 className="text-xl font-medium text-center font-serif mt-4 text-white">
            Send me your comments, queries, and suggestions through the contact form given below.
          </h4>
        </div>
      </section>

      {/* Form Section */}
      <div className="form-container mb-6 mt-6 px-4">
        <h2 className="text-3xl font-medium text-center font-serif mt-6 mb-6 text-gray-800">
          Contact Us
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-black">
              Name
            </label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-black">
              Email
            </label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-black">
              Subject
            </label>
            <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-black">
              Message
            </label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} required
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" rows="4">
            </textarea>
          </div>
          <button type="submit"
            className="w-full bg-blue-600 text-white text-lg py-3 px-4 rounded-md hover:bg-blue-700 transition duration-300">
            Submit
          </button>
        </form>
      </div>
      <div className="bg-black font-mono w-full text-white p-4 flex flex-col items-center space-y-4">
        <p className="text-sm text-center">
          &copy; {new Date().getFullYear()} Adventure Kalling. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"
            className="hover:text-gray-400"><FaInstagram className="text-xl sm:text-2xl" />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaFacebookF className="text-xl sm:text-2xl" />
          </a>
          <a href="https://www.pinterest.com/" target="_blank"
            rel="noopener noreferrer" className="hover:text-gray-400">
            <FaPinterestP className="text-xl sm:text-2xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

