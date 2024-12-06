const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const cors = require("cors");
const path = require("path");

// Initialize Express app
const app = express();

// Middleware
app.use(express.json()); 
app.use(cors()); 
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// MongoDB Connection
const MONGO_URI = "mongodb://localhost:27017/AK_Database"; 
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Schema & Model for contact
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String,
});

const Contact = mongoose.model("Contact", contactSchema);

// API Route
app.post("/api/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;
  try {
    const newContact = new Contact({ name, email, subject, message });
    await newContact.save();
    res.status(200).json({ message: "Message saved successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Error saving message" });
  }
});

// BlogPost Schema and Model
const blogPostSchema = new mongoose.Schema({
  image: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  sections: { type: Array, default: [] },
});

const BlogPost = mongoose.model("BlogPost", blogPostSchema);

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); 
  },

  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // Generate a unique file name
  },
});

const upload = multer({ storage });

// Routes
// 1. Create a new blog post
app.post("/api/blogposts", upload.single("image"), async (req, res) => {
  try {
    const { title, description, category, sections } = req.body;
    if (!req.file) {
      return res.status(400).json({ message: "Image is required" });
    }
    const newBlogPost = new BlogPost({
      image: `/uploads/${req.file.filename}`,
      title,
      description,
      category,
      sections: JSON.parse(sections || "[]"),
    });
    await newBlogPost.save();
    res.status(201).json(newBlogPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 2. Fetch all blog posts, sorted from latest to oldest
app.get("/api/blogposts", async (req, res) => {
  try {
    const blogPosts = await BlogPost.find().sort({ _id: -1 }); 
    res.json(blogPosts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 3. Get blog posts by category
app.get("/api/blogposts/category/:category", async (req, res) => {
  try {
    const { category } = req.params;
    const blogPosts = await BlogPost.find({ category }).sort({ _id: -1 }); // Sorted by latest
    res.json(blogPosts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 4. Fetch a single blog post by ID
app.get("/api/blogposts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const blogPost = await BlogPost.findById(id);
    if (!blogPost) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.json(blogPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
