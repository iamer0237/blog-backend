const express = require("express");
const blogsRouter = express.Router();
//==========================================================
const { getBlogs } = require("../controllers/getBlogss"); 
//==========================================================
const { getBlog } = require("../controllers/getBlogs");
//==========================================================
const { createBlog } = require("../controllers/creatBlogs");
//==========================================================
const { deleteBlog } = require("../controllers/deleteBlogs");
//==========================================================
blogsRouter.get("/", getBlogss);
//==========================================================
blogsRouter.get("/:id", getBlog);
//=========================================
blogsRouter.post("/", createBlog);
//=========================================
blogsRouter.delete("/", deleteBlog);
//=========================================
module.exports = {
 blogsRouter,
};
