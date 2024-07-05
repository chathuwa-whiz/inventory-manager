import React from 'react'
import DashboardStatsGrid from './DashboardStatsGrid'
import TransactionChart from './TransactionChart'
import BuyerProfileChart from './BuyerProfileChart'

export default function Dashboard() {
  return (
    <div>
        <DashboardStatsGrid />
        <div className='flex gap-4'>
          <TransactionChart />
          <BuyerProfileChart />
        </div>
    </div>
  )
}
