"use client"

import { useEffect, useState } from "react"
import { QrCode, Bluetooth } from "lucide-react"

interface SplashScreenProps {
  onComplete: () => void
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    setIsAnimating(true)
    const timer = setTimeout(() => {
      onComplete()
    }, 2500)
    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <div className="flex h-full flex-col items-center justify-center bg-primary px-6">
      <div
        className={`flex flex-col items-center transition-all duration-700 ${
          isAnimating ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        {/* Logo */}
        <div className="relative mb-8">
          <div className="flex h-28 w-28 items-center justify-center rounded-3xl bg-primary-foreground shadow-lg">
            <QrCode className="h-14 w-14 text-primary" strokeWidth={1.5} />
          </div>
          <div className="absolute -bottom-2 -right-2 flex h-10 w-10 items-center justify-center rounded-xl bg-primary-foreground shadow-md">
            <Bluetooth className="h-5 w-5 text-primary" />
          </div>
        </div>

        {/* Title */}
        <h1 className="mb-2 text-3xl font-bold tracking-tight text-primary-foreground">
          Smart Attendance
        </h1>

        {/* Subtitle */}
        <p className="text-base font-medium text-primary-foreground/80">
          QR + Bluetooth Verification
        </p>

        {/* Loading Indicator */}
        <div className="mt-12 flex items-center gap-2">
          <div className="h-2 w-2 animate-bounce rounded-full bg-primary-foreground/60 [animation-delay:-0.3s]" />
          <div className="h-2 w-2 animate-bounce rounded-full bg-primary-foreground/60 [animation-delay:-0.15s]" />
          <div className="h-2 w-2 animate-bounce rounded-full bg-primary-foreground/60" />
        </div>
      </div>
    </div>
  )
}
