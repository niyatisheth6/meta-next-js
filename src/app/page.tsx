import Layout from "./layout";

export default function Home() {
  return (
    <Layout
      title="Awesome Product"
      description="This is an awesome product that does amazing things."
      imageUrl="https://meta-next-js.vercel.app/banner.png" 
    >
      <h1>Welcome to Awesome Product</h1>
      <p>Explore more about our amazing features!</p>
    </Layout>
  );
}
