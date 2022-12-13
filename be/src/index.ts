import { Application } from "oak";
import "./db/mod.ts";

import { cors, services } from "./middlewares/index.ts";

const app = new Application();

app.use(cors);
app.use(services);

app.addEventListener("listen", ({ hostname, port }) => {
    console.log(`Server listening on: http://${hostname}:${port}`);
});

await app.listen({
    hostname: '127.0.0.1',
    port: 8080,
});
