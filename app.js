import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes.js";
import blogRouter from "./routes/blog-routes.js";

const PORT=5000;
const app=express();
app.use(express.json());    
app.use('/api/user',router);
app.use('/api/blog',blogRouter);


mongoose.connect("mongodb+srv://ponvasanth:Vu55iMI7ZQJCcwfL@blogapi.ccahyph.mongodb.net/")
.then(()=>app.listen(PORT),
console.log("Connected to PORT"))
.then(()=>
console.log("Connected to Database"))
.catch((err) => console.log(err));





