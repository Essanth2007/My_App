"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, Calendar, Clock, MapPin, BookOpen } from "lucide-react"

interface SuccessScreenProps {
  onDone: () => void
}

export function SuccessScreen({ onDone }: SuccessScreenProps) {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    setTimeout(() => setShowContent(true), 300)
  }, [])

  const now = new Date()
  const date = now.toLocaleDateString("en-US", { 
    weekday: "long", 
    year: "numeric", 
    month: "long", 
    day: "numeric" 
  })
  const time = now.toLocaleTimeString("en-US", { 
    hour: "2-digit", 
    minute: "2-digit" 
  })

  return (
    <div className="flex h-full flex-col bg-background px-6 pb-8 pt-12">
      {/* Success Animation */}
      <div className="flex flex-1 flex-col items-center justify-center">
        <div
          className={`mb-8 transition-all duration-500 ${
            showContent ? "scale-100 opacity-100" : "scale-50 opacity-0"
          }`}
        >
          {/* Checkmark Circle */}
          <div className="relative">
            <div className="absolute inset-0 animate-ping rounded-full bg-success/30" style={{ animationDuration: "2s" }} />
            <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-success shadow-lg shadow-success/30">
              <Check className="h-16 w-16 text-success-foreground" strokeWidth={3} />
            </div>
          </div>
        </div>

        {/* Success Message */}
        <div
          className={`mb-8 text-center transition-all delay-200 duration-500 ${
            showContent ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <h1 className="mb-2 text-2xl font-bold text-foreground">
            Attendance Recorded Successfully
          </h1>
          <p className="text-muted-foreground">
            Your presence has been verified and recorded
          </p>
        </div>

        {/* Details Card */}
        <Card
          className={`w-full border-0 bg-card p-6 shadow-lg transition-all delay-400 duration-500 ${
            showContent ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <div className="mb-4 flex items-center gap-3 border-b border-border pb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-foreground">CS101 - Introduction to Algorithms</p>
              <p className="text-sm text-muted-foreground">Dr. Smith</p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm text-foreground">{date}</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm text-foreground">{time}</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm text-foreground">Room 204, Building A</span>
            </div>
          </div>

          {/* Verification Badge */}
          <div className="mt-4 flex items-center gap-2 rounded-xl bg-success/10 p-3">
            <Check className="h-5 w-5 text-success" />
            <span className="text-sm font-medium text-success">
              Bluetooth verification completed
            </span>
          </div>
        </Card>
      </div>

      {/* Back Button */}
      <Button
        onClick={onDone}
        className={`h-14 rounded-2xl text-base font-semibold transition-all delay-500 duration-500 ${
          showContent ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        Back to Dashboard
      </Button>
    </div>
  )
}
