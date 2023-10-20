import "../styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion, AnimatePresence } from "framer-motion";
import Head from "next/head";

import App from "next/app";

////////แบบเดิม
// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }
/////////ใหม่
// function MyApp({ Component, pageProps, router }) {
//   return (
//     <motion.div
//       initial="pageInitial"
//       animate="pageAnimate"
//       variants={{
//         pageInitial: {
//           opacity: 0,
//         },
//         pageAnimate: {
//           opacity: 1,
//         },
//       }}
//     >
//       <Head>
//         <meta
//           name="description"
//           content=" Focus on the development of modern production with standard
//                   quality and services that meet the needs of customers."
//         />
//         <link rel="shortcut icon" href="/test.ico" />
//       </Head>
//       <Component {...pageProps} />
//     </motion.div>
//   );
// }
/////////////////ใหม่กว่า
class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;
    // <Component/> returns the component it self
    // pageProps returns the props you use to in that component. It can be any data
    // router.route returns the route your component lives on. So in our case it will be '/' or '/products/[id]'
    // exitBeforeEnter: AnimatePresence will only render one component at a time. The exiting component will finished its exit animation before the entering component is rendered
    return (
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    );
  }
}

export default MyApp;
