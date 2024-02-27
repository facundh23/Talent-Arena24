import React from 'react'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <main className="flex flex-col m-2 w-vw ">
     
          <div className="flex flex-col flex-auto h-full p-1">
            <Outlet />
          </div>
      
    </main>
        
   
    
  )
}


