import React from 'react';
import solOne from '../../Assests/Images/itsolu-1.jpg'
import solTwo from '../../Assests/Images/itsolu-2.jpg'
import solThree from '../../Assests/Images/itsolu-3.jpg'
import Image from 'next/image';
import styles from '@/styles/ITSolution/ITSolution.module.css'
import { AiOutlinePlusCircle } from 'react-icons/ai'
const ITSolution = () => {
    return (
        <div className='py-36 px-8 bg-black'>
            <h1 className={`primaryText text-sm font-semibold text-center`}>Case Studies</h1>
            <h2 className="font-bold text-4xl text-white my-4 text-center">Latest <span className="primaryText">Showcase</span> & <span className='primaryText'>Solutions</span> to <span className='primaryText'>IT Solutions</span></h2>
            <div className='p-2 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-12'>
                <div className={`${styles.container}`}>
                    <Image src={solThree} alt='this is image' className='h-full w-full' />
                    <div className={`${styles.innerContainer}`}>
                        <AiOutlinePlusCircle size={30} className={`${styles.icon}`} />
                        <div className={`${styles.content}`}>
                            <h1 className='text-white font-bold text-xl'>MERN Technology</h1>
                            <button className='primaryBtn'>Read More</button>
                        </div>
                    </div>
                </div>
                <div className={`${styles.container}`}>
                    <Image src={solTwo} alt='this is image' className='h-full w-full' />
                    <div className={`${styles.innerContainer}`}>
                        <AiOutlinePlusCircle size={30} className={`${styles.icon}`} />
                        <div className={`${styles.content}`}>
                            <h1 className='text-white font-bold text-xl'>Digital Marketing</h1>
                            <button className='primaryBtn'>Read More</button>
                        </div>
                    </div>
                </div>
                <div className={`${styles.container}`}>
                    <Image src={solOne} alt='this is image' className='h-full w-full' />
                    <div className={`${styles.innerContainer}`}>
                        <AiOutlinePlusCircle size={30} className={`${styles.icon}`} />
                        <div className={`${styles.content}`}>
                            <h1 className='text-white font-bold text-xl'>Cybar Security</h1>
                            <button className='primaryBtn'>Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ITSolution;