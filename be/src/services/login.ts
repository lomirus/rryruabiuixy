import { Context } from "oak";

import client from "../db/mod.ts";
import type { User } from "../types/mod.ts";

export default async function login(ctx: Context) {
    const result = ctx.request.body({ type: 'json' });
    const { username, password } = await result.value;

    if (username && password) {
        const queriedUser = (await client.query(
            `SELECT * FROM users WHERE USERNAME=?`,
            [username, password]
        ))[0] as User | undefined;

        if (queriedUser) {
            if (queriedUser.password === password) {
                ctx.response.body = {
                    status: true,
                    info: 'success'
                };
            } else {
                ctx.response.body = {
                    status: false,
                    info: 'Password is uncorrect'
                };
            }
        } else {
            ctx.response.body = {
                status: false,
                info: 'Username does not exist'
            };
        }
    } else {
        ctx.response.body = {
            status: false,
            info: 'Username or password is empty'
        };
    }
}
