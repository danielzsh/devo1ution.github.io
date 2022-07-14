// import App from 'next/app'
import 'bootstrap/dist/css/bootstrap.css'
import Layout from '../components/layout';
import '../styles.css';
import { useEffect } from "react";
function MyApp({ Component, pageProps }) {
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap");
    }, []);
    return <Layout>
        <Component {...pageProps} />
    </Layout>
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp