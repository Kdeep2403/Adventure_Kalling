import React, { useState } from "react";
import axios from "axios";
import Footer from "./Footer";

const BlogPostForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const [sections, setSections] = useState([]);

  const handleAddSection = () => {
    setSections([
      ...sections,
      { title: "", imgSrc: "", description: "", subHeadings: [] },
    ]);
  };

  const handleSectionChange = (index, key, value) => {
    const updatedSections = [...sections];
    updatedSections[index][key] = value;
    setSections(updatedSections);
  };

  const handleAddSubHeading = (sectionIndex) => {
    const updatedSections = [...sections];
    updatedSections[sectionIndex].subHeadings.push({ title: "", description: "" });
    setSections(updatedSections);
  };

  const handleSubHeadingChange = (sectionIndex, subHeadingIndex, key, value) => {
    const updatedSections = [...sections];
    updatedSections[sectionIndex].subHeadings[subHeadingIndex][key] = value;
    setSections(updatedSections);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("sections", JSON.stringify(sections));

    try {
      await axios.post("http://localhost:5000/api/blogposts", formData);
      alert("Blog post created successfully!");
    } catch (error) {
      console.error("Error creating blog post:", error);
      alert("Error creating post!");
    }
  };

  return (
    <div>
      <section className="relative">
        <img src="/images/27.jpg" alt="Contact Hero" className="w-full h-[90vh] object-cover opacity-70" />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-white text-4xl md:text-6xl font-medium font-serif">Create your post!!!</h1>
        </div>
      </section>

      <h2 className="text-3xl font-medium text-center font-serif mt-4 mb-6 text-gray-800">Blogpost Form!!!</h2>

      <form onSubmit={handleSubmit} className="form-container border shadow-md max-w-3xl mx-auto mt-8 mb-8 p-8">
        <div>
          <label className="block font-bold">Title</label>
          <input type="text" className="w-full border p-2 rounded" value={title}
            onChange={(e) => setTitle(e.target.value)}/>
        </div>
        <div>
          <label className="block font-bold mt-4">Description</label>
          <textarea className="w-full border p-2 rounded" value={description}
            onChange={(e) => setDescription(e.target.value)}/>
        </div>
        <div>
          <label className="block font-bold mt-4">Category</label>
          <input type="text" className="w-full border p-2 rounded"
            value={category} onChange={(e) => setCategory(e.target.value)}/>
        </div>
        <div>
          <label className="block font-bold mt-4">Image</label>
          <input type="file" className="w-full border p-2 rounded"
            onChange={(e) => setImage(e.target.files[0])}/>
        </div>
        <div className="mt-4">
          <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleAddSection}>
            Add Section
          </button>
          {sections.map((section, index) => (
            <div key={index} className="mt-4 border p-4 rounded">
              <input type="text" placeholder="Section Title" className="w-full border p-2 rounded"
                value={section.title} onChange={(e) => handleSectionChange(index, "title", e.target.value)}/>
              
              <input type="text" placeholder="Section Image URL" className="w-full border p-2 rounded mt-2"
                value={section.imgSrc} onChange={(e) => handleSectionChange(index, "imgSrc", e.target.value)}/>
              
              <textarea placeholder="Section Description" className="w-full border p-2 rounded mt-2"
                value={section.description} onChange={(e) => handleSectionChange(index, "description", e.target.value)}/>
              <button type="button" className="bg-gray-500 text-white px-2 py-1 rounded mt-2"
                onClick={() => handleAddSubHeading(index)}>
                Add Sub-Heading
              </button>
              {section.subHeadings.map((subHeading, subIndex) => (
                <div key={subIndex} className="mt-4 pl-4 border-l">
                  <input type="text" placeholder="Sub-Heading Title" className="w-full border p-2 rounded"
                    value={subHeading.title} onChange={(e) =>
                    handleSubHeadingChange(index, subIndex, "title", e.target.value)}/>
                  <textarea placeholder="Sub-Heading Description" className="w-full border p-2 rounded mt-2"
                    value={subHeading.description} onChange={(e) =>
                    handleSubHeadingChange(index, subIndex, "description", e.target.value)}/>
                </div>
              ))}
            </div>
          ))}
        </div>
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded mt-4">
          Submit Blog Post
        </button>
      </form>

      <Footer />
    </div>
  );
};

export default BlogPostForm;

