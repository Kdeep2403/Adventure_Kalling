import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Footer from "./Footer";

const BlogPostDetail = () => {
  const { id } = useParams();
  const [blogPost, setBlogPost] = useState(null);
  const [showTableOfContents, setShowTableOfContents] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/blogposts/${id}`)
      .then((res) => setBlogPost(res.data))
      .catch((err) => console.error("Error fetching blog post:", err));
  }, [id]);

  if (!blogPost) return <p>Loading...</p>;

  return (
    <div>
      <div className="mx-auto p-12 mt-12 mb-4">
        <img src={`http://localhost:5000${blogPost.image}`} alt={blogPost.title}
          className="w-full object-cover rounded-lg shadow-lg" style={{ height: "auto", maxHeight: "600px" }}/>
        <h1 className="text-4xl font-bold font-serif text-center mt-4">{blogPost.title}</h1>
        <p className="mt-4 font-serif text-justify">{blogPost.description}</p>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold font-serif flex items-center">
            Table of Contents
            <button onClick={() => setShowTableOfContents(!showTableOfContents)}
              className="ml-3 text-blue-500 font-normal font-serif text-base hover:underline cursor-pointer">
              {showTableOfContents ? "Hide" : "Show"}
            </button>
          </h2>
          {showTableOfContents && (
            <ul className="list-decimal font-serif pl-5 mt-4">
              {blogPost.sections.map((section, index) => (
                <li key={index} className="mt-2">
                  {section.title}
                  {section.subHeadings && section.subHeadings.length > 0 && (
                    <ul className="list-inside list-disc mt-2">
                      {section.subHeadings.map((subHeading, subIndex) => (
                        <li key={subIndex} className="ml-5">
                          {subHeading.title}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="mt-8">
          {blogPost.sections.map((section, index) => (
            <div key={index} className="mt-8">
              <h2 className="text-xl font-serif font-bold">{section.title}</h2>
              <img src={section.imgSrc} alt={section.title} className="w-full h-[75vh] object-cover rounded-lg mt-4"/>
              <p className="mt-4 font-serif text-justify">{section.description}</p>

              {section.subHeadings && section.subHeadings.length > 0 && (
                <div className="mt-4">
                  {section.subHeadings.map((subHeading, subIndex) => (
                    <div key={subIndex} className="mt-4">
                      <h3 className="text-lg font-semibold">{subHeading.title}</h3>
                      <p className="font-serif text-justify">{subHeading.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPostDetail;
