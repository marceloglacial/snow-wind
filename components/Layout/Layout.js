import Head from 'next/head';

export default function Layout({ children }) {
  const siteInfo = {
    title: 'Site Title',
    description: 'Site Description',
    keywords: 'keywords',
    fonts: 'Montserrat:200,700',
  };

  return (
    <>
      <Head>
        <title>{siteInfo.title}</title>
        <meta name='robots' content='index, follow' />
        <meta name='description' content={siteInfo.description} />
        <meta name='keywords' content={siteInfo.keywords} />
        <link
          crossOrigin='anonymous'
          href={`https://fonts.googleapis.com/css?family=${siteInfo.fonts}&display=swap`}
          rel='stylesheet'
        />

        <meta property='og:title' content={siteInfo.title} />
        <meta property='og:description' content={siteInfo.description} />
        <meta property='og:image' content='tile-wide.png' />
        <link rel='apple-touch-icon' href='apple-touch-icon.png' />
      </Head>
      <main>{children}</main>
    </>
  );
}
