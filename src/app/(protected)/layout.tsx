// app/layout.tsx
"use client"
import React, { useRef } from 'react'
import Header from '@/containers/header'
import LeftSidebar from '@/containers/left-sidebar'
import Footer from '@/containers/footer'



interface LayoutProps {
  children: React.ReactNode
  params: { workspaceSlug: string }
}

export default function ProtectedLayout({ children, params }: LayoutProps) {

  const mainContentRef = useRef(null);


  return (
    <>
    <div className="drawer lg:drawer-open">
            <input id="left-sidebar-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col ">
            <Header contentRef={mainContentRef}/>
            <main className="flex-1 overflow-y-auto md:pt-4 pt-4 px-6  bg-base-200" ref={mainContentRef}>
                {children}
                <div className="h-16"></div>
            </main>
            <Footer />
        </div> 
            <LeftSidebar />

          </div>
       
    </>
  )
}