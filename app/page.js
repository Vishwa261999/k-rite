import DataTableDemo from '@/components/Table'
import Sidebar from '@/components/sideBar'
import React from 'react'

const page = () => {
  return (
    <div className='flex w-full overflow-x-scroll'>
      <Sidebar />
      <DataTableDemo />
    </div>
  )
}

export default page
