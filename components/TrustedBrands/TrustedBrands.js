import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from '../../Assests/Images/Digit-Logo.png'
import logo1 from '../../Assests/Images/logo-2.png'
import logo2 from '../../Assests/Images/logo-3.png'
import logo3 from '../../Assests/Images/logo-6.png'
import logo4 from '../../Assests/Images/Logo-Digious.png'
import logo5 from '../../Assests/Images/Logo-Youseo-10.png'

const TrustedBrands = () => {

    const settings = {
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    return (
        <div className='flex justify-evenly'>
            <div className='mt-10 w-6/12'>
                <div className='mb-10'>
                    <Slider {...settings}>
                        <div>
                            <Image alt='logo' src={logo} />
                        </div>
                        <div>
                            <Image alt='logo' src={logo1} />
                        </div>
                        <div>
                            <Image alt='logo' src={logo2} />
                        </div>
                        <div>
                            <Image alt='logo' src={logo3} />
                        </div>
                        <div>
                            <Image alt='logo' src={logo4} />
                        </div>
                        <div>
                            <Image alt='logo' src={logo5} />
                        </div>
                    </Slider>
                </div>
                <div></div>
                <div> <Slider {...settings}>
                    <div>
                        <Image alt='logo' src={logo3} />
                    </div>
                    <div>
                        <Image alt='logo' src={logo4} />
                    </div>
                    <div>
                        <Image alt='logo' src={logo5} />
                    </div>
                    <div>
                        <Image alt='logo' src={logo} />
                    </div>
                    <div>
                        <Image alt='logo' src={logo1} />
                    </div>
                    <div>
                        <Image alt='logo' src={logo2} />
                    </div>
                </Slider></div>
            </div>
            <div>
                <div className='mb-8 text-white text-5xl font-bold'>
                    <h2 className='mb-5'>
                        Trusted By <span className='text-cyan-300'>1,790+</span>
                    </h2>
                    <h2 className='mb-5'> Worlds Leading</h2>
                    <h2>
                        <span className='text-cyan-300'> IT Companies.</span>
                    </h2>
                </div>
                <div>
                    <p className='text-white'>
                        Consectetur adipiscing elit. Maecenas quis faucibus <br />ligula.Maecenas a purus massa. Ut elementum sem.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TrustedBrands;