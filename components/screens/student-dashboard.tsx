"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  QrCode, 
  Bluetooth, 
  Calendar, 
  CheckCircle,
  XCircle,
  Clock,
  ChevronRight,
  Settings,
  Bell,
  TrendingUp
} from "lucide-react"

interface StudentDashboardProps {
  onScanQR: () => void
  onViewHistory: () => void
}

export function StudentDashboard({ onScanQR, onViewHistory }: StudentDashboardProps) {
  return (
    <div className="flex h-full flex-col bg-background">
      {/* Header */}
      <div className="flex items-center justify-between bg-primary px-6 pb-8 pt-4">
        <div>
          <p className="text-sm text-primary-foreground/70">Welcome back,</p>
          <h1 className="text-xl font-bold text-primary-foreground">John Doe</h1>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10">
            <Bell className="h-5 w-5 text-primary-foreground" />
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10">
            <Settings className="h-5 w-5 text-primary-foreground" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="-mt-4 flex flex-1 flex-col gap-4 rounded-t-3xl bg-background px-6 pb-8 pt-6">
        {/* Scan QR Button */}
        <Button
          onClick={onScanQR}
          className="flex h-20 items-center justify-center gap-4 rounded-2xl text-lg font-semibold"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-foreground/20">
            <QrCode className="h-6 w-6" />
          </div>
          Scan QR Code
        </Button>

        {/* Bluetooth Status */}
        <Card className="border-0 bg-primary/5 p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
              <Bluetooth className="h-5 w-5 text-primary-foreground" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-foreground">Bluetooth Status</p>
              <p className="text-xs text-muted-foreground">Connected and ready</p>
            </div>
            <span className="rounded-full bg-success/20 px-3 py-1 text-xs font-semibold text-success">
              Active
            </span>
          </div>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3">
          <Card className="flex flex-col items-center border-0 bg-card p-4 shadow-sm">
            <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-success/10">
              <CheckCircle className="h-5 w-5 text-success" />
            </div>
            <p className="text-xl font-bold text-foreground">42</p>
            <p className="text-xs text-muted-foreground">Present</p>
          </Card>

          <Card className="flex flex-col items-center border-0 bg-card p-4 shadow-sm">
            <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-destructive/10">
              <XCircle className="h-5 w-5 text-destructive" />
            </div>
            <p className="text-xl font-bold text-foreground">3</p>
            <p className="text-xs text-muted-foreground">Absent</p>
          </Card>

          <Card className="flex flex-col items-center border-0 bg-card p-4 shadow-sm">
            <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <TrendingUp className="h-5 w-5 text-primary" />
            </div>
            <p className="text-xl font-bold text-foreground">93%</p>
            <p className="text-xs text-muted-foreground">Rate</p>
          </Card>
        </div>

        {/* View History */}
        <Card
          onClick={onViewHistory}
          className="cursor-pointer border-0 bg-card p-4 shadow-sm transition-all active:scale-[0.98]"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Attendance History</h3>
                <p className="text-sm text-muted-foreground">View all your records</p>
              </div>
            </div>
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          </div>
        </Card>

        {/* Recent Attendance */}
        <div>
          <h3 className="mb-3 text-sm font-semibold text-muted-foreground">Recent Attendance</h3>
          <Card className="divide-y divide-border border-0 bg-card shadow-sm">
            {[
              { course: "CS101 - Algorithms", time: "Today, 9:00 AM", status: "present" },
              { course: "CS202 - Database", time: "Yesterday, 2:00 PM", status: "present" },
              { course: "CS303 - Networks", time: "Mar 12, 10:00 AM", status: "absent" },
              { course: "MA101 - Calculus", time: "Mar 11, 11:00 AM", status: "present" },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                  <div className={`flex h-8 w-8 items-center justify-center rounded-full ${
                    item.status === "present" ? "bg-success/10" : "bg-destructive/10"
                  }`}>
                    {item.status === "present" ? (
                      <CheckCircle className="h-4 w-4 text-success" />
                    ) : (
                      <XCircle className="h-4 w-4 text-destructive" />
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{item.course}</p>
                    <p className="text-xs text-muted-foreground">{item.time}</p>
                  </div>
                </div>
                <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                  item.status === "present" 
                    ? "bg-success/10 text-success" 
                    : "bg-destructive/10 text-destructive"
                }`}>
                  {item.status === "present" ? "Present" : "Absent"}
                </span>
              </div>
            ))}
          </Card>
        </div>

        {/* Upcoming Classes */}
        <div>
          <h3 className="mb-3 text-sm font-semibold text-muted-foreground">Upcoming Classes</h3>
          <Card className="border-0 bg-muted/50 p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground">CS404 - Machine Learning</p>
                <p className="text-sm text-muted-foreground">Tomorrow, 10:00 AM - Room 302</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
