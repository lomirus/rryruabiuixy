import { Context } from "oak";

export default function register(ctx: Context) {
    ctx.response.body = 'register';
}