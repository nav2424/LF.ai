"use client"

import React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Play, ArrowRight, Target, Rocket, BarChart3, DollarSign } from "lucide-react"

interface DemoModalProps {
  isOpen: boolean
  onClose: () => void
}

export function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [currentStep, setCurrentStep] = useState(0)

  const demoSteps = [
    {
      title: "AI Strategy Generation",
      description: "Watch how our AI analyzes your skills and creates a personalized business strategy",
      icon: Target,
      content: (
        <div className="space-y-4">
          <div className="bg-blue-50 rounded-lg p-4">
            <h4 className="font-semibold mb-2">Input Analysis</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Skills: Web Development, Marketing</span>
                <Badge variant="secondary">Analyzed</Badge>
              </div>
              <div className="flex justify-between">
                <span>Target Market: Small Businesses</span>
                <Badge variant="secondary">Validated</Badge>
              </div>
              <div className="flex justify-between">
                <span>Income Goal: $10K/month</span>
                <Badge variant="secondary">Feasible</Badge>
              </div>
            </div>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <h4 className="font-semibold mb-2">AI-Generated Strategy</h4>
            <div className="space-y-2 text-sm">
              <p>
                <strong>Business Model:</strong> SaaS Platform for Local Businesses
              </p>
              <p>
                <strong>Market Size:</strong> $2.4B addressable market
              </p>
              <p>
                <strong>Revenue Projection:</strong> $12K/month by month 6
              </p>
              <p>
                <strong>Success Probability:</strong> 84%
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Automated Product Building",
      description: "See how we generate landing pages, digital products, and MVPs in minutes",
      icon: Rocket,
      content: (
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4">
            <h4 className="font-semibold mb-3">Generated Assets</h4>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white rounded p-3 text-center">
                <div className="w-full h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded mb-2"></div>
                <p className="text-xs font-medium">Landing Page</p>
                <p className="text-xs text-slate-600">4.7% conversion</p>
              </div>
              <div className="bg-white rounded p-3 text-center">
                <div className="w-full h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded mb-2"></div>
                <p className="text-xs font-medium">MVP Dashboard</p>
                <p className="text-xs text-slate-600">Full-featured</p>
              </div>
            </div>
          </div>
          <div className="bg-yellow-50 rounded-lg p-4">
            <h4 className="font-semibold mb-2">Digital Products Created</h4>
            <ul className="text-sm space-y-1">
              <li>• Business Automation Toolkit ($49)</li>
              <li>• Local SEO Checklist ($19)</li>
              <li>• Marketing Templates Bundle ($29)</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Marketing Automation",
      description: "Discover how we create viral content and email campaigns that convert",
      icon: BarChart3,
      content: (
        <div className="space-y-4">
          <div className="bg-purple-50 rounded-lg p-4">
            <h4 className="font-semibold mb-3">Content Generated</h4>
            <div className="space-y-3">
              <div className="bg-white rounded p-3">
                <p className="text-sm font-medium">Twitter Thread</p>
                <p className="text-xs text-slate-600">"5 ways small businesses can automate their workflow..."</p>
                <div className="flex justify-between mt-2 text-xs">
                  <span>Engagement: 12.4%</span>
                  <span>Reach: 15K</span>
                </div>
              </div>
              <div className="bg-white rounded p-3">
                <p className="text-sm font-medium">Email Sequence</p>
                <p className="text-xs text-slate-600">7-part nurture sequence for new subscribers</p>
                <div className="flex justify-between mt-2 text-xs">
                  <span>Open Rate: 47%</span>
                  <span>Click Rate: 8.3%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Revenue Generation",
      description: "See how we set up payments and track your growing revenue",
      icon: DollarSign,
      content: (
        <div className="space-y-4">
          <div className="bg-emerald-50 rounded-lg p-4">
            <h4 className="font-semibold mb-3">Revenue Dashboard</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded p-3 text-center">
                <p className="text-2xl font-bold text-emerald-600">$8,247</p>
                <p className="text-xs text-slate-600">Monthly Revenue</p>
              </div>
              <div className="bg-white rounded p-3 text-center">
                <p className="text-2xl font-bold text-blue-600">156</p>
                <p className="text-xs text-slate-600">Active Customers</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-4 border">
            <h4 className="font-semibold mb-2">Payment Integration</h4>
            <div className="flex items-center justify-between text-sm">
              <span>Stripe Connected</span>
              <Badge className="bg-green-100 text-green-800">Active</Badge>
            </div>
            <div className="flex items-center justify-between text-sm mt-2">
              <span>Auto-billing Setup</span>
              <Badge className="bg-green-100 text-green-800">Configured</Badge>
            </div>
          </div>
        </div>
      ),
    },
  ]

  const nextStep = () => {
    if (currentStep < demoSteps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <Play className="h-6 w-6 text-blue-600" />
            LaunchFlow.ai Platform Demo
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Progress Bar */}
          <div className="flex items-center justify-between">
            <div className="flex space-x-2">
              {demoSteps.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full ${index <= currentStep ? "bg-blue-600" : "bg-slate-200"}`}
                />
              ))}
            </div>
            <Badge variant="outline">
              Step {currentStep + 1} of {demoSteps.length}
            </Badge>
          </div>

          {/* Current Step Content */}
          <Card className="border-2 border-blue-100">
            <CardContent className="p-6">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  {React.createElement(demoSteps[currentStep].icon, { className: "h-6 w-6 text-blue-600" })}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{demoSteps[currentStep].title}</h3>
                  <p className="text-slate-600">{demoSteps[currentStep].description}</p>
                </div>
              </div>

              {demoSteps[currentStep].content}
            </CardContent>
          </Card>

          {/* Video Placeholder */}
          <div className="bg-slate-900 rounded-lg aspect-video flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
            <div className="text-center text-white z-10">
              <Play className="h-16 w-16 mx-auto mb-4 opacity-80" />
              <p className="text-lg font-semibold mb-2">Interactive Demo Video</p>
              <p className="text-sm opacity-80">
                Watch how {demoSteps[currentStep].title.toLowerCase()} works in real-time
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <Button variant="outline" onClick={prevStep} disabled={currentStep === 0}>
              Previous Step
            </Button>

            <div className="flex gap-2">
              {currentStep < demoSteps.length - 1 ? (
                <Button onClick={nextStep}>
                  Next Step <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button onClick={onClose} className="bg-green-600 hover:bg-green-700">
                  Start Your Free Trial <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              )}
            </div>
          </div>

          {/* Demo Stats */}
          <div className="bg-slate-50 rounded-lg p-4">
            <h4 className="font-semibold mb-3 text-center">What You'll Get in Your First 30 Days</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-blue-600">1</p>
                <p className="text-sm text-slate-600">AI Strategy</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-green-600">3+</p>
                <p className="text-sm text-slate-600">Products Built</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-purple-600">50+</p>
                <p className="text-sm text-slate-600">Marketing Assets</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-emerald-600">$5K+</p>
                <p className="text-sm text-slate-600">Revenue Potential</p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
