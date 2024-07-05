import React from 'react'

const recentOrderData = [
    {
        id: 1,
        product_id: '4324',
        customer_id: '2341',
        customer_name: 'Saman Kumara',
        order_date: '2024-05-20T03:24:00',
        order_total: '$456.00',
        current_order_status: 'placed',
        shipment_address: '12 B Alubovila Delgoda'
    },
    {
        id: 2,
        product_id: '5643',
        customer_id: '1234',
        customer_name: 'Ravi Perera',
        order_date: '2024-05-22T11:15:00',
        order_total: '$230.50',
        current_order_status: 'shipped',
        shipment_address: '34 A Dehiwala Colombo'
    },
    {
        id: 3,
        product_id: '3456',
        customer_id: '5678',
        customer_name: 'Mala Wijesinghe',
        order_date: '2024-05-23T14:30:00',
        order_total: '$125.75',
        current_order_status: 'delivered',
        shipment_address: '45 C Kandy Road Kandy'
    },
    {
        id: 4,
        product_id: '7890',
        customer_id: '9101',
        customer_name: 'Nimal Silva',
        order_date: '2024-05-24T09:45:00',
        order_total: '$78.99',
        current_order_status: 'placed',
        shipment_address: '56 D Galle Road Galle'
    },
    {
        id: 5,
        product_id: '6789',
        customer_id: '1121',
        customer_name: 'Sunil Jayasinghe',
        order_date: '2024-05-25T16:00:00',
        order_total: '$305.20',
        current_order_status: 'shipped',
        shipment_address: '78 E Havelock Town Colombo'
    },
    {
        id: 6,
        product_id: '8901',
        customer_id: '3141',
        customer_name: 'Kamal Fernando',
        order_date: '2024-05-26T12:00:00',
        order_total: '$99.99',
        current_order_status: 'delivered',
        shipment_address: '12 F Mount Lavinia Colombo'
    },
    {
        id: 7,
        product_id: '9012',
        customer_id: '5161',
        customer_name: 'Aruna De Silva',
        order_date: '2024-05-27T15:30:00',
        order_total: '$150.00',
        current_order_status: 'placed',
        shipment_address: '34 G Negombo Road Negombo'
    },
    {
        id: 8,
        product_id: '1234',
        customer_id: '7181',
        customer_name: 'Lakshmi Rajapaksha',
        order_date: '2024-05-28T10:15:00',
        order_total: '$200.00',
        current_order_status: 'shipped',
        shipment_address: '56 H Maharagama Colombo'
    },
    {
        id: 9,
        product_id: '2345',
        customer_id: '9201',
        customer_name: 'Niroshan Senanayake',
        order_date: '2024-05-29T13:45:00',
        order_total: '$400.75',
        current_order_status: 'delivered',
        shipment_address: '78 I Battaramulla Colombo'
    },
    {
        id: 10,
        product_id: '3456',
        customer_id: '1232',
        customer_name: 'Sujith Perera',
        order_date: '2024-05-30T08:00:00',
        order_total: '$175.50',
        current_order_status: 'placed',
        shipment_address: '90 J Kurunegala Road Kurunegala'
    }
];


export default function RecentOrders() {
  return (
    <div className='bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1'>
        <strong className='text-gray-700 font-medium'>Recent Orders</strong>
        <table className='w-full'>
            <thead>
                <tr className='text font-medium text-green-700 bg-gray-100'>
                    <td>ID</td>
                    <td>Product ID</td>
                    <td>Customer Name</td>
                    <td>Order Date</td>
                    <td>Order Total</td>
                    <td>Shipping Address</td>
                    <td>Order Status</td>
                </tr>
            </thead>
            <tbody>
                {recentOrderData.map( (order) => (
                    <tr key={order.id}>
                        <td>#{order.id}</td>
                        <td>{order.product_id}</td>
                        <td>{order.customer_name}</td>
                        <td>{order.order_date}</td>
                        <td>{order.order_total}</td>
                        <td>{order.shipment_address}</td>
                        <td>{order.current_order_status}</td>
                    </tr>
                ) )}
            </tbody>
        </table>
    </div>
  )
}
