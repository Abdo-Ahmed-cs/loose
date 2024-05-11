import React from 'react'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Checkbox } from '../ui/checkbox'
import Link from 'next/link'

export default function AuthForm() {
    return (
        <div className='w-full max-w-[430px]'>
            <div className='mb-8'>
                <h1 className='text-n-100 text-4xl font-bold mb-3 capitalize'>hi there!</h1>
                <p className='text-n-100 text-lg font-medium'>Welcome back to Loose dashboard</p>
            </div>
            <form className='w-full'>
                <div className='w-full'>
                    <Label className='text-n-80 block text-sm font-semibold capitalize mb-[0.38rem]' htmlFor='email-input'>Email</Label>
                    <Input type='text' id='email-input' placeholder='Enter your email' className='mb-[1.5rem] text-n-80 rounded-[0.5rem] py-[13px] px-[14px] bg-n-20 text-base' />
                    <Label className='text-n-80 block text-sm font-semibold capitalize mb-[0.38rem]' htmlFor='password-input'>Password</Label>
                    <Input type='password' id='password-input' placeholder='Enter your password' className='mb-4 text-n-80 rounded-[0.5rem] py-[13px] px-[14px] bg-n-20 text-base' />
                </div>
                <div className='w-full flex justify-between items-center mb-8'>
                    <div className='flex items-center gap-[6px]'>
                        <Checkbox className='checked:bg-primary-main' id='remember-me' />
                        <Label className='text-base text-n-80' htmlFor='remember-me'>Remeber Me</Label>
                    </div>
                    <Link href={"/forgot-password"} className='text-n-100 text-sm font-semibold underline underline-offset-[5px]'>Forgot password?</Link>
                </div>
                <button className='w-full py-4 bg-primary-main rounded-xl text-base text-n-10 font-semibold'>Log in</button>
            </form>
        </div>
    )
}
