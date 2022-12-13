import { Context } from "oak";

async function root(ctx: Context, next: () => Promise<unknown>) {
    ctx.response.headers.set("Access-Control-Allow-Origin", "*");
    ctx.response.headers.set("Access-Control-Allow-Headers", "Authorization");
    if (ctx.request.method === "OPTIONS") {
        ctx.response.status = 200;
        return;
    }

    await next();
}

export default root;
