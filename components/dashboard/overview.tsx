"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Target, Rocket, BarChart3, DollarSign, TrendingUp, Zap, CheckCircle } from "lucide-react"
import { UserJourneyDemo } from "./user-journey-demo"

interface OverviewProps {
  onTabChange?: (tab: string) => void
}

export function Overview({ onTabChange }: OverviewProps) {
  const [quickActions, setQuickActions] = useState({
    strategyUpdated: false,
    productCreated: false,
    campaignLaunched: false,
    paymentSetup: false,
  })

  const handleQuickAction = async (action: string) => {
    // Simulate action completion
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setQuickActions((prev) => ({
      ...prev,
      [action]: true,
    }))

    // Show success message
    const messages = {
      strategyUpdated: "✅ Business strategy updated!",
      productCreated: "🚀 New product created!",
      campaignLaunched: "📈 Marketing campaign launched!",
      paymentSetup: "💳 Payment integration completed!",
    }

    alert(messages[action as keyof typeof messages])
  }

  const handleFeatureClick = (tab: string) => {
    if (onTabChange) {
      onTabChange(tab)
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Business Overview</h2>
        <p className="text-slate-600">Your complete business building progress at a glance</p>
      </div>

      <Tabs defaultValue="dashboard" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="journey">Complete Journey Demo</TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard" className="space-y-6">
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Strategy Score</p>
                    <p className="text-2xl font-bold text-slate-900">85%</p>
                  </div>
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <Progress value={85} className="mt-3 h-2" />
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Products Built</p>
                    <p className="text-2xl font-bold text-slate-900">3</p>
                  </div>
                  <Rocket className="h-8 w-8 text-green-600" />
                </div>
                <p className="text-xs text-slate-500 mt-2">2 landing pages, 1 MVP</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Campaigns Active</p>
                    <p className="text-2xl font-bold text-slate-900">5</p>
                  </div>
                  <BarChart3 className="h-8 w-8 text-purple-600" />
                </div>
                <p className="text-xs text-slate-500 mt-2">Twitter, Email, TikTok</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Revenue Goal</p>
                    <p className="text-2xl font-bold text-slate-900">$2.4K</p>
                  </div>
                  <DollarSign className="h-8 w-8 text-emerald-600" />
                </div>
                <p className="text-xs text-slate-500 mt-2">48% of $5K target</p>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <div className="grid lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-blue-600" />
                  Recent Progress
                </CardTitle>
                <CardDescription>Your latest achievements and milestones</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <div className="flex-1">
                    <p className="font-medium text-slate-900">Strategy roadmap completed</p>
                    <p className="text-sm text-slate-500">2 hours ago</p>
                  </div>
                  <Badge variant="secondary">Strategy</Badge>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <div className="flex-1">
                    <p className="font-medium text-slate-900">Landing page generated</p>
                    <p className="text-sm text-slate-500">1 day ago</p>
                  </div>
                  <Badge variant="secondary">Build</Badge>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <div className="flex-1">
                    <p className="font-medium text-slate-900">Twitter campaign launched</p>
                    <p className="text-sm text-slate-500">3 days ago</p>
                  </div>
                  <Badge variant="secondary">Marketing</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-orange-600" />
                  Quick Actions
                </CardTitle>
                <CardDescription>Jump into your most important tasks</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  className="w-full justify-start"
                  variant="outline"
                  onClick={() => handleQuickAction("strategyUpdated")}
                  disabled={quickActions.strategyUpdated}
                >
                  <Target className="h-4 w-4 mr-2" />
                  {quickActions.strategyUpdated ? "✅ Strategy Updated" : "Update Business Strategy"}
                </Button>
                <Button
                  className="w-full justify-start"
                  variant="outline"
                  onClick={() => handleQuickAction("productCreated")}
                  disabled={quickActions.productCreated}
                >
                  <Rocket className="h-4 w-4 mr-2" />
                  {quickActions.productCreated ? "✅ Product Created" : "Create New Product"}
                </Button>
                <Button
                  className="w-full justify-start"
                  variant="outline"
                  onClick={() => handleQuickAction("campaignLaunched")}
                  disabled={quickActions.campaignLaunched}
                >
                  <BarChart3 className="h-4 w-4 mr-2" />
                  {quickActions.campaignLaunched ? "✅ Campaign Launched" : "Launch Marketing Campaign"}
                </Button>
                <Button
                  className="w-full justify-start"
                  variant="outline"
                  onClick={() => handleQuickAction("paymentSetup")}
                  disabled={quickActions.paymentSetup}
                >
                  <DollarSign className="h-4 w-4 mr-2" />
                  {quickActions.paymentSetup ? "✅ Payments Setup" : "Set Up Payment Integration"}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Feature Highlights */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-blue-200 bg-blue-50">
              <CardContent className="p-6 text-center">
                <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-slate-900 mb-2">Strategy Hub</h3>
                <p className="text-sm text-slate-600 mb-4">AI-powered business roadmap and planning</p>
                <Button size="sm" className="w-full" onClick={() => handleFeatureClick("strategy")}>
                  Generate Strategy
                </Button>
              </CardContent>
            </Card>

            <Card className="border-green-200 bg-green-50">
              <CardContent className="p-6 text-center">
                <Rocket className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-slate-900 mb-2">Build Zone</h3>
                <p className="text-sm text-slate-600 mb-4">Create products, landing pages, and MVPs</p>
                <Button size="sm" className="w-full" onClick={() => handleFeatureClick("build")}>
                  Start Building
                </Button>
              </CardContent>
            </Card>

            <Card className="border-purple-200 bg-purple-50">
              <CardContent className="p-6 text-center">
                <BarChart3 className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold text-slate-900 mb-2">Marketing Studio</h3>
                <p className="text-sm text-slate-600 mb-4">AI-generated campaigns and content</p>
                <Button size="sm" className="w-full" onClick={() => handleFeatureClick("marketing")}>
                  Create Launch Kit
                </Button>
              </CardContent>
            </Card>

            <Card className="border-emerald-200 bg-emerald-50">
              <CardContent className="p-6 text-center">
                <DollarSign className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="font-semibold text-slate-900 mb-2">Monetization</h3>
                <p className="text-sm text-slate-600 mb-4">Pricing, payments, and revenue tracking</p>
                <Button size="sm" className="w-full" onClick={() => handleFeatureClick("monetization")}>
                  Launch Monetization
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="journey" className="space-y-6">
          <UserJourneyDemo />
        </TabsContent>
      </Tabs>
    </div>
  )
}
