import type {Request, Response } from "express";
import { prisma } from "../index.ts";


export const getAllpost = async(req:Request,resp:Response)=>{

    const posts = await prisma.post.findMany()

    return resp.status(200).json(posts)

}