import { Router } from "express";
import { getAllpost } from "../controllers/postController.ts";


const routes= Router()

routes.get('/',getAllpost)

export default routes