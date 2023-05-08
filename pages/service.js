import React from "react";
import Layout from "@/components/Layout";
import style from "@/styles/Service/Service.module.css";

const ServiceScreen = () => {
  return (
    <Layout title="Service">
      <div>
        <h1 className={`${style.title} text-3xl`}>This is service</h1>
      </div>
    </Layout>
  );
};

export default ServiceScreen;