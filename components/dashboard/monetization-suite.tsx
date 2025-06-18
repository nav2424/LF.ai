"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DollarSign, CreditCard, BarChart3, TrendingUp, Settings, Zap, ExternalLink } from "lucide-react"

export function MonetizationSuite() {
  const [isConnecting, setIsConnecting] = useState(false)
  const [connectedPlatforms, setConnectedPlatforms] = useState<string[]>([])
  const [paymentLinks, setPaymentLinks] = useState<any[]>([
    {
      id: 1,
      name: "Productivity Dashboard",
      price: "$29",
      status: "active",
      sales: 47,
      revenue: "$1,363",
    },
  ])

  const [experiments, setExperiments] = useState<any[]>([])
  const [optimizations, setOptimizations] = useState<any[]>([])

  const handleConnect = async (platform: string) => {
    setIsConnecting(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setConnectedPlatforms((prev) => [...prev, platform])
    setIsConnecting(false)

    // Show success message
    alert(`✅ ${platform.charAt(0).toUpperCase() + platform.slice(1)} connected successfully!`)
  }

  const handleLaunchMonetization = async () => {
    setIsConnecting(true)

    // Simulate setting up complete monetization flow
    await new Promise((resolve) => setTimeout(resolve, 3000))

    // Add new payment link
    const newLink = {
      id: Date.now(),
      name: "AI Marketing Course",
      price: "$197",
      status: "active",
      sales: 0,
      revenue: "$0",
    }

    setPaymentLinks((prev) => [newLink, ...prev])
    setConnectedPlatforms(["stripe", "gumroad"])
    setIsConnecting(false)

    alert("🚀 Monetization flow launched! Your payment system is now live.")
  }

  const handleCreateExperiment = async () => {
    setIsConnecting(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const newExperiment = {
      id: Date.now(),
      name: "Checkout Button Color Test",
      type: "A/B Test",
      status: "running",
      variants: [
        { name: "Blue Button", conversions: 0, visitors: 0 },
        { name: "Green Button", conversions: 0, visitors: 0 },
      ],
      created: new Date().toLocaleDateString(),
    }

    setExperiments((prev) => [newExperiment, ...prev])
    setIsConnecting(false)
    alert("🧪 New A/B test created and running!")
  }

  const handleOptimizationAction = async (action: string) => {
    setIsConnecting(true)
    await new Promise((resolve) => setTimeout(resolve, 2500))

    const actions = {
      premium: {
        name: "Premium Tier Created",
        description: "Added premium version with advanced features",
        impact: "+47% potential revenue increase",
        price: "$79/month",
      },
      bundle: {
        name: "Product Bundle Created",
        description: "Combined top 3 products into value bundle",
        impact: "+25% average order value",
        price: "$149 (was $197)",
      },
      subscription: {
        name: "Subscription Model Activated",
        description: "Converted one-time products to recurring revenue",
        impact: "3x lifetime value increase",
        price: "$29/month",
      },
    }

    const optimization = {
      id: Date.now(),
      ...actions[action as keyof typeof actions],
      status: "active",
      created: new Date().toLocaleDateString(),
    }

    setOptimizations((prev) => [optimization, ...prev])
    setIsConnecting(false)
    alert(`✅ ${optimization.name}! ${optimization.impact}`)
  }

  const handlePricingGeneration = async () => {
    setIsConnecting(true)
    await new Promise((resolve) => setTimeout(resolve, 3000))

    // Show detailed pricing analysis
    const pricingAnalysis = {
      marketAnalysis: "Analyzed 47 competitors in your niche",
      recommendations: {
        starter: { price: "$29", reasoning: "Entry-level pricing to capture price-sensitive customers" },
        pro: { price: "$79", reasoning: "Sweet spot for most customers based on value perception" },
        enterprise: { price: "$199", reasoning: "Premium pricing for advanced features and support" },
      },
      projectedRevenue: "$8,200/month",
      conversionRates: {
        starter: "12%",
        pro: "8%",
        enterprise: "3%",
      },
    }

    setIsConnecting(false)
    alert(`💰 Pricing strategy generated! Projected revenue: ${pricingAnalysis.projectedRevenue}`)
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Monetization Suite</h2>
        <p className="text-slate-600">Set up payments, pricing strategies, and track your revenue performance</p>
      </div>

      <Tabs defaultValue="pricing" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="pricing">Pricing</TabsTrigger>
          <TabsTrigger value="payments">Payments</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="optimization">Optimize</TabsTrigger>
        </TabsList>

        <TabsContent value="pricing" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-emerald-600" />
                  AI Pricing Optimizer
                </CardTitle>
                <CardDescription>Get AI-powered pricing recommendations based on market data</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="space-y-2">
                    <Label htmlFor="product-type">Product Type</Label>
                    <Input id="product-type" placeholder="e.g., Digital course, SaaS tool, Template" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="target-market">Target Market</Label>
                    <Input id="target-market" placeholder="e.g., Small businesses, Freelancers" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="value-prop">Value Proposition</Label>
                    <Input id="value-prop" placeholder="What problem does it solve?" />
                  </div>
                </div>

                <Button className="w-full" onClick={handlePricingGeneration} disabled={isConnecting}>
                  {isConnecting ? (
                    <>
                      <Zap className="h-4 w-4 mr-2 animate-pulse" />
                      Analyzing Market...
                    </>
                  ) : (
                    <>
                      <Zap className="h-4 w-4 mr-2" />
                      Generate Pricing Strategy
                    </>
                  )}
                </Button>

                <div className="p-4 bg-slate-50 rounded-lg">
                  <h4 className="font-semibold text-slate-900 mb-2">AI Recommendation:</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Starter Plan:</span>
                      <span className="font-medium">$29/month</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Pro Plan:</span>
                      <span className="font-medium">$79/month</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Enterprise:</span>
                      <span className="font-medium">$199/month</span>
                    </div>
                  </div>
                  <p className="text-sm text-slate-500 mt-3">Based on competitor analysis and market positioning</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Pricing Experiments</CardTitle>
                <CardDescription>Test different pricing strategies</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="p-3 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-slate-900">$29 vs $39 Test</h4>
                      <Badge className="bg-green-100 text-green-800">Running</Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600">$29 Plan:</span>
                        <span>47 conversions</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600">$39 Plan:</span>
                        <span>31 conversions</span>
                      </div>
                      <Progress value={60} className="h-2" />
                    </div>
                  </div>

                  <div className="p-3 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-slate-900">Annual vs Monthly</h4>
                      <Badge variant="outline">Completed</Badge>
                    </div>
                    <p className="text-sm text-slate-600">Annual billing increased LTV by 34%</p>
                  </div>
                </div>

                <Button className="w-full" variant="outline">
                  Create New Experiment
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="payments" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-blue-600" />
                  Payment Integration
                </CardTitle>
                <CardDescription>Connect your payment processors and start accepting payments</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                        <CreditCard className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">Stripe</p>
                        <p className="text-sm text-slate-500">Credit cards, subscriptions</p>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      onClick={() => handleConnect("stripe")}
                      disabled={isConnecting || connectedPlatforms.includes("stripe")}
                      variant={connectedPlatforms.includes("stripe") ? "default" : "outline"}
                    >
                      {connectedPlatforms.includes("stripe") ? "✅ Connected" : "Connect"}
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-orange-600 rounded flex items-center justify-center">
                        <DollarSign className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">Gumroad</p>
                        <p className="text-sm text-slate-500">Digital products, affiliates</p>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      Connect
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center">
                        <CreditCard className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">PayPal</p>
                        <p className="text-sm text-slate-500">Global payments</p>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      Connect
                    </Button>
                  </div>
                </div>

                <Button onClick={handleLaunchMonetization} className="w-full" disabled={isConnecting}>
                  {isConnecting ? (
                    <>
                      <Zap className="h-4 w-4 mr-2 animate-pulse" />
                      Launching...
                    </>
                  ) : (
                    <>
                      <Settings className="h-4 w-4 mr-2" />
                      Launch Monetization Flow
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Payment Links</CardTitle>
                <CardDescription>Quick checkout links for your products</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {paymentLinks.map((link) => (
                  <div key={link.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium text-slate-900">{link.name}</p>
                      <p className="text-sm text-slate-500">{link.price} one-time</p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                      <Badge
                        className={
                          link.status === "active" ? "bg-green-100 text-green-800" : "bg-slate-100 text-slate-800"
                        }
                      >
                        {link.status === "active" ? "Active" : "Draft"}
                      </Badge>
                    </div>
                  </div>
                ))}

                <Button className="w-full" variant="outline">
                  Create New Payment Link
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Total Revenue</p>
                    <p className="text-2xl font-bold text-slate-900">$12,847</p>
                  </div>
                  <DollarSign className="h-8 w-8 text-emerald-600" />
                </div>
                <p className="text-xs text-emerald-600 mt-2">+23% from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Conversion Rate</p>
                    <p className="text-2xl font-bold text-slate-900">4.2%</p>
                  </div>
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                </div>
                <p className="text-xs text-blue-600 mt-2">+0.8% improvement</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Avg Order Value</p>
                    <p className="text-2xl font-bold text-slate-900">$67</p>
                  </div>
                  <BarChart3 className="h-8 w-8 text-purple-600" />
                </div>
                <p className="text-xs text-purple-600 mt-2">+$12 increase</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Active Customers</p>
                    <p className="text-2xl font-bold text-slate-900">247</p>
                  </div>
                  <TrendingUp className="h-8 w-8 text-orange-600" />
                </div>
                <p className="text-xs text-orange-600 mt-2">+31 new this month</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Revenue Breakdown</CardTitle>
                <CardDescription>Performance by product</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Productivity Dashboard</span>
                    <span className="font-medium">$8,420</span>
                  </div>
                  <Progress value={65} className="h-2" />

                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Marketing Course</span>
                    <span className="font-medium">$3,240</span>
                  </div>
                  <Progress value={25} className="h-2" />

                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Notion Templates</span>
                    <span className="font-medium">$1,187</span>
                  </div>
                  <Progress value={10} className="h-2" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Growth Metrics</CardTitle>
                <CardDescription>Key performance indicators</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-slate-50 rounded-lg">
                    <p className="text-2xl font-bold text-slate-900">156%</p>
                    <p className="text-sm text-slate-600">MoM Growth</p>
                  </div>
                  <div className="text-center p-3 bg-slate-50 rounded-lg">
                    <p className="text-2xl font-bold text-slate-900">$2,847</p>
                    <p className="text-sm text-slate-600">MRR</p>
                  </div>
                  <div className="text-center p-3 bg-slate-50 rounded-lg">
                    <p className="text-2xl font-bold text-slate-900">89%</p>
                    <p className="text-sm text-slate-600">Customer Satisfaction</p>
                  </div>
                  <div className="text-center p-3 bg-slate-50 rounded-lg">
                    <p className="text-2xl font-bold text-slate-900">23</p>
                    <p className="text-sm text-slate-600">Referrals</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="optimization" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-orange-600" />
                  Revenue Optimization
                </CardTitle>
                <CardDescription>AI-powered recommendations to increase revenue</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                    <h4 className="font-medium text-green-900 mb-1">Upsell Opportunity</h4>
                    <p className="text-sm text-green-700 mb-2">47% of customers would buy a premium version</p>
                    <Button
                      size="sm"
                      className="w-full"
                      onClick={() => handleOptimizationAction("premium")}
                      disabled={isConnecting}
                    >
                      {isConnecting ? "Creating..." : "Create Premium Tier"}
                    </Button>
                  </div>

                  <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <h4 className="font-medium text-blue-900 mb-1">Bundle Strategy</h4>
                    <p className="text-sm text-blue-700 mb-2">Bundle your top 3 products for 25% higher AOV</p>
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full"
                      onClick={() => handleOptimizationAction("bundle")}
                      disabled={isConnecting}
                    >
                      {isConnecting ? "Creating..." : "Create Bundle"}
                    </Button>
                  </div>

                  <div className="p-3 bg-purple-50 border border-purple-200 rounded-lg">
                    <h4 className="font-medium text-purple-900 mb-1">Subscription Model</h4>
                    <p className="text-sm text-purple-700 mb-2">Convert to subscription for 3x lifetime value</p>
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full"
                      onClick={() => handleOptimizationAction("subscription")}
                      disabled={isConnecting}
                    >
                      {isConnecting ? "Converting..." : "Explore Subscription"}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Optimization Experiments</CardTitle>
                <CardDescription>Test revenue optimization strategies</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-slate-900">Checkout Flow A/B Test</h4>
                    <Badge className="bg-blue-100 text-blue-800">Running</Badge>
                  </div>
                  <p className="text-sm text-slate-600 mb-2">Testing 1-step vs 2-step checkout</p>
                  <div className="flex justify-between text-sm">
                    <span>1-step: 4.2% conversion</span>
                    <span>2-step: 3.8% conversion</span>
                  </div>
                </div>

                <div className="p-3 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-slate-900">Pricing Page Layout</h4>
                    <Badge variant="outline">Completed</Badge>
                  </div>
                  <p className="text-sm text-slate-600">New layout increased conversions by 18%</p>
                </div>

                <Button className="w-full" variant="outline" onClick={handleCreateExperiment} disabled={isConnecting}>
                  {isConnecting ? "Creating..." : "Start New Experiment"}
                </Button>
              </CardContent>
            </Card>
          </div>
          {optimizations.length > 0 && (
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>🚀 Active Optimizations</CardTitle>
                <CardDescription>Your revenue optimization implementations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {optimizations.map((opt) => (
                  <div key={opt.id} className="p-3 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-slate-900">{opt.name}</h4>
                      <Badge className="bg-green-100 text-green-800">{opt.status}</Badge>
                    </div>
                    <p className="text-sm text-slate-600 mb-1">{opt.description}</p>
                    <p className="text-sm font-medium text-green-600">{opt.impact}</p>
                    {opt.price && <p className="text-sm text-slate-500">Price: {opt.price}</p>}
                  </div>
                ))}
              </CardContent>
            </Card>
          )}

          {experiments.length > 0 && (
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>🧪 Running Experiments</CardTitle>
                <CardDescription>Your active A/B tests and optimizations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {experiments.map((exp) => (
                  <div key={exp.id} className="p-3 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-slate-900">{exp.name}</h4>
                      <Badge className="bg-blue-100 text-blue-800">{exp.status}</Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      {exp.variants.map((variant: any, index: number) => (
                        <div key={index} className="bg-slate-50 p-2 rounded">
                          <p className="font-medium">{variant.name}</p>
                          <p className="text-slate-600">{variant.conversions} conversions</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
