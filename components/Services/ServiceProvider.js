import React from 'react';
import Image from 'next/image';
import serviceOne from '../../Assests/Images/service-1.png'
import serviceTwo from '../../Assests/Images/service-2.png'
import serviceThree from '../../Assests/Images/service-3.png'
import serviceFour from '../../Assests/Images/service-4.png'
import webdevelopment from '../../public/service png/2010990.png'
import { AiOutlineArrowRight } from 'react-icons/ai'
const ServiceProvider = () => {
    const services = [
        {
            name: "Website Design and Development",
            img: serviceOne,
            about: "Our team creates stunning websites that combine aesthetics with seamless functionality. We focus on user experience and responsive design to ensure your online presence leaves a lasting impression on visitors."
        },
        {
            name: "Custom Web Application Development",
            img: serviceTwo,
            about: "Tailored to meet your unique requirements, our custom web applications streamline processes, boost efficiency, and empower your business to achieve its goals effectively."
        },
        {
            name: "E-commerce Development",
            img: serviceThree,
            about: "We build secure and scalable e-commerce platforms that provide a smooth shopping experience for customers, helping you drive sales and grow your online business."
        },
        {
            name: "Content Management System (CMS) Development",
            img: serviceFour,
            about: "Take control of your website with our user-friendly CMS solutions, allowing easy content updates without technical complexities."
        },
        {
            name: "Web Hosting and Maintenance",
            img: serviceFour,
            about: "Our reliable web hosting and maintenance services ensure your website stays online, updated, and protected, leaving you free to focus on your core business."
        },
        {
            name: "Search Engine Optimization (SEO)",
            img: serviceFour,
            about: "We employ proven SEO strategies to boost your website's visibility in search engines, attracting more organic traffic and potential customers."
        },
        {
            name: "User Experience (UX) and User Interface (UI) Design",
            img: serviceFour,
            about: "With a focus on intuitive design and engaging interfaces, we create memorable user experiences that drive user satisfaction and loyalty."
        },
        {
            name: "Responsive Web Design",
            img: serviceFour,
            about: "Your website will adapt flawlessly to various devices, delivering a consistent and enjoyable user experience on desktops, tablets, and mobile phones."
        },
        {
            name: "Web Performance Optimization",
            img: serviceFour,
            about: "We optimize your website's speed and performance, reducing load times and enhancing overall user experience."
        },
        {
            name: "API Development and Integration",
            img: serviceFour,
            about: "Seamlessly connect your software systems with our API development and integration services, enabling efficient data exchange and improving workflows."
        },
        {
            name: "Social Media Integration",
            img: serviceFour,
            about: "We integrate social media elements into your website, promoting brand engagement and expanding your online reach."
        },
        {
            name: "Analytics and Reporting",
            img: serviceFour,
            about: "Track your website's performance and user behavior with our analytics tools, providing valuable insights to refine your digital strategies."
        },
        {
            name: "Mobile App Development",
            img: serviceFour,
            about: "Extend your business reach with our expertly crafted mobile applications, designed for both Android and iOS platforms."
        },
        {
            name: "Consultation and Strategy",
            img: serviceFour,
            about: "Our experienced team offers expert advice and strategic planning to align your digital initiatives with your business objectives, ensuring a successful online presence."
        },
        {
            name: "Web Security Services",
            img: serviceFour,
            about: "Our advanced security measures protect your website from cyber threats, safeguarding sensitive data and ensuring business continuity."
        },
    ]

    return (
        <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-8 my-16'>
            {
                services.map((service, index) => <div key={index} className='py-16 border px-4 bg-black/[.8]'>
                    <Image src={webdevelopment} alt="services image" className='h-[60px] w-[70px] mb-6 mx-auto bg-cyan-500' />
                    <h2 className='my-2 text-white text-2xl font-semibold'>{service.name}</h2>
                    <p className='text-white text-lg font-medium'>{service.about}</p>
                    <AiOutlineArrowRight size={32} className='text-white mt-12' />
                </div>)
            }
        </div>
    );
};

export default ServiceProvider;