import React from 'react';
import { countryList } from "../Shared/utils";

export default function CreateSupplier() {
  return (
    <div>
        <div className='bg-gray-200 p-4 rounded-lg w-1/2'>
            
            <form>
                <div>
                    <label for="supplierName" className="block mb-2 text-sm font-medium text-gray-900">Supplier Name</label>
                    <input type="text" id="supplierName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="First Name and Last Name" required />
                </div>
                <div>
                    <label for="supplierEmail" className="block mb-2 text-sm font-medium text-gray-900">Supplier Email</label>
                    <input type="email" id="supplierEmail" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="someone@gmail.com" required />
                </div>
                <div>
                    <label for="supplierPhone" className="block mb-2 text-sm font-medium text-gray-900">Supplier Phone</label>
                    <input type="tel" id="supplierPhone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="07xxxxxxxx" required />
                </div>
                <div>
                    <label for="supplierAddress" className="block mb-2 text-sm font-medium text-gray-900">Supplier Address</label>
                    <div className='flex gap-2'>
                        <input type="text" id="supplierAddress" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Address Line 1" />
                        <input type="text" id="supplierAddress" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="City" />
                        <input type="text" id="supplierAddress" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="State" />
                    </div>
                        <select className="bg-gray-50 border mt-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            <option>Country</option>
                            {
                                countryList.map((country,index) => (
                                    <option key={index}>{country}</option>
                                ))
                            }
                        </select>
                </div>
                
                <button type="submit" className="text-white mt-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
            </form>

        </div>
    </div>
  )
}
