/** @jsx h */
/// <reference no-default-lib="true"/>
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />
import { h } from "https://deno.land/x/nano_jsx@v0.0.20/mod.ts";
import { IPageBaseProps } from "./pageBase.types.ts";
import { routes } from "../../constants/index.ts";
const PageBase = ({ children, title, description }: IPageBaseProps) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="icon"
          href={routes.assets.images.favicon.svg}
          sizes="any"
          type="image/svg+xml"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={routes.assets.images.favicon.png32}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={routes.assets.images.favicon.png16}
        ></link>

        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="180x180"
          href={routes.assets.images.favicon.appleTouch}
        />
        <link rel="stylesheet" href={routes.assets.css.main} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@100;200;400&display=swap"
          rel="stylesheet"
        ></link>
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description || title} />

        <meta property="og:type" content="website" />
        {location?.href && <meta property="og:url" content={location.href} />}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description || title} />
        <meta property="og:image" content={routes.assets.images.hero} />

        <meta property="twitter:card" content="summary_large_image" />
        {location?.href && (
          <meta property="twitter:url" content={location.href} />
        )}
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description || title} />
        <meta
          property="twitter:image"
          content={routes.assets.images.hero}
        ></meta>
      </head>
      <body>{children}</body>
    </html>
  );
};

export { PageBase };
