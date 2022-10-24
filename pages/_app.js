import Head from "next/head";
import { InvoiceProvider } from "../context/InvoiceContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <InvoiceProvider>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <title>Quick Invoice - Simple and Quick Invoice Generator</title>
      </Head>
      <Component {...pageProps} />
    </InvoiceProvider>
  );
}

export default MyApp;
