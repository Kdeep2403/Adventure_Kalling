import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';

const Beaches = () => {
  const [beachesPosts, setBeachesPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBeachesPosts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/blogposts/category/Beaches");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setBeachesPosts(data);
      } catch (error) {
        console.error("Error fetching Beaches posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBeachesPosts();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg font-medium">Loading Beaches posts...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <h1 className="text-5xl text-center font-serif font-semibold py-8 mt-12 mb-4 text-gray-800">
        Beaches
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 px-4 sm:px-8">
        {beachesPosts.map((post) => (
          <div
            key={post._id}
            className="border p-4 rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-200"iz>
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

export default Beaches;
