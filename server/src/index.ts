    import express  from 'express';
    import dotenv from 'dotenv';
import { PrismaClient } from "../generated/prisma/client.ts"

import postRoute from './routes/postRoute.ts'

    dotenv.config(); // Load environment variables

    const app = express();
    const port = process.env.PORT || 3000;



    export const prisma = new PrismaClient()

app.use('/post', postRoute)
    
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
