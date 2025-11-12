import { Router } from "express";
import {addPostData, getAllpost } from "../controllers/postController.ts";
import { upload } from "../middleware/postMiddleware.ts";


const routes= Router()

routes.get('/',getAllpost)
routes.post('/', upload.single('file'), addPostData )

export default routes