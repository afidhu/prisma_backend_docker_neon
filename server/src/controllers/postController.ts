import type {Request, Response } from "express";
import { prisma } from "../index.ts";
import multer from "multer";

const HOST = "https://prisma-backend-docker-neon.onrender.com";
export const getAllpost = async(req:Request,resp:Response)=>{

    const posts = await prisma.post.findMany()

        
    ////This Code is to map the image URL to be accessible via HTTP
    const mappedPosts = posts.map(posts => ({...posts,imageUrl: `${HOST}/uploads/${posts.imageUrl}` }));

    return resp.status(200).json(mappedPosts)

}

export const addPostData = async(req:Request ,resp:Response)=>{

    try {
          const file = req.file; // multer adds this

    if (!file) {
      return resp.status(400).json({ message: "No file uploaded" });
    }
    
    const posts = await prisma.post.create({
        data:{
            title:req.body.title,
            content:req.body.content,
            imageUrl:file.filename,
            authorId:Number(req.body.authorId)
        }
    })
    return resp.status(201).json(posts)

    } catch (error:any) {
        return resp.status(500).json({ message: "Internal server error", error: error.message });
        
    }

  

}