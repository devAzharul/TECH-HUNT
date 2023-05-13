import Blog from "@/components/Blog/Blog";
import Layout from "@/components/Layout";
import PaymentPlan from "@/components/PaymentPlan/PaymentPlan";
import ServiceProvider from "@/components/Services/ServiceProvider";
import TrustedBrands from "@/components/TrustedBrands/TrustedBrands";


export default function Home() {
  return (
    <Layout title="Home" >
      <TrustedBrands />
      <ServiceProvider />
      <PaymentPlan />
      <Blog />
    </Layout>
  );
}
