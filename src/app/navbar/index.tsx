"use client"
import React, {useState} from "react"
import Link from "next/link"

const Navbar = () => {
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
        <nav className="bg-gray-800 p-4">
            <ul className="flex flex-col md:flex-row">
                {navLinks.map((link, index) => (
                    <li key={index} className="md:mr-6">
                        <Link href={link.href} className="text-white hover:text-gray-300">
                            {link.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
export default Navbar