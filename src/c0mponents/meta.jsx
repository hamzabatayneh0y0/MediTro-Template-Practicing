import { Helmet } from "react-helmet";

const MetaTags = ({title}) => {
  return (
    <Helmet>
      <title>{title}</title>

      {/* 🔹 Open Graph (Facebook, WhatsApp) */}
      <meta property="og:title" content="MediTro-practicing" />
      <meta property="og:description" content="MediTro template redesigning practicing" />
      <meta property="og:image" content="https://meditro-template-practicing.netlify.app/4552998.png" />
      <meta property="og:url" content="https://meditro-template-practicing.netlify.app/" />
      <meta property="og:type" content="website" />

      {/* 🔹 Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="MediTro-practicing" />
      <meta name="twitter:description" content="MediTro template redesigning practicing" />
      <meta name="twitter:image" content="https://meditro-template-practicing.netlify.app/4552998.png" />

      {/* 🔹 Meta Tags for SEO */}
      <meta name="description" content="MediTro template redesigning practicing" />
      <meta name="keywords" content="meditro, practicing, health, healthcare ,React template" />
      <meta name="author" content="hamza" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta name="robots" content="index, follow"/>

    </Helmet>
  );
};

export default MetaTags;
