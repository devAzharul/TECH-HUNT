import { TiTick } from 'react-icons/ti'
import styles from '@/styles/Contact/Contact.module.css'
const ContactUs = () => {
    return (
        <div className={`bg-black p-4 py-16 ${styles.container}`}>
            <div className='bg-black/70 grid gap-5 grid-cols-1 lg:grid-cols-2'>
                <div>
                    <h1 className="text-white text-[2rem] md:text-[3rem] lg:text-[5rem] font-bold">We Are <span className="primaryText">Perfect Solutions</span> For <span className="primaryText">Your Business</span></h1>
                    <p className="my-8 text-gray-400 font-semibold">Donec vitae lacus vel ligula hendrerit viverra non non orci. Quisque sed tincidunt sapien. Maecenas gravida at velit feugiat vulputate.</p>
                    <div>
                        <div className='flex items-center'>
                            <TiTick size={32} className='primaryText' />
                            <p className='font-bold text-white ml-2'>We are committed to providing quality IT Services.</p>
                        </div>
                        <div className='flex items-center'>
                            <TiTick size={32} className='primaryText' />
                            <p className='font-bold text-white ml-2'>Really know the true needs and expectations of customers.</p>
                        </div>
                        <div className='flex items-center'>
                            <TiTick size={32} className='primaryText' />
                            <p className='font-bold text-white ml-2'>Provided by experts to help challenge critical activities</p>
                        </div>
                        <div className='flex items-center'>
                            <TiTick size={32} className='primaryText' />
                            <p className='font-bold text-white ml-2'>Processes of achieving the excellence improvements</p>
                        </div>
                    </div>
                </div>
                <div className='p-5'>
                    <div className='grid gap-5 grid-cols-2'>
                        <input placeholder='Your Name' className='border border-1 border-white px-4 py-3 bg-transparent outline-none text-white w-full' />
                        <input placeholder='Your Email' className='border border-1 border-white px-4 py-3 bg-transparent outline-none text-white w-full' />
                        <input placeholder='Your Phone' className='border border-1 border-white px-4 py-3 bg-transparent outline-none text-white w-full' />
                        <input placeholder='Your Address' className='border border-1 border-white px-4 py-3 bg-transparent outline-none text-white w-full' />
                    </div>
                    <textarea placeholder='Additional Details...' className='mt-5 border border-1 border-white px-4 py-3 bg-transparent outline-none text-white w-full min-h-[180px]' />
                    <button className='primaryBtn'>Submit Request</button>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;