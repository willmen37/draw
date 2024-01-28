import express from "express"
import * as dotenv from "dotenv"


import Post from "../mongodb/post.js"


dotenv.config()

const router = express.Router()


//GEt posts
router.route("/").get(async(req, res)=>{
    try{
        const posts = await Post.find({})

        res.status(200).json({sucess: true, data: posts})
    }catch(error){
        console.log(error, "POSTROUTE")
        res.status(500).json({sucess: false, data: error})
    }

})

//create post
router.route("/").post(async(req, res)=>{
    try{
     const { name, prompt, photo } = req.body;
     const photoUrl = await cloudinary.uploader.upload(photo);
 
     const newPost = await Post.create({
         name,
         prompt,
         photo: photoUrl.url,
       });
 
     res.status(200).json({ success: true, data:newPost})
 
    }catch(error){
     res.status(500).json({ success: false, message: "post not created, try again"})
    }
 })
 
 export default router