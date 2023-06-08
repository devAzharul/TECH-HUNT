import Image from 'next/image';
import React from 'react';
import svg1 from '../../Assests/svg/Isometric-1.png'
import svg2 from '../../Assests/svg/Isometric-2.png'
import { AiOutlineArrowRight } from 'react-icons/ai'

const WhyChooseus = () => {

    return (
        <div className='grid gap-10 grid-cols-1 lg:grid-cols-2 items-center'>
            <div className='pt-20 pb-20 mt-20 text-white bg-black'>
                <h6 className='ml-8 text-lg text-cyan-300 font-bold'>Why Choose Us</h6>
                <h3 className='ml-8 text-[2rem] font-extrabold'>We are passionate about providing</h3>
                <h3 className='ml-8 text-cyan-300 text-[2rem] font-extrabold'> our clients with the best possible</h3>
                <h3 className='ml-8 text-[2rem] font-extrabold'>For <span className='text-cyan-300'>IT experience.</span></h3>
                <br />
                <br />
                <ul className='list-disc ml-8 mb-8 px-6 text-cyan-300'>
                    <li>Proven track record of success.</li>
                    <li>Expertise in all aspects of web development.</li>
                    <li>Commitment to understanding client needs and goals.</li>
                    <li>Commitment to providing excellent customer service.</li>
                </ul>
                <p className='ml-8 text-white'>If you are looking for a web development agency that can provide you with the best possible IT experience, then we encourage you to contact us today. We would be happy to discuss your needs and goals and to put together a proposal that meets your budget</p>
            </div>
            <div className='grid gap-5 grid-cols-1 md:grid-cols-2'>
                <div className='ml-20 text-white'>
                    <Image alt='svg' width={200} src={svg1} />
                    <br />
                    <h6>Secure Database</h6>
                    <br />
                    <h5 className='text-cyan-300 text-2xl font-bold'>Data Base</h5>
                    <AiOutlineArrowRight size={32} color='cyan' className='text-white mt-10' />
                </div>
                <div className='ml-20 text-white'>
                    <Image alt='svg' width={200} src={svg2} />
                    <br />
                    <h6>Performance Speed</h6>
                    <br />
                    <h5 className='text-cyan-300 text-2xl font-bold'>Performancee</h5>
                    <AiOutlineArrowRight size={32} color='cyan' className='text-white mt-10' />
                </div>
            </div>
        </div>
    );
};

export default WhyChooseus;