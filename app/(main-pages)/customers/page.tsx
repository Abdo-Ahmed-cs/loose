import { DataTable } from '@/components/Tables/CustomersTable'
import { Customer, columns } from '@/components/Tables/customersColumns'
import React from 'react'

export default function page() {
    const data: Customer = [
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
    return (
        <section className="w-full h-screen bg-white p-6 rounded-[10px]">
            <div className='flex items-center gap-3 mb-8'>
                <div className='w-[8px] h-[24px] bg-n-100 rounded-[10px]'></div>
                <span className='text-xl font-semibold text-n-100 capitalize'>users</span>
            </div>
            <DataTable columns={columns} data={data} />
        </section>
    )
}
