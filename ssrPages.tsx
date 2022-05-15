/** @jsx h */
/// <reference no-default-lib="true"/>
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import { h, renderSSR } from "https://deno.land/x/nano_jsx@v0.0.20/mod.ts";
import { IndexPage } from "./pages/index/index.tsx";
import { SuccessPage } from "./pages/success/index.tsx";
import { NotFoundPage } from "./pages/404/index.tsx";
export const pages = {
  index: renderSSR(<IndexPage />),
  success: renderSSR(<SuccessPage />),
  notFound: renderSSR(<NotFoundPage />),
};
