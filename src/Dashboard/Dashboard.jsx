import React from 'react'
import DashboardStatsGrid from './DashboardStatsGrid'
import TransactionChart from './TransactionChart'
import BuyerProfileChart from './BuyerProfileChart'
import RecentOrders from './RecentOrders'
import PopularProducts from './PopularProducts'

export default function Dashboard() {
  return (
    <div>
        <DashboardStatsGrid />
        <div className='flex gap-4'>
          <TransactionChart />
          <BuyerProfileChart />
        </div>
        <div className='flex gap-4'>
          <RecentOrders />
          <PopularProducts />
        </div>
    </div>
  )
}
