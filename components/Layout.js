import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import NavTop from "/components/navbar";
import Footer from "/components/footer";
const Layout = (props) => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6"
          crossOrigin="anonymous"
        />
      </Head>

      <NavTop />

      {props.children}

      <Footer />
    </div>
  );
};

export default Layout;
