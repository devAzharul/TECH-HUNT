import Image from 'next/image';
import React from 'react';
import svg1 from '../../Assests/svg/Isometric-1.png'
import svg2 from '../../Assests/svg/Isometric-2.png'
import { AiOutlineArrowRight } from 'react-icons/ai'

const WhyChooseus = () => {

    return (
        <div className='flex items-center'>
            <div className='pt-20 pb-20 mt-20 text-white bg-black'>
                <h6 className='ml-5 text-lg text-cyan-300 font-bold'>Why Choose Us</h6>
                <br />
                <h3 className='ml-8 text-6xl font-extrabold'>Our Goal is</h3>
                <br />
                <h3 className='ml-8 text-cyan-300 text-6xl font-extrabold'>Giving the Best</h3>
                <br />
                <h3 className='ml-8 text-6xl font-extrabold'>For <span className='text-cyan-300'>IT Services.</span></h3>
                <br />
                <br />
                <p>Aliquam in tincidunt ipsum. Quisque lobortis ultrices ex ut ullamcorper. Donec<br /> vitae lacus vel ligula hendrerit viverra non non orci. Quisque sed tincidunt<br /> sapien. Maecenas gravida at velit feugiat vulputate. Etiam quam orci,<br /> condimentum ut justo et, consequat ultrices diam.</p>
            </div>
            <div className='flex justify-between'>
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