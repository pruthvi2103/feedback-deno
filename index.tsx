/** @jsx h */
/// <reference no-default-lib="true"/>
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import { serve } from "https://deno.land/std@0.114.0/http/server.ts";
import { h, renderSSR } from "https://deno.land/x/nano_jsx@v0.0.20/mod.ts";

import { pages } from "./ssrPages.tsx";
import { routes } from "./constants/index.ts";
async function handler(req: Request): Promise<Response> {
  const { pathname } = new URL(req.url);
  // static assets

  if (pathname.startsWith(routes.assets.images.favicon.svg)) {
    const file = await Deno.readFile("./assets/favicon.svg");

    return new Response(file, {
      headers: {
        "content-type": "image/svg+xml",
      },
    });
  }
  if (pathname.startsWith(routes.assets.images.favicon.appleTouch)) {
    const file = await Deno.readFile("./assets/apple-touch-icon.png");
    return new Response(file, {
      headers: {
        "content-type": "image/png",
      },
    });
  }
  if (pathname.startsWith(routes.assets.images.favicon.png32)) {
    const file = await Deno.readFile("./assets/favicon-32x32.png");
    return new Response(file, {
      headers: {
        "content-type": "image/png",
      },
    });
  }
  if (pathname.startsWith(routes.assets.images.favicon.png16)) {
    const file = await Deno.readFile("./assets/favicon-16x16.png");
    return new Response(file, {
      headers: {
        "content-type": "image/png",
      },
    });
  }
  if (pathname.startsWith(routes.assets.images.hero)) {
    const file = await Deno.readFile("./assets/pruthvi-folded-arms.png");
    return new Response(file, {
      headers: {
        "content-type": "image/png",
      },
    });
  }
  if (pathname.startsWith(routes.assets.css.main)) {
    const file = await Deno.readFile("./styles/main.css");
    return new Response(file, {
      headers: {
        "content-type": "text/css",
      },
    });
  }
  // pages
  if (pathname.startsWith(routes.success)) {
    return new Response(`<!DOCTYPE html>${pages.success}`, {
      headers: {
        "content-type": "text/html",
      },
    });
  }
  if (pathname === "/") {
    return new Response(`<!DOCTYPE html>${pages.index}`, {
      headers: {
        "content-type": "text/html",
      },
    });
  }
  return new Response(`<!DOCTYPE html>${pages.notFound}`, {
    headers: {
      "content-type": "text/html",
    },
    status: 404,
  });
}

console.log("Listening on http://localhost:8000");
serve(handler);
