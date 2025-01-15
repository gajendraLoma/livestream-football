// app/(public)/layout.tsx
'use client'
import { useRef } from 'react'
import { useRouter, usePathname } from 'next/navigation'



export default function PublicLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const mainContentRef = useRef(null);
  return <>
    <div className="drawer">
              <input id="left-sidebar-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content flex flex-col ">
              <main className="flex-1 overflow-y-auto  " ref={mainContentRef}>
                  {children}
                  <div className="h-16"></div>
              </main>
              </div>
          </div>
      </>
}