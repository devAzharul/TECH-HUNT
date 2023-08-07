import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';

const Banner = dynamic(() => import('@/components/Banner/Banner'));
const Blog = dynamic(() => import('@/components/Blog/Blog'));
const Comment = dynamic(() => import('@/components/Comment/Comment'));
const ContactUs = dynamic(() => import('@/components/ContactUs/ContactUs'));
const ITSolution = dynamic(() => import('@/components/ITSolution/ITSolution'));
const Mission = dynamic(() => import('@/components/Mission/Mission'));
const PaymentPlan = dynamic(() => import('@/components/PaymentPlan/PaymentPlan'));
const TrustedBrands = dynamic(() => import('@/components/TrustedBrands/TrustedBrands'));
const WhyChooseus = dynamic(() => import('@/components/WhyChooseus/WhyChooseus'));
const FacebookMsg = dynamic(() => import('./facebookMsg'));
const HomeServices = dynamic(() => import('@/components/Services/HomeServices'));

export default function Home() {
  useEffect(() => {
    HomeServices.preload();
  }, []);

  return (
    <Layout>
      <Head>
        <title>Welcome to Tech-Hunt  - Your One-Stop Destination for Web applications</title>
        <meta name="description" content="Welcome to Tech-Hunt, your one-stop destination for web applications. Discover innovative solutions, expert services, and top-notch products tailored to meet your needs. Our mission is to provide you with the best experience and exceed your expectations.

Explore our wide range of services, including Website Design and Development,Custom Web Application Development,E-commerce Development,Web Hosting and Maintenance,Search Engine Optimization (SEO),Web Development,Web Design,
Front-end Development,Back-end Development,
Full-stack Development,Custom Website Development,Responsive Web Design,User Experience (UX) Design,Web Application Development,Mobile App Development,E-commerce Solutions,Content Management Systems (CMS),WordPress Development,Website Maintenance,SEO Services,Web Hosting,UI/UX Design,HTML,CSS,JavaScript,React.js,Angular,Node.js,PHP,Python,Ruby on Rails,Laravel,WordPress Themes,WebsiteSecurity,Performance Optimization,
Website Analytics,Website Migration,Website Redesign,Website Accessibility,Mobile Responsiveness,Cross-browser Compatibility,
Progressive Web Apps (PWAs),API Integration,Database Development,Cloud Solutions. designed to cater to both individuals and businesses. We are proud to be associated with trusted brands and offer a payment plan that fits your budget.

Why choose us? Our team of professionals is dedicated to delivering excellence and customer satisfaction. We believe in providing personalized solutions to ensure you achieve your goals effectively.

Stay up-to-date with the latest news and insights through our informative blog. Engage with us and other users through our comments section, fostering a vibrant community.

Got questions or inquiries? Don't hesitate to reach out to us through our contact form. We'd love to hear from you and provide the assistance you need.

Connect with us on social media and stay connected with our Facebook messages. We are here to support you every step of the way.

Start your journey with us today and experience the difference at Tech-Hunt." />
        {/* Add more meta tags as needed */}
      </Head>
      <Banner />
      <HomeServices />
      <TrustedBrands />
      <WhyChooseus />
      <ITSolution />
      <Mission />
      <ContactUs />
      <PaymentPlan />
      <Comment />
      <Blog />
      <FacebookMsg />
    </Layout>
  );
}
