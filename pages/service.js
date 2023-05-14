import React from "react";
import Layout from "@/components/Layout";
import style from "@/styles/Service/Service.module.css";
import ServiceProvider from "@/components/Services/ServiceProvider";

const ServiceScreen = () => {
  return (
    <Layout title="Service">
      <ServiceProvider/>
    </Layout>
  );
};

export default ServiceScreen;