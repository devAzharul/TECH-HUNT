import dynamic from 'next/dynamic';
import Head from 'next/head';
import Layout from '@/components/Layout';
import React from 'react';

const Blog = dynamic(() => import('@/components/Blog/Blog'));

const Blogs = () => {
    return (
        <Layout>
            <Head>
                <title>Blogs - Tech-Hunt</title>
                <meta name="description" content="Explore our latest blogs and stay updated with the latest trends, tips, and insights in the world of web development. Our blog covers a wide range of topics, providing valuable information for both beginners and experts." />
                {/* Add more meta tags as needed */}
            </Head>
            <Blog />
        </Layout>
    );
};

export default Blogs;
