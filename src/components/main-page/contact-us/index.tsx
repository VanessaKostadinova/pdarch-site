"use client"
import React, {useState} from "react"
import { useRouter } from 'next/navigation'
import Link from "next/link"
import SubTitle from "../heading"

export default function ContactUs() {
    const router = useRouter();

    return (
        <>
            <div className="flex flex-col py-16 items-center justify-items-center">
                <h2 className="self-center text-5xl mb-8">Contact Us</h2>
                <p>
                    Lorem ipsum dolor sit amet. Est dignissimos maiores ut nobis cumque qui quis cumque. Sed fugit illo ex officiis enim ea illo modi hic dolorem dolorem.
                    At vitae accusamus a error aperiam qui rerum Quis rem nisi voluptatum. Et dignissimos minus ad quae illum ut molestias sint ea soluta reiciendis quo nihil quia quo veritatis quas.
                </p>
                <button className="w-fit my-4 bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="button" onClick={() => router.push('mailto:email@yahoo.com')}>Email</button>
            </div>
        </>
    )
}
