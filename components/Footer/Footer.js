import back from '../../Assests/Images/footerBackground.png'
import Link from 'next/link';
import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai'
import { MdCall } from 'react-icons/md'
const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-[#0D1B1B] text-white">
                <div>
                    <span className="footer-title primaryText">Services</span>
                    <Link href={'/service'} className="link link-hover">Website Design and Development</Link>
                    <Link href={'/service'} className="link link-hover">Custom Web Application Development</Link>
                    <Link href={'/service'} className="link link-hover">E-commerce Development</Link>
                    <Link href={'/service'} className="link link-hover">API Development and Integration</Link>
                    <Link href={'/service'} className="link link-hover">Web Hosting and Maintenance</Link>
                </div>
                <div>
                    <span className="footer-title primaryText">Quick Links</span>
                    <Link href={"/"}>Home</Link>
                    <Link href={"/service"}>Service</Link>
                    <Link href={"/about"}>About Us</Link>
                    <Link href={"/contact"}>Contact Us</Link>
                    <Link href={"/blog"}>Blog</Link>
                    <Link href={"/team"}>Our Team</Link>
                </div>
                <div>
                    <span className="footer-title primaryText">Solutions</span>
                    <a className="link link-hover">Frontend Development</a>
                    <a className="link link-hover">Backend Development</a>
                    <a className="link link-hover">Full-Stack Development</a>
                    <a className="link link-hover">MERN Stack Development</a>
                </div>
                <div>
                    <span className="footer-title primaryText">Address</span>
                    <div className="form-control w-80">
                        <div className='flex gap-x-2 mb-2'>
                            <AiOutlineHome size={24} />
                            <p>
                                1042/1175, Baitul Jannat Mosque Lane, Kadamtoly, Chittagong
                            </p>
                        </div>
                        <div className='flex gap-x-2 mb-2'>
                            <AiOutlineMail size={24} />
                            <a href="mailto:techhunt.org@gmail.com" className='text-green-500'>techhunt.org@gmail.com</a>
                        </div>
                        <div className='flex gap-x-2'>
                            <MdCall size={24} />
                            <p>
                                <a href="tel:+8801581192171" className='text-green-500'>+8801581192171 </a> |
                                <a href="tel:+8801671698464" className='text-green-500'> +8801671698464 </a> |
                                <a href="tel:+8801515605339" className='text-green-500'> +8801515605339 </a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default Footer;