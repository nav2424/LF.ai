"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import {
  Target,
  Rocket,
  BarChart3,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Zap,
  Users,
  Globe,
  Mail,
  CreditCard,
  TrendingUp,
  FileText,
  Twitter,
} from "lucide-react"

interface FlowStep {
  id: string
  title: string
  description: string
  icon: any
  duration: number
  status: "pending" | "processing" | "completed"
  results?: any
}

export function CompleteFlowWalkthrough() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const [isProcessing, setIsProcessing] = useState(false)
  const [businessData, setBusinessData] = useState<any>({})

  const [steps, setSteps] = useState<FlowStep[]>([
    {
      id: "strategy",
      title: "Strategy Development",
      description: "AI analyzes your inputs to create a comprehensive business strategy",
      icon: Target,
      duration: 4000,
      status: "pending",
    },
    {
      id: "build",
      title: "Product Creation",
      description: "Generate landing pages, digital products, and MVP applications",
      icon: Rocket,
      duration: 3500,
      status: "pending",
    },
    {
      id: "marketing",
      title: "Marketing Launch",
      description: "Create multi-platform campaigns and content strategies",
      icon: BarChart3,
      duration: 3000,
      status: "pending",
    },
    {
      id: "monetization",
      title: "Revenue Generation",
      description: "Set up payments, pricing, and revenue optimization",
      icon: DollarSign,
      duration: 2500,
      status: "pending",
    },
  ])

  const executeStep = async (stepIndex: number) => {
    setIsProcessing(true)

    // Update step status to processing
    const updatedSteps = [...steps]
    updatedSteps[stepIndex].status = "processing"
    setSteps(updatedSteps)

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, steps[stepIndex].duration))

    // Generate results based on step
    const stepResults = await generateStepResults(steps[stepIndex].id, businessData)

    // Update business data
    setBusinessData((prev) => ({ ...prev, [steps[stepIndex].id]: stepResults }))

    // Mark step as completed
    updatedSteps[stepIndex].status = "completed"
    updatedSteps[stepIndex].results = stepResults
    setSteps(updatedSteps)

    setIsProcessing(false)

    // Move to next step if available
    if (stepIndex < steps.length - 1) {
      setCurrentStepIndex(stepIndex + 1)
    }
  }

  const generateStepResults = async (stepId: string, existingData: any) => {
    switch (stepId) {
      case "strategy":
        return {
          businessConcept: {
            name: "TaskFlow Pro",
            tagline: "AI-Powered Productivity for Remote Teams",
            description:
              "A comprehensive productivity platform that uses AI to optimize task management, scheduling, and team collaboration for remote workers and distributed teams.",
          },
          marketAnalysis: {
            marketSize: "$4.2B",
            targetAudience: "Remote workers, freelancers, and small teams (2-50 people)",
            competitorCount: 47,
            marketGap: "Lack of AI-powered automation in existing productivity tools",
            demandScore: 87,
            competitionLevel: "Medium-High",
          },
          businessModel: {
            type: "SaaS Subscription",
            revenueStreams: ["Monthly subscriptions", "Annual plans", "Enterprise licenses", "Add-on features"],
            pricingModel: "Freemium with tiered pricing",
          },
          projections: {
            month1: { users: 50, revenue: 0 },
            month3: { users: 500, revenue: 2400 },
            month6: { users: 1200, revenue: 8200 },
            month12: { users: 2800, revenue: 24500 },
          },
          keyMetrics: {
            marketOpportunity: 87,
            revenuePotential: 82,
            successProbability: 79,
            timeToMarket: "3-4 months",
          },
          actionPlan: [
            "Validate concept with 50 potential users",
            "Build MVP with core features",
            "Launch beta program",
            "Implement user feedback",
            "Scale marketing efforts",
            "Expand feature set",
            "Pursue enterprise clients",
          ],
        }

      case "build":
        return {
          landingPage: {
            title: "TaskFlow Pro - AI-Powered Productivity",
            subtitle: "Transform your workflow with intelligent task management and team collaboration",
            url: "https://taskflowpro.com",
            conversionRate: 4.7,
            features: [
              "AI Task Prioritization",
              "Smart Scheduling",
              "Team Collaboration",
              "Progress Analytics",
              "Integration Hub",
              "Mobile Apps",
            ],
            sections: ["Hero", "Features", "Testimonials", "Pricing", "CTA"],
            techStack: "Next.js + Tailwind CSS + Framer Motion",
            loadTime: "1.2s",
            mobileOptimized: true,
          },
          mvpApplication: {
            name: "TaskFlow Pro Beta",
            version: "1.0.0",
            features: [
              "User Authentication & Profiles",
              "Task Creation & Management",
              "AI-Powered Priority Suggestions",
              "Team Workspaces",
              "Real-time Collaboration",
              "Basic Analytics Dashboard",
              "Email Notifications",
              "Mobile Responsive Design",
            ],
            techStack: {
              frontend: "Next.js 14, TypeScript, Tailwind CSS",
              backend: "Supabase, PostgreSQL",
              ai: "OpenAI GPT-4 API",
              payments: "Stripe",
              hosting: "Vercel",
            },
            developmentTime: "6 weeks",
            betaUsers: 50,
          },
          digitalProducts: [
            {
              name: "The Remote Productivity Playbook",
              type: "PDF Guide",
              pages: 47,
              price: 29,
              description: "Complete guide to maximizing productivity while working remotely",
              chapters: [
                "Setting Up Your Home Office",
                "Time Management Strategies",
                "Communication Best Practices",
                "Tools & Technology Stack",
                "Maintaining Work-Life Balance",
              ],
            },
            {
              name: "Productivity Dashboard Templates",
              type: "Notion Templates",
              price: 19,
              description: "Ready-to-use Notion templates for task management and goal tracking",
              includes: [
                "Personal Task Manager",
                "Team Project Tracker",
                "Goal Setting Framework",
                "Weekly Review Template",
                "Habit Tracker",
              ],
            },
            {
              name: "Remote Team Starter Kit",
              type: "Digital Bundle",
              price: 49,
              description: "Complete toolkit for managing remote teams effectively",
              contents: [
                "Team Communication Guidelines",
                "Meeting Templates & Agendas",
                "Performance Review Framework",
                "Onboarding Checklist",
                "Productivity Metrics Dashboard",
              ],
            },
          ],
        }

      case "marketing":
        return {
          contentStrategy: {
            platforms: ["Twitter", "LinkedIn", "TikTok", "YouTube", "Blog"],
            contentPillars: [
              "Productivity Tips",
              "Remote Work Insights",
              "AI & Technology",
              "Team Management",
              "Behind the Scenes",
            ],
            postingFrequency: "Daily on Twitter, 3x/week on LinkedIn, 2x/week on TikTok",
          },
          socialCampaigns: {
            twitter: {
              strategy: "Daily productivity tips + building in public",
              content: [
                "🧵 Thread: 10 AI productivity hacks that save 2+ hours daily",
                "🚀 Just shipped: Smart task prioritization feature",
                "💡 Tip: Use the 2-minute rule for instant productivity boost",
                "📊 This week's user feedback: 94% say TaskFlow saves them time",
                "🎯 Building in public: Here's our user growth this month",
              ],
              metrics: {
                followers: 1247,
                engagement: "8.4%",
                impressions: "45K/month",
              },
            },
            linkedin: {
              strategy: "Thought leadership + case studies",
              content: [
                "How AI is revolutionizing remote team productivity",
                "Case study: How TaskFlow helped a 20-person team increase output by 40%",
                "The future of work: Why productivity tools need AI",
                "Remote team management: Lessons from 100+ customer interviews",
              ],
              metrics: {
                followers: 892,
                engagement: "12.1%",
                impressions: "28K/month",
              },
            },
            tiktok: {
              strategy: "Quick productivity tips + behind-the-scenes",
              content: [
                "POV: You discover AI can prioritize your tasks",
                "Day in the life of a productivity app founder",
                "3 productivity mistakes everyone makes",
                "How I built a SaaS app in 6 weeks",
              ],
              metrics: {
                followers: 3421,
                views: "127K/month",
                engagement: "15.7%",
              },
            },
          },
          emailMarketing: {
            sequences: [
              {
                name: "Welcome Series",
                emails: 5,
                openRate: 47,
                clickRate: 12,
                sequence: [
                  "Welcome to TaskFlow Pro",
                  "Your first productivity win",
                  "How AI can transform your workflow",
                  "Success story: From chaos to clarity",
                  "Your next steps to productivity mastery",
                ],
              },
              {
                name: "Product Launch Campaign",
                emails: 7,
                openRate: 52,
                clickRate: 18,
                sequence: [
                  "Something big is coming...",
                  "Behind the scenes: Building TaskFlow Pro",
                  "Early access for our community",
                  "Launch day is here!",
                  "Don't miss out - 48 hours left",
                  "Final hours - last chance",
                  "Thank you + what's next",
                ],
              },
              {
                name: "Weekly Newsletter",
                emails: "Ongoing",
                openRate: 38,
                clickRate: 8,
                topics: ["Productivity tip of the week", "Tool spotlight", "User success story", "Industry insights"],
              },
            ],
            listGrowth: {
              subscribers: 2847,
              growthRate: "23%/month",
              sources: ["Landing page", "Social media", "Content upgrades", "Referrals"],
            },
          },
          launchMetrics: {
            websiteTraffic: "4.2K monthly visitors",
            conversionRate: 4.7,
            emailSignups: 2847,
            socialFollowers: 5560,
            contentViews: "200K+ across all platforms",
            brandMentions: 127,
            pressFeatures: 3,
          },
        }

      case "monetization":
        return {
          pricingStrategy: {
            tiers: [
              {
                name: "Free",
                price: 0,
                features: ["Up to 10 tasks", "Basic task management", "1 workspace", "Email support"],
                limitations: "Limited AI features",
                conversionRate: 12,
              },
              {
                name: "Pro",
                price: 29,
                billing: "monthly",
                features: [
                  "Unlimited tasks",
                  "AI task prioritization",
                  "5 workspaces",
                  "Team collaboration",
                  "Advanced analytics",
                  "Priority support",
                ],
                mostPopular: true,
                conversionRate: 8.4,
              },
              {
                name: "Team",
                price: 79,
                billing: "monthly",
                features: [
                  "Everything in Pro",
                  "Unlimited workspaces",
                  "Advanced team features",
                  "Custom integrations",
                  "Admin controls",
                  "Dedicated support",
                ],
                conversionRate: 3.2,
              },
              {
                name: "Enterprise",
                price: "Custom",
                features: [
                  "Everything in Team",
                  "Custom deployment",
                  "Advanced security",
                  "SLA guarantee",
                  "Custom training",
                  "Account manager",
                ],
                conversionRate: 1.1,
              },
            ],
            annualDiscount: 20,
            averageRevenuePerUser: 67,
          },
          paymentSystems: {
            processors: ["Stripe", "PayPal", "Apple Pay", "Google Pay"],
            currencies: ["USD", "EUR", "GBP", "CAD"],
            features: [
              "Subscription management",
              "Automatic billing",
              "Failed payment recovery",
              "Proration handling",
              "Tax calculation",
              "Invoice generation",
            ],
          },
          revenueMetrics: {
            mrr: 12847,
            arr: 154164,
            customers: {
              free: 1247,
              pro: 189,
              team: 23,
              enterprise: 3,
            },
            churnRate: 3.2,
            customerLifetimeValue: 890,
            customerAcquisitionCost: 127,
            paybackPeriod: "4.2 months",
          },
          growthMetrics: {
            monthlyGrowthRate: 23,
            quarterlyGrowthRate: 89,
            userGrowth: "47% month-over-month",
            revenueGrowth: "156% quarter-over-quarter",
            marketPenetration: "0.3% of TAM",
          },
          optimizations: [
            {
              name: "Annual Billing Incentive",
              impact: "+34% LTV increase",
              implementation: "20% discount for annual plans",
              results: "67% of new customers choose annual",
            },
            {
              name: "Upsell Automation",
              impact: "+$15 average revenue per user",
              implementation: "Smart upgrade prompts based on usage",
              results: "23% of free users upgrade within 30 days",
            },
            {
              name: "Failed Payment Recovery",
              impact: "Reduced churn by 1.8%",
              implementation: "Automated email sequence + payment retry",
              results: "Recovered 78% of failed payments",
            },
          ],
        }

      default:
        return {}
    }
  }

  const executeCompleteFlow = async () => {
    for (let i = 0; i < steps.length; i++) {
      setCurrentStepIndex(i)
      await executeStep(i)
      // Small delay between steps for better UX
      await new Promise((resolve) => setTimeout(resolve, 500))
    }
  }

  const resetFlow = () => {
    setCurrentStepIndex(0)
    setBusinessData({})
    setSteps(
      steps.map((step, index) => ({
        ...step,
        status: index === 0 ? "pending" : "pending",
      })),
    )
  }

  const completedSteps = steps.filter((step) => step.status === "completed").length
  const progressPercentage = (completedSteps / steps.length) * 100

  return (
    <div className="space-y-8">
      {/* Header */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-3">
            <Zap className="h-8 w-8 text-blue-600" />
            Complete Business Journey: Strategy → Monetization
          </CardTitle>
          <CardDescription className="text-lg">
            Watch as LaunchFlow.ai transforms a simple business idea into a fully operational, revenue-generating
            company
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-slate-600">Journey Progress</span>
            <span className="text-sm font-medium text-slate-900">
              {completedSteps} of {steps.length} steps completed
            </span>
          </div>
          <Progress value={progressPercentage} className="h-4" />

          <div className="flex gap-3">
            <Button
              onClick={executeCompleteFlow}
              disabled={isProcessing || completedSteps === steps.length}
              className="flex-1"
            >
              {isProcessing ? (
                <>
                  <Zap className="h-4 w-4 mr-2 animate-pulse" />
                  Processing Step {currentStepIndex + 1}...
                </>
              ) : completedSteps === steps.length ? (
                "Journey Complete! 🎉"
              ) : (
                <>
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Execute Complete Flow
                </>
              )}
            </Button>
            <Button onClick={resetFlow} variant="outline">
              Reset Journey
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Journey Steps */}
      <div className="space-y-8">
        {steps.map((step, index) => {
          const Icon = step.icon
          const isActive = index === currentStepIndex
          const isCompleted = step.status === "completed"
          const isProcessing = step.status === "processing"

          return (
            <Card
              key={step.id}
              className={`transition-all duration-500 ${
                isActive
                  ? "ring-2 ring-blue-500 bg-blue-50"
                  : isCompleted
                    ? "bg-green-50 border-green-200"
                    : "opacity-70"
              }`}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-3 rounded-xl ${
                        isCompleted ? "bg-green-100" : isActive ? "bg-blue-100" : "bg-slate-100"
                      }`}
                    >
                      {isCompleted ? (
                        <CheckCircle className="h-8 w-8 text-green-600" />
                      ) : isProcessing ? (
                        <Zap className="h-8 w-8 text-blue-600 animate-pulse" />
                      ) : (
                        <Icon className={`h-8 w-8 ${isActive ? "text-blue-600" : "text-slate-400"}`} />
                      )}
                    </div>
                    <div>
                      <CardTitle className="text-xl">
                        Step {index + 1}: {step.title}
                      </CardTitle>
                      <CardDescription className="text-base">{step.description}</CardDescription>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    {isProcessing && (
                      <div className="flex items-center gap-2">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
                        <span className="text-sm text-blue-600">Processing...</span>
                      </div>
                    )}

                    {isCompleted && (
                      <Badge className="bg-green-100 text-green-800 text-sm px-3 py-1">✅ Completed</Badge>
                    )}

                    {isActive && !isProcessing && (
                      <Button onClick={() => executeStep(index)}>
                        Execute Step
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    )}
                  </div>
                </div>
              </CardHeader>

              {/* Step Results */}
              {isCompleted && step.results && (
                <CardContent className="pt-0">
                  <Separator className="mb-6" />

                  {/* Strategy Results */}
                  {step.id === "strategy" && (
                    <div className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                              <Target className="h-5 w-5 text-blue-600" />
                              Business Concept
                            </h4>
                            <div className="bg-white p-4 rounded-lg border">
                              <h5 className="font-medium text-slate-900">{step.results.businessConcept.name}</h5>
                              <p className="text-sm text-slate-600 mb-2">{step.results.businessConcept.tagline}</p>
                              <p className="text-sm text-slate-700">{step.results.businessConcept.description}</p>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                              <Users className="h-5 w-5 text-purple-600" />
                              Market Analysis
                            </h4>
                            <div className="bg-white p-4 rounded-lg border space-y-2">
                              <div className="flex justify-between">
                                <span className="text-sm text-slate-600">Market Size:</span>
                                <span className="font-medium">{step.results.marketAnalysis.marketSize}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-sm text-slate-600">Competitors:</span>
                                <span className="font-medium">{step.results.marketAnalysis.competitorCount}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-sm text-slate-600">Demand Score:</span>
                                <span className="font-medium text-green-600">
                                  {step.results.marketAnalysis.demandScore}/100
                                </span>
                              </div>
                              <p className="text-sm text-slate-700 pt-2 border-t">
                                <strong>Gap Identified:</strong> {step.results.marketAnalysis.marketGap}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                              <TrendingUp className="h-5 w-5 text-green-600" />
                              Revenue Projections
                            </h4>
                            <div className="bg-white p-4 rounded-lg border">
                              <div className="grid grid-cols-2 gap-4">
                                <div className="text-center">
                                  <p className="text-2xl font-bold text-slate-900">
                                    ${step.results.projections.month6.revenue.toLocaleString()}
                                  </p>
                                  <p className="text-sm text-slate-500">Month 6 Revenue</p>
                                </div>
                                <div className="text-center">
                                  <p className="text-2xl font-bold text-slate-900">
                                    {step.results.projections.month6.users.toLocaleString()}
                                  </p>
                                  <p className="text-sm text-slate-500">Month 6 Users</p>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold text-slate-900 mb-2">Success Metrics</h4>
                            <div className="grid grid-cols-3 gap-2">
                              <div className="text-center p-3 bg-white rounded-lg border">
                                <p className="text-lg font-bold text-blue-600">
                                  {step.results.keyMetrics.marketOpportunity}%
                                </p>
                                <p className="text-xs text-slate-500">Market Opportunity</p>
                              </div>
                              <div className="text-center p-3 bg-white rounded-lg border">
                                <p className="text-lg font-bold text-green-600">
                                  {step.results.keyMetrics.revenuePotential}%
                                </p>
                                <p className="text-xs text-slate-500">Revenue Potential</p>
                              </div>
                              <div className="text-center p-3 bg-white rounded-lg border">
                                <p className="text-lg font-bold text-purple-600">
                                  {step.results.keyMetrics.successProbability}%
                                </p>
                                <p className="text-xs text-slate-500">Success Probability</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-slate-900 mb-3">📋 Action Plan</h4>
                        <div className="grid md:grid-cols-2 gap-2">
                          {step.results.actionPlan.map((action: string, i: number) => (
                            <div key={i} className="flex items-center gap-3 p-3 bg-white rounded-lg border">
                              <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium">
                                {i + 1}
                              </span>
                              <span className="text-sm text-slate-700">{action}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Build Results */}
                  {step.id === "build" && (
                    <div className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                              <Globe className="h-5 w-5 text-blue-600" />
                              Landing Page
                            </h4>
                            <div className="bg-white p-4 rounded-lg border">
                              <h5 className="font-medium text-slate-900 mb-2">{step.results.landingPage.title}</h5>
                              <p className="text-sm text-slate-600 mb-3">{step.results.landingPage.subtitle}</p>
                              <div className="flex items-center justify-between mb-3">
                                <span className="text-sm text-slate-600">Conversion Rate:</span>
                                <span className="font-medium text-green-600">
                                  {step.results.landingPage.conversionRate}%
                                </span>
                              </div>
                              <div className="flex flex-wrap gap-1">
                                {step.results.landingPage.features.slice(0, 4).map((feature: string, i: number) => (
                                  <Badge key={i} variant="secondary" className="text-xs">
                                    {feature}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                              <Rocket className="h-5 w-5 text-green-600" />
                              MVP Application
                            </h4>
                            <div className="bg-white p-4 rounded-lg border">
                              <h5 className="font-medium text-slate-900 mb-2">{step.results.mvpApplication.name}</h5>
                              <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                  <span className="text-slate-600">Development Time:</span>
                                  <span className="font-medium">{step.results.mvpApplication.developmentTime}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-slate-600">Beta Users:</span>
                                  <span className="font-medium">{step.results.mvpApplication.betaUsers}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-slate-600">Features:</span>
                                  <span className="font-medium">{step.results.mvpApplication.features.length}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                            <FileText className="h-5 w-5 text-purple-600" />
                            Digital Products
                          </h4>
                          <div className="space-y-3">
                            {step.results.digitalProducts.map((product: any, i: number) => (
                              <div key={i} className="bg-white p-4 rounded-lg border">
                                <div className="flex justify-between items-start mb-2">
                                  <h5 className="font-medium text-slate-900">{product.name}</h5>
                                  <Badge>${product.price}</Badge>
                                </div>
                                <p className="text-sm text-slate-600 mb-2">{product.description}</p>
                                <div className="flex items-center gap-2">
                                  <Badge variant="outline" className="text-xs">
                                    {product.type}
                                  </Badge>
                                  {product.pages && (
                                    <span className="text-xs text-slate-500">{product.pages} pages</span>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Marketing Results */}
                  {step.id === "marketing" && (
                    <div className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                              <Twitter className="h-5 w-5 text-blue-500" />
                              Social Media Performance
                            </h4>
                            <div className="space-y-3">
                              <div className="bg-white p-4 rounded-lg border">
                                <div className="flex justify-between items-center mb-2">
                                  <span className="font-medium text-slate-900">Twitter</span>
                                  <Badge variant="secondary">
                                    {step.results.socialCampaigns.twitter.metrics.followers} followers
                                  </Badge>
                                </div>
                                <div className="text-sm text-slate-600">
                                  <p>Engagement: {step.results.socialCampaigns.twitter.metrics.engagement}</p>
                                  <p>Monthly Impressions: {step.results.socialCampaigns.twitter.metrics.impressions}</p>
                                </div>
                              </div>

                              <div className="bg-white p-4 rounded-lg border">
                                <div className="flex justify-between items-center mb-2">
                                  <span className="font-medium text-slate-900">LinkedIn</span>
                                  <Badge variant="secondary">
                                    {step.results.socialCampaigns.linkedin.metrics.followers} followers
                                  </Badge>
                                </div>
                                <div className="text-sm text-slate-600">
                                  <p>Engagement: {step.results.socialCampaigns.linkedin.metrics.engagement}</p>
                                  <p>
                                    Monthly Impressions: {step.results.socialCampaigns.linkedin.metrics.impressions}
                                  </p>
                                </div>
                              </div>

                              <div className="bg-white p-4 rounded-lg border">
                                <div className="flex justify-between items-center mb-2">
                                  <span className="font-medium text-slate-900">TikTok</span>
                                  <Badge variant="secondary">
                                    {step.results.socialCampaigns.tiktok.metrics.followers} followers
                                  </Badge>
                                </div>
                                <div className="text-sm text-slate-600">
                                  <p>Engagement: {step.results.socialCampaigns.tiktok.metrics.engagement}</p>
                                  <p>Monthly Views: {step.results.socialCampaigns.tiktok.metrics.views}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                              <Mail className="h-5 w-5 text-green-600" />
                              Email Marketing
                            </h4>
                            <div className="space-y-3">
                              {step.results.emailMarketing.sequences.map((sequence: any, i: number) => (
                                <div key={i} className="bg-white p-4 rounded-lg border">
                                  <div className="flex justify-between items-center mb-2">
                                    <span className="font-medium text-slate-900">{sequence.name}</span>
                                    <div className="flex gap-2">
                                      <Badge variant="outline" className="text-xs">
                                        {sequence.openRate}% open
                                      </Badge>
                                      <Badge variant="outline" className="text-xs">
                                        {sequence.clickRate}% click
                                      </Badge>
                                    </div>
                                  </div>
                                  <p className="text-sm text-slate-600">
                                    {typeof sequence.emails === "number"
                                      ? `${sequence.emails} emails`
                                      : sequence.emails}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold text-slate-900 mb-2">Launch Metrics</h4>
                            <div className="grid grid-cols-2 gap-3">
                              <div className="text-center p-3 bg-white rounded-lg border">
                                <p className="text-lg font-bold text-slate-900">
                                  {step.results.launchMetrics.emailSignups.toLocaleString()}
                                </p>
                                <p className="text-xs text-slate-500">Email Subscribers</p>
                              </div>
                              <div className="text-center p-3 bg-white rounded-lg border">
                                <p className="text-lg font-bold text-slate-900">
                                  {step.results.launchMetrics.socialFollowers.toLocaleString()}
                                </p>
                                <p className="text-xs text-slate-500">Social Followers</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Monetization Results */}
                  {step.id === "monetization" && (
                    <div className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                              <DollarSign className="h-5 w-5 text-emerald-600" />
                              Pricing Strategy
                            </h4>
                            <div className="space-y-2">
                              {step.results.pricingStrategy.tiers.map((tier: any, i: number) => (
                                <div
                                  key={i}
                                  className="bg-white p-3 rounded-lg border flex justify-between items-center"
                                >
                                  <div>
                                    <span className="font-medium text-slate-900">{tier.name}</span>
                                    {tier.mostPopular && <Badge className="ml-2 text-xs">Most Popular</Badge>}
                                  </div>
                                  <div className="text-right">
                                    <p className="font-bold text-slate-900">
                                      {typeof tier.price === "number" ? `$${tier.price}` : tier.price}
                                      {typeof tier.price === "number" && tier.price > 0 && (
                                        <span className="text-sm text-slate-500">/mo</span>
                                      )}
                                    </p>
                                    <p className="text-xs text-slate-500">{tier.conversionRate}% conversion</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                              <CreditCard className="h-5 w-5 text-blue-600" />
                              Payment Systems
                            </h4>
                            <div className="bg-white p-4 rounded-lg border">
                              <div className="flex flex-wrap gap-2 mb-3">
                                {step.results.paymentSystems.processors.map((processor: string, i: number) => (
                                  <Badge key={i} variant="secondary">
                                    {processor}
                                  </Badge>
                                ))}
                              </div>
                              <p className="text-sm text-slate-600">
                                Supporting {step.results.paymentSystems.currencies.length} currencies with automated
                                billing
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                              <TrendingUp className="h-5 w-5 text-green-600" />
                              Revenue Metrics
                            </h4>
                            <div className="grid grid-cols-2 gap-3">
                              <div className="text-center p-4 bg-white rounded-lg border">
                                <p className="text-2xl font-bold text-emerald-600">
                                  ${step.results.revenueMetrics.mrr.toLocaleString()}
                                </p>
                                <p className="text-sm text-slate-500">Monthly Recurring Revenue</p>
                              </div>
                              <div className="text-center p-4 bg-white rounded-lg border">
                                <p className="text-2xl font-bold text-slate-900">
                                  ${step.results.revenueMetrics.arr.toLocaleString()}
                                </p>
                                <p className="text-sm text-slate-500">Annual Recurring Revenue</p>
                              </div>
                              <div className="text-center p-4 bg-white rounded-lg border">
                                <p className="text-2xl font-bold text-blue-600">
                                  {step.results.revenueMetrics.churnRate}%
                                </p>
                                <p className="text-sm text-slate-500">Monthly Churn Rate</p>
                              </div>
                              <div className="text-center p-4 bg-white rounded-lg border">
                                <p className="text-2xl font-bold text-purple-600">
                                  ${step.results.revenueMetrics.customerLifetimeValue}
                                </p>
                                <p className="text-sm text-slate-500">Customer LTV</p>
                              </div>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold text-slate-900 mb-2">Customer Breakdown</h4>
                            <div className="bg-white p-4 rounded-lg border space-y-2">
                              <div className="flex justify-between text-sm">
                                <span className="text-slate-600">Free Users:</span>
                                <span className="font-medium">
                                  {step.results.revenueMetrics.customers.free.toLocaleString()}
                                </span>
                              </div>
                              <div className="flex justify-between text-sm">
                                <span className="text-slate-600">Pro Users:</span>
                                <span className="font-medium">{step.results.revenueMetrics.customers.pro}</span>
                              </div>
                              <div className="flex justify-between text-sm">
                                <span className="text-slate-600">Team Users:</span>
                                <span className="font-medium">{step.results.revenueMetrics.customers.team}</span>
                              </div>
                              <div className="flex justify-between text-sm">
                                <span className="text-slate-600">Enterprise:</span>
                                <span className="font-medium">{step.results.revenueMetrics.customers.enterprise}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-slate-900 mb-3">🚀 Revenue Optimizations</h4>
                        <div className="grid md:grid-cols-3 gap-4">
                          {step.results.optimizations.map((opt: any, i: number) => (
                            <div key={i} className="bg-white p-4 rounded-lg border">
                              <h5 className="font-medium text-slate-900 mb-2">{opt.name}</h5>
                              <p className="text-sm text-slate-600 mb-2">{opt.implementation}</p>
                              <div className="space-y-1">
                                <Badge className="bg-green-100 text-green-800 text-xs">{opt.impact}</Badge>
                                <p className="text-xs text-slate-500">{opt.results}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              )}
            </Card>
          )
        })}
      </div>

      {/* Final Summary */}
      {completedSteps === steps.length && (
        <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
          <CardHeader>
            <CardTitle className="text-2xl text-green-900 flex items-center gap-3">
              🎉 Business Launch Complete!
            </CardTitle>
            <CardDescription className="text-lg text-green-700">
              Your complete business has been built from strategy to monetization
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-4 gap-4">
              <div className="text-center p-6 bg-white rounded-lg border">
                <p className="text-3xl font-bold text-emerald-600">
                  ${businessData.monetization?.revenueMetrics?.mrr?.toLocaleString() || "0"}
                </p>
                <p className="text-sm text-slate-600">Monthly Recurring Revenue</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg border">
                <p className="text-3xl font-bold text-blue-600">
                  {Object.values(businessData.monetization?.revenueMetrics?.customers || {})
                    .reduce((a: any, b: any) => a + b, 0)
                    .toLocaleString()}
                </p>
                <p className="text-sm text-slate-600">Total Customers</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg border">
                <p className="text-3xl font-bold text-purple-600">
                  {businessData.marketing?.launchMetrics?.socialFollowers?.toLocaleString() || "0"}
                </p>
                <p className="text-sm text-slate-600">Social Followers</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg border">
                <p className="text-3xl font-bold text-orange-600">
                  {businessData.build?.landingPage?.conversionRate || "0"}%
                </p>
                <p className="text-sm text-slate-600">Conversion Rate</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border">
              <h4 className="font-semibold text-slate-900 mb-4">🚀 What You've Built:</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <p className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Complete business strategy & market analysis
                  </p>
                  <p className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Professional landing page (4.7% conversion)
                  </p>
                  <p className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Full-featured MVP SaaS application
                  </p>
                  <p className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />3 digital products generating revenue
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Multi-platform marketing campaigns
                  </p>
                  <p className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Email funnels with 47% open rates
                  </p>
                  <p className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Complete payment & subscription system
                  </p>
                  <p className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Revenue optimization strategies
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Button className="flex-1">
                <FileText className="h-4 w-4 mr-2" />
                Download Complete Business Plan
              </Button>
              <Button variant="outline" className="flex-1">
                Schedule Growth Strategy Call
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
