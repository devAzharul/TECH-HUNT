import dynamic from 'next/dynamic';
import Head from 'next/head';
import Layout from '@/components/Layout';
import React from 'react';

const ContactUs = dynamic(() => import('@/components/ContactUs/ContactUs'));

const Contact = () => {
    return (
        <Layout>
            <Head>
                <title>Contact Us - Tech-Hunt</title>
                <meta name="description" content="Contact our team for inquiries, support, and collaboration opportunities. We are here to assist you and provide the solutions you need. Reach out to us today!" />
                {/* Add more meta tags as needed */}
            </Head>
            <ContactUs />
        </Layout>
    );
};

export default Contact;
