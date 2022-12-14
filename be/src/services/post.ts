import { Context, RouterContext } from "oak";
import client from "../db/mod.ts";
import { Post, User } from "../types/mod.ts";

export async function postPost(ctx: Context) {
    const result = ctx.request.body({ type: 'json' });
    const { username, password, title, content } = await result.value;

    if (username && password) {
        const queriedUser: User | undefined = (await client.query(
            "SELECT * FROM users WHERE username=? AND password=?",
            [username, password],
        ))[0];

        if (queriedUser) {
            const postId = (await client.execute(
                `INSERT INTO posts(title, content, poster_id) values(?, ?, ?)`,
                [title, content, queriedUser.id]
            )).lastInsertId;

            ctx.response.body = {
                status: true,
                info: 'success',
                data: postId
            };
        } else {
            ctx.response.body = {
                status: false,
                info: 'Username does not match the password'
            };
            ctx.response.status = 401
        }
    } else {
        ctx.response.body = {
            status: false,
            info: 'username or password is empty'
        };
    }
}

export async function getPost(ctx: RouterContext<'/api/post/:id'>) {
    const postId = ctx.params.id;

    const post: Post = (await client.query(
        "SELECT * FROM posts WHERE id=?",
        [postId],
    ))[0];

    if (post) {
        ctx.response.body = {
            status: true,
            info: 'Success',
            data: post
        };
    } else {
        ctx.response.body = {
            status: false,
            info: 'No post matches the id'
        };
    }
}