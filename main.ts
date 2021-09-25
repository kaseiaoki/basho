import { serve } from "https://deno.land/std@0.83.0/http/server.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";
import { encode } from "https://deno.land/std/encoding/base64.ts"
import ky from 'https://cdn.skypack.dev/ky?dts';

// const s = serve({ port: 8880 });
const {
    APIKEY,
    SECRETKEY
  } = config({ safe: true });

  const authURL = new URL(
    'https://accounts.spotify.com/api/token'
  );

  const authBasicQuery =  APIKEY + ':' + SECRETKEY;

  const searchParams = new URLSearchParams();

  searchParams.set('grant_type', 'client_credentials');
  (async () => {
    const parsed = await ky.post(authURL,
        {
          headers: {
            'Authorization': 'Basic ' + encode(authBasicQuery),
          },
          body: searchParams,
      }
      ).json();
      await console.log(JSON.stringify(parsed, null, 2))
    })();