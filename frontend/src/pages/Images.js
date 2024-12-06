import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';

const Images = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/blogposts");
        const data = await response.json();
        if (Array.isArray(data)) {
          setBlogPosts(data);
        } else {
          console.error("Expected an array but got:", data);
        }
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  if (loading) return <p>Loading images...</p>;
  if (!Array.isArray(blogPosts) || blogPosts.length === 0)
    return <p>No images available.</p>;

  return (
    <div>
      <section className="relative">
        <img src="/images/19.jpg" alt="top"  className="w-full h-[90vh] object-cover opacity-70"/>
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <h1 className="text-white text-4xl md:text-6xl font-medium font-serif">
              Images
            </h1>
          </div>
    </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-4 mb-4 p-8 gap-6">
        {blogPosts.map((post) => (
          <img key={post._id} src={`http://localhost:5000${post.image}`} alt="Blog Post"
            className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md"/>
        ))}
      </div>
      <Footer/>
    </div>
    
  );
};

export default Images;

