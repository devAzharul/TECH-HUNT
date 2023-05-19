import Banner from "@/components/Banner/Banner";
import Blog from "@/components/Blog/Blog";
import Comment from "@/components/Comment/Comment";
import ITSolution from "@/components/ITSolution/ITSolution";
import Layout from "@/components/Layout";
import PaymentPlan from "@/components/PaymentPlan/PaymentPlan";
import ServiceProvider from "@/components/Services/ServiceProvider";
import TrustedBrands from "@/components/TrustedBrands/TrustedBrands";
import WhyChooseus from "@/components/WhyChooseus/WhyChooseus";


export default function Home() {
  return (
    <Layout title="Home" >
      <Banner />
      <ServiceProvider />
      <TrustedBrands />
      <WhyChooseus />
      <ITSolution />
      <PaymentPlan />
      <Comment />
      <Blog />
    </Layout>
  );
}
