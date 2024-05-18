import { Input } from '@/components/ui/input'
import React from 'react'

export default function page() {
    return (
        <section className='w-full h-full'>
            <h1 className='text-2xl font-semibold text-n-100 capitalize mb-6'>settings</h1>
            <div className='w-full rounded-[10px] bg-white p-6'>
                <div className='flex items-center gap-3 mb-10'>
                    <div className='w-[8px] h-[24px] bg-n-100 rounded-[10px]'></div>
                    <span className='text-xl font-semibold text-n-100 capitalize'>manage profile</span>
                </div>

                <form action="" className='w-full h-full'>
                    <div className='w-full flex gap-[112px] mb-[56px]'>
                        <div className='w-[257px]'>
                            <span className='text-base text-n-100 mb-2 font-semibold capitalize'>avatar</span>
                            <p className='text-sm text-n-50 font-normal'>Only *.png, *.jpg and *.jpeg image files are accepted</p>
                        </div>
                        <div className='w-[132px] aspect-square rounded-[10px] bg-n-50'></div>
                    </div>

                    <div className='w-full flex gap-[112px] mb-[74px]'>
                        <div className='w-[257px]'>
                            <span className='text-base text-n-100 font-semibold capitalize'>name</span>
                        </div>
                        <Input type='text' id='username' placeholder='User name' className='mb-4 w-full text-n-80 rounded-[0.5rem] py-[13px] px-[14px] bg-n-10 border-[2px] border-n-30 text-base' />
                    </div>

                    <div className='w-full flex gap-[112px] mb-[56px]'>
                        <div className='w-[257px]'>
                            <span className='text-base text-n-100 font-semibold capitalize'>phone number</span>
                        </div>
                        <Input type='number' id='phone number' placeholder='Phone number' className='mb-4 w-full text-n-80 rounded-[0.5rem] py-[13px] px-[14px] bg-n-10 border-[2px] border-n-30 text-base' />
                    </div>
                </form>
            </div>

            <div className='w-full rounded-[10px] bg-white p-6 mt-6'>
                <div className='flex items-center gap-3 mb-10'>
                    <div className='w-[8px] h-[24px] bg-n-100 rounded-[10px]'></div>
                    <span className='text-xl font-semibold text-n-100 capitalize'>manage account</span>
                </div>

                <form action="" className='w-full h-full flex flex-col gap-8'>
                    <div className='flex justify-between items-center'>
                        <span className='text-sm text-n-50 font-medium uppercase'>email</span>
                        <span className='inline-block max-w-[300px] w-full'>example@provider.host</span>
                        <div className='py-2 px-3 border-[1px] border-primary-main text-primary-main text-base font-semibold rounded-[10px] capitalize opacity-0'>change email</div>
                    </div>
                    <div className='flex justify-between items-center'>
                        <span className='text-sm text-n-50 font-medium uppercase'>password</span>
                        <span className='inline-block max-w-[300px] w-full text-left'>***********</span>
                        <button type='button' className='py-2 px-3 border-[1px] border-primary-main text-primary-main text-base font-semibold rounded-[10px] capitalize'>change password</button>
                    </div>
                    <div className='flex justify-between items-center'>
                        <span className='text-sm text-n-50 font-medium uppercase'>log out</span>
                        <button type='button' className='py-2 px-3 border-[1px] border-primary-main bg-primary-main text-n-10 text-base font-semibold rounded-[10px] capitalize'>log out</button>
                    </div>
                </form>
            </div>
        </section>
    )
}
