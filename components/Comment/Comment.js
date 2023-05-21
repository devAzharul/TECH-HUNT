import React from 'react';
import Slider from 'react-slick';
import { AiFillStar } from "react-icons/ai";
import Image from 'next/image';
import commentOne from '../../Assests/Images/comment-1.jpg'
import styles from '@/styles/Comment/Comment.module.css'
const Comment = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className={`py-20 mx-auto  p-4 bg-black`}>
            <div className={`p-16 rounded shadow-2xl border border-[#028079] ${styles.container}`}>
                <Slider {...settings}>
                    <div>
                        <div className='flex gap-2'>
                            <AiFillStar className='primaryText h-[30px] w-[30px]' />
                            <AiFillStar className='primaryText h-[30px] w-[30px]' />
                            <AiFillStar className='primaryText h-[30px] w-[30px]' />
                            <AiFillStar className='primaryText h-[30px] w-[30px]' />
                            <AiFillStar className='primaryText h-[30px] w-[30px]' />
                        </div>
                        <h3 className={`my-8 text-xl text-white`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h3>
                        <div className='flex gap-10 mt-16 items-center'>
                            <Image src={commentOne} alt='Image of commenter' className='w-[100px] h-[100px] rounded-full' />
                            <div>
                                <h2 className='primaryText font-bold mb-2 text-sm md:text-xl'>John Doe</h2>
                                <h3 className='font-semibold text-white text-sm md:text-lg' >Founder of Tech-hunt</h3>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='flex gap-2'>
                            <AiFillStar className='primaryText h-[30px] w-[30px]' />
                            <AiFillStar className='primaryText h-[30px] w-[30px]' />
                            <AiFillStar className='primaryText h-[30px] w-[30px]' />
                            <AiFillStar className='primaryText h-[30px] w-[30px]' />
                            <AiFillStar className='primaryText h-[30px] w-[30px]' />
                        </div>
                        <h3 className='my-8 text-xl text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h3>
                        <div className='flex gap-10 mt-16 items-center'>
                            <Image src={commentOne} alt='Image of commenter' className='w-[100px] h-[100px] rounded-full' />
                            <div>
                                <h2 className='primaryText font-bold mb-2 text-sm md:text-xl'>John Doe</h2>
                                <h3 className='font-semibold text-white text-sm md:text-lg' >Founder of Tech-hunt</h3>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='flex gap-2'>
                            <AiFillStar className='primaryText h-[30px] w-[30px]' />
                            <AiFillStar className='primaryText h-[30px] w-[30px]' />
                            <AiFillStar className='primaryText h-[30px] w-[30px]' />
                            <AiFillStar className='primaryText h-[30px] w-[30px]' />
                            <AiFillStar className='primaryText h-[30px] w-[30px]' />
                        </div>
                        <h3 className='my-8 text-xl text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h3>
                        <div className='flex gap-10 mt-16 items-center'>
                            <Image src={commentOne} alt='Image of commenter' className='w-[100px] h-[100px] rounded-full' />
                            <div>
                                <h2 className='primaryText font-bold mb-2 text-sm md:text-xl'>John Doe</h2>
                                <h3 className='font-semibold text-white text-sm md:text-lg' >Founder of Tech-hunt</h3>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Comment;