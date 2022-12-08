import { Context, Router } from "https://deno.land/x/oak@v9.0.0/mod.ts";

function login(ctx: Context) {
    ctx.response.body = 'login';
}

function register(ctx: Context) {
    ctx.response.body = 'register';
}

const service = new Router()
    .post("/api/register", register)
    .post("/api/login", login);

export default service;