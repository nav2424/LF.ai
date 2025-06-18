"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import { Target, Brain, Users, DollarSign, Lightbulb, CheckCircle, ArrowRight } from "lucide-react"

export function StrategyHub() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [formData, setFormData] = useState({
    skills: "",
    niche: "",
    targetAudience: "",
    incomeGoal: "",
    timeframe: "",
  })
  const [generatedStrategy, setGeneratedStrategy] = useState<any>(null)

  const handleGenerate = async () => {
    setIsGenerating(true)
    // Simulate AI generation
    await new Promise((resolve) => setTimeout(resolve, 3000))

    // Set generated strategy content
    setGeneratedStrategy({
      marketAnalysis: "High demand identified in productivity tools niche with 2.3M monthly searches",
      productIdeas: [
        "AI-powered task management dashboard",
        "Productivity templates bundle",
        "Time-tracking automation tool",
      ],
      marketingPlan: "Multi-channel approach: Twitter (daily tips), LinkedIn (case studies), Email (weekly newsletter)",
      revenueProjection: "$8,200/month within 6 months",
      nextSteps: [
        "Create your first digital product (Notion template)",
        "Build a landing page for validation",
        "Launch Twitter marketing campaign",
        "Set up email capture system",
        "Implement payment processing",
      ],
    })

    setIsGenerating(false)
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Strategy Hub</h2>
        <p className="text-slate-600">Let AI analyze your skills and goals to create a personalized business roadmap</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Input Form */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-blue-600" />
              Business Intelligence Input
            </CardTitle>
            <CardDescription>Tell us about yourself and your goals for AI-powered strategy generation</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="skills">Your Skills & Expertise</Label>
              <Textarea
                id="skills"
                placeholder="e.g., Web development, graphic design, content writing, marketing..."
                value={formData.skills}
                onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="niche">Target Niche/Industry</Label>
              <Input
                id="niche"
                placeholder="e.g., SaaS tools, fitness coaching, digital art..."
                value={formData.niche}
                onChange={(e) => setFormData({ ...formData, niche: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="audience">Target Audience</Label>
              <Input
                id="audience"
                placeholder="e.g., Small business owners, freelancers, students..."
                value={formData.targetAudience}
                onChange={(e) => setFormData({ ...formData, targetAudience: e.target.value })}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="income">Monthly Income Goal</Label>
                <Input
                  id="income"
                  placeholder="$5,000"
                  value={formData.incomeGoal}
                  onChange={(e) => setFormData({ ...formData, incomeGoal: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="timeframe">Timeframe</Label>
                <Input
                  id="timeframe"
                  placeholder="6 months"
                  value={formData.timeframe}
                  onChange={(e) => setFormData({ ...formData, timeframe: e.target.value })}
                />
              </div>
            </div>

            <Button onClick={handleGenerate} className="w-full" disabled={isGenerating}>
              {isGenerating ? (
                <>
                  <Brain className="h-4 w-4 mr-2 animate-pulse" />
                  Generating Strategy...
                </>
              ) : (
                <>
                  <Target className="h-4 w-4 mr-2" />
                  Generate AI Strategy
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Generated Strategy */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-orange-600" />
              Your AI-Generated Roadmap
            </CardTitle>
            <CardDescription>Personalized strategy based on your inputs</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {generatedStrategy ? (
              <div className="space-y-4">
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">✅ Strategy Generated Successfully!</h4>
                  <p className="text-sm text-green-700">{generatedStrategy.marketAnalysis}</p>
                </div>

                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">🎯 Top Product Ideas:</h4>
                    <ul className="space-y-1">
                      {generatedStrategy.productIdeas.map((idea: string, index: number) => (
                        <li key={index} className="text-sm text-slate-600 flex items-center gap-2">
                          <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                          {idea}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">📈 Marketing Strategy:</h4>
                    <p className="text-sm text-slate-600">{generatedStrategy.marketingPlan}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">💰 Revenue Projection:</h4>
                    <p className="text-sm font-medium text-emerald-600">{generatedStrategy.revenueProjection}</p>
                  </div>
                </div>

                <div className="bg-slate-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-900 mb-2">🚀 Your Action Plan:</h4>
                  <ol className="space-y-2 text-sm text-slate-600">
                    {generatedStrategy.nextSteps.map((step: string, index: number) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                          {index + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="flex gap-3">
                  <Button className="flex-1">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Implement Strategy
                  </Button>
                  <Button variant="outline" onClick={() => setGeneratedStrategy(null)}>
                    Generate New Strategy
                  </Button>
                </div>
              </div>
            ) : (
              // Show the existing placeholder content when no strategy is generated
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium text-slate-900">Market Analysis Complete</p>
                    <p className="text-sm text-slate-500">High demand in your niche identified</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium text-slate-900">Product Strategy Defined</p>
                    <p className="text-sm text-slate-500">3 product ideas ranked by potential</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-5 w-5 rounded-full border-2 border-slate-300" />
                  <div>
                    <p className="font-medium text-slate-900">Marketing Plan</p>
                    <p className="text-sm text-slate-500">Multi-channel approach recommended</p>
                  </div>
                </div>
              </div>
            )}

            {generatedStrategy === null && (
              <div className="bg-slate-50 p-4 rounded-lg">
                <h4 className="font-semibold text-slate-900 mb-2">Recommended Next Steps:</h4>
                <ol className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                      1
                    </span>
                    Create your first digital product (Notion template)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-slate-300 text-slate-600 rounded-full w-5 h-5 flex items-center justify-center text-xs">
                      2
                    </span>
                    Build a landing page for validation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-slate-300 text-slate-600 rounded-full w-5 h-5 flex items-center justify-center text-xs">
                      3
                    </span>
                    Launch Twitter marketing campaign
                  </li>
                </ol>
              </div>
            )}

            {generatedStrategy === null && (
              <Button className="w-full" variant="outline">
                <ArrowRight className="h-4 w-4 mr-2" />
                View Full Strategy Report
              </Button>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Strategy Metrics */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm font-medium text-slate-600">Market Opportunity</p>
                <p className="text-2xl font-bold text-slate-900">High</p>
              </div>
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <Progress value={85} className="h-2" />
            <p className="text-xs text-slate-500 mt-2">Based on demand analysis</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm font-medium text-slate-600">Revenue Potential</p>
                <p className="text-2xl font-bold text-slate-900">$8.2K</p>
              </div>
              <DollarSign className="h-8 w-8 text-green-600" />
            </div>
            <Progress value={75} className="h-2" />
            <p className="text-xs text-slate-500 mt-2">Monthly potential within 6 months</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm font-medium text-slate-600">Success Probability</p>
                <p className="text-2xl font-bold text-slate-900">78%</p>
              </div>
              <Target className="h-8 w-8 text-purple-600" />
            </div>
            <Progress value={78} className="h-2" />
            <p className="text-xs text-slate-500 mt-2">Based on your skills & market fit</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
