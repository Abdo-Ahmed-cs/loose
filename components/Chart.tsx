"use client"
import React from 'react'
import { AreaChart, Area, YAxis, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

export default function Chart() {
    const productSales = [
        {
            name: '1 - 10 Aug',
            product1: 4000,
            product2: 2400,
        },
        {
            name: '11 - 20 Aug',
            product1: 3000,
            product2: 2210,
        },
        {
            name: '21 - 30 Aug',
            product1: 2000,
            product2: 2290,
        },
        {
            name: '1 - 10 Nov',
            product1: 2780,
            product2: 2000,
        },
        {
            name: 'May',
            product1: 1890,
            product2: 2181,
        },
    ];
    return (
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart
                width={600}
                height={400}
                data={productSales}
                margin={{ bottom: 70 }}
            >
                <YAxis />
                <XAxis dataKey="name" />
                <CartesianGrid strokeDasharray="5 5" />

                <Tooltip content={<CustomTooltip />} />
                <Legend />

                <Area
                    type="monotone"
                    dataKey="product1"
                    stroke="#2563eb"
                    fill="#3b82f6"
                    stackId="1"
                />

                <Area
                    type="monotone"
                    dataKey="product2"
                    stroke="#7c3aed"
                    fill="#8b5cf6"
                    stackId="1"
                />
            </AreaChart>
        </ResponsiveContainer>
    )
}

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="p-4 bg-n-100 flex flex-col gap-4 rounded-md">
                <p className="text-medium text-lg text-n-10">{label}</p>
                <p className="text-sm text-blue-400">
                    Product 1:
                    <span className="ml-2">${payload[0].value}</span>
                </p>
                <p className="text-sm text-indigo-400">
                    Product 2:
                    <span className="ml-2">${payload[1].value}</span>
                </p>
            </div>
        );
    }
};
