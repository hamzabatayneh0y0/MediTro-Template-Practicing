import { Helmet } from "react-helmet";

const MetaTags = ({title}) => {
  return (
    <Helmet>
      {/* 🔹 Open Graph (Facebook, WhatsApp) */}
      <meta property="og:title" content="MediTro-practicing" />
      <meta property="og:description" content="MediTro template redeigning practicing" />
      <meta property="og:image" content="https://github.com/hamzabatayneh0y0/MediTro-Template-Practicing/4552998.png" />
      <meta property="og:url" content="https://github.com/hamzabatayneh0y0/MediTro-Template-Practicing/" />
      <meta property="og:type" content="website" />

      {/* 🔹 Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="MediTro-practicing" />
      <meta name="twitter:description" content="MediTro template redeigning practicing" />
      <meta name="twitter:image" content="https://github.com/hamzabatayneh0y0/MediTro-Template-Practicing/4552998.png" />

      {/* 🔹 Meta Tags for SEO */}
      <meta name="description" content="MediTro template redesigning practicing" />
      <meta name="keywords" content="meditro, practicing, health, healthcare" />
      <meta name="author" content="hamza" />

      <title>{title}</title>
    </Helmet>
  );
};

export default MetaTags;
