"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Rocket, Globe, FileText, Smartphone, Code, Zap, ExternalLink, Copy, CheckCircle } from "lucide-react"

export function BuildZone() {
  const [isBuilding, setIsBuilding] = useState(false)
  const [generatedContent, setGeneratedContent] = useState<any>({})

  const handleBuild = async (type: string) => {
    setIsBuilding(true)
    // Simulate building process
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const newContent = { ...generatedContent }

    if (type === "landing") {
      newContent.landingPage = {
        title: "Revolutionary Productivity Dashboard",
        subtitle: "Transform your workflow with AI-powered task management",
        features: ["Smart task prioritization", "Time tracking automation", "Team collaboration tools"],
        cta: "Start Free Trial",
        generated: true,
      }
    } else if (type === "notion") {
      newContent.notionTemplate = {
        name: "Ultimate Startup Dashboard",
        description: "Complete business management system with KPIs, roadmap, and team tracking",
        price: "$29",
        features: ["Goal tracking", "Financial dashboard", "Team management", "Project roadmap"],
        generated: true,
      }
    } else if (type === "pdf") {
      newContent.pdfGuide = {
        title: "The Complete Guide to Building a SaaS Business",
        pages: 47,
        chapters: ["Market Research", "MVP Development", "Marketing Strategy", "Scaling Operations"],
        price: "$19",
        generated: true,
      }
    } else if (type === "mvp") {
      newContent.mvp = {
        name: "TaskFlow Pro",
        description: "AI-powered task management SaaS",
        features: [
          "User authentication",
          "Task management",
          "Team collaboration",
          "Analytics dashboard",
          "Stripe integration",
        ],
        techStack: ["Next.js", "Supabase", "Stripe", "Tailwind CSS"],
        generated: true,
      }
    }

    setGeneratedContent(newContent)
    setIsBuilding(false)
  }

  const handleTemplateUse = async (templateType: string) => {
    setIsBuilding(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const templates = {
      waitlist: {
        name: "SaaS Waitlist App",
        description: "Beautiful waitlist page with email capture and analytics",
        features: ["Email collection", "Social sharing", "Analytics dashboard", "Admin panel"],
        techStack: ["Next.js", "Supabase", "Tailwind CSS"],
        estimatedTime: "2 hours",
      },
      directory: {
        name: "Resource Directory",
        description: "Curated directory with search, categories, and submissions",
        features: ["Resource listings", "Search & filter", "User submissions", "Admin approval"],
        techStack: ["Next.js", "Supabase", "Stripe", "Tailwind CSS"],
        estimatedTime: "4 hours",
      },
      subscription: {
        name: "Subscription Service",
        description: "Complete subscription platform with content gating",
        features: ["User authentication", "Subscription management", "Content access control", "Payment processing"],
        techStack: ["Next.js", "Supabase", "Stripe", "Tailwind CSS"],
        estimatedTime: "6 hours",
      },
    }

    const template = templates[templateType as keyof typeof templates]

    const newContent = { ...generatedContent }
    newContent.mvpTemplate = {
      ...template,
      generated: true,
      id: Date.now(),
    }

    setGeneratedContent(newContent)
    setIsBuilding(false)
    alert(`🚀 ${template.name} template ready! Check the generated content below.`)
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Build Zone</h2>
        <p className="text-slate-600">Create landing pages, digital products, and MVPs with AI-powered tools</p>
      </div>

      <Tabs defaultValue="landing" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="landing">Landing Pages</TabsTrigger>
          <TabsTrigger value="products">Digital Products</TabsTrigger>
          <TabsTrigger value="mvp">MVP Builder</TabsTrigger>
        </TabsList>

        <TabsContent value="landing" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-blue-600" />
                  AI Landing Page Generator
                </CardTitle>
                <CardDescription>Create high-converting landing pages in minutes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div>
                      <p className="font-medium text-slate-900">Framer Template</p>
                      <p className="text-sm text-slate-500">Professional, interactive design</p>
                    </div>
                    <Badge>Recommended</Badge>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div>
                      <p className="font-medium text-slate-900">HTML/CSS</p>
                      <p className="text-sm text-slate-500">Custom coded, lightweight</p>
                    </div>
                    <Badge variant="outline">Advanced</Badge>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div>
                      <p className="font-medium text-slate-900">React Component</p>
                      <p className="text-sm text-slate-500">For developers</p>
                    </div>
                    <Badge variant="outline">Pro</Badge>
                  </div>
                </div>

                <Button onClick={() => handleBuild("landing")} className="w-full" disabled={isBuilding}>
                  {isBuilding ? (
                    <>
                      <Zap className="h-4 w-4 mr-2 animate-pulse" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Rocket className="h-4 w-4 mr-2" />
                      Generate Landing Page
                    </>
                  )}
                </Button>
                {generatedContent.landingPage && (
                  <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2">🎉 Landing Page Generated!</h4>
                    <div className="space-y-2">
                      <p className="font-medium text-slate-900">{generatedContent.landingPage.title}</p>
                      <p className="text-sm text-slate-600">{generatedContent.landingPage.subtitle}</p>
                      <div className="flex flex-wrap gap-2">
                        {generatedContent.landingPage.features.map((feature: string, index: number) => (
                          <Badge key={index} variant="secondary">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-2 mt-3">
                        <Button size="sm">
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Preview
                        </Button>
                        <Button size="sm" variant="outline">
                          <Copy className="h-4 w-4 mr-1" />
                          Get Code
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Landing Pages</CardTitle>
                <CardDescription>Your generated pages and templates</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <Globe className="h-8 w-8 text-blue-600" />
                    <div>
                      <p className="font-medium text-slate-900">SaaS Product Launch</p>
                      <p className="text-sm text-slate-500">Created 2 days ago</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <Globe className="h-8 w-8 text-green-600" />
                    <div>
                      <p className="font-medium text-slate-900">Digital Course Landing</p>
                      <p className="text-sm text-slate-500">Created 1 week ago</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="products" className="space-y-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <FileText className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-slate-900 mb-2">Notion Templates</h3>
                <p className="text-sm text-slate-600 mb-4">Create productivity templates, dashboards, and systems</p>
                <Button className="w-full" onClick={() => handleBuild("notion")}>
                  Create Template
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <FileText className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-slate-900 mb-2">PDF Guides</h3>
                <p className="text-sm text-slate-600 mb-4">Generate comprehensive guides, ebooks, and resources</p>
                <Button className="w-full" onClick={() => handleBuild("pdf")}>
                  Generate Guide
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Code className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold text-slate-900 mb-2">Code Kits</h3>
                <p className="text-sm text-slate-600 mb-4">Starter templates, components, and boilerplates</p>
                <Button className="w-full" onClick={() => handleBuild("code")}>
                  Build Kit
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Product Library</CardTitle>
              <CardDescription>Your created digital products</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <FileText className="h-8 w-8 text-blue-600" />
                    <div>
                      <p className="font-medium text-slate-900">Startup Notion Dashboard</p>
                      <p className="text-sm text-slate-500">Template • $29</p>
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Live</Badge>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <FileText className="h-8 w-8 text-green-600" />
                    <div>
                      <p className="font-medium text-slate-900">Marketing Strategy Guide</p>
                      <p className="text-sm text-slate-500">PDF • $19</p>
                    </div>
                  </div>
                  <Badge variant="outline">Draft</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="mvp" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Smartphone className="h-5 w-5 text-purple-600" />
                  MVP Builder
                </CardTitle>
                <CardDescription>Build simple SaaS applications with forms, database, and payments</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="p-3 bg-slate-50 rounded-lg">
                    <h4 className="font-medium text-slate-900 mb-2">Included Features:</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• User authentication (Supabase)</li>
                      <li>• Database integration</li>
                      <li>• Payment processing (Stripe)</li>
                      <li>• Responsive design</li>
                      <li>• Admin dashboard</li>
                    </ul>
                  </div>
                </div>

                <Button className="w-full" onClick={() => handleBuild("mvp")}>
                  <Code className="h-4 w-4 mr-2" />
                  Build MVP
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>MVP Templates</CardTitle>
                <CardDescription>Pre-built application templates</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 border rounded-lg">
                  <h4 className="font-medium text-slate-900">SaaS Waitlist</h4>
                  <p className="text-sm text-slate-500 mb-2">Collect emails and validate demand</p>
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full"
                    onClick={() => handleTemplateUse("waitlist")}
                    disabled={isBuilding}
                  >
                    {isBuilding ? "Generating..." : "Use Template"}
                  </Button>
                </div>

                <div className="p-3 border rounded-lg">
                  <h4 className="font-medium text-slate-900">Directory App</h4>
                  <p className="text-sm text-slate-500 mb-2">List and categorize resources</p>
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full"
                    onClick={() => handleTemplateUse("directory")}
                    disabled={isBuilding}
                  >
                    {isBuilding ? "Generating..." : "Use Template"}
                  </Button>
                </div>

                <div className="p-3 border rounded-lg">
                  <h4 className="font-medium text-slate-900">Subscription Service</h4>
                  <p className="text-sm text-slate-500 mb-2">Recurring payments and content</p>
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full"
                    onClick={() => handleTemplateUse("subscription")}
                    disabled={isBuilding}
                  >
                    {isBuilding ? "Generating..." : "Use Template"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          {generatedContent.mvpTemplate && (
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>🎉 MVP Template Generated!</CardTitle>
                <CardDescription>Your application is ready to deploy</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">{generatedContent.mvpTemplate.name}</h4>
                  <p className="text-sm text-slate-600 mb-3">{generatedContent.mvpTemplate.description}</p>
                </div>

                <div>
                  <h5 className="font-medium text-slate-900 mb-2">✨ Features Included:</h5>
                  <div className="grid grid-cols-2 gap-2">
                    {generatedContent.mvpTemplate.features.map((feature: string, index: number) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h5 className="font-medium text-slate-900 mb-2">🛠 Tech Stack:</h5>
                  <div className="flex flex-wrap gap-2">
                    {generatedContent.mvpTemplate.techStack.map((tech: string, index: number) => (
                      <Badge key={index} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <div>
                    <p className="font-medium text-blue-900">Estimated Setup Time</p>
                    <p className="text-sm text-blue-700">{generatedContent.mvpTemplate.estimatedTime}</p>
                  </div>
                  <Badge className="bg-blue-100 text-blue-800">Ready to Deploy</Badge>
                </div>

                <div className="flex gap-3">
                  <Button className="flex-1">
                    <Code className="h-4 w-4 mr-2" />
                    Download Code
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Deploy to Vercel
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
