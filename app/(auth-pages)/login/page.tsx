import AuthForm from '@/components/forms/AuthForm'
import Image from 'next/image'
import React from 'react'

export default function page() {
    return (
        <section className='log-in'>
            <div className='overflow-hidden'>
                <Image
                    src={"/images/login.png"}
                    width={842}
                    height={900}
                    alt='login image background'
                    className='!w-full !h-full object-cover'
                />
            </div>
            <div className='flex justify-center items-center'>
                <div>
                    <Image
                        src={"/icons/logo.svg"}
                        width={147}
                        height={42}
                        alt='loose logo image'
                    />

                    <AuthForm />
                </div>
            </div>
        </section>
    )
}
