import { Legend } from '@headlessui/react';
import React from 'react';
import { BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, Bar } from "recharts";

const data = [
    {
        name: 'Jan',
        Expense: 4000,
        Income: 2400
    },
    {
        name: 'Feb',
        Expense: 3000,
        Income: 1344
    },
    {
        name: 'Mar',
        Expense: 2000,
        Income: 4322
    },
    {
        name: 'Apr',
        Expense: 4333,
        Income: 2345
    },
    {
        name: 'May',
        Expense: 2342,
        Income: 3443
    },
    {
        name: 'Jun',
        Expense: 4000,
        Income: 2400
    },
    {
        name: 'Jul',
        Expense: 4000,
        Income: 2400
    },
    {
        name: 'Aug',
        Expense: 4000,
        Income: 2400
    },
    {
        name: 'Sep',
        Expense: 4000,
        Income: 2400
    },
    {
        name: 'Oct',
        Expense: 4000,
        Income: 2400
    },
    {
        name: 'Nov',
        Expense: 4000,
        Income: 2400
    },
    {
        name: 'Dec',
        Expense: 4000,
        Income: 2400
    },
];

export default function TransactionChart() {
  return (
    <div className='h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1 mb-4'>
        <strong className='text-gray-700 font-medium'>Transactions</strong>
        <div className='w-full mt-3 flex-1 text-xs'>
            <ResponsiveContainer width={'100%'} height={'100%'}>
                <BarChart width={500} height={300} data={data} margin={{ top: 20, right: 10, left: 10, bottom: 0 }}>
                    <CartesianGrid strokeDasharray={'3 3 0 0'} vertical={false} />
                    <XAxis dataKey={'name'} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Expense" fill="#8884d8" />
                    <Bar dataKey="Income" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    </div>
  )
}
