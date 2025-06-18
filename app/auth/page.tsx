"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Rocket, Zap } from "lucide-react"

export default function AuthPage() {
  // Simple function that definitely works
  const goToDashboard = () => {
    console.log("Button clicked - navigating to dashboard")
    window.location.href = "/dashboard"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="border-2 border-green-200">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full p-3">
                <Rocket className="h-8 w-8 text-white" />
              </div>
            </div>
            <CardTitle className="text-2xl">LaunchFlow.ai</CardTitle>
            <p className="text-slate-600">Demo Mode Access</p>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Simple button that just navigates */}
            <Button
              onClick={goToDashboard}
              size="lg"
              className="w-full bg-green-600 hover:bg-green-700 text-white text-lg py-4"
            >
              <Zap className="h-5 w-5 mr-2" />
              Enter Dashboard
            </Button>

            {/* Backup link */}
            <div className="text-center">
              <a href="/dashboard" className="text-blue-600 hover:text-blue-800 underline">
                Or click here to go to dashboard
              </a>
            </div>

            {/* Test button */}
            <Button onClick={() => alert("Button works!")} variant="outline" className="w-full">
              Test Button (Should show alert)
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
