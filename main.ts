import { serve } from "https://deno.land/std@0.83.0/http/server.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";
const s = serve({ port: 8880 });
const {
    APIKEY,
    SECRET_KEY
  } = config({ safe: true });


for await (const req of s) {
  req.respond({ body: "Hello World\n" });
}
