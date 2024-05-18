"use client"
import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function SideBar() {
    const pathname = usePathname()
    const [accordion, setaccordion] = useState(false)
    return (
        <div className='min-h-full w-[240px] inline-block bg-n-10 px-6 py-4'>
            <Image
                src={"/icons/logo.svg"}
                width={147}
                height={42}
                alt='loose logo image'
                className='mb-9'
            />
            <div className='w-full flex flex-col gap-3'>
                <Link href={"/dashboard"} className={`w-full p-3 rounded-[10px] text-n-50 flex items-center gap-3 ${pathname === "/dashboard" ? 'bg-n-20 text-primary-main' : ""}`}>
                    <Image
                        src={`/icons/${pathname === "/dashboard" ? "home-active" : "home"}.svg`}
                        width={24}
                        height={24}
                        alt='dashboard home icon'
                    />
                    <span className='capitalize font-semibold text-base'>dashboard</span>
                </Link>
                <Link href={"/customers"} className={`w-full p-3 rounded-[10px] text-n-50 flex items-center gap-3 ${pathname === "/customers" ? 'bg-n-20 text-primary-main' : ""}`}>
                    <Image
                        src={`/icons/${pathname === "/customers" ? "users-active" : "users"}.svg`}
                        width={24}
                        height={24}
                        alt='dashboard customers icon'
                    />
                    <span className='capitalize font-semibold text-base'>customers</span>
                </Link>
                <div className={`w-full p-3 rounded-[10px] cursor-pointer text-n-50 flex items-center gap-3 ${["/products/list-products", "/products/categories"].includes(pathname) ? 'bg-n-20 text-primary-main' : ""}`} onClick={() => setaccordion(prev => !prev)}>
                    <Image
                        src={`/icons/${["/products/list-products", "/products/categories"].includes(pathname) ? "products-active" : "products"}.svg`}
                        width={24}
                        height={24}
                        alt='dashboard customers icon'
                    />
                    <span className='capitalize font-semibold text-base'>products</span>
                    <KeyboardArrowDownIcon className={`ml-auto translate-y-[2px] ${accordion ? "" : "rotate-180"}`} />
                </div>
                <div className={`pl-3 ml-6 grid grid-rows-2 gap-3 border-l-[1px] border-n-30 ${accordion ? "" : "hidden"}`}>
                    <Link href={"/products/list-products"} className={`w-full p-3 rounded-[10px] text-n-50 flex items-center${pathname === "/products/list-products" ? 'bg-n-20 text-primary-main' : ""}`}>
                        <span className='capitalize font-semibold text-base'>list procuts</span>
                    </Link>
                    <Link href={"/products/categories"} className={`w-full p-3 rounded-[10px] text-n-50 flex items-center${pathname === "/products/categories" ? 'bg-n-20 text-primary-main' : ""}`}>
                        <span className='capitalize font-semibold text-base'>categories</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}
