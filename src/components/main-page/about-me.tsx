"use client"
import React, {useState} from "react"
import Link from "next/link"
import SubTitle from "./sub-title"

export default function AboutMe() {
    return (
        <div>
            <SubTitle title="About Me" />
            <div className="grid md:grid-cols-2 gap-4 grid-cols-1 pb-16">
                <div className='self-center text-white'>
                    <p>
                        Lorem ipsum dolor sit amet. Est dignissimos maiores ut nobis cumque qui quis cumque. Sed fugit illo ex officiis enim ea illo modi hic dolorem dolorem.
                        At vitae accusamus a error aperiam qui rerum Quis rem nisi voluptatum. Et dignissimos minus ad quae illum ut molestias sint ea soluta reiciendis quo nihil quia quo veritatis quas.
                    </p>
                </div>
                <img className="self-center justify-self-end" src="https://placehold.co/600x400/FFFFFF/000" />
            </div>
        </div>
    )
}
