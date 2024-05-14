"use client"
import React, { useState } from 'react'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Checkbox } from '../ui/checkbox'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

type AuthFormProps = {
    login?: boolean,
    forgotPassword?: boolean,
    verifyPassword?: boolean,
    resetPassword?: boolean
}

export default function AuthForm({ login, forgotPassword, verifyPassword, resetPassword }: AuthFormProps) {
    const router = useRouter()
    const [reseted, setReseted] = useState(false)
    return (
        <div className='w-full max-w-[430px]'>
            {login &&
                <>
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
                            <Link href={"/auth/forgot-password"} className='text-n-100 text-sm font-semibold underline underline-offset-[5px]'>Forgot password?</Link>
                        </div>
                        <button className='w-full py-4 bg-primary-main rounded-xl text-base text-n-10 font-semibold capitalize'>Log in</button>
                    </form>
                </>}

            {verifyPassword &&
                <>
                    <div className='mb-[9.12rem]'>
                        <h1 className='text-n-100 text-4xl font-bold mb-3 capitalize'>Verify your email</h1>
                        <p className='text-n-50 text-base font-medium'>Hi Samanta! Use the link below to verify your email.</p>
                    </div>
                    <form className='w-full flex flex-col items-center gap-8'>
                        <button className='w-full py-4 bg-primary-main rounded-xl text-base text-n-10 font-semibold capitalize'>verify email</button>
                        <span className='text-base text-n-80 font-normal cursor-pointer'>Didn’t receive the email? <span className='text-n-100 font-medium underline underline-offset-4'>Click to resend</span></span>
                    </form>
                </>}

            {forgotPassword &&
                <>
                    <div className='mb-8'>
                        <h1 className='text-n-100 text-4xl font-bold mb-3 capitalize'>Forgot password?</h1>
                        <p className='text-n-50 text-base font-medium'>No worries, we’ll send you reset instruction.</p>
                    </div>
                    <div className='w-full mb-10'>
                        <Label className='text-n-80 block text-sm font-semibold capitalize mb-[0.38rem]' htmlFor='email-verify'>Email</Label>
                        <Input type='text' id='email-verify' placeholder='Enter your email' className='mb-4 text-n-80 rounded-[0.5rem] py-[13px] px-[14px] bg-n-10 border-[1px] border-n-20 text-base' />
                    </div>
                    <form className='w-full flex flex-col items-center gap-8'>
                        <button type='button' className='w-full py-4 bg-primary-main rounded-xl text-base text-n-10 font-semibold capitalize' onClick={() => router.push("/auth/reset-password")}>reset password</button>
                    </form>
                </>}

            {resetPassword &&
                (reseted === false ?
                    (<>
                        <div className='mb-8'>
                            <h1 className='text-n-100 text-4xl font-bold mb-3 capitalize'>Set new password</h1>
                            <p className='text-n-50 text-base font-medium'>Your new password must be different to previously used passwords.</p>
                        </div>
                        <div className='w-full mb-10'>
                            <Label className='text-n-80 block text-sm font-semibold capitalize mb-[0.38rem]' htmlFor='password-reset'>password</Label>
                            <Input type='text' id='password-reset' placeholder='New password' className='mb-4 text-n-80 rounded-[0.5rem] py-[13px] px-[14px] bg-n-10 border-[1px] border-n-20 text-base' />
                            <Label className='text-n-80 block text-sm font-semibold capitalize mb-[0.38rem]' htmlFor='confirm-reset'>confirm password</Label>
                            <Input type='text' id='confirm-reset' placeholder='Confirm new password' className='mb-4 text-n-80 rounded-[0.5rem] py-[13px] px-[14px] bg-n-10 border-[1px] border-n-20 text-base' />
                        </div>
                        <form className='w-full flex flex-col items-center gap-8'>
                            <button type='button' className='w-full py-4 bg-primary-main rounded-xl text-base text-n-10 font-semibold capitalize' onClick={() => setReseted((prev) => !prev)}>reset password</button>
                        </form>
                    </>)
                    :
                    (<>
                        <div className='w-[94px] aspect-square rounded-full bg-n-70 flex justify-center items-center mx-auto mb-6'>
                            <div className='w-[64px] aspect-square rounded-full bg-primary-main bg-opacity-30 flex justify-center items-center'>
                                <Image
                                    src={"/icons/check.svg"}
                                    width={40}
                                    height={40}
                                    alt='check icon'
                                />
                            </div>
                        </div>
                        <div className='mb-10'>
                            <h1 className='text-n-100 text-4xl font-bold mb-3 capitalize text-center'>password reset was successful</h1>
                            <p className='text-n-50 text-base font-medium text-center'>Your password has been successfully reset. Click bellow to log in magically.</p>
                        </div>
                        <button className='w-full py-4 bg-primary-main rounded-xl text-base text-n-10 font-semibold capitalize' onClick={() => router.replace("/auth/login")}>log in</button>
                    </>))
            }
        </div>
    )
}
