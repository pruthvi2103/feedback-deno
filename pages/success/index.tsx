/** @jsx h */
/// <reference no-default-lib="true"/>
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />
import { h } from "https://deno.land/x/nano_jsx@v0.0.20/mod.ts";
const SuccessPage = () => {
  return (
    <html>
      <head>
        <title>Success Page</title>
      </head>
      <body>
        <h1>Hello world</h1>
      </body>
    </html>
  );
};

export { SuccessPage };
