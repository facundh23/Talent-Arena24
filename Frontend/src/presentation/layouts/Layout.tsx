import React from 'react'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <main className="flex flex-col m-2 w-vw ">
      <nav className="bg-indigo-600 flex px-2 py-2 justify-between mb-4 w-90% rounded-lg">
        <div>Logo</div>
        <div>Button</div>
      </nav>

      
          <div className="flex flex-col flex-auto h-full p-1">
            <Outlet />
          </div>
      
    </main>
        
   
    
  )
}


