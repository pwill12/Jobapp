import React, { useState, createContext } from 'react'


// export const UserContext = createContext<UserContextType | null>(null)
export const SidebarContext = createContext({})

export const SidebarContextProvider = ({children}) => {
  const [togglesidebar, settoggle] = useState(false)

  return (
    <SidebarContext.Provider value={{ togglesidebar, settoggle }}>
      {children}
    </SidebarContext.Provider>
  )
}
