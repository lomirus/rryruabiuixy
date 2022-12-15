import { RouterContext } from "oak";
import client from "../db/mod.ts";
import { Post } from "../types/mod.ts";
import { getUsernameFromId } from "../utils/mod.ts";

export default async function posts(ctx: RouterContext<'/api/posts'>) {
    const posts: Post[] = await client.query("SELECT * FROM posts");

    ctx.response.body = {
        status: true,
        info: 'Success',
        data: await Promise.all(posts.map(async post => ({
            id: post.id,
            title: post.title,
            created_at: post.created_at.getTime(),
            poster: await getUsernameFromId(post.poster_id),
        })))
    };
}
