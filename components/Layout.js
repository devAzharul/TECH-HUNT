/* eslint-disable @next/next/no-page-custom-font */
import React from "react";
import Head from "next/head";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title ? title + " | Tech Hunt" : "Tech Hunt"}</title>
        <meta name="description" content="Tech Hunt" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="min-h-screen flex flex-col justify-between">
        <Navbar />
        <main className="m-auto mt-0 w-full main-bg overflow-y-hidden">
          {children}
        </main>
        <Footer />
        <ToastContainer />
      </div>
    </>
  );
};

export default Layout;
