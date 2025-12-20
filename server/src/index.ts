    import express  from 'express';
    import dotenv from 'dotenv';
import { PrismaClient } from "../generated/prisma/client.ts"
import path from "path";
import postRoute from './routes/postRoute.ts'
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { fileURLToPath } from 'url';
// import path from 'path/win32';

    dotenv.config(); // Load environment variables
    

    const app = express();
// api/index.ts




export default function handler(req: VercelRequest,res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  res.json({ message: 'API working' });
}



    const port = process.env.PORT || 3000;

    export const prisma = new PrismaClient()

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

// Serve static files from the "uploads" directory Also 
// make sure to create the uploads folder in the root directory For Accessing images in the browser
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));




app.use('/post', postRoute)





    
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
