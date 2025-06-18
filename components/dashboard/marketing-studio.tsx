"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import { BarChart3, Twitter, Video, Mail, TrendingUp, Copy, RefreshCw, Zap } from "lucide-react"

export function MarketingStudio() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedContent, setGeneratedContent] = useState("")
  const [campaigns, setCampaigns] = useState<any[]>([])
  const [contentIdeas, setContentIdeas] = useState<any>({})
  const [emailFunnels, setEmailFunnels] = useState<any[]>([])

  const handleGenerate = async (type: string) => {
    setIsGenerating(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const sampleContent = {
      twitter: `🚀 Just launched my new productivity dashboard! 

After 6 months of building, I'm finally ready to share this with the world.

✅ Track goals
✅ Manage projects  
✅ Boost productivity

Who wants early access? 👇

#productivity #startup #buildinpublic`,
      tiktok: `Hook: "I built a $5K/month side hustle in 90 days"

Script:
- Show before/after income screenshots
- Quick montage of building process
- Reveal the 3 key strategies that worked
- End with "Comment GUIDE for my free roadmap"

#sidehustle #entrepreneur #passiveincome`,
      email: `Subject: The productivity hack that changed everything

Hey [Name],

Last month I was drowning in tasks, missing deadlines, and feeling overwhelmed.

Today? I'm more productive than ever.

The difference? One simple system that takes 5 minutes to set up.

I've packaged this into a free guide that's already helped 500+ people.

Want it?

Reply 'YES' and I'll send it over.

Best,
[Your name]`,
    }

    setGeneratedContent(sampleContent[type as keyof typeof sampleContent] || "")

    // Add to campaigns list
    const newCampaign = {
      id: Date.now(),
      type,
      content: sampleContent[type as keyof typeof sampleContent],
      status: "draft",
      created: new Date().toLocaleDateString(),
    }

    setCampaigns((prev) => [newCampaign, ...prev])
    setIsGenerating(false)
  }

  const handleCreateLaunchKit = async () => {
    setIsGenerating(true)

    // Generate content for all platforms
    await handleGenerate("twitter")
    await handleGenerate("tiktok")
    await handleGenerate("email")

    // Show success message
    alert("🎉 Complete launch kit generated! Check each platform tab for your content.")
    setIsGenerating(false)
  }

  const handleContentGeneration = async (type: string) => {
    setIsGenerating(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const contentTypes = {
      hooks: [
        "I made $10K in 30 days with this simple strategy...",
        "The productivity hack that changed my life forever",
        "Why 99% of entrepreneurs fail (and how to be the 1%)",
        "I built a 6-figure business with just 3 tools",
        "The mistake that cost me $50K (don't repeat it)",
      ],
      scripts: {
        title: "How I Built a $5K/Month Side Hustle",
        hook: "What if I told you that you could build a profitable business in just 90 days?",
        structure: [
          "Hook: Show the end result",
          "Problem: What you struggled with",
          "Solution: Your breakthrough moment",
          "Process: Step-by-step breakdown",
          "Proof: Show results/testimonials",
          "CTA: How they can get started",
        ],
        duration: "60 seconds",
        platforms: ["TikTok", "Instagram Reels", "YouTube Shorts"],
      },
      calendar: {
        week1: ["Monday: Behind-the-scenes content", "Wednesday: Educational tip", "Friday: Success story"],
        week2: ["Monday: Tool recommendation", "Wednesday: Common mistake", "Friday: Q&A session"],
        week3: ["Monday: Process breakdown", "Wednesday: Industry insight", "Friday: Community highlight"],
        week4: ["Monday: Monthly recap", "Wednesday: Goal setting", "Friday: Celebration post"],
      },
    }

    setContentIdeas((prev) => ({
      ...prev,
      [type]: contentTypes[type as keyof typeof contentTypes],
    }))

    setIsGenerating(false)
    alert(`✅ ${type.charAt(0).toUpperCase() + type.slice(1)} generated successfully!`)
  }

  const handleEmailFunnelGeneration = async (funnelType: string) => {
    setIsGenerating(true)
    await new Promise((resolve) => setTimeout(resolve, 2500))

    const funnelTemplates = {
      welcome: {
        name: "Welcome Series",
        emails: 5,
        sequence: [
          "Email 1: Welcome & Set Expectations",
          "Email 2: Your First Quick Win",
          "Email 3: Common Mistakes to Avoid",
          "Email 4: Success Story & Social Proof",
          "Email 5: Next Steps & Resources",
        ],
        openRate: "45%",
        clickRate: "12%",
      },
      launch: {
        name: "Product Launch Campaign",
        emails: 7,
        sequence: [
          "Email 1: Coming Soon Announcement",
          "Email 2: Behind the Scenes",
          "Email 3: Problem/Solution Story",
          "Email 4: Social Proof & Testimonials",
          "Email 5: Launch Day!",
          "Email 6: Last Chance",
          "Email 7: Thank You & Next Steps",
        ],
        openRate: "52%",
        clickRate: "18%",
      },
      nurture: {
        name: "Weekly Nurture Campaign",
        emails: "Ongoing",
        sequence: [
          "Week 1: Educational Content",
          "Week 2: Case Study",
          "Week 3: Tool/Resource Recommendation",
          "Week 4: Community Spotlight",
        ],
        openRate: "38%",
        clickRate: "8%",
      },
    }

    const newFunnel = {
      id: Date.now(),
      ...funnelTemplates[funnelType as keyof typeof funnelTemplates],
      status: "draft",
      created: new Date().toLocaleDateString(),
    }

    setEmailFunnels((prev) => [newFunnel, ...prev])
    setIsGenerating(false)
    alert(`📧 ${newFunnel.name} created successfully!`)
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Marketing Studio</h2>
        <p className="text-slate-600">Create launch campaigns, social content, and email funnels with AI</p>
      </div>

      <Tabs defaultValue="social" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="social">Social Media</TabsTrigger>
          <TabsTrigger value="email">Email Funnels</TabsTrigger>
          <TabsTrigger value="content">Content Ideas</TabsTrigger>
          <TabsTrigger value="analytics">A/B Testing</TabsTrigger>
        </TabsList>

        <TabsContent value="social" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-purple-600" />
                  AI Content Generator
                </CardTitle>
                <CardDescription>Generate viral content for Twitter, TikTok, and LinkedIn</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-3 gap-3">
                  <Button
                    variant="outline"
                    className="flex flex-col items-center gap-2 h-auto p-4"
                    onClick={() => handleGenerate("twitter")}
                    disabled={isGenerating}
                  >
                    <Twitter className="h-6 w-6 text-blue-500" />
                    <span className="text-sm">Twitter</span>
                  </Button>

                  <Button
                    variant="outline"
                    className="flex flex-col items-center gap-2 h-auto p-4"
                    onClick={() => handleGenerate("tiktok")}
                    disabled={isGenerating}
                  >
                    <Video className="h-6 w-6 text-pink-500" />
                    <span className="text-sm">TikTok</span>
                  </Button>

                  <Button
                    variant="outline"
                    className="flex flex-col items-center gap-2 h-auto p-4"
                    onClick={() => handleGenerate("email")}
                    disabled={isGenerating}
                  >
                    <Mail className="h-6 w-6 text-green-500" />
                    <span className="text-sm">Email</span>
                  </Button>
                </div>

                {generatedContent && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-slate-900">Generated Content</h4>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Copy className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <RefreshCw className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <Textarea
                      value={generatedContent}
                      onChange={(e) => setGeneratedContent(e.target.value)}
                      className="min-h-[200px]"
                    />
                  </div>
                )}

                <Button className="w-full" onClick={handleCreateLaunchKit} disabled={isGenerating}>
                  {isGenerating ? (
                    <>
                      <Zap className="h-4 w-4 mr-2 animate-pulse" />
                      Creating Launch Kit...
                    </>
                  ) : (
                    <>
                      <BarChart3 className="h-4 w-4 mr-2" />
                      Create Launch Kit
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Campaign Performance</CardTitle>
                <CardDescription>Track your marketing campaigns</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Twitter className="h-6 w-6 text-blue-500" />
                      <div>
                        <p className="font-medium text-slate-900">Product Launch Thread</p>
                        <p className="text-sm text-slate-500">Posted 2 days ago</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-slate-900">2.4K</p>
                      <p className="text-sm text-slate-500">impressions</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Video className="h-6 w-6 text-pink-500" />
                      <div>
                        <p className="font-medium text-slate-900">Behind the Scenes</p>
                        <p className="text-sm text-slate-500">Posted 1 week ago</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-slate-900">8.7K</p>
                      <p className="text-sm text-slate-500">views</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Mail className="h-6 w-6 text-green-500" />
                      <div>
                        <p className="font-medium text-slate-900">Welcome Sequence</p>
                        <p className="text-sm text-slate-500">Active campaign</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-slate-900">34%</p>
                      <p className="text-sm text-slate-500">open rate</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-slate-600">Overall Engagement</span>
                    <span className="text-sm font-medium text-slate-900">+23%</span>
                  </div>
                  <Progress value={78} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="email" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-green-600" />
                  Email Funnel Builder
                </CardTitle>
                <CardDescription>Create automated email sequences that convert</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="p-3 border rounded-lg">
                    <h4 className="font-medium text-slate-900">Welcome Series</h4>
                    <p className="text-sm text-slate-500 mb-2">5-email onboarding sequence</p>
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full"
                      onClick={() => handleEmailFunnelGeneration("welcome")}
                      disabled={isGenerating}
                    >
                      {isGenerating ? "Generating..." : "Generate Sequence"}
                    </Button>
                  </div>

                  <div className="p-3 border rounded-lg">
                    <h4 className="font-medium text-slate-900">Product Launch</h4>
                    <p className="text-sm text-slate-500 mb-2">7-day launch campaign</p>
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full"
                      onClick={() => handleEmailFunnelGeneration("launch")}
                      disabled={isGenerating}
                    >
                      {isGenerating ? "Generating..." : "Generate Sequence"}
                    </Button>
                  </div>

                  <div className="p-3 border rounded-lg">
                    <h4 className="font-medium text-slate-900">Nurture Campaign</h4>
                    <p className="text-sm text-slate-500 mb-2">Weekly value-driven emails</p>
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full"
                      onClick={() => handleEmailFunnelGeneration("nurture")}
                      disabled={isGenerating}
                    >
                      {isGenerating ? "Generating..." : "Generate Sequence"}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Generated Funnels</CardTitle>
                <CardDescription>Your created email sequences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {emailFunnels.length === 0 ? (
                  <p className="text-sm text-slate-500 text-center py-8">
                    No funnels created yet. Generate your first email sequence!
                  </p>
                ) : (
                  emailFunnels.map((funnel) => (
                    <div key={funnel.id} className="p-3 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-slate-900">{funnel.name}</h4>
                        <Badge className="bg-blue-100 text-blue-800">{funnel.status}</Badge>
                      </div>
                      <p className="text-sm text-slate-500 mb-2">
                        {typeof funnel.emails === "number" ? `${funnel.emails} emails` : funnel.emails} • Open Rate:{" "}
                        {funnel.openRate} • Click Rate: {funnel.clickRate}
                      </p>
                      <div className="space-y-1">
                        {funnel.sequence.slice(0, 3).map((email: string, index: number) => (
                          <p key={index} className="text-xs text-slate-600">
                            • {email}
                          </p>
                        ))}
                        {funnel.sequence.length > 3 && (
                          <p className="text-xs text-slate-500">+ {funnel.sequence.length - 3} more emails</p>
                        )}
                      </div>
                      <div className="flex gap-2 mt-3">
                        <Button size="sm" variant="outline">
                          Edit
                        </Button>
                        <Button size="sm" variant="outline">
                          Preview
                        </Button>
                        <Button size="sm">Activate</Button>
                      </div>
                    </div>
                  ))
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="content" className="space-y-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-slate-900 mb-2">Viral Hooks</h3>
                <p className="text-sm text-slate-600 mb-4">Generate attention-grabbing opening lines</p>
                <Button className="w-full" onClick={() => handleContentGeneration("hooks")} disabled={isGenerating}>
                  {isGenerating ? "Generating..." : "Generate Hooks"}
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Video className="h-12 w-12 text-pink-600 mx-auto mb-4" />
                <h3 className="font-semibold text-slate-900 mb-2">Video Scripts</h3>
                <p className="text-sm text-slate-600 mb-4">Create engaging video content scripts</p>
                <Button className="w-full" onClick={() => handleContentGeneration("scripts")} disabled={isGenerating}>
                  {isGenerating ? "Writing..." : "Write Scripts"}
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <BarChart3 className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold text-slate-900 mb-2">Content Calendar</h3>
                <p className="text-sm text-slate-600 mb-4">Plan your content strategy</p>
                <Button className="w-full" onClick={() => handleContentGeneration("calendar")} disabled={isGenerating}>
                  {isGenerating ? "Planning..." : "Create Calendar"}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Generated Content Display */}
          {Object.keys(contentIdeas).length > 0 && (
            <div className="space-y-6">
              {contentIdeas.hooks && (
                <Card>
                  <CardHeader>
                    <CardTitle>🔥 Generated Viral Hooks</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {contentIdeas.hooks.map((hook: string, index: number) => (
                        <div key={index} className="p-3 bg-slate-50 rounded-lg flex items-center justify-between">
                          <span className="text-sm">{hook}</span>
                          <Button size="sm" variant="outline">
                            <Copy className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {contentIdeas.scripts && (
                <Card>
                  <CardHeader>
                    <CardTitle>🎬 Video Script Template</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-slate-900">{contentIdeas.scripts.title}</h4>
                        <p className="text-sm text-slate-600">Duration: {contentIdeas.scripts.duration}</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-slate-900 mb-2">Hook:</h5>
                        <p className="text-sm text-slate-600 bg-slate-50 p-3 rounded">{contentIdeas.scripts.hook}</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-slate-900 mb-2">Structure:</h5>
                        <ol className="space-y-1">
                          {contentIdeas.scripts.structure.map((step: string, index: number) => (
                            <li key={index} className="text-sm text-slate-600">
                              {step}
                            </li>
                          ))}
                        </ol>
                      </div>
                      <div className="flex gap-2">
                        {contentIdeas.scripts.platforms.map((platform: string, index: number) => (
                          <Badge key={index} variant="secondary">
                            {platform}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {contentIdeas.calendar && (
                <Card>
                  <CardHeader>
                    <CardTitle>📅 Monthly Content Calendar</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {Object.entries(contentIdeas.calendar).map(([week, content]: [string, any]) => (
                        <div key={week} className="space-y-2">
                          <h5 className="font-medium text-slate-900 capitalize">{week}:</h5>
                          <ul className="space-y-1">
                            {content.map((item: string, index: number) => (
                              <li key={index} className="text-sm text-slate-600 bg-slate-50 p-2 rounded">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          )}
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-orange-600" />
                  A/B Test Manager
                </CardTitle>
                <CardDescription>Test different versions of your content</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="p-3 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-slate-900">Email Subject Lines</h4>
                      <Badge className="bg-blue-100 text-blue-800">Running</Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <p className="text-slate-500">Version A: 24% open rate</p>
                      </div>
                      <div>
                        <p className="text-slate-500">Version B: 31% open rate</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-slate-900">Landing Page Headlines</h4>
                      <Badge variant="outline">Completed</Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <p className="text-slate-500">Version A: 3.2% conversion</p>
                      </div>
                      <div>
                        <p className="text-slate-500 font-medium">Version B: 4.7% conversion ✓</p>
                      </div>
                    </div>
                  </div>
                </div>

                <Button className="w-full">Create New Test</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Performance Insights</CardTitle>
                <CardDescription>Data-driven recommendations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                    <h4 className="font-medium text-green-900 mb-1">Best Performing Content</h4>
                    <p className="text-sm text-green-700">"Behind the scenes" posts get 3x more engagement</p>
                  </div>

                  <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <h4 className="font-medium text-blue-900 mb-1">Optimal Posting Time</h4>
                    <p className="text-sm text-blue-700">Tuesday 2-4 PM shows highest engagement rates</p>
                  </div>

                  <div className="p-3 bg-orange-50 border border-orange-200 rounded-lg">
                    <h4 className="font-medium text-orange-900 mb-1">Audience Insight</h4>
                    <p className="text-sm text-orange-700">Your audience prefers actionable tips over theory</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
