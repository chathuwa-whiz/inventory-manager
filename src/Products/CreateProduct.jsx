import React from 'react';
import { DATA } from "../Shared/utils";

export default function CreateProduct() {
  return (
    <div>

        <div className='bg-gray-200 p-4 rounded-lg w-1/2'>
            
            <form>
                <div>
                    <label for="productName" class="block mb-2 text-sm font-medium text-gray-900">Product Name</label>
                    <input type="text" id="productName" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Samsung Galaxy S21" required />
                </div>
                <div>
                    <label for="category" class="block mb-2 mt-2 text-sm font-medium text-gray-900">Select Category</label>
                    <select id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
                        <option selected>Choose a category</option>
                        {DATA.map(category => (
                            <option key={category.id} value={category.name}>{category.name}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label for="buyingPrice" class="block mb-2 mt-2 text-sm font-medium text-gray-900">Buying Price</label>
                    <input type="number" id="buyingPrice" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="120000" required />
                </div>
                <div>
                    <label for="sellingPrice" class="block mb-2 mt-2 text-sm font-medium text-gray-900">Selling Price</label>
                    <input type="number" id="sellingPrice" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="130000" required />
                </div>
                <div>
                    <label for="quantity" class="block mb-2 mt-2 text-sm font-medium text-gray-900">Quantity</label>
                    <input type="number" id="quantity" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="10" required />
                </div>

                <button type="submit" class="text-white mt-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
            </form>

        </div>

    </div>
  )
}
