import { Context } from "oak";

import client from "../db/mod.ts";
import { User } from "../types/mod.ts";

export default async function comment(ctx: Context) {
    const result = ctx.request.body({ type: 'json' });
    const { username, password, content, post_id } = await result.value;

    if (username && password) {
        const queriedUser: User | undefined = (await client.query(
            "SELECT * FROM users WHERE username=? AND password=?",
            [username, password],
        ))[0];

        if (queriedUser) {
            await client.execute(
                `INSERT INTO comments(content, post_id, poster_id) values(?, ?, ?)`,
                [content, post_id, queriedUser.id]
            );

            ctx.response.body = {
                status: true,
                info: 'success'
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