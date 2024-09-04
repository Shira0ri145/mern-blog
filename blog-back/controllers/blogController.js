
const slugify = require("slugify")
const Blogs = require("../models/blogModel")
const { v4: uuidv4 } = require('uuid');

// create data
exports.create=(req,res)=>{
    const {title,content,author}=req.body
    let slug = slugify(title)

    if(!slug) slug = uuidv4();

    // Validate
    switch(true){
        case !title:
            return res.status(400).json({error:"Plz enter title"})
            break;
        case !content:
            return res.status(400).json({error:"Plz enter content"})
            break;
    }
        
    // Save data
    Blogs.create({ title, content, author, slug })
        .then(blog => {
            res.status(201).json(blog);
        })
        .catch(err => {
            res.status(400).json({ error: "มีชื่อบทความซ้ำกัน" });
        });

}

// Fetch all data
exports.getAllblogs = (req, res) => {
    Blogs.find({})
        .then(blogs => {
            res.json(blogs);
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });
};


// Slugify for blog
exports.singleBlog=(req,res)=>{
    const {slug} = req.params
    Blogs.findOne({ slug }).exec()
    .then(blog => {
        if (!blog) {
            // If no blog is found, send a 404 response
            return res.status(404).json({ message: 'Blog not found' });
        }
        // Return the blog as JSON
        res.json(blog);
    })
    .catch(err => {
        // Handle errors and send a 500 response
        // console.error('Error fetching blog:', err);
        res.status(500).json({ error: err.message });
    });

    

}