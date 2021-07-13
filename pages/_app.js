import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/Layout'
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
        AOS.init({delay:450,offset:60,duration:1000})
  }, [])
  
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )  
}

export default MyApp
