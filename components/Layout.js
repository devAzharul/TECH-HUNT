import React from "react";
import Head from "next/head";
import Navbar from "./Navigation/Navbar";

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
        <Navbar />
        <main className="m-auto mt-0 w-full">{children}</main>
        <footer>footer</footer>
      </div>
    </>
  );
};

export default Layout;
