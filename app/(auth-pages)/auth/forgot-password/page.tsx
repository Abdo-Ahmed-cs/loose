import AuthForm from '@/components/forms/AuthForm'
import Image from 'next/image'
import React from 'react'
import BackNavigator from '@/components/navigations/BackNavigator';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Loose - forgot password",
    description: "A fasion e-commerce shop for women",
};

export default function page() {
    return (
        <section className='auth'>
            <div className='overflow-hidden col-span-3'>
                <Image
                    src={"/images/register.png"}
                    width={842}
                    height={800}
                    alt='forgot-password image background'
                    className='!w-full !h-full object-cover'
                />
            </div>
            <div className='flex justify-center px-[80px] py-[50px] col-span-2'>
                <div className='w-full'>
                    <BackNavigator />

                    <AuthForm forgotPassword />
                </div>
            </div>
        </section>
    )
}
