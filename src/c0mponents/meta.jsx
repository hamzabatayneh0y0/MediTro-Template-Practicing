import { Helmet } from "react-helmet-async";

const MetaTags = ({title,des}) => {
  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={`MediTro template redesigning practicing ${des}`} />
      <meta name="twitter:description" content={`MediTro template redesigning practicing ${des}`} />
      <meta property="og:description" content={`MediTro template redesigning practicing ${des}`} />

      
    </Helmet>
  );
};

export default MetaTags;
