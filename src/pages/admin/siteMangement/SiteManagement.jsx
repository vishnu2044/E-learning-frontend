import React from 'react'
import ManagemenetComponents from '../../../components/admin/siteManagement/ManagemenetComponents'
import { Outlet } from 'react-router-dom'

const SiteManagement = () => {
  return (
    <div>
        <Outlet />

    </div>
  )
}

export default SiteManagement