import { Context } from "oak";

export default function post(ctx: Context) {
    ctx.response.body = 'post';
}