import React from "react";
import Footer from "../components/Footer";

function About() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="relative">
        <img src="/images/17.jpg" alt="top" className="w-full h-[90vh] object-cover"/>
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-white text-4xl md:text-6xl font-medium font-serif">
            About
          </h1>
        </div>
      </section>

      {/* About Section */}
      <div className="flex flex-col lg:flex-row items-center mt-6 ml-6 mb-2 lg:items-center lg:justify-between px-6 gap-8">
        <img src="/images/24.jpg" alt="Adventure" className="w-full lg:w-1/2 h-auto shadow-lg"/>

        {/* About Content */}
        <div className="w-full lg:w-1/2 mt-6 ml-4 mr-6 rounded-lg ">
          <p className="text-3xl font-mediumbold text-justify mb-2 text-gray-800">
          About Me!!!</p>
            <p className="text-lg mb-2 text-justify">Hi, I'm Komaldeep Kaur, a younger traveler with a deep 
              passion for exploring the world. My blog is a window into my journeys across breathtaking 
              beaches, challenging hikes, historical monuments, majestic volcanoes, serene waterfalls, and 
              the vibrant world of wildlife.</p>
              <p className="text-justify mb-2 text-lg"> Each post is a heartfelt narrative of serene shores, 
              adrenaline-pumping treks, awe-inspiring landmarks, and unforgettable encounters with nature. 
              I share tips, personal stories, and a glimpse into the unique beauty of every place I visit.</p> 
              <p className="text-justify text-lg">Whether you're an adventurer seeking inspiration or someone yearning for a deeper connection 
              with the world’s landscapes, my blog is here to guide and inspire. My love for travel began 
              with the excitement of exploring nearby spots and grew into a journey of discovering the 
              hidden gems of the world.</p>
          </div>
        </div>
        <div className=" flex flex-row lg:flex-row mb-8">
          <div className="w-full ml-11 mr-11 rounded-lg">
              <p className="text-justify mb-2 text-lg">From trekking to iconic mountain peaks to witnessing the raw beauty 
              of erupting volcanoes, I’ve embraced countless adventures that have taught me about different 
              cultures, breathtaking landscapes, and the thrill of stepping out of my comfort zone.</p>
              <p className="text-justify mb-2 text-lg">Some of my most cherished memories include climbing volcanic craters and feeling the heat of Earth's 
              core, immersing in the tranquility of beaches, hiking through pristine trails, encountering 
              wildlife in their natural habitats, like observing orangutans in rainforests, and visiting 
              timeless monuments such as the Taj Mahal, Machu Picchu, Petra, and Angkor Wat.</p>
              <p className="text-justify mb-2 text-lg">Beaches, hikes, monuments, volcanoes, waterfalls, and wildlife hold a special place in my heart, and I’m always 
              eager to discover new destinations and experiences. From serene beach sunsets and adventurous 
              treks to exploring world-renowned landmarks and less-traveled paths, every adventure has been 
              filled with unforgettable moments.</p>
              <p className="text-justify mb-2 text-lg"> Though every trip comes with its challenges, the joy and 
              growth of exploring the unknown always outweigh them. While I haven’t been everywhere yet, 
              every destination is on my list! My hope is that my blog inspires others to seek adventure, 
              appreciate the wonders of nature, and step out of their comfort zones to explore the 
              extraordinary.</p><p className="text-justify mb-2 text-lg">Let’s journey together to uncover the beauty of this incredible world!</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
