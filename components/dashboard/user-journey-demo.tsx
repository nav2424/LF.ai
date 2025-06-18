"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, ArrowRight, Target, Rocket, BarChart3, DollarSign, Play } from "lucide-react"

interface JourneyStep {
  id: string
  title: string
  description: string
  icon: any
  completed: boolean
  current: boolean
  outputs: string[]
}

export function UserJourneyDemo() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isProcessing, setIsProcessing] = useState(false)
  const [journeyData, setJourneyData] = useState<any>({})

  const journeySteps: JourneyStep[] = [
    {
      id: "strategy",
      title: "1. Strategy Development",
      description: "Define your business foundation with AI-powered market analysis",
      icon: Target,
      completed: false,
      current: true,
      outputs: ["Business roadmap", "Market analysis", "Revenue projections", "Action plan"],
    },
    {
      id: "build",
      title: "2. Product Creation",
      description: "Build your digital products and landing pages",
      icon: Rocket,
      completed: false,
      current: false,
      outputs: ["Landing page", "Digital products", "MVP application", "Brand assets"],
    },
    {
      id: "marketing",
      title: "3. Marketing Launch",
      description: "Create and execute your marketing campaigns",
      icon: BarChart3,
      completed: false,
      current: false,
      outputs: ["Social content", "Email funnels", "Launch campaigns", "Content calendar"],
    },
    {
      id: "monetization",
      title: "4. Revenue Generation",
      description: "Set up payments and optimize for maximum revenue",
      icon: DollarSign,
      completed: false,
      current: false,
      outputs: ["Payment systems", "Pricing strategy", "Revenue optimization", "Analytics"],
    },
  ]

  const [steps, setSteps] = useState(journeySteps)

  const executeStep = async (stepIndex: number) => {
    setIsProcessing(true)
    const step = steps[stepIndex]

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 3000))

    const newData = { ...journeyData }

    switch (step.id) {
      case "strategy":
        newData.strategy = {
          businessIdea: "AI-Powered Productivity Dashboard",
          targetMarket: "Remote workers and small teams",
          revenueModel: "SaaS subscription with freemium tier",
          marketSize: "$2.3B TAM in productivity software",
          competitorAnalysis: "47 competitors analyzed, gap identified in AI automation",
          projectedRevenue: "$8,200/month within 6 months",
          keyMetrics: {
            marketOpportunity: 85,
            revenuePotential: 75,
            successProbability: 78,
          },
          actionPlan: [
            "Create MVP with core features",
            "Build landing page for validation",
            "Launch beta with 50 users",
            "Implement feedback and iterate",
            "Scale marketing efforts",
          ],
        }
        break

      case "build":
        newData.build = {
          landingPage: {
            title: "TaskFlow Pro - AI-Powered Productivity",
            conversionRate: "4.2%",
            features: ["Smart task prioritization", "AI scheduling", "Team collaboration"],
            techStack: "Next.js + Tailwind CSS",
          },
          mvp: {
            name: "TaskFlow Pro Beta",
            features: ["User auth", "Task management", "AI suggestions", "Analytics"],
            developmentTime: "4 weeks",
            techStack: "Next.js + Supabase + OpenAI",
          },
          digitalProducts: [
            { name: "Productivity Playbook", type: "PDF Guide", price: "$29" },
            { name: "Task Management Templates", type: "Notion", price: "$19" },
          ],
        }
        break

      case "marketing":
        newData.marketing = {
          socialCampaigns: {
            twitter: "15 tweets scheduled, #productivity hashtag strategy",
            linkedin: "Weekly thought leadership posts",
            tiktok: "Behind-the-scenes building content",
          },
          emailFunnels: {
            welcome: "5-email onboarding sequence, 45% open rate",
            launch: "7-day product launch campaign",
            nurture: "Weekly value-driven content",
          },
          contentCalendar: "30 days of content planned across all platforms",
          launchMetrics: {
            emailSignups: 1247,
            socialFollowers: 892,
            websiteTraffic: "2.4K monthly visitors",
          },
        }
        break

      case "monetization":
        newData.monetization = {
          pricingStrategy: {
            free: "$0 - Basic features, 5 tasks",
            pro: "$29/month - Unlimited tasks, AI features",
            team: "$79/month - Team collaboration, analytics",
          },
          paymentSystems: ["Stripe", "PayPal"],
          revenueMetrics: {
            mrr: "$2,847",
            customers: 247,
            churnRate: "3.2%",
            ltv: "$890",
          },
          optimizations: [
            "Annual billing discount (20% increase in LTV)",
            "Upsell to team plan (47% conversion)",
            "Add-on features ($15/month average)",
          ],
        }
        break
    }

    setJourneyData(newData)

    // Update step status
    const updatedSteps = [...steps]
    updatedSteps[stepIndex].completed = true
    updatedSteps[stepIndex].current = false

    if (stepIndex < steps.length - 1) {
      updatedSteps[stepIndex + 1].current = true
      setCurrentStep(stepIndex + 1)
    }

    setSteps(updatedSteps)
    setIsProcessing(false)
  }

  const resetJourney = () => {
    setCurrentStep(0)
    setJourneyData({})
    setSteps(
      journeySteps.map((step, index) => ({
        ...step,
        completed: false,
        current: index === 0,
      })),
    )
  }

  const completedSteps = steps.filter((step) => step.completed).length
  const progressPercentage = (completedSteps / steps.length) * 100

  return (
    <div className="space-y-6">
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Play className="h-6 w-6 text-blue-600" />
            Complete User Journey Demo
          </CardTitle>
          <CardDescription>Experience the full LaunchFlow.ai process from idea to revenue</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-slate-600">Overall Progress</span>
            <span className="text-sm font-medium text-slate-900">
              {completedSteps} of {steps.length} completed
            </span>
          </div>
          <Progress value={progressPercentage} className="h-3" />

          {completedSteps === steps.length && (
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-2">🎉 Journey Complete!</h4>
              <p className="text-sm text-green-700">
                You've successfully built a complete business from strategy to monetization. Your projected MRR:{" "}
                <strong>${journeyData.monetization?.revenueMetrics?.mrr || "0"}</strong>
              </p>
            </div>
          )}

          <div className="flex gap-2">
            <Button onClick={resetJourney} variant="outline">
              Reset Journey
            </Button>
            {completedSteps === steps.length && <Button>Export Business Plan</Button>}
          </div>
        </CardContent>
      </Card>

      {/* Journey Steps */}
      <div className="space-y-6">
        {steps.map((step, index) => {
          const Icon = step.icon
          const isActive = step.current || step.completed

          return (
            <Card
              key={step.id}
              className={`transition-all ${
                step.current
                  ? "ring-2 ring-blue-500 bg-blue-50"
                  : step.completed
                    ? "bg-green-50 border-green-200"
                    : "opacity-60"
              }`}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg ${
                        step.completed ? "bg-green-100" : step.current ? "bg-blue-100" : "bg-slate-100"
                      }`}
                    >
                      {step.completed ? (
                        <CheckCircle className="h-6 w-6 text-green-600" />
                      ) : (
                        <Icon className={`h-6 w-6 ${step.current ? "text-blue-600" : "text-slate-400"}`} />
                      )}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{step.title}</CardTitle>
                      <CardDescription>{step.description}</CardDescription>
                    </div>
                  </div>

                  {step.current && !isProcessing && (
                    <Button onClick={() => executeStep(index)}>
                      Execute Step
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  )}

                  {step.current && isProcessing && <Button disabled>Processing...</Button>}

                  {step.completed && <Badge className="bg-green-100 text-green-800">Completed</Badge>}
                </div>
              </CardHeader>

              {step.completed && journeyData[step.id] && (
                <CardContent className="pt-0">
                  <div className="space-y-4">
                    {/* Strategy Results */}
                    {step.id === "strategy" && journeyData.strategy && (
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-3">
                          <div>
                            <h5 className="font-medium text-slate-900">Business Concept</h5>
                            <p className="text-sm text-slate-600">{journeyData.strategy.businessIdea}</p>
                          </div>
                          <div>
                            <h5 className="font-medium text-slate-900">Target Market</h5>
                            <p className="text-sm text-slate-600">{journeyData.strategy.targetMarket}</p>
                          </div>
                          <div>
                            <h5 className="font-medium text-slate-900">Revenue Model</h5>
                            <p className="text-sm text-slate-600">{journeyData.strategy.revenueModel}</p>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div>
                            <h5 className="font-medium text-slate-900">Market Analysis</h5>
                            <p className="text-sm text-slate-600">{journeyData.strategy.competitorAnalysis}</p>
                          </div>
                          <div>
                            <h5 className="font-medium text-slate-900">Revenue Projection</h5>
                            <p className="text-sm font-medium text-green-600">
                              {journeyData.strategy.projectedRevenue}
                            </p>
                          </div>
                          <div className="grid grid-cols-3 gap-2">
                            <div className="text-center p-2 bg-white rounded">
                              <p className="text-lg font-bold text-slate-900">
                                {journeyData.strategy.keyMetrics.marketOpportunity}%
                              </p>
                              <p className="text-xs text-slate-500">Market Opportunity</p>
                            </div>
                            <div className="text-center p-2 bg-white rounded">
                              <p className="text-lg font-bold text-slate-900">
                                {journeyData.strategy.keyMetrics.revenuePotential}%
                              </p>
                              <p className="text-xs text-slate-500">Revenue Potential</p>
                            </div>
                            <div className="text-center p-2 bg-white rounded">
                              <p className="text-lg font-bold text-slate-900">
                                {journeyData.strategy.keyMetrics.successProbability}%
                              </p>
                              <p className="text-xs text-slate-500">Success Probability</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Build Results */}
                    {step.id === "build" && journeyData.build && (
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-3">
                          <div className="p-3 bg-white border rounded-lg">
                            <h5 className="font-medium text-slate-900 mb-2">Landing Page</h5>
                            <p className="text-sm text-slate-600 mb-1">{journeyData.build.landingPage.title}</p>
                            <p className="text-sm text-green-600">
                              Conversion Rate: {journeyData.build.landingPage.conversionRate}
                            </p>
                            <div className="flex flex-wrap gap-1 mt-2">
                              {journeyData.build.landingPage.features.map((feature: string, i: number) => (
                                <Badge key={i} variant="secondary" className="text-xs">
                                  {feature}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div className="p-3 bg-white border rounded-lg">
                            <h5 className="font-medium text-slate-900 mb-2">MVP Application</h5>
                            <p className="text-sm text-slate-600 mb-1">{journeyData.build.mvp.name}</p>
                            <p className="text-sm text-slate-500">
                              Development: {journeyData.build.mvp.developmentTime}
                            </p>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <h5 className="font-medium text-slate-900">Digital Products</h5>
                          {journeyData.build.digitalProducts.map((product: any, i: number) => (
                            <div key={i} className="p-3 bg-white border rounded-lg">
                              <div className="flex justify-between items-center">
                                <div>
                                  <p className="font-medium text-slate-900">{product.name}</p>
                                  <p className="text-sm text-slate-500">{product.type}</p>
                                </div>
                                <Badge>{product.price}</Badge>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Marketing Results */}
                    {step.id === "marketing" && journeyData.marketing && (
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-3">
                          <div className="p-3 bg-white border rounded-lg">
                            <h5 className="font-medium text-slate-900 mb-2">Social Media Campaigns</h5>
                            <div className="space-y-1 text-sm">
                              <p>
                                <strong>Twitter:</strong> {journeyData.marketing.socialCampaigns.twitter}
                              </p>
                              <p>
                                <strong>LinkedIn:</strong> {journeyData.marketing.socialCampaigns.linkedin}
                              </p>
                              <p>
                                <strong>TikTok:</strong> {journeyData.marketing.socialCampaigns.tiktok}
                              </p>
                            </div>
                          </div>
                          <div className="p-3 bg-white border rounded-lg">
                            <h5 className="font-medium text-slate-900 mb-2">Email Marketing</h5>
                            <div className="space-y-1 text-sm">
                              <p>
                                <strong>Welcome:</strong> {journeyData.marketing.emailFunnels.welcome}
                              </p>
                              <p>
                                <strong>Launch:</strong> {journeyData.marketing.emailFunnels.launch}
                              </p>
                              <p>
                                <strong>Nurture:</strong> {journeyData.marketing.emailFunnels.nurture}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <h5 className="font-medium text-slate-900">Launch Metrics</h5>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="text-center p-3 bg-white border rounded-lg">
                              <p className="text-lg font-bold text-slate-900">
                                {journeyData.marketing.launchMetrics.emailSignups}
                              </p>
                              <p className="text-xs text-slate-500">Email Signups</p>
                            </div>
                            <div className="text-center p-3 bg-white border rounded-lg">
                              <p className="text-lg font-bold text-slate-900">
                                {journeyData.marketing.launchMetrics.socialFollowers}
                              </p>
                              <p className="text-xs text-slate-500">Social Followers</p>
                            </div>
                          </div>
                          <div className="p-3 bg-white border rounded-lg">
                            <p className="font-medium text-slate-900">Website Traffic</p>
                            <p className="text-sm text-slate-600">
                              {journeyData.marketing.launchMetrics.websiteTraffic}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Monetization Results */}
                    {step.id === "monetization" && journeyData.monetization && (
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-3">
                          <div className="p-3 bg-white border rounded-lg">
                            <h5 className="font-medium text-slate-900 mb-2">Pricing Tiers</h5>
                            <div className="space-y-1 text-sm">
                              <p>
                                <strong>Free:</strong> {journeyData.monetization.pricingStrategy.free}
                              </p>
                              <p>
                                <strong>Pro:</strong> {journeyData.monetization.pricingStrategy.pro}
                              </p>
                              <p>
                                <strong>Team:</strong> {journeyData.monetization.pricingStrategy.team}
                              </p>
                            </div>
                          </div>
                          <div className="p-3 bg-white border rounded-lg">
                            <h5 className="font-medium text-slate-900 mb-2">Payment Systems</h5>
                            <div className="flex gap-2">
                              {journeyData.monetization.paymentSystems.map((system: string, i: number) => (
                                <Badge key={i} variant="secondary">
                                  {system}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <h5 className="font-medium text-slate-900">Revenue Metrics</h5>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="text-center p-3 bg-white border rounded-lg">
                              <p className="text-lg font-bold text-emerald-600">
                                {journeyData.monetization.revenueMetrics.mrr}
                              </p>
                              <p className="text-xs text-slate-500">Monthly Recurring Revenue</p>
                            </div>
                            <div className="text-center p-3 bg-white border rounded-lg">
                              <p className="text-lg font-bold text-slate-900">
                                {journeyData.monetization.revenueMetrics.customers}
                              </p>
                              <p className="text-xs text-slate-500">Active Customers</p>
                            </div>
                            <div className="text-center p-3 bg-white border rounded-lg">
                              <p className="text-lg font-bold text-slate-900">
                                {journeyData.monetization.revenueMetrics.churnRate}
                              </p>
                              <p className="text-xs text-slate-500">Churn Rate</p>
                            </div>
                            <div className="text-center p-3 bg-white border rounded-lg">
                              <p className="text-lg font-bold text-slate-900">
                                {journeyData.monetization.revenueMetrics.ltv}
                              </p>
                              <p className="text-xs text-slate-500">Customer LTV</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="pt-3 border-t">
                      <h5 className="font-medium text-slate-900 mb-2">Key Outputs:</h5>
                      <div className="flex flex-wrap gap-2">
                        {step.outputs.map((output, i) => (
                          <Badge key={i} variant="outline">
                            {output}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>
          )
        })}
      </div>

      {/* Final Results Summary */}
      {completedSteps === steps.length && (
        <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
          <CardHeader>
            <CardTitle className="text-green-900">🎯 Business Launch Summary</CardTitle>
            <CardDescription>Your complete business built with LaunchFlow.ai</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-white rounded-lg">
                <p className="text-2xl font-bold text-green-600">
                  ${journeyData.monetization?.revenueMetrics?.mrr || "0"}
                </p>
                <p className="text-sm text-slate-600">Monthly Revenue</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <p className="text-2xl font-bold text-blue-600">
                  {journeyData.monetization?.revenueMetrics?.customers || "0"}
                </p>
                <p className="text-sm text-slate-600">Customers</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <p className="text-2xl font-bold text-purple-600">
                  {journeyData.marketing?.launchMetrics?.emailSignups || "0"}
                </p>
                <p className="text-sm text-slate-600">Email Subscribers</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <p className="text-2xl font-bold text-orange-600">4.2%</p>
                <p className="text-sm text-slate-600">Conversion Rate</p>
              </div>
            </div>

            <div className="p-4 bg-white rounded-lg">
              <h4 className="font-semibold text-slate-900 mb-2">🚀 What You've Built:</h4>
              <ul className="grid md:grid-cols-2 gap-2 text-sm text-slate-600">
                <li>✅ Complete business strategy & roadmap</li>
                <li>✅ Professional landing page (4.2% conversion)</li>
                <li>✅ MVP SaaS application with AI features</li>
                <li>✅ 2 digital products generating revenue</li>
                <li>✅ Multi-platform marketing campaigns</li>
                <li>✅ Email funnels with 45% open rates</li>
                <li>✅ Payment systems & pricing strategy</li>
                <li>✅ Revenue optimization systems</li>
              </ul>
            </div>

            <div className="flex gap-3">
              <Button className="flex-1">Download Complete Business Plan</Button>
              <Button variant="outline" className="flex-1">
                Schedule Growth Consultation
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
