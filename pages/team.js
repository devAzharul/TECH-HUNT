import Layout from '@/components/Layout';
import Image from 'next/image';
import React from 'react';

import img from '../public/image team/Ajmain-Mahtab-Niloy.jpg';
import img1 from '../public/image team/Arifur-bhai.jpg';
import img2 from '../public/image team/Azharul-Islam.jpg';
import img3 from '../public/image team/Rony-Chowdhury.jpg';
import img4 from '../public/image team/Ruman-Islam.jpg';
import img5 from '../public/image team/Sultan-Mahmud.jpg';

const Team = () => {
    return (
        <Layout>
            <section className='m-auto container lg:ml-48'>
                <h1 className="mb-10 text-white text-3xl">This is our team</h1>
                <div className='flex flex-col justify-around'>
                    <div style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}>
                        <div className="text-white container max-w-7xl mx-auto px-4" style={{ cursor: 'auto' }}>
                            <div className="flex flex-wrap">
                                <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                                    <div>
                                        <Image
                                            height={100}
                                            width={300}
                                            alt="Ajmain Mahtab"
                                            src={img}
                                            className="m-auto
                                            rounded-xl shadow-lg max-w-full h-auto align-middle border-none"
                                        />
                                        <div className="pt-6 text-center">
                                            <h1 className="text-white text-xl font-serif font-bold leading-normal mt-0 mb-2">Ajmain Mahtab Niloy</h1>
                                            <div className="flex items-center justify-center">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4" style={{ cursor: 'auto' }}>
                                    <div style={{ cursor: 'auto' }}>
                                        <Image
                                            height={100}
                                            width={300}
                                            alt="Arifur Rahaman"
                                            src={img1}
                                            className="m-auto rounded-xl shadow-lg max-w-full h-auto align-middle border-none"
                                            style={{ cursor: 'auto' }}
                                        />
                                        <div className="pt-6 text-center">
                                            <h1 className="text-white text-xl font-serif font-bold leading-normal mt-0 mb-2">Arifur Rahaman</h1>
                                            <div className="flex items-center justify-center">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4" style={{ cursor: 'auto' }}>
                                    <div style={{ cursor: 'auto' }}>
                                        <Image
                                            height={100}
                                            width={300}
                                            alt="Azharul Islam"
                                            src={img2}
                                            className="m-auto rounded-xl shadow-lg max-w-full h-auto align-middle border-none"
                                            style={{ cursor: 'auto' }}
                                        />
                                        <div className="pt-6 text-center">
                                            <h1 className="text-white text-xl font-serif font-bold leading-normal mt-0 mb-2">Azharul Islam</h1>
                                            <div className="flex items-center justify-center">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}>
                        <div className="text-white container max-w-7xl mx-auto px-4" style={{ cursor: 'auto' }}>
                            <div className="flex flex-wrap">
                                <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                                    <div>
                                        <Image
                                            height={100}
                                            width={300}
                                            alt="Rony Chowdhury"
                                            src={img3}
                                            className="m-auto rounded-xl shadow-lg max-w-full h-auto align-middle border-none"
                                        />
                                        <div className="pt-6 text-center">
                                            <h1 className="text-white text-xl font-serif font-bold leading-normal mt-0 mb-2">Rony Chowdhury</h1>
                                            <div className="flex items-center justify-center">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4" style={{ cursor: 'auto' }}>
                                    <div style={{ cursor: 'auto' }}>
                                        <Image
                                            height={100}
                                            width={300}
                                            alt="Ruman Islam"
                                            src={img4}
                                            className="m-auto rounded-xl shadow-lg max-w-full h-auto align-middle border-none"
                                            style={{ cursor: 'auto' }}
                                        />
                                        <div className="pt-6 text-center">
                                            <h1 className="text-white text-xl font-serif font-bold leading-normal mt-0 mb-2">Ruman Islam</h1>
                                            <div className="flex items-center justify-center">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4" style={{ cursor: 'auto' }}>
                                    <div style={{ cursor: 'auto' }}>
                                        <Image
                                            height={100}
                                            width={300}
                                            alt="Sultan Mahmud"
                                            src={img5}
                                            className="m-auto rounded-xl shadow-lg max-w-full h-auto align-middle border-none"
                                            style={{ cursor: 'auto' }}
                                        />
                                        <div className="pt-6 text-center">
                                            <h1 className="text-white text-xl font-serif font-bold leading-normal mt-0 mb-2">Sultan Mahmud</h1>
                                            <div className="flex items-center justify-center">
                                                <br />
                                                <br />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Team;
