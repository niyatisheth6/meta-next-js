
import Head from 'next/head';

interface LayoutProps {
  title: string;
  description: string;
  imageUrl: string;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ title, description, imageUrl, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        {/* Open Graph meta tags for link preview */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:type" content="website" />
        
        {/* Optional Twitter card for better integration */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />
        
        {/* For mobile-friendly content */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>{children}</main>
    </>
  );
};

export default Layout;
