import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [showSearchBox, setShowSearchBox] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [showMenu, setShowMenu] = useState(false); // State for responsive menu
  const navigate = useNavigate();

  const validCategories = [
    "beaches",
    "monuments",
    "volcanoes",
    "hikes",
    "waterfalls",
    "wildlife",
  ];

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      const isValidCategory = validCategories.some((cat) =>
        cat.toLowerCase().includes(searchQuery.toLowerCase())
      );

      if (isValidCategory) {
        navigate(`/categories/${searchQuery.toLowerCase()}`);
        setSearchResult(null);
      } else {
        setSearchResult("Not Found!!!");
      }
    }
    setSearchQuery("");
    setShowSearchBox(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const checkIfCategoryFound = () => {
    if (searchQuery.trim() !== "") {
      const isValidCategory = validCategories.some((cat) =>
        cat.toLowerCase().includes(searchQuery.toLowerCase())
      );
      if (!isValidCategory) {
        setSearchResult("Not Found!!!");
      } else {
        setSearchResult(null);
      }
    } else {
      setSearchResult(null);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-20">
      <header className="bg-black px-6 sm:px-14 font-serif text-white py-3 flex justify-between items-center">
        <h1 className="text-2xl sm:text-3xl font-bold">Adventure Kalling</h1>

        {/* Responsive menu toggle */}
        <div className="sm:hidden flex items-center">
          <FaSearch
            className="text-xl cursor-pointer mr-4"
            onClick={() => setShowSearchBox(!showSearchBox)}
          />
          <button
            className="text-xl"
            onClick={() => setShowMenu(!showMenu)}
            aria-label="Toggle Menu"
          >
            {showMenu ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <nav
          className={`${
            showMenu ? "block" : "hidden"
          } sm:flex items-center space-y-4 sm:space-y-0 sm:space-x-10 text-sm sm:text-lg absolute sm:static left-0 top-14 sm:top-0 w-full sm:w-auto bg-black sm:bg-transparent z-10 sm:z-auto`}
        >
          <Link to="/" className="block hover:text-gray-400 px-4 sm:px-0">
            Home
          </Link>
          <Link to="/pages/blog" className="block hover:text-gray-400 px-4 sm:px-0">
            Blog
          </Link>
          <div className="relative group">
            <div className="block sm:inline hover:text-gray-300 cursor-pointer px-4 sm:px-0">
              Categories
            </div>
            <ul className="absolute left-0 top-full w-48 bg-black text-white shadow-md rounded-lg z-10 hidden group-hover:block">
              {validCategories.map((category) => (
                <li key={category}>
                  <Link
                    to={`/categories/${category}`}
                    className="block px-4 py-2 text-center hover:bg-gray-700"
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Link to="/pages/images" className="block hover:text-gray-400 px-4 sm:px-0">
            Images
          </Link>
          <Link to="/pages/about" className="block hover:text-gray-400 px-4 sm:px-0">
            About
          </Link>
          <Link to="/pages/contact" className="block hover:text-gray-400 px-4 sm:px-0">
            Contact
          </Link>
          <Link to="/blogpostform" className="block hover:text-gray-400 px-4 sm:px-0">
            Create
          </Link>
          <FaSearch
            className="hidden sm:inline text-xl cursor-pointer hover:text-gray-400"
            onClick={() => setShowSearchBox(!showSearchBox)}
          />
        </nav>
      </header>

      {showSearchBox && (
        <div className="bg-black w-full border-t border-black py-2 px-6">
          <div className="max-w-4xl mx-auto flex items-center">
            <input
              type="text"
              placeholder="Search for categories or posts..."
              className="flex-grow px-2 border bg-black text-white border-black rounded-l-md outline-none"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                checkIfCategoryFound();
              }}
              onKeyPress={handleKeyPress}
            />
            <button
              className="bg-blue-500 text-white px-6 py-2 rounded-r-md hover:bg-blue-600"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
          {searchResult && (
            <p className="mt-4 text-center text-red-500">{searchResult}</p>
          )}
        </div>
      )}
    </nav>
  );
};

export default Header;

