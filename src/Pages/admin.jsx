import React from 'react'
import '../Components/admin/admin.css'
import Dashboard from '../Components/admin/dashboard'
import Navbar from '../Components/navbar/Navbar'
import Sidebar from '../Components/admin/sidebar'
import Adminheader from '../Components/admin/adminheader'
import { SidebarContextProvider } from '../context/Sidebarcontext'
import { createContext } from 'react'
import { useState } from 'react'

export const SidebarContext = createContext()

function AdminPanel() {
      const [togglesidebar, settoggle] = useState(true)
    
    return (
        <>
            <SidebarContext.Provider value={togglesidebar}>
                <Adminheader click={togglesidebar} setclick={settoggle}/>
                <Sidebar click={togglesidebar}/>
                <Dashboard click={togglesidebar}/>
            </SidebarContext.Provider>
        </>
    )
}

export default AdminPanel