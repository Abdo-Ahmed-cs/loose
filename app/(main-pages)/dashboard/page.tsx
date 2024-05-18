import React from 'react'
import AreaChartComponent from "@/components/Chart"

export default function page() {
    return (
        <section className='w-full h-full'>
            {/* statistics */}
            <div className='grid grid-cols-3 grid-rows-1 gap-5 h-[152px] mb-5'>
                <div className='bg-white rounded-[10px] py-6 px-8 flex flex-col gap-5'>
                    <span className='text-base text-n-60 font-medium uppercase'>total sales</span>
                    <span className='text-4xl text-n-100 font-bold'>643,823</span>
                </div>
                <div className='bg-white rounded-[10px] py-6 px-8 flex flex-col gap-5'>
                    <span className='text-base text-n-60 font-medium uppercase'>total users</span>
                    <span className='text-4xl text-n-100 font-bold'>142,937</span>
                </div>
                <div className='bg-white rounded-[10px] py-6 px-8 flex flex-col gap-5'>
                    <span className='text-base text-n-60 font-medium uppercase'>total products</span>
                    <span className='text-4xl text-n-100 font-bold'>120</span>
                </div>
            </div>

            <div className='flex items-start gap-5'>
                <div className='p-6 bg-white rounded-[10px] w-full h-[500px]'>
                    <div className='flex items-center gap-3 mb-10 ml-3'>
                        <div className='w-[8px] h-[24px] bg-n-100 rounded-[10px]'></div>
                        <span className='text-xl font-semibold text-n-100 capitalize'>Top Product</span>
                    </div>
                    <AreaChartComponent />
                </div>
                {/* top products */}
                <div className='p-6 bg-white rounded-[10px] w-[530px]'>
                    <div className='flex items-center gap-3 mb-7'>
                        <div className='w-[8px] h-[24px] bg-n-100 rounded-[10px]'></div>
                        <span className='text-xl font-semibold text-n-100 capitalize'>Top Product</span>
                    </div>

                    <div className='flex justify-between items-center px-3 py-4'>
                        <span className='text-n-50 text-sm font-medium uppercase'>product</span>
                        <span className='text-n-50 text-sm font-medium uppercase inline-block w-[80px] text-left'>sold</span>
                    </div>

                    <div className='flex flex-col'>
                        <div className='flex items-center px-3 py-5 border-b-[1px] border-n-30'>
                            <div className='w-[60px] aspect-square rounded-[10px] bg-n-60'></div>
                            <span className='text-n-100 text-base font-medium max-w-[123px] inline-block ml-3'>T-Men's UA Storm Armour Down 2.0 Jacket</span>
                            <span className='text-n-100 text-base font-medium w-[80px] text-left inline-block ml-auto'>20</span>
                        </div>
                        <div className='flex items-center px-3 py-5 border-b-[1px] border-n-30'>
                            <div className='w-[60px] aspect-square rounded-[10px] bg-n-60'></div>
                            <span className='text-n-100 text-base font-medium max-w-[123px] inline-block ml-3'>T-Men's UA Storm Armour Down 2.0 Jacket</span>
                            <span className='text-n-100 text-base font-medium w-[80px] text-left inline-block ml-auto'>20</span>
                        </div>
                        <div className='flex items-center px-3 py-5 border-b-[1px] border-n-30'>
                            <div className='w-[60px] aspect-square rounded-[10px] bg-n-60'></div>
                            <span className='text-n-100 text-base font-medium max-w-[123px] inline-block ml-3'>T-Men's UA Storm Armour Down 2.0 Jacket</span>
                            <span className='text-n-100 text-base font-medium w-[80px] text-left inline-block ml-auto'>20</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
