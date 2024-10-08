import React from 'react'
import { DashboardMenu } from '../components/DashboardMenu'
import { Outlet } from 'react-router-dom'

export const DashboardLayout = () => {
  return (
    <div>
      <DashboardMenu />
      <div>
        <Outlet /> {/* Aquí se renderizan las páginas del dashboard */}
      </div>
    </div>
  )
}


