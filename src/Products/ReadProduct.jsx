import React, { useEffect, useState } from 'react';
import { DATA } from "../Shared/utils";
import { Link } from "react-router-dom";

export default function ReadProduct() {

    const [products, setProducts] = useState([]);
    const [isExpanded, setIsExpanded] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("All Categories");
    const [searchInput, setSearchInput] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);

    // get category names
    const categories = [];

    DATA.map(category => (
        categories.push(category.name)
    ))

    // Function to get limited products
    const getLimitedProducts = () => {
        const limitedProducts = [];
        DATA.forEach(product => {
            product.suppliers.slice(0, 1).forEach(supplier => {
                supplier.products.slice(0, 1).forEach(p => {
                    limitedProducts.push(p);
                });
            });
        });
        return limitedProducts;
    };

    // Function to get all products
    const getAllProducts = () => {
        const allProducts = [];
        DATA.forEach(product => {
            product.suppliers.forEach(supplier => {
                supplier.products.forEach(p => {
                    allProducts.push(p);
                });
            });
        });
        return allProducts;
    };

    // Initialize with limited products
    useEffect(() => {
        setProducts(getLimitedProducts());
    }, []);

    // Update filtered products when products, selectedCategory, or searchInput changes
    useEffect(() => {
        let filtered = products;
        if (selectedCategory !== "All Categories") {
            filtered = filtered.filter(product => product.category === selectedCategory);
        }
        if (searchInput) {
            filtered = filtered.filter(product => product.name.toLowerCase().includes(searchInput.toLowerCase()));
        }
        setFilteredProducts(filtered);
    }, [products, selectedCategory, searchInput]);

    // Handler to toggle product view
    const toggleProductsView = () => {
        if (isExpanded) {
            setProducts(getLimitedProducts());
        } else {
            setProducts(getAllProducts());
        }
        setIsExpanded(!isExpanded);
    };

  return (
    <div>
        {/* search bar */}
        <div className='mt-5'>
            <form className="max-w-lg mx-auto">
                <div className="flex">
                    <select 
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        value={selectedCategory}
                        className='flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200'>
                        <option>All Categories</option>
                        {
                            categories.map((category, index) => (
                                <option key={index}>{category}</option>
                            ))
                        }
                    </select>
                    <div className="relative w-full">
                        <input 
                            onChange={(e) => setSearchInput(e.target.value)}
                            value={searchInput}
                            type="search" 
                            id="search-dropdown" 
                            className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 " 
                            placeholder="Search by Product Name" required />
                        <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                            <span className="sr-only">Search</span>
                        </button>
                    </div>
                </div>
            </form>
        </div>
        
        {/* product table */}
        <div class="relative overflow-x-auto mt-4">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            ID
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Product name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Category
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Buying Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Selling Price
                        </th>
                        <th scope='col' className='px-6 py-3'>
                            Quantity
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Date
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        filteredProducts.map(product => (
                            <tr class="bg-white border-b">
                                <td className="px-6 py-4">
                                    {product.id}
                                </td>
                                <td className="px-6 py-4">
                                    {product.name}
                                </td>
                                <td className="px-6 py-4">
                                    {product.category}
                                </td>
                                <td className="px-6 py-4">
                                    {product.buyingPrice}
                                </td>
                                <td className="px-6 py-4">
                                    {product.sellingPrice}
                                </td>
                                <td className="px-6 py-4">
                                    {product.quantity}
                                </td>
                                <td className="px-6 py-4">
                                    {product.date}
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
            <button onClick={toggleProductsView} className='text-blue-600 font-bold mt-4'>{isExpanded ? 'Collapse' : 'Show All'}</button>
        </div>

    </div>
  )
}
