import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="border-t border-[rgba(0,0,0,0.1)] py-12 px-6 md:px-12 text-center text-neutral-500 font-sans-outfit text-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white text-[10px] font-black">
            HD
          </div>
          <span className="font-heading text-lg font-bold text-neutral-800">
            HD Seedlink Agro LLP
          </span>
        </div>

        {/* Copyright */}
        <p className="font-sans">
          © {new Date().getFullYear()} HD Seedlink Agro LLP. All rights reserved. 
          Registered Office: Ahmedabad, Gujarat.
        </p>

        {/* Links */}
        <div className="flex gap-6 font-sans">
          <Link href="/privacy" className="hover:text-primary transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-primary transition-colors">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;