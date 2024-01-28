import express from "express"
import * as dotenv from "dotenv"


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