import Banner from "@/components/Banner/Banner";
import Blog from "@/components/Blog/Blog";
import Comment from "@/components/Comment/Comment";
import Counter from "@/components/Counter/Counter";
import ITSolution from "@/components/ITSolution/ITSolution";
import Layout from "@/components/Layout";
import Mission from "@/components/Mission/Mission";
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
      <Mission/>
      <PaymentPlan />
      <Comment />
      <Blog />
    </Layout>
  );
}
