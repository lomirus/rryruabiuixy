import { Application } from "https://deno.land/x/oak@v9.0.0/mod.ts";

import { root, services } from "./middlewares/index.ts";

const app = new Application();

app.use(root);
app.use(services);

app.addEventListener("listen", ({ hostname, port }) => {
    console.log(`Server listening on: http://${hostname}:${port}`);
});

await app.listen({
    hostname: '127.0.0.1',
    port: 8080,
});
