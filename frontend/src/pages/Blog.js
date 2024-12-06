import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import axios from "axios";

const Blog = () => {
  const [blogPosts, setBlogposts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/blogposts")
      .then((res) => setBlogposts(res.data))
      .catch((err) => console.error("Error fetching blogposts:", err));
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="relative">
        <img src="/images/night.jpg" alt="Blog Hero" className="w-full h-[90vh] object-cover opacity-90"/>
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-white text-4xl md:text-6xl font-medium font-serif">
            Blog
          </h1>
        </div>
      </div>

      {/* Blog Posts Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6 md:p-8">
        {blogPosts.map((post) => (
          <div key={post._id}
            className="bg-white border border-gray-200 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <img src={`http://localhost:5000${post.image}`} alt={post.title} className="w-full h-48 md:h-64 object-cover rounded-lg"/>
            <h2 className="text-xl font-bold mt-4 text-gray-800">{post.title}</h2>
            <p className="mt-2 text-gray-600">
              {post.description.length > 100
                ? `${post.description.slice(0, 100)}...`
                : post.description}
            </p>
            <Link to={`/blogpost/${post._id}`} className="text-blue-500 hover:underline mt-4 block">
              Read More
            </Link>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
