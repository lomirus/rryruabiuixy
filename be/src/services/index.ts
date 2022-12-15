import { Router } from "oak";

import comment from "./comment.ts";
import login from "./login.ts";
import { getPost, postPost } from "./post.ts";
import register from "./register.ts";
import posts from "./posts.ts";

const service = new Router()
    .get("/api/posts", posts)
    .get("/api/post/:id", getPost)
    .post("/api/post", postPost)
    .post("/api/comment", comment)
    .post("/api/register", register)
    .post("/api/login", login);

export default service;