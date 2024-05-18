"use client"
import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Avatar } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

export default function NavBar() {
    const [open, setOpen] = useState(false)
    return (
        <nav className='w-full flex justify-end bg-n-10 px-[15px] py-[30px] relative'>
            <div className='flex gap-2 items-center cursor-pointer' onClick={() => setOpen(prev => !prev)}>
                <Avatar src='' className='w-[40px]' />
                <span className='text-n-100 text-sm font-semibold tracking-wider'>Abdullah Mohamed</span>
                <KeyboardArrowDownIcon className={`ml-5 translate-y-[2px] ${open ? "" : "rotate-180"}`} />
            </div>
            {open && (
                <div className='absolute right-[32px] bottom-[-140px] w-[270px] bg-n-10 rounded-[10px] p-2 flex flex-col gap-2 shadow-lg'>
                    <Link href={"/settings"} className='w-full px-2 py-3 hover:bg-n-30 flex items-center gap-4 rounded-[10px]' onClick={() => setOpen((prev) => !prev)}>
                        <Image
                            src={"/icons/setting.svg"}
                            width={24}
                            height={24}
                            alt='settings icon'
                        />
                        <span className='text-base font-medium text-n-90 capitalize'>settings</span>
                    </Link>
                    <div className='w-full border-b-[1px] border-n-30'></div>
                    <div className='w-full px-2 py-3 flex items-center gap-4 hover:bg-n-30 rounded-[10px] cursor-pointer' onClick={() => setOpen((prev) => !prev)}>
                        <Image
                            src={"/icons/logout.svg"}
                            width={24}
                            height={24}
                            alt='settings icon'
                        />
                        <span className='text-base font-medium text-n-90 capitalize'>log out</span>
                    </div>
                </div>
            )}
        </nav>
    )
}
