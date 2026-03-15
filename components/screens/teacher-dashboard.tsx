"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  QrCode, 
  Users, 
  Calendar, 
  TrendingUp, 
  Clock,
  ChevronRight,
  BarChart3,
  Settings,
  Bell
} from "lucide-react"

interface TeacherDashboardProps {
  onStartSession: () => void
  onViewAttendance: () => void
}

export function TeacherDashboard({ onStartSession, onViewAttendance }: TeacherDashboardProps) {
  return (
    <div className="flex h-full flex-col bg-background">
      {/* Header */}
      <div className="flex items-center justify-between bg-primary px-6 pb-8 pt-4">
        <div>
          <p className="text-sm text-primary-foreground/70">Good morning,</p>
          <h1 className="text-xl font-bold text-primary-foreground">Dr. Smith</h1>
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
        {/* Start Session Button */}
        <Button
          onClick={onStartSession}
          className="flex h-20 items-center justify-center gap-4 rounded-2xl text-lg font-semibold"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-foreground/20">
            <QrCode className="h-6 w-6" />
          </div>
          Start Attendance Session
        </Button>

        {/* Session Status */}
        <Card className="border-0 bg-success/10 p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-success">
              <Clock className="h-5 w-5 text-success-foreground" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-foreground">Active Session</p>
              <p className="text-xs text-muted-foreground">CS101 - Room 204</p>
            </div>
            <span className="rounded-full bg-success/20 px-3 py-1 text-xs font-semibold text-success">
              Live
            </span>
          </div>
        </Card>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 gap-3">
          <Card className="border-0 bg-card p-4 shadow-sm">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
              <Users className="h-5 w-5 text-primary" />
            </div>
            <p className="text-2xl font-bold text-foreground">156</p>
            <p className="text-sm text-muted-foreground">Total Students</p>
          </Card>

          <Card className="border-0 bg-card p-4 shadow-sm">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
              <Calendar className="h-5 w-5 text-primary" />
            </div>
            <p className="text-2xl font-bold text-foreground">24</p>
            <p className="text-sm text-muted-foreground">Sessions This Month</p>
          </Card>

          <Card className="border-0 bg-card p-4 shadow-sm">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
              <TrendingUp className="h-5 w-5 text-primary" />
            </div>
            <p className="text-2xl font-bold text-foreground">92%</p>
            <p className="text-sm text-muted-foreground">Avg. Attendance</p>
          </Card>

          <Card className="border-0 bg-card p-4 shadow-sm">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
              <BarChart3 className="h-5 w-5 text-primary" />
            </div>
            <p className="text-2xl font-bold text-foreground">4</p>
            <p className="text-sm text-muted-foreground">Active Courses</p>
          </Card>
        </div>

        {/* View Attendance */}
        <Card
          onClick={onViewAttendance}
          className="cursor-pointer border-0 bg-card p-4 shadow-sm transition-all active:scale-[0.98]"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">View Attendance Records</h3>
                <p className="text-sm text-muted-foreground">Access detailed reports</p>
              </div>
            </div>
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          </div>
        </Card>

        {/* Recent Activity */}
        <div>
          <h3 className="mb-3 text-sm font-semibold text-muted-foreground">Recent Activity</h3>
          <Card className="divide-y divide-border border-0 bg-card shadow-sm">
            {[
              { course: "CS101", time: "Today, 9:00 AM", count: 45 },
              { course: "CS202", time: "Yesterday, 2:00 PM", count: 38 },
              { course: "CS303", time: "Mar 12, 10:00 AM", count: 42 },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4">
                <div>
                  <p className="font-medium text-foreground">{item.course}</p>
                  <p className="text-xs text-muted-foreground">{item.time}</p>
                </div>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                  {item.count} present
                </span>
              </div>
            ))}
          </Card>
        </div>
      </div>
    </div>
  )
}
