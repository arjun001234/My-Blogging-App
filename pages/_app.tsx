import { AppProps } from 'next/dist/next-server/lib/router/router';
import React from 'react';
import Layout from '../components/layout/layout';
import AppProvider from '../context/contextApi';
import '../styles/globals.scss';
import Head from 'next/head';

const MyApp = ({ Component, pageProps } : AppProps) => {
  
  return (
    <AppProvider>
      <Layout>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  )
}

export default MyApp;
