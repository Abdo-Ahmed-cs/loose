import AuthForm from '@/components/forms/AuthForm'
import { Metadata } from 'next';
import Image from 'next/image'
import React from 'react'


export const metadata: Metadata = {
    title: "Loose - Login",
    description: "A fasion e-commerce shop for women",
};

export default function page() {
    return (
        <section className='auth'>
            <div className='overflow-hidden col-span-3'>
                <Image
                    src={"/images/login.png"}
                    width={842}
                    height={900}
                    alt='login image background'
                    className='!w-full !h-full object-cover'
                />
            </div>
            <div className='flex justify-center px-[80px] py-[50px] col-span-2'>
                <div className='w-full'>
                    <Image
                        src={"/icons/logo.svg"}
                        width={147}
                        height={42}
                        alt='loose logo image'
                        className='mb-[4.25rem]'
                    />

                    <AuthForm login />
                </div>
            </div>
        </section>
    )
}
