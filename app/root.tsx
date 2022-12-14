import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "CPHTS: Copenhagen TypeScript meetup group",
  viewport: "width=device-width,initial-scale=1",
  "msapplication-Tilecolor": "#7600bc",
  "theme-color": "#ffffff",
  "og:title": "Copenhagen TypeScript",
  "og:type": "website",
  "og:url": "https://cphts.dev",
  "og:image": "https://cphts.dev/images/cphts-withtext.png",
  "og:description":
    "A new Copenhagen-based TypeScript-focused discussion-loving group of nerds meeting up every second month to debate whether type or interface is the correct way to go.",
});

export const links = () => [
  { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
  {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/favicon-32x32.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/favicon-16x16.png",
  },
  { rel: "manifest", href: "/site.webmanifest" },
  { rel: "mask-icon", color: "#7600bc", href: "/safari-pinned-tab.svg" },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
