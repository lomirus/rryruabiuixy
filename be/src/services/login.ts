import { Context } from "oak";

export default function login(ctx: Context) {
    ctx.response.body = 'login';
}
