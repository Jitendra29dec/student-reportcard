import is from 'is_js';
import 'helpers/initFA';
import Head from 'next/head';
import '../styles/globals.css';
import '../styles/theme.min.css';
import { useEffect, useState } from 'react';
import Layout from '../components/layout';
import AppProvider from 'context/AppContext';
import 'assets/scss/theme/_navbar-vertical.scss';
import '@fortawesome/fontawesome-svg-core/styles.css';
import SSRProvider from 'react-bootstrap/SSRProvider';
import { config } from '@fortawesome/fontawesome-svg-core';
// import "../styles/theme-rtl.min.css"

config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  const [isSSR, setIsSSR] = useState(false);
  useEffect(() => {
    const HtmlClassList = document.getElementsByTagName('html')[0].classList;
    if (is.windows()) {
      HtmlClassList.add('windows');
    }
    if (is.chrome()) {
      HtmlClassList.add('chrome');
    }
    if (is.firefox()) {
      HtmlClassList.add('firefox');
    }
  }, []);

  useEffect(() => {
    setIsSSR(true);
  }, []);

  if (!isSSR) return;

  return (
    <SSRProvider>
      <AppProvider>
        <Head>
          <title>Falcon Next | NextJS Dashboard & WebApp Template</title>
          <meta
            name="description"
            content="Falcon Next is the NextJS version of “Falcon – Admin Dashboard & WebApp Template“, built for you to create outstanding UI faster than ever before for your ReactJS based WebApp or Dashboard. Start your ReactJS project with Falcon, streamline your UI design and front-end workflow."
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout Component={Component} pageProps={pageProps} />
      </AppProvider>
    </SSRProvider>
  );
}

export default MyApp;
