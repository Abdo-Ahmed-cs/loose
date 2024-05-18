import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

export default function page({ params }: any) {
    const customerId = params.customerId
    const data = [
        {
            id: 1,
            name: "Samanta Legend",
            email_address: 'samanta@mail.com',
            complete_address: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
            create_at: "Sep 19, 2010",
            last_activity: "May 6, 2012",
            action: "details"
        },
        {
            id: 2,
            name: "Annette Black",
            email_address: 'annette1@mail.com',
            complete_address: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
            create_at: "Sep 19, 2010",
            last_activity: "May 6, 2012",
            action: "details"
        },
        {
            id: 3,
            name: "Annette Black",
            email_address: 'annette1@mail.com',
            complete_address: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
            create_at: "Sep 19, 2010",
            last_activity: "May 6, 2012",
            action: "details"
        },
        {
            id: 4,
            name: "Annette Black",
            email_address: 'annette1@mail.com',
            complete_address: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
            create_at: "Sep 19, 2010",
            last_activity: "May 6, 2012",
            action: "details"
        },
        {
            id: 5,
            name: "Annette Black",
            email_address: 'annette1@mail.com',
            complete_address: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
            create_at: "Sep 19, 2010",
            last_activity: "May 6, 2012",
            action: "details"
        },
        {
            id: 6,
            name: "Annette Black",
            email_address: 'annette1@mail.com',
            complete_address: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
            create_at: "Sep 19, 2010",
            last_activity: "May 6, 2012",
            action: "details"
        },
    ]
    const customer = data.find((item => toString(item.id) === toString(customerId)))
    console.log(customer);

    return (
        <section className='w-full h-full'>
            <h1 className='text-2xl font-semibold text-n-100 capitalize mb-6'>detail user</h1>
            <div className='w-full rounded-[10px] bg-white p-6'>
                <div className='flex items-center gap-3 mb-10'>
                    <div className='w-[8px] h-[24px] bg-n-100 rounded-[10px]'></div>
                    <span className='text-xl font-semibold text-n-100 capitalize'>user</span>
                </div>

                <div className='w-full grid grid-cols-2 grid-rows-2 gap-x-5 gap-y-8'>
                    <div className='w-full'>
                        <Label className='text-n-80 block text-sm font-semibold capitalize mb-[6px]' htmlFor='email-input'>Name</Label>
                        <Input type='text' readOnly value={customer?.name} id='user-name-input' className='text-n-80 rounded-[0.5rem] py-[13px] px-[14px] bg-n-10 border-[2px] border-n-30 text-base' />
                    </div>
                    <div className='w-full'>
                        <Label className='text-n-80 block text-sm font-semibold capitalize mb-[6px]' htmlFor='email-input'>Email Addres</Label>
                        <Input type='text' readOnly value={customer?.email_address} id='email-address-input' className='text-n-80 rounded-[0.5rem] py-[13px] px-[14px] bg-n-10 border-[2px] border-n-30 text-base' />
                    </div>
                    <div className='w-full'>
                        <Label className='text-n-80 block text-sm font-semibold capitalize mb-[6px]' htmlFor='email-input'>phone number</Label>
                        <Input type='number' readOnly value={8791238193} id='phone-number-input' className='text-n-80 rounded-[0.5rem] py-[13px] px-[14px] bg-n-10 border-[2px] border-n-30 text-base' />
                    </div>
                    <div className='w-full'>
                        <Label className='text-n-80 block text-sm font-semibold capitalize mb-[6px]' htmlFor='email-input'>complete address</Label>
                        <Input type='text' readOnly value={customer?.complete_address} id='complete-address-input' className='text-n-80 rounded-[0.5rem] py-[13px] px-[14px] bg-n-10 border-[2px] border-n-30 text-base' />
                    </div>
                </div>
            </div>
        </section>
    )
}
