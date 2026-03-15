"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { X, Zap, FlashlightOff } from "lucide-react"

interface QRScannerScreenProps {
  onScan: () => void
  onClose: () => void
}

export function QRScannerScreen({ onScan, onClose }: QRScannerScreenProps) {
  const [isScanning, setIsScanning] = useState(true)
  const [flashOn, setFlashOn] = useState(false)
  const [scanProgress, setScanProgress] = useState(0)

  useEffect(() => {
    if (isScanning) {
      const interval = setInterval(() => {
        setScanProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval)
            setIsScanning(false)
            setTimeout(onScan, 500)
            return 100
          }
          return prev + 2
        })
      }, 50)
      return () => clearInterval(interval)
    }
  }, [isScanning, onScan])

  return (
    <div className="relative flex h-full flex-col bg-foreground">
      {/* Header */}
      <div className="absolute left-0 right-0 top-0 z-10 flex items-center justify-between px-6 pt-4">
        <button
          onClick={onClose}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-background/20 backdrop-blur-sm"
        >
          <X className="h-5 w-5 text-background" />
        </button>
        <h2 className="text-lg font-semibold text-background">Scan QR Code</h2>
        <button
          onClick={() => setFlashOn(!flashOn)}
          className={`flex h-10 w-10 items-center justify-center rounded-full backdrop-blur-sm ${
            flashOn ? "bg-primary" : "bg-background/20"
          }`}
        >
          {flashOn ? (
            <Zap className="h-5 w-5 text-primary-foreground" />
          ) : (
            <FlashlightOff className="h-5 w-5 text-background" />
          )}
        </button>
      </div>

      {/* Camera View Simulation */}
      <div className="relative flex flex-1 items-center justify-center">
        {/* Dark overlay with transparent center */}
        <div className="absolute inset-0 bg-foreground/80" />
        
        {/* Scanning Frame */}
        <div className="relative z-10 h-64 w-64">
          {/* Corner brackets */}
          <div className="absolute -left-1 -top-1 h-8 w-8 border-l-4 border-t-4 border-primary rounded-tl-lg" />
          <div className="absolute -right-1 -top-1 h-8 w-8 border-r-4 border-t-4 border-primary rounded-tr-lg" />
          <div className="absolute -bottom-1 -left-1 h-8 w-8 border-b-4 border-l-4 border-primary rounded-bl-lg" />
          <div className="absolute -bottom-1 -right-1 h-8 w-8 border-b-4 border-r-4 border-primary rounded-br-lg" />
          
          {/* Scanning Line Animation */}
          <div
            className="absolute left-2 right-2 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent transition-all duration-100"
            style={{ top: `${scanProgress}%` }}
          />
          
          {/* Inner frame */}
          <div className="h-full w-full rounded-2xl border-2 border-dashed border-background/30" />
        </div>
      </div>

      {/* Bottom Instructions */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground to-transparent px-6 pb-12 pt-16">
        <div className="mb-6 text-center">
          <p className="mb-2 text-lg font-medium text-background">
            Position QR code within frame
          </p>
          <p className="text-sm text-background/60">
            Scan your student ID QR code to mark attendance
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="mb-6">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm text-background/60">Scanning...</span>
            <span className="text-sm font-medium text-primary">{scanProgress}%</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-background/20">
            <div
              className="h-full rounded-full bg-primary transition-all duration-100"
              style={{ width: `${scanProgress}%` }}
            />
          </div>
        </div>

        <Button
          variant="outline"
          onClick={onClose}
          className="w-full border-background/20 bg-transparent text-background hover:bg-background/10 hover:text-background"
        >
          Cancel
        </Button>
      </div>
    </div>
  )
}
