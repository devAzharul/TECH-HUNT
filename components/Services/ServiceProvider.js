import React from 'react';
import Image from 'next/image';
import services from '../serviceJson/services';
import webdevelopment from '../../public/service png/2010990.png'
import { AiOutlineArrowRight } from 'react-icons/ai'
const ServiceProvider = () => {

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