import Head from "next/head";
import NavTop from "../components/navbar";
import Header from "../components/header";
import Section_image from "../components/UI/Section_image";
import Pic from "../components/UI/Project";
import Footer from "../components/footer";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Head>
        <title>FAA</title>
        <meta
          name="description"
          content=" Focus on the development of modern production with standard
                  quality and services that meet the needs of customers."
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6"
          crossOrigin="anonymous"
        />
      </Head>

      <NavTop />
      <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
        <Header />
        <Section_image />
        <Pic />
        <Footer />
      </motion.div>
    </>
  );
}
