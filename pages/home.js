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
        <title>Web Development Agency in Bangladesh</title>
        <meta name="google-site-verification" content="vJvgidBjHt-0Qt0si6SIUK25IRDHVNgLtdAHmhrq3Ys" />
        <meta name="description" content="TECH HUNT: Best web development agency in Bangladesh" />
        <meta name="keywords" content="Tech-Hunt, Web Applications, Website Design, E-commerce Development, Web Hosting, Search Engine Optimization, Web Development, Front-end Development, Back-end Development, Full-stack Development, Responsive Web Design, User Experience (UX) Design, Mobile App Development, E-commerce Solutions, Content Management Systems, WordPress Development, Website Maintenance, SEO Services, UI/UX Design" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Welcome to Tech-Hunt - Your One-Stop Destination for Web Applications" />
        <meta property="og:description" content="Discover innovative solutions, expert services, and top-notch products tailored to meet your needs. Our mission is to provide you with the best experience and exceed your expectations." />
        <meta property="og:image" content="/path/to/og-image.jpg" /> {/* Add the URL of your Open Graph image */}
        <meta property="og:url" content="https://www.tech-hunt.org" /> {/* Add the URL of your homepage */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Tech-Hunt" />
        <meta name="twitter:title" content="Welcome to Tech-Hunt - Your One-Stop Destination for Web Applications" />
        <meta name="twitter:description" content="Discover innovative solutions, expert services, and top-notch products tailored to meet your needs. Our mission is to provide you with the best experience and exceed your expectations." />
        <meta name="twitter:image" content="/path/to/twitter-image.jpg" /> {/* Add the URL of your Twitter image */}
        <meta name="twitter:card" content="summary_large_image" />
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
