import { InvoiceProvider } from "../context/InvoiceContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <InvoiceProvider>
      <Component {...pageProps} />
    </InvoiceProvider>
  );
}

export default MyApp;
