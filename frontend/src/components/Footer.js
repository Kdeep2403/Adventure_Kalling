import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaPinterestP } from 'react-icons/fa'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <section className="relative">
      {/* Background section */}
      <div
        className="relative bg-cover bg-center h-screen flex items-center justify-center"
        style={{ backgroundImage: "url('/images/footer.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-3xl sm:text-5xl font-bold font-times mb-4">
            GET IN TOUCH
          </h1>
          <p className="text-base sm:text-lg mb-2">
            Feel free to{' '}
            <Link
              to="/pages/contact"
              className="text-orange-700 hover:underline"
            >
              contact me
            </Link>{' '}
            if you have travel questions, comments, or suggestions!
          </p>
          <p className="text-base sm:text-lg mb-6">
            I'll try to get back to you!
          </p>
          <div className="mt-6">
            <FontAwesomeIcon icon={faPaperPlane} className="text-white w-8 h-8 sm:w-12 sm:h-12" />
          </div>
        </div>
      </div>

      {/* Footer section */}
      <div className="bg-black font-mono w-full text-white p-4 flex flex-col items-center space-y-4">
        <p className="text-sm text-center">
          &copy; {new Date().getFullYear()} Adventure Kalling. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaInstagram className="text-xl sm:text-2xl" />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaFacebookF className="text-xl sm:text-2xl" />
          </a>
          <a
            href="https://www.pinterest.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaPinterestP className="text-xl sm:text-2xl" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
