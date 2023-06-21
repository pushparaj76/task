import React from 'react'
import { Header } from './Header'
import { Middle } from './Middle'
import { Sidebar } from './Sidebar'

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="main-content">
        <Sidebar />
        {children}
      </div>

    </>
  )
}
