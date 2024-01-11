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
        <nav className="w-full top-0 md:h-20 bg-black fixed z-50">
            <div className="h-full w-full md:w-4/5 lg:w-2/3 xl:w-1/2 px-4 md:px-0 mb-5">
                <ul className="h-full flex flex-row align-center justify-between">
                    <div className="h-full">
                        <img className="h-full" src="https://placehold.co/100x50/FFFFFF/000" />
                    </div>
                    <div className="flex flex-col gap-4 items-center md:flex-row md:gap-6 md:justify-end">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <Link href={link.href} className="text-white hover:text-gray-300">
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </div>
                </ul>
            </div>
        </nav>
    )
}