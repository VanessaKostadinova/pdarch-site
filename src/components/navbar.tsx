"use client"
import React, { useState } from "react"
import Link from "next/link"

export default function Navbar() {
    type NavLink = {
        title: string,
        href: string
    };
    const navLinks: NavLink[] = [
        { title: "Home", href: "/" },
        { title: "About", href: "/about" },
        { title: "Contact", href: "/contact" },
        { title: "Gallery", href: "/gallery" }
    ];
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="w-full flex flex-col items-center top-0 min-h-min bg-black fixed z-50">
            <div className="min-h-14 md:h-20 w-full md:w-4/5 lg:w-2/3 xl:w-1/2 px-4 md:px-0">
                <ul className="h-full flex flex-row align-center justify-between">
                    <div className="h-full">
                        <img className="h-full" src="https://placehold.co/100x50/FFFFFF/000" />
                    </div>
                    <div id="navbar-default" className="flex flex-col gap-4 items-end md:items-center md:flex-row md:gap-6 justify-center md:justify-end">
                        <button type="button" onClick={() => setIsOpen(!isOpen)} className="flex items-center p-2 w-10 justify-center text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                            <span className="sr-only">Toggle dropdown navbar</span>
                            <svg className="w-5 h-5" aria-hidden="true" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                        <div className={`${isOpen ? 'flex' : 'hidden md:flex'} flex-col gap-4 items-end md:items-center md:flex-row md:gap-6 justify-end pb-4 md:p-0`}>
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    <Link href={link.href} className="text-white hover:text-gray-300">
                                        {link.title}
                                    </Link>
                                </li> 
                            ))}
                        </div>
                    </div>
                </ul>
            </div>
        </nav>
    )
}