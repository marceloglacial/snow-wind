import Layout from 'components/Layout/Layout';
import { ThemeProvider } from 'next-themes';
import 'styles/global.scss';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute='class'>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
