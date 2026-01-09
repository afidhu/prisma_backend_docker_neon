"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const postController_ts_1 = require("../controllers/postController.ts");
const postMiddleware_ts_1 = require("../middleware/postMiddleware.ts");
const routes = (0, express_1.Router)();
routes.get('/', postController_ts_1.getAllpost);
routes.post('/', postMiddleware_ts_1.upload.single('file'), postController_ts_1.addPostData);
exports.default = routes;
