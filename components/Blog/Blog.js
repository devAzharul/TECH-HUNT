import React from 'react';
import blogOne from '../../Assests/Images/blog-1.jpg';
import blogTwo from '../../Assests/Images/blog-2.jpg';
import blogThree from '../../Assests/Images/blog-3.jpg';
import Image from 'next/image';
const Blog = () => {
    const blogs = [
        {
            name: "Digital Conference Of IT Tech Events…",
            about: "Digital Conference Of IT Tech Events in 2020 Home – Single Post Deka August 20, 2022 0 Comment Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elit arcu, posuere…",
            img: blogOne
        },
        {
            name: "Data Security With Multiple Business Values.",
            about: "Data Security With Multiple Business Values. Home – Single Post Deka August 20, 2022 0 Comment Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elit arcu, posuere eu ipsum…",
            img: blogTwo
        },
        {
            name: "Providing Top Quality Cleaning & Related…",
            about: "Providing Top Quality Cleaning & Related Services Charms. Home – Single Post Deka August 20, 2022 0 Comment Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elit arcu, posuere…",
            img: blogThree
        },
    ]
    return (
        <div className="py-16 p-8 bg-black">
            <h1 className={`primaryText text-sm font-semibold text-center`}>Our Blog</h1>
            <h2 className="font-bold text-[2rem] md:text-[3rem] lg:text-[5rem] text-white my-4 text-center">Latest <span className="primaryText">News & Articles</span></h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12'>
                {
                    blogs.map((blog, index) => <div key={index} className='border overflow-hidden'>
                        <Image src={blog.img} alt='Image of blog' className='hover:rotate-3 hover:scale-110 ease-in-out duration-300' />
                        <div className='p-5'>
                            <h3 className='text-white hover:text-[#00FBF4] my-4 text-2xl font-semibold ease-in-out duration-300'>{blog.name}</h3>
                            <p className='my-2 text-white text-lg text-base-400'>{blog.about}</p>
                            <button className='primaryBtn'>Learn More</button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Blog;