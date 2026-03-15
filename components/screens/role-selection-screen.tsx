"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { GraduationCap, Users, ChevronRight } from "lucide-react"

interface RoleSelectionScreenProps {
  onSelectRole: (role: "teacher" | "student") => void
}

export function RoleSelectionScreen({ onSelectRole }: RoleSelectionScreenProps) {
  const [selectedRole, setSelectedRole] = useState<"teacher" | "student" | null>(null)

  const handleSelect = (role: "teacher" | "student") => {
    setSelectedRole(role)
    setTimeout(() => {
      onSelectRole(role)
    }, 300)
  }

  return (
    <div className="flex h-full flex-col bg-background px-6 pb-8 pt-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="mb-2 text-2xl font-bold text-foreground">Choose Your Role</h1>
        <p className="text-sm text-muted-foreground">
          Select how you want to use Smart Attendance
        </p>
      </div>

      {/* Role Cards */}
      <div className="flex flex-1 flex-col gap-4">
        {/* Teacher Card */}
        <Card
          onClick={() => handleSelect("teacher")}
          className={`cursor-pointer border-2 p-6 transition-all duration-200 active:scale-[0.98] ${
            selectedRole === "teacher"
              ? "border-primary bg-primary/5"
              : "border-transparent bg-card hover:border-primary/30"
          }`}
        >
          <div className="flex items-center gap-4">
            <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${
              selectedRole === "teacher" ? "bg-primary" : "bg-primary/10"
            }`}>
              <Users className={`h-8 w-8 ${
                selectedRole === "teacher" ? "text-primary-foreground" : "text-primary"
              }`} strokeWidth={1.5} />
            </div>
            <div className="flex-1">
              <h3 className="mb-1 text-lg font-semibold text-foreground">Teacher</h3>
              <p className="text-sm text-muted-foreground">
                Create sessions, generate QR codes, and track student attendance
              </p>
            </div>
            <ChevronRight className={`h-6 w-6 transition-colors ${
              selectedRole === "teacher" ? "text-primary" : "text-muted-foreground"
            }`} />
          </div>
        </Card>

        {/* Student Card */}
        <Card
          onClick={() => handleSelect("student")}
          className={`cursor-pointer border-2 p-6 transition-all duration-200 active:scale-[0.98] ${
            selectedRole === "student"
              ? "border-primary bg-primary/5"
              : "border-transparent bg-card hover:border-primary/30"
          }`}
        >
          <div className="flex items-center gap-4">
            <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${
              selectedRole === "student" ? "bg-primary" : "bg-primary/10"
            }`}>
              <GraduationCap className={`h-8 w-8 ${
                selectedRole === "student" ? "text-primary-foreground" : "text-primary"
              }`} strokeWidth={1.5} />
            </div>
            <div className="flex-1">
              <h3 className="mb-1 text-lg font-semibold text-foreground">Student</h3>
              <p className="text-sm text-muted-foreground">
                Scan QR codes, verify presence via Bluetooth, and view attendance history
              </p>
            </div>
            <ChevronRight className={`h-6 w-6 transition-colors ${
              selectedRole === "student" ? "text-primary" : "text-muted-foreground"
            }`} />
          </div>
        </Card>

        {/* Info Card */}
        <Card className="mt-4 border-0 bg-muted/50 p-4">
          <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
              <span className="text-sm font-semibold text-primary">?</span>
            </div>
            <div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                You can change your role later in the settings. Your account will be verified by the administrator.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
