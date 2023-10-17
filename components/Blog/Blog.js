import React from 'react';
import blogOne from '../../Assests/Images/blog-1.jpg';
import blogTwo from '../../Assests/Images/blog-2.jpg';
import blogThree from '../../Assests/Images/blog-3.jpg';
import Image from 'next/image';
const Blog = () => {
    const blogs = [
        {
            name: "The Importance of Web Development in the Digital Age",
            about: "In the digital age, web development is crucial for businesses to establish their online presence, enhance user experience, and expand their reach. A well-designed website attracts customers, improves brand visibility, and opens up new business opportunities. Stay ahead of the competition with a professionally developed website that captivates your audience and drives growth.",
            img: blogOne
        },
        {
            name: "The Key Elements of a Successful Website",
            about: "A successful website combines clear and engaging design, intuitive navigation, compelling content, responsive and mobile-friendly layouts, and strong calls to action. These elements work together to create an exceptional user experience, drive conversions, and reinforce your brand identity. Prioritize these elements to build a website that captivates visitors and achieves your business goals.",
            img: blogTwo
        },
        {
            name: "Web Applications: The Future of Business Efficiency",
            about: "Web applications revolutionize business operations by enhancing accessibility, scalability, collaboration, and productivity. With cloud-based solutions, businesses can access applications from any device, scale their operations effortlessly, collaborate in real-time, and personalize user experiences. Embrace web applications to increase efficiency, improve customer engagement, and strengthen data security",
            img: blogThree
        },
    ]
    return (
        <div className="py-16 p-8 bg-black">
            <h1 className={`primaryText text-4xl font-semibold text-center`}>Our Blog</h1>
            <h2 className="font-bold text-[2rem] md:text-[3rem] text-white my-4 text-center">Latest <span className="primaryText">News & Articles</span></h2>
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