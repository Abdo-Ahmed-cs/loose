"use client"
import React from 'react'
import WestIcon from '@mui/icons-material/West';
import { useRouter } from 'next/navigation';

export default function BackNavigator() {
    const router = useRouter()
    return (
        <div className='flex gap-2 items-center mb-[8.5rem] cursor-pointer' onClick={() => router.back()}>
            <WestIcon className='text-n-100 font-semibold' />
            <span className='text-n-100 text-lg font-semibold'>Back</span>
        </div>
    )
}
