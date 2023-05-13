import React from 'react';
import Image from 'next/image';
import serviceOne from '../../Assests/Images/service-1.png'
import serviceTwo from '../../Assests/Images/service-2.png'
import serviceThree from '../../Assests/Images/service-3.png'
import serviceFour from '../../Assests/Images/service-4.png'
// import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
const ServiceProvider = () => {
    const services = [
        {
            name: "Data Center",
            img: serviceOne,
            about: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames."
        },
        {
            name: "Cloud Services",
            img: serviceTwo,
            about: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames."
        },
        {
            name: "IT Management",
            img: serviceThree,
            about: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames."
        },
        {
            name: "Server Security",
            img: serviceFour,
            about: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames."
        },
    ]
    return (
        <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-8 my-16'>
            {
                services.map((service,index) =>  <div key={index} className='py-16 border px-4'>
                         <Image src={service.img} alt="services image" className='h-[60px] w-[70px] mb-6 mx-auto'/>
                        <h2 className='my-2 text-white text-2xl font-semibold'>{service.name}</h2>
                        <p className='text-base-500 text-lg font-medium'>{service.about}</p>
                    </div> )
            }
        </div>
    );
};

export default ServiceProvider;