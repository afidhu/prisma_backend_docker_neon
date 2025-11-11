import express from 'express';
import dotenv from 'dotenv';
dotenv.config(); // Load environment variables
const app = express();
const port = process.env.PORT || 3000;
app.get('/', (req, resp) => {
    resp.send('well fine');
    // resp.status(200).json('well fine')
});
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map