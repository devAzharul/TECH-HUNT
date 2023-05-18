import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    const menuList = <>
        <li><Link href={"/"}>Home</Link></li>
        <li><Link href={"/service"}>Service</Link></li>
        <li><Link href={"/about"}>About Us</Link></li>
        <li><Link href={"/contact"}>Contact Us</Link></li>
        <li><Link href={"/blog"}>Blog</Link></li>
        <li><Link href={"/team"}>Our Team</Link></li>
    </>
    return (
        <div className="navbar bg-black py-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="text-white font-bold menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuList}
                    </ul>
                </div>
                <a className="normal-case text-xl text-white font-bold">TECH-HUNT</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="text-white font-bold menu menu-horizontal px-1">
                    {menuList}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="primaryBtn">Get started</button>
            </div>
        </div>
    );
};

export default Navbar;