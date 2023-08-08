import React from "react";
import Layout from "@/components/Layout";
import ServiceProvider from "@/components/Services/ServiceProvider";
import Head from "next/head";

const ServiceScreen = () => {
  return (
    <Layout>
      <Head>
        <title>Services - Tech-Hunt</title>
        <meta name="description" content="Explore our comprehensive services designed to cater to both individuals and businesses. Our team of experts is dedicated to delivering excellence and customer satisfaction. Discover innovative solutions tailored to meet your needs at Your Website." />
        <meta name="keywords" content="services, solutions, expertise, business, individuals, innovation" />
        <meta property="og:title" content="Services - Tech-Hunt" />
        <meta property="og:description" content="Explore our comprehensive services designed to cater to both individuals and businesses. Our team of experts is dedicated to delivering excellence and customer satisfaction. Discover innovative solutions tailored to meet your needs at Your Website." />
        <meta property="og:image" content="https://www.tech-hunt-org" />
      </Head>
      <ServiceProvider />
    </Layout>
  );
};

export default ServiceScreen;