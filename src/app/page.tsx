

export async function generateMetadata() {
  try {
    const baseUrl = "https://meta-next-js.vercel.app";
    const metaData = {
      title: "TopFrog - Blog post for readers to get latest updates",
      keywords:
        "AI chatbots, multiple chatbot comparisons, Chatgpt, Writesonic, Bard, AI website, chatbot effectiveness, chatbot analysis, chatbot features, chatbot decision-making, AI systems.",
      description:
        "Discover valuable insights into the world of AI chatbots as our blog analyzes and compares answers from various AI chatbots. Explore the pros and cons, effectiveness, and unique features of these cutting-edge AI systems, enabling you to make informed decisions about the best AI chatbot for your needs.",
      metadataBase: new URL(baseUrl),
      openGraph: {
        title: "TopFrog - Blog post for readers to get latest updates",
        description:
          "Discover valuable insights into the world of AI chatbots as our blog analyzes and compares answers from various AI chatbots. Explore the pros and cons, effectiveness, and unique features of these cutting-edge AI systems, enabling you to make informed decisions about the best AI chatbot for your needs.",
        type: `article`,
        locale: `en-US`,
        images: "/banner.png",
      },
    };

    return metaData;
  } catch (error) {
    console.log({ error });
  }
}

export default function Home() {
  return (
   <div>
    <h1 className="text-2xl text-center">Meta App</h1>
   </div>
  );
}
