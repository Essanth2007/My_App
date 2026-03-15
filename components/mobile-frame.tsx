"use client"

import type { ReactNode } from "react"

interface MobileFrameProps {
  children: ReactNode
}

export function MobileFrame({ children }: MobileFrameProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/50 p-4">
      <div className="relative mx-auto h-[812px] w-[375px] overflow-hidden rounded-[3rem] border-[14px] border-foreground/90 bg-background shadow-2xl">
        {/* Notch */}
        <div className="absolute left-1/2 top-0 z-50 h-7 w-36 -translate-x-1/2 rounded-b-2xl bg-foreground/90" />
        
        {/* Screen Content */}
        <div className="h-full w-full overflow-y-auto pt-8">
          {children}
        </div>
        
        {/* Home Indicator */}
        <div className="absolute bottom-2 left-1/2 h-1 w-32 -translate-x-1/2 rounded-full bg-foreground/30" />
      </div>
    </div>
  )
}
