// import App from 'next/app'
import 'bootstrap/dist/css/bootstrap.css'
import Layout from '../components/layout';
import '../styles.css';
import { useEffect } from "react";
import { motion } from "framer-motion";
function MyApp({ Component, pageProps, router }) {
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap");
    }, []);
    return <motion.div key={router.route} style={{height: '100%'}} initial="pageInitial" animate="pageAnimate" variants={{
        pageInitial: {
            opacity: 0.8
        },
        pageAnimate: {
            opacity: 1,
            transition : {
                duration: 1
            }
        },
    }}>
        <Layout>
            <Component {...pageProps} />
        </Layout>
        <style jsx global>{`
            /* Other global styles such as 'html, body' etc... */

            #__next {
            height: 100%;
            }
        `}</style>
    </motion.div>
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