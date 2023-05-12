import React from "react";
import Head from "next/head";
import Footer from "./Footer/Footer";

const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title ? title + " | Tech Hunt" : "Tech Hunt"}</title>
        <meta name="description" content="Tech Hunt" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen flex flex-col justify-between">
        <main className="m-auto mt-0 w-full">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
