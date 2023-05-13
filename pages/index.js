import Layout from "@/components/Layout";
import ServiceProvider from "@/components/Services/ServiceProvider";
import TrustedBrands from "@/components/TrustedBrands/TrustedBrands";


export default function Home() {
  return (
    <Layout title="Home" >
      <TrustedBrands/>
      <ServiceProvider/>
    </Layout>
  );
}
