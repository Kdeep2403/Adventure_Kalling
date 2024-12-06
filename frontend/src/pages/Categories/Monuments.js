import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";

const Monuments = () => {
  const [monumentsPosts, setMonumentsPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMonumentsPosts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/blogposts/category/Monuments");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setMonumentsPosts(data);
      } catch (error) {
        console.error("Error fetching Monuments posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMonumentsPosts();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg font-medium">Loading Monuments posts...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <h1 className="text-5xl text-center font-serif font-semibold py-8 mt-12 mb-4 text-gray-800">
        Monuments
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 mb-8 sm:px-8">
        {monumentsPosts.map((post) => (
          <div
            key={post._id}
            className=" p-4 rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-200"
          >
            <img
              src={`http://localhost:5000${post.image}`}
              alt={post.title}
              className="w-full h-64 object-cover rounded-lg"
            />
            <h2 className="text-2xl font-bold mt-4 text-gray-800">{post.title}</h2>
            <p className="mt-2 text-gray-600">
              {post.description.length > 100
                ? `${post.description.slice(0, 100)}...`
                : post.description}
            </p>
            <Link
              to={`/blogpost/${post._id}`}
              className="text-blue-500 hover:underline mt-4 block"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Monuments;
