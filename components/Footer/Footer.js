import back from '../../Assests/Images/footerBackground.png'
import Link from 'next/link';
const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-[#0D1B1B] text-white">
                <div>
                    <span className="footer-title primaryText">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
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
                    <span className="footer-title primaryText">Newsletter</span>
                    <div className="form-control w-80">
                        <label className="label">
                            <span className="text-white">Enter your email address</span>
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                        </div>
                        <button className="primaryBtn">Subscribe</button>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default Footer;