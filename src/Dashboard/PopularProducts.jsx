import React from 'react';
import { Link } from "react-router-dom";


const popularProductsData = [
  {
    product_id: 1,
    product_name: 'Apple Earbuds Pro',
    product_thumbnail: '',
    product_price: '$299.99',
    product_stock: 453
  },
  {
    product_id: 2,
    product_name: 'Samsung Galaxy Buds',
    product_thumbnail: '',
    product_price: '$149.99',
    product_stock: 300
  },
  {
    product_id: 3,
    product_name: 'Sony WH-1000XM4',
    product_thumbnail: '',
    product_price: '$349.99',
    product_stock: 0
  },
  {
    product_id: 4,
    product_name: 'Bose QuietComfort 35 II',
    product_thumbnail: '',
    product_price: '$299.00',
    product_stock: 200
  },
  {
    product_id: 5,
    product_name: 'Beats Studio3 Wireless',
    product_thumbnail: '',
    product_price: '$349.95',
    product_stock: 150
  },
  {
    product_id: 6,
    product_name: 'Jabra Elite 75t',
    product_thumbnail: '',
    product_price: '$179.99',
    product_stock: 220
  },
  {
    product_id: 7,
    product_name: 'Sennheiser Momentum 3',
    product_thumbnail: '',
    product_price: '$399.95',
    product_stock: 80
  },
  {
    product_id: 8,
    product_name: 'Anker Soundcore Liberty Air 2',
    product_thumbnail: '',
    product_price: '$99.99',
    product_stock: 500
  },
  {
    product_id: 9,
    product_name: 'Skullcandy Crusher Evo',
    product_thumbnail: '',
    product_price: '$199.99',
    product_stock: 350
  },
  {
    product_id: 10,
    product_name: 'Apple AirPods Max',
    product_thumbnail: '',
    product_price: '$549.00',
    product_stock: 22
  }
];


export default function PopularProducts() {
  return (
    <div className='bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 w-[20rem]'>
        <strong className='text-gray-700 font-medium'>Popular Products</strong>
        <div className='flex flex-col gap-3 mt-2'>
          {popularProductsData.slice(0, 5).map( (product) => (
            <Link key={product.product_id} to={`/product/${product.product_id}`} className='flex hover:no-underline'>
              <div className='w-10 h-10 bg-gray-200 rounded-sm overflow-hidden'>
                <img className='object-cover w-full h-full' src={product.product_thumbnail} />
              </div>
              <div className='ml-4 flex-1'>
                <p className='text-sm text-gray-800'>{product.product_name}</p>
                <span 
                  className={`text-sm font-medium ${
                    product.product_stock === 0 ? 'text-orange-500' : 'text-green-500'
                  }`}>
                    {product.product_stock === 0 ? 'Out of stock' : product.product_stock + ' in stock'}
                  </span>
              </div>
              <div className='text-xs text-gray-400 pl-2'>{product.product_price}</div>
            </Link>
          ) )}
        </div>
    </div>
  )
}
