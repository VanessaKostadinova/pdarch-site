"use client"
import React, {useState} from "react"
import Link from "next/link"

export default function Navbar() {
    type NavLink = {
        title: string,
        href: string
    };
    const navLinks: NavLink[] = [
        {title: "Home", href: "/"},
        {title: "About", href: "/about"},
        {title: "Contact", href: "/contact"},
        {title: "Gallery", href: "/gallery"}
    ];
    const [isOpen, setIsOpen] = useState(false);
    return(
        <nav className="">
            <ul className="flex flex-row justify-between">
                <div>
                    <img src="https://placehold.co/100x50/FFFFFF/000" />
                </div>
                <div className="flex flex-col items-end md:flex-row md:justify-end">
                    {navLinks.map((link, index) => (
                        <li key={index} className="m-4 md:ml-6">
                            <Link href={link.href} className="text-white hover:text-gray-300">
                                {link.title}
                            </Link>
                        </li>
                    ))}
                </div>
            </ul>
        </nav>
    )
}