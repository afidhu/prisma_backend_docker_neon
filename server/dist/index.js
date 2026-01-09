import express from 'express';
import dotenv from 'dotenv';
import { PrismaClient } from "./generated/prisma/client.js";
import path from "path";
import postRoute from './src/routes/postRoute.js';
import cors from 'cors';
import { fileURLToPath } from 'url';
// import path from 'path/win32';
dotenv.config(); // Load environment variables
const app = express();
const port = process.env.PORT || 3000;
export const prisma = new PrismaClient();
// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Serve static files from the "uploads" directory Also 
// make sure to create the uploads folder in the root directory For Accessing images in the browser
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));
app.use('/post', postRoute);
app.get('/', (req, res) => {
    res.send('https://prisma-backend-docker-neon-6vez.vercel.app/post');
});
// app.listen(port, () => {
//   console.log(`[server]: Server is running at http://localhost:${port}`);
// });
export default app;
// export default serverless(app);
