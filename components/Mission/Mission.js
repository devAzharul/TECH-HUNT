import back from '@/Assests/Images/typing.jpg'
import man from '@/Assests/Images/man-1.png'
import Image from 'next/image';
import styles from "@/styles/Mission/Mission.module.css"
const Mission = () => {
    return (
        <div className={`flex ${styles.container} flex-col md:flex-row`}>
            <div className=''>
                <h2 className="font-bold text-[4rem] text-white my-4 text-center"><span className="primaryText">Mission</span> is to<span className='primaryText'>Protect</span> Your Businesses & Much More</h2>
                <div className='ml-16'>
                    <button className='primaryBtn'>Discover More</button>
                </div>
            </div>
            <div className='bg-black'>
                <Image src={man} alt="man's picture" className='w-full' />
            </div>
        </div>
    );
};

export default Mission;