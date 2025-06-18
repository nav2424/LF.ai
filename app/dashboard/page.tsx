"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Rocket, LogOut, Target, TrendingUp, DollarSign, BarChart3 } from "lucide-react"

export default function DashboardPage() {
  const goToAuth = () => {
    window.location.href = "/auth"
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-2">
                <Rocket className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">LaunchFlow.ai</h1>
                <Badge className="text-xs bg-green-100 text-green-800">Demo Mode</Badge>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm text-slate-600">Welcome, Demo User</span>
              <Button variant="outline" size="sm" onClick={goToAuth}>
                <LogOut className="h-4 w-4 mr-2" />
                Back to Auth
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Demo Banner */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="text-center">
            <span className="font-medium">🚀 Demo Mode Active - You successfully accessed the dashboard!</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Success Message */}
        <Card className="mb-8 bg-green-50 border-green-200">
          <CardContent className="p-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-green-900 mb-4">🎉 SUCCESS!</h2>
              <p className="text-xl text-green-700 mb-4">
                The demo button worked! You are now in the LaunchFlow.ai dashboard.
              </p>
              <p className="text-green-600">
                This proves the platform is working correctly. All features are now accessible.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 rounded-full p-3">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Status</p>
                  <p className="font-semibold text-slate-900">Demo Active</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 rounded-full p-3">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Progress</p>
                  <p className="font-semibold text-slate-900">100%</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="bg-purple-100 rounded-full p-3">
                  <BarChart3 className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Features</p>
                  <p className="font-semibold text-slate-900">All Available</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="bg-yellow-100 rounded-full p-3">
                  <DollarSign className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Demo Revenue</p>
                  <p className="font-semibold text-slate-900">$1,247</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-blue-600" />
                Strategy Hub
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 mb-4">AI-powered business strategy generation</p>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Generate Strategy</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Rocket className="h-5 w-5 text-purple-600" />
                Build Zone
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 mb-4">Create products, landing pages, and MVPs</p>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">Start Building</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-600" />
                Marketing Studio
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 mb-4">Auto-generate marketing campaigns</p>
              <Button className="w-full bg-green-600 hover:bg-green-700">Create Campaign</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-yellow-600" />
                Monetization Suite
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 mb-4">Set up payments and track revenue</p>
              <Button className="w-full bg-yellow-600 hover:bg-yellow-700">Setup Payments</Button>
            </CardContent>
          </Card>
        </div>

        {/* Test Section */}
        <Card className="mt-8 bg-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle>🧪 Test Section</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">If you can see this dashboard, the demo mode is working correctly!</p>
            <div className="space-y-2">
              <Button onClick={() => alert("Button 1 works!")} className="w-full">
                Test Button 1
              </Button>
              <Button onClick={() => alert("Button 2 works!")} variant="outline" className="w-full">
                Test Button 2
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
