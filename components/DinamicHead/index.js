import Head from 'next/head';

const CustomHead = (
  {
    title,
    description,
    canonicalURL,
    ogURL,
    ogTitle,
    ogDescription,
    ogImage,
  },
) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link href={canonicalURL} rel="canonical" />

    <meta property="og:title" content={ogTitle} />
    <meta property="og:url" content={ogURL} />
    <meta property="og:description" content={ogDescription} />
    <meta property="og:image" content={ogImage} />
  </Head>
);

export default CustomHead;
