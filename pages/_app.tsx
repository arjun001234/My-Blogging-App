import { AppProps } from 'next/app';
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
          <title>Arjun Blogs</title>
          <meta name='Description' content='All Kinds of Web Dev Blogs'/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  )
}

export default MyApp;
