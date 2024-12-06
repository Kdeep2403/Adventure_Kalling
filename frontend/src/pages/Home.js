import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import video from '../assets/video-1.mp4';
import Footer from '../components/Footer';

const Home = () => {
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

  if (loading) return <p>Loading blog posts...</p>;
  if (!Array.isArray(blogPosts) || blogPosts.length === 0)
    return <p>No blog posts available.</p>;
  

  return (
    <div className="flex flex-col min-h-screen">
      {/* Video Section */}
      <section className="relative">
        <div className="w-full bg-black mb-4">
          <video className="w-full h-[80vh] sm:h-[90vh] lg:h-[105vh] object-cover" src={video} autoPlay muted loop/>
        </div>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white px-4">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-center">
            Explore. Dream. Discover
          </h2>
          <p className="mt-2 font-serif text-base sm:text-lg text-center">
            To dream is to imagine the unknown, fueling the desire to wander beyond familiar horizons.
          </p>
          <Link to="/pages/blog"
            className="mt-4 rounded border border-white px-6 py-3 sm:py-4 sm:px-8 text-lg sm:text-2xl font-serif hover:bg-gray-400 transition-all duration-300">
            Explore
          </Link>
        </div>
      </section>

      {/* Featured Heading */}
      <div className="flex items-center justify-center mt-8 mb-8 ml-10 mr-10 px-8">
        <hr className="border-gray-300 flex-grow" />
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-mediumbold font-serif text-black mx-4">
          Features
        </h1>
        <hr className="border-gray-300 flex-grow" />
      </div>

      {/* Image and Link Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ml-8 mr-8 mt-4 px-4">
        <div className="text-center">
          <img className="w-full h-64 rounded-lg object-cover mb-4" src="/images/10.jpg" alt="left" />
          <Link to="/pages/blog" className="text-black-800 font-bold font-serif hover:text-gray-900">
            BLOG
          </Link>
        </div>
        <div className="text-center">
          <img className="w-full h-64 rounded-lg object-cover mb-4" src="/images/11.jpg" alt="middle" />
          <Link to="/pages/images" className="text-black-800 font-bold font-serif hover:text-gray-900">
            IMAGES
          </Link>
        </div>
        <div className="text-center">
          <img className="w-full h-64 rounded-lg object-cover mb-4" src="/images/c.jpg" alt="right" />
          <Link to="/pages/about" className="text-black-800 font-bold font-serif hover:text-gray-900">
            ABOUT
          </Link>
        </div>
      </div>

      {/* Thanks for Looking Section */}
      <div className="flex flex-col lg:flex-row items-center gap-8 ml-8 mr-8 mt-4 px-6 py-6">
        <img src="/images/me.jpg" alt="Left Side" className="w-full lg:w-1/2 h-auto shadow-lg rounded-lg" />
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl sm:text-3xl ml-5 mb-4 text-black font-serif font-semibold">
            Thanks for looking!!!
          </h2>
          <p className="text-base ml-6 mb-2 sm:text-lg text-gray-700 ">
          Hi, I'm Komaldeep Kaur, a younger traveler with a deep passion for exploring the world. My blog 
          is a window into my journeys across breathtaking beaches, challenging hikes, historical monuments,
          majestic volcanoes, serene waterfalls, and the vibrant world of wildlife. </p>
          <p className="text-base ml-6 mb-2 sm:text-lg text-gray-700">Each post is a heartfelt narrative of serene shores, adrenaline-pumping treks, awe-inspiring 
            landmarks, and unforgettable encounters with nature. I share tips, personal stories, and a 
            glimpse into the unique beauty of every place I visit. </p>
          <p className="text-base ml-6 mb-2 sm:text-lg text-gray-700">While I’ve yet to see every corner of the globe, I’m eager to discover new places, meet diverse 
          cultures, and capture the beauty of the world through my experiences. My hope is that my blog will
          inspire others to seek adventure, appreciate the wonders of nature, and step out of their 
          comfort zones to explore the extraordinary.</p>
          <p className="text-base ml-6 mb-2 sm:text-lg text-gray-700">Let’s journey together to uncover the beauty of this incredible world!
          </p>
          <button type="readmore"
            className="w-30 bg-blue-400 text-white text-lg ml-6 py-3 hover:underline px-4 rounded-md hover:bg-blue-600 transition duration-300">
            <a href="/pages/about">Read more</a>
          </button>
        </div>
      </div>

      {/* Travel Guides */}
      <div className="bg-white py-6 px-4">
        <div className="flex items-center ml-10 mr-10 justify-center">
          <hr className="border-gray-300 flex-grow" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-mediumbold text-black mx-4">
            Travel Guides
          </h1>
          <hr className="border-gray-300 flex-grow" />
        </div>
        <h2 className="text-lg sm:text-2xl font-serif font-medium text-gray-800 text-center mt-2">
          Popular travel blogposts & guides
        </h2>

        {/* Blog Posts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ml-8 mr-8 gap-6 mb-4 mt-6">
          {blogPosts.map((post) => (
            <div key={post._id} className="border p-4 rounded-lg shadow-md">
              <img src={`http://localhost:5000${post.image}`}
                alt={post.title} className="w-full h-48 sm:h-64 object-cover rounded-lg"/>
              <h2 className="text-lg sm:text-xl text-center font-bold mt-4">{post.title}</h2>
              <p className="mt-2 text-center text-gray-600">
                {post.description.length > 100
                  ? `${post.description.slice(0, 100)}...`
                  : post.description}
              </p>
              <Link to={`/blogpost/${post._id}`} className="text-blue-500 text-center mt-2 block hover:underline">
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;

