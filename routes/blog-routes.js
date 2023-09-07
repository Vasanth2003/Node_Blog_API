import express from "express";
import { addBlogs, deleteById, getAllBlogs, getById, getByUserId } from "../controllers/blogs-controller.js";
import { updateBlog } from "../controllers/blogs-controller.js";

const blogRouter = express.Router();

blogRouter.get("/",getAllBlogs);
blogRouter.post("/add",addBlogs);
blogRouter.put("/update/:id",updateBlog);
blogRouter.get("/:id",getById);
blogRouter.delete("/:id",deleteById);
blogRouter.get("/user/:id",getByUserId);


export default blogRouter;