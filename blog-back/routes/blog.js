const express = require("express")
const router = express.Router()
const { create,getAllblogs,singleBlog,deleteBlog,updateBlog } =require("../controllers/blogController")
const { requireLogin } = require("../controllers/authController")


router.post('/create',requireLogin,create)
router.get('/blogs',getAllblogs)
router.get('/blog/:slug',singleBlog)
router.delete('/blog/:slug',requireLogin,deleteBlog)

router.put('/blog/:slug',requireLogin,updateBlog)

module.exports=router