import type { Metadata } from "next";


import "./globals.css";

export const metadata: Metadata = {
  title: "TopFrog",
  keywords:
    "AI",
  description:
    "Discover",
  openGraph: {
    title: "TopFrog",
    description:
      "Discove",
    type: `article`,
    locale: `en-US`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta property="description" content="<generated>" />

        <meta
          property="og:image"
          content={`https://meta-next-js.vercel.app/banner.png`}
        />
        <meta
          property="og:url"
          content={`https://meta-next-js.vercel.app/banner.png`}
        />
        <meta property="og:image:alt" content="top-frog" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta
          name="twitter:image"
          content={`https://meta-next-js.vercel.app/banner.png`}
        />
        <meta name="twitter:image:type" content="image/png" />
        <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:image:height" content="630" />
      </head>
      <body>
      {children}
      </body>
    </html>
  );
}
