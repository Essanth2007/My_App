"use client"

import { useEffect, useState } from "react"
import { Bluetooth, Wifi, Check } from "lucide-react"

interface BluetoothScreenProps {
  onVerified: () => void
}

export function BluetoothScreen({ onVerified }: BluetoothScreenProps) {
  const [status, setStatus] = useState<"connecting" | "verifying" | "verified">("connecting")
  const [signalStrength, setSignalStrength] = useState(1)

  useEffect(() => {
    // Simulate connection process
    const timers: NodeJS.Timeout[] = []

    // Increment signal strength
    const signalTimer = setInterval(() => {
      setSignalStrength((prev) => {
        if (prev >= 4) {
          clearInterval(signalTimer)
          return 4
        }
        return prev + 1
      })
    }, 400)
    timers.push(signalTimer)

    // Change to verifying status
    timers.push(setTimeout(() => setStatus("verifying"), 1500))

    // Change to verified status
    timers.push(setTimeout(() => setStatus("verified"), 3000))

    // Proceed to success
    timers.push(setTimeout(() => onVerified(), 4000))

    return () => {
      timers.forEach(clearTimeout)
      clearInterval(signalTimer)
    }
  }, [onVerified])

  return (
    <div className="flex h-full flex-col items-center justify-center bg-background px-6">
      {/* Animated Bluetooth Icon */}
      <div className="relative mb-8">
        {/* Pulse rings */}
        <div className={`absolute inset-0 rounded-full ${
          status === "verified" ? "bg-success/20" : "bg-primary/20"
        } animate-ping`} style={{ animationDuration: "1.5s" }} />
        <div className={`absolute -inset-4 rounded-full ${
          status === "verified" ? "bg-success/10" : "bg-primary/10"
        } animate-pulse`} />
        <div className={`absolute -inset-8 rounded-full ${
          status === "verified" ? "bg-success/5" : "bg-primary/5"
        } animate-pulse`} style={{ animationDelay: "0.5s" }} />
        
        {/* Icon Container */}
        <div className={`relative flex h-28 w-28 items-center justify-center rounded-full ${
          status === "verified" ? "bg-success" : "bg-primary"
        } shadow-lg transition-colors duration-500`}>
          {status === "verified" ? (
            <Check className="h-14 w-14 text-success-foreground" strokeWidth={2.5} />
          ) : (
            <Bluetooth className="h-14 w-14 text-primary-foreground" />
          )}
        </div>
      </div>

      {/* Status Message */}
      <div className="mb-8 text-center">
        <h2 className="mb-2 text-2xl font-bold text-foreground">
          {status === "connecting" && "Connecting..."}
          {status === "verifying" && "Verifying Presence"}
          {status === "verified" && "Verified!"}
        </h2>
        <p className="text-muted-foreground">
          {status === "connecting" && "Establishing Bluetooth connection"}
          {status === "verifying" && "Verifying classroom presence..."}
          {status === "verified" && "You are in the classroom"}
        </p>
      </div>

      {/* Signal Strength Indicator */}
      <div className="mb-8 flex flex-col items-center">
        <p className="mb-3 text-sm font-medium text-muted-foreground">Signal Strength</p>
        <div className="flex items-end gap-1.5">
          {[1, 2, 3, 4].map((level) => (
            <div
              key={level}
              className={`w-4 rounded-sm transition-all duration-300 ${
                level <= signalStrength 
                  ? status === "verified" ? "bg-success" : "bg-primary" 
                  : "bg-muted"
              }`}
              style={{ height: `${level * 8 + 8}px` }}
            />
          ))}
        </div>
        <p className={`mt-2 text-sm font-medium ${
          status === "verified" ? "text-success" : "text-primary"
        }`}>
          {signalStrength === 4 ? "Excellent" : signalStrength >= 3 ? "Good" : signalStrength >= 2 ? "Fair" : "Weak"}
        </p>
      </div>

      {/* Device Info */}
      <div className="w-full max-w-sm rounded-2xl bg-muted/50 p-4">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
            <Wifi className="h-6 w-6 text-primary" />
          </div>
          <div className="flex-1">
            <p className="font-medium text-foreground">Classroom Beacon</p>
            <p className="text-sm text-muted-foreground">Room 204 - CS101</p>
          </div>
          <div className={`h-3 w-3 rounded-full ${
            status === "verified" ? "bg-success" : "animate-pulse bg-primary"
          }`} />
        </div>
      </div>

      {/* Loading Dots */}
      {status !== "verified" && (
        <div className="mt-8 flex items-center gap-2">
          <div className="h-2 w-2 animate-bounce rounded-full bg-primary [animation-delay:-0.3s]" />
          <div className="h-2 w-2 animate-bounce rounded-full bg-primary [animation-delay:-0.15s]" />
          <div className="h-2 w-2 animate-bounce rounded-full bg-primary" />
        </div>
      )}
    </div>
  )
}
