import { Router } from "oak";

import comment from "./comment.ts";
import login from "./login.ts";
import post from "./post.ts";
import register from "./register.ts";

const service = new Router()
    .post("/api/post", post)
    .post("/api/comment", comment)
    .post("/api/register", register)
    .post("/api/login", login);

export default service;