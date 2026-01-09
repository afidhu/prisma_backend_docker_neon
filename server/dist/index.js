"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const client_ts_1 = require("../generated/prisma/client.ts");
const path_1 = __importDefault(require("path"));
const postRoute_ts_1 = __importDefault(require("./routes/postRoute.ts"));
const serverless_http_1 = __importDefault(require("serverless-http"));
const cors_1 = __importDefault(require("cors"));
const url_1 = require("url");
// import path from 'path/win32';
dotenv_1.default.config(); // Load environment variables
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
exports.prisma = new client_ts_1.PrismaClient();
// Middlewares
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Serve static files from the "uploads" directory Also 
// make sure to create the uploads folder in the root directory For Accessing images in the browser
const __filename = (0, url_1.fileURLToPath)(import.meta.url);
const __dirname = path_1.default.dirname(__filename);
app.use("/uploads", express_1.default.static(path_1.default.join(__dirname, "../uploads")));
app.use('/post', postRoute_ts_1.default);
app.get('/', (req, res) => {
    res.send('https://prisma-backend-docker-neon-6vez.vercel.app/post');
});
// app.listen(port, () => {
//   console.log(`[server]: Server is running at http://localhost:${port}`);
// });
// export default app;
exports.default = (0, serverless_http_1.default)(app);
