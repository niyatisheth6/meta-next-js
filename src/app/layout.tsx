import type { Metadata } from "next";


import "./globals.css";

export const metadata: Metadata = {
  title: "TopFrog - Blog post for readers to get latest updates",
  keywords:
    "AI chatbots, multiple chatbot comparisons, Chatgpt, Writesonic, Bard, AI website, chatbot effectiveness, chatbot analysis, chatbot features, chatbot decision-making, AI systems.",
  description:
    "Discover valuable insights into the world of AI chatbots as our blog analyzes and compares answers from various AI chatbots. Explore the pros and cons, effectiveness, and unique features of these cutting-edge AI systems, enabling you to make informed decisions about the best AI chatbot for your needs.",
  openGraph: {
    title: "TopFrog - Blog post for readers to get latest updates",
    description:
      "Discover valuable insights into the world of AI chatbots as our blog analyzes and compares answers from various AI chatbots. Explore the pros and cons, effectiveness, and unique features of these cutting-edge AI systems, enabling you to make informed decisions about the best AI chatbot for your needs.",
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
