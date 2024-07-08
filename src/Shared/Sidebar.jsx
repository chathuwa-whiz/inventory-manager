import React from 'react';
import { FcBullish, FcGrid, FcManager, FcPackage, FcPositiveDynamic, FcFilingCabinet } from "react-icons/fc";
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className='bg-neutral-900 w-60 p-3 flex flex-col text-white'>

        {/* Side Bar Title */}

        <div className='flex items-center gap-2 px-1 py-5'>
            <FcBullish fontSize={24 } />
            <span className='text-base text-gray-400'>INVENTORY MANAGER</span>
        </div>

        {/* Side Bar Links */}

        <Link to={'/'} className='flex items-center gap-4 px-1 py-3'>
            <FcGrid />
            <span className='text-neutral-100 text-base'>Dashboard</span>
        </Link>
        <Link to={'/products'} className='flex items-center gap-4 px-1 py-3'>
            <FcPackage />
            <span className='text-neutral-100 text-base'>Products</span>
        </Link>
        <Link to={'/stock'} className='flex items-center gap-4 px-1 py-3'>
            <FcPositiveDynamic />
            <span className='text-neutral-100 text-base'>Stock</span>
        </Link>
        <Link to={'/suppliers'} className='flex items-center gap-4 px-1 py-3'>
            <FcManager />
            <span className='text-neutral-100 text-base'>Suppliers</span>
        </Link>
        <Link to={'/category'} className='flex items-center gap-4 px-1 py-3'>
            <FcFilingCabinet />
            <span className='text-neutral-100 text-base'>Product Categories</span>
        </Link>

        {/* Side Bar Bottom */}

        <div className='flex-1'></div>
    </div>
  )
}
