"use client"

import Link from "next/link";
import React from "react";

import ScrollCarousel from 'scroll-carousel-react'

interface NavLink {
    label: string,
    href: string
}

const NavLinks: NavLink[] = [
    {
        label: 'Home',
        href: '/'
    },
    {
        label: 'About',
        href: '/about'
    },
    {
        label: 'Products',
        href: '/products'
    },
    {
        label: 'Contact',
        href: '/contact'
    }
]

export function Navbar() {
    return (
        <div className="flex flex-row justify-between items-center p-6">
            <div className="text-3xl font-bold tracking-tighter">
                Organic Store.
            </div>

            <div className="flex flex-row gap-6 text-lg items-center">
                {
                    NavLinks.map((link: NavLink, key: number) => (
                        <Link key={key} href={link.href}>
                            {link.label}
                        </Link>
                    ))
                }

                <Link href='/'> <button className="bg-black border border-black hover:bg-white hover:text-black duration-500 text-white px-4 py-2 rounded-md">Buy Now</button> </Link>
            </div>
        </div>
    )
}

export function Footer(){
    return(
        <div className="flex flex-row gap-4 justify-evenly max-w-[1100px] mx-auto p-6">
            <div className="text-5xl font-bold tracking-tight">Organic <br/> Store.</div>
            <div className="flex flex-col gap-4">
             <div className="text-xl font-bold tracking-tight">Navigation</div>
             {
                NavLinks.map((link:NavLink,key:number)=>(
                    <Link key={key} href={link.href}>{link.label}</Link>
                ))
             }
            </div>
            <div className="flex flex-col gap-4">
                <div className="text-xl font-bold tracking-tight">Socials</div>
                {
                    [1,2,3].map((item:number,key:number)=>(
                        <Link href={'/'}>{item == 1 ? <div>Facebook</div> : item == 2? <div>Instagram</div> : <div>LINE</div>}</Link>
                    ))
                }
            </div>  
        </div>
    )
}


export function MyScrollCarousel(props:{children:any}) {
    return (
        <div>
            <ScrollCarousel
                autoplay
                autoplaySpeed={10}
                speed={10}
            >
                {
                    props.children
                }
            </ScrollCarousel>
        </div>
    )
}