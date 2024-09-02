
const slugify = require("slugify")
const Blogs = require("../models/blogModel")

// create data
exports.create=(req,res)=>{
    const {title,content,author}=req.body
    const slug = slugify(title)

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