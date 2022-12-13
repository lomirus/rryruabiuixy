import { Context } from "oak";

import client from '../db/mod.ts'

export default async function register(ctx: Context) {
    const result = ctx.request.body({ type: 'json' });
    const { username, password } = await result.value;

    if (username && password) {
        await client.execute(
            `INSERT INTO users(username, password) values(?, ?)`,
            [username, password]
        );

        ctx.response.body = {
            status: true,
            info: 'success'
        };
    } else {
        ctx.response.body = {
            status: false,
            info: 'username or password is empty'
        };
    }
}