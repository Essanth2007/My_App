"use client"

import { useState } from "react"
import { MobileFrame } from "@/components/mobile-frame"
import { SplashScreen } from "@/components/screens/splash-screen"
import { LoginScreen } from "@/components/screens/login-screen"
import { RoleSelectionScreen } from "@/components/screens/role-selection-screen"
import { TeacherDashboard } from "@/components/screens/teacher-dashboard"
import { StudentDashboard } from "@/components/screens/student-dashboard"
import { QRScannerScreen } from "@/components/screens/qr-scanner-screen"
import { BluetoothScreen } from "@/components/screens/bluetooth-screen"
import { SuccessScreen } from "@/components/screens/success-screen"

type Screen = 
  | "splash"
  | "login"
  | "role-selection"
  | "teacher-dashboard"
  | "student-dashboard"
  | "qr-scanner"
  | "bluetooth"
  | "success"

export default function SmartAttendanceApp() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("splash")
  const [userRole, setUserRole] = useState<"teacher" | "student" | null>(null)

  const handleRoleSelection = (role: "teacher" | "student") => {
    setUserRole(role)
    setCurrentScreen(role === "teacher" ? "teacher-dashboard" : "student-dashboard")
  }

  const handleBackToDashboard = () => {
    setCurrentScreen(userRole === "teacher" ? "teacher-dashboard" : "student-dashboard")
  }

  const renderScreen = () => {
    switch (currentScreen) {
      case "splash":
        return <SplashScreen onComplete={() => setCurrentScreen("login")} />
      
      case "login":
        return (
          <LoginScreen 
            onLogin={() => setCurrentScreen("role-selection")}
            onRegister={() => setCurrentScreen("role-selection")}
          />
        )
      
      case "role-selection":
        return <RoleSelectionScreen onSelectRole={handleRoleSelection} />
      
      case "teacher-dashboard":
        return (
          <TeacherDashboard
            onStartSession={() => setCurrentScreen("qr-scanner")}
            onViewAttendance={() => {}}
          />
        )
      
      case "student-dashboard":
        return (
          <StudentDashboard
            onScanQR={() => setCurrentScreen("qr-scanner")}
            onViewHistory={() => {}}
          />
        )
      
      case "qr-scanner":
        return (
          <QRScannerScreen
            onScan={() => setCurrentScreen("bluetooth")}
            onClose={handleBackToDashboard}
          />
        )
      
      case "bluetooth":
        return <BluetoothScreen onVerified={() => setCurrentScreen("success")} />
      
      case "success":
        return <SuccessScreen onDone={handleBackToDashboard} />
      
      default:
        return <SplashScreen onComplete={() => setCurrentScreen("login")} />
    }
  }

  return (
    <MobileFrame>
      {renderScreen()}
    </MobileFrame>
  )
}
