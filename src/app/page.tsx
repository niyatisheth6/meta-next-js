

export async function generateMetadata() {
  try {
    const baseUrl = "https://meta-next-js.vercel.app";
    const metaData = {
      title: "TopFrog",
      keywords:
        "AI",
      description:
        "Discover",
      metadataBase: new URL(baseUrl),
      openGraph: {
        title: "TopFrog",
        description:
          "Discover ",
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
