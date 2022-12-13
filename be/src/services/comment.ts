import { Context } from "oak";

export default function comment(ctx: Context) {
    ctx.response.body = 'comment';
}