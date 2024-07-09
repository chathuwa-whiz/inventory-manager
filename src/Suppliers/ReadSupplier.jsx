import React from 'react';
import { DATA } from '../Shared/utils';

export default function ReadSupplier() {

    const suppliers = [];
    
    // get suppliers
    DATA.map((supplier) => (
        supplier.suppliers.map(s => {
            suppliers.push(s);
        
        })
    ));

  return (
    <div>
        {/* supplier table */}
        <div class="relative overflow-x-auto mt-4">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            ID
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Email
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Phone
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Address
                        </th>
                        <th scope='col' className='px-6 py-3'>
                            Products
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        suppliers.map(supplier => (
                            <tr class="bg-white border-b">
                                <td className="px-6 py-4">
                                    {supplier.id}
                                </td>
                                <td className="px-6 py-4">
                                    {supplier.name}
                                </td>
                                <td className="px-6 py-4">
                                    {supplier.email}
                                </td>
                                <td className="px-6 py-4">
                                    {supplier.phone}
                                </td>
                                <td className="px-6 py-4">
                                    {supplier.address}
                                </td>
                                <td className="px-6 py-4">
                                    {
                                        supplier.products.map((product, index) => (
                                            <div key={index}>{product.name}</div>
                                        ))
                                    }
                                </td>
                                <td className="px-6 py-4">
                                    <button className="text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-xs p-3 mr-2 text-center">Update</button>
                                    <button className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs p-3 text-center">Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                    
                </tbody>
            </table>
        </div>
    </div>
  )
}
