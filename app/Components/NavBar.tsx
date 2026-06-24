'use client'; // Required to handle the mobile state

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 backdrop-blur-xl bg-[rgba(230,235,240,0.8)] border-b border-[rgba(255,255,255,0.2)] py-4 px-6 md:px-12 transition-all">
            <div className='max-w-7xl mx-auto flex justify-between items-center'>
                <Link
                    href="/"
                    className="flex items-center gap-2 text-2xl font-bold font-serif-cormorant text-neutral-800 tracking-tight"
                >
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-sans font-black text-sm">
                        HD
                    </div>
                    <span className="font-heading font-extrabold">
                        HD Seedlink <span className='text-primary'>Agro</span>
                    </span>
                </Link>

                <div className="hidden md:flex items-center gap-8 font-sans-outfit font-medium text-sm text-neutral-600">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <Link href="/#about" className="hover:text-primary transition-colors">About Us</Link>
                    <Link href="/#services" className="hover:text-primary transition-colors">Services</Link>
                    <Link href="/#team" className="hover:text-primary transition-colors">Our Founders</Link>
                    <Link href="/future-plans" className="hover:text-primary transition-colors">Future Plans</Link>
                    <Link
                        href="/#contact"
                        className="px-5 py-2.5 rounded-full neumorphism-btn-flat text-primary font-semibold transition-all hover:text-neutral-800 hover:scale-95"
                    >
                        Contact Us
                    </Link>
                </div>

                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-neutral-700 hover:text-primary transition-colors"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* UPDATED MOBILE VIEW */}
            {isOpen && (
                <div className="md:hidden mt-4 overflow-hidden border-t border-[rgba(0,0,0,0.1)] pt-4 animate-in slide-in-from-top-2 duration-300">
                    <div className="flex flex-col gap-4 font-sans font-medium text-sm text-neutral-600 pb-4">
                        <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors text-center">Home</Link>
                        <Link href="/#about" onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors text-center">About Us</Link>
                        <Link href="/#services" onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors text-center">Services</Link>
                        <Link href="/#team" onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors text-center">Our Founders</Link>
                        <Link href="/future-plans" onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors text-center">Future Plans</Link>
                        <Link href="/#contact" onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors text-center">Contact Us</Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavBar;