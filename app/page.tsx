"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Rocket,
  Target,
  Zap,
  DollarSign,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Brain,
  Star,
  Play,
} from "lucide-react"

export default function HomePage() {
  const [activeFeature, setActiveFeature] = useState(0)

  const features = [
    {
      icon: Target,
      title: "AI Strategy Hub",
      description: "Generate personalized business strategies based on your skills, niche, and income goals.",
      color: "blue",
    },
    {
      icon: Rocket,
      title: "Build Zone",
      description: "Create landing pages, digital products, and MVPs with AI-powered tools.",
      color: "purple",
    },
    {
      icon: Zap,
      title: "Marketing Studio",
      description: "Auto-generate social media content, email sequences, and launch campaigns.",
      color: "green",
    },
    {
      icon: DollarSign,
      title: "Monetization Suite",
      description: "Set up payments, optimize pricing, and track revenue with real-time analytics.",
      color: "yellow",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Solo Entrepreneur",
      content: "LaunchFlow.ai helped me go from idea to $5K/month in just 3 months. The AI strategy was spot-on!",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Marcus Rodriguez",
      role: "Digital Creator",
      content:
        "I built and launched 3 products using LaunchFlow. The marketing automation saved me 20+ hours per week.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Emily Johnson",
      role: "Side Hustler",
      content: "From zero to profitable side business in 6 weeks. The step-by-step guidance was incredible.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for beginners starting their first business",
      features: [
        "AI Strategy Generation",
        "Basic Product Builder",
        "Social Media Templates",
        "Revenue Tracking",
        "Email Support",
      ],
      popular: false,
    },
    {
      name: "Growth",
      price: "$79",
      period: "/month",
      description: "For entrepreneurs ready to scale their business",
      features: [
        "Everything in Starter",
        "Advanced AI Tools",
        "Unlimited Products",
        "Marketing Automation",
        "A/B Testing",
        "Priority Support",
      ],
      popular: true,
    },
    {
      name: "Pro",
      price: "$199",
      period: "/month",
      description: "For serious entrepreneurs building multiple revenue streams",
      features: [
        "Everything in Growth",
        "White-label Solutions",
        "Custom Integrations",
        "Advanced Analytics",
        "1-on-1 Strategy Calls",
        "24/7 Support",
      ],
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Rocket className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                LaunchFlow.ai
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">
                How It Works
              </a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
                Pricing
              </a>
              <a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors">
                Success Stories
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <Link href="/auth">
                <Button variant="ghost">Sign In</Button>
              </Link>
              <Link href="/auth">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Start Free Trial
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
              <Sparkles className="h-4 w-4 mr-2" />
              AI-Powered Business Builder
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Build Your Dream Business
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                From Idea to Income
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              LaunchFlow.ai is the complete AI-powered platform that guides you from business strategy to product
              creation, marketing, and monetization. Turn your ideas into profitable businesses faster than ever.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  <Play className="h-5 w-5 mr-2" />
                  Try Demo Mode - Free
                </Button>
              </Link>
              <Button size="lg" variant="outline">
                <BarChart3 className="h-5 w-5 mr-2" />
                Watch Demo Video
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-4">✨ No credit card required • Full access • 14-day free trial</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600">10K+</div>
              <div className="text-gray-600">Businesses Launched</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">$2.5M+</div>
              <div className="text-gray-600">Revenue Generated</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">95%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-600">30 Days</div>
              <div className="text-gray-600">Average Launch Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Everything You Need to Build & Launch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From strategy to sales, LaunchFlow.ai provides all the tools and guidance you need to turn your business
              ideas into reality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  activeFeature === index ? "ring-2 ring-blue-500 shadow-lg" : ""
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <CardHeader>
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                      feature.color === "blue"
                        ? "bg-blue-100"
                        : feature.color === "purple"
                          ? "bg-purple-100"
                          : feature.color === "green"
                            ? "bg-green-100"
                            : "bg-yellow-100"
                    }`}
                  >
                    <feature.icon
                      className={`h-6 w-6 ${
                        feature.color === "blue"
                          ? "text-blue-600"
                          : feature.color === "purple"
                            ? "text-purple-600"
                            : feature.color === "green"
                              ? "text-green-600"
                              : "text-yellow-600"
                      }`}
                    />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How LaunchFlow.ai Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered platform guides you through every step of building a successful business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. AI Strategy</h3>
              <p className="text-gray-600">
                Input your skills and goals. Our AI generates a personalized business strategy and roadmap.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Build Products</h3>
              <p className="text-gray-600">
                Create landing pages, digital products, and MVPs using our AI-powered building tools.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Launch & Market</h3>
              <p className="text-gray-600">
                Generate marketing content, set up campaigns, and launch your business across all channels.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">4. Scale & Optimize</h3>
              <p className="text-gray-600">
                Track performance, optimize pricing, and scale your business with data-driven insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how entrepreneurs are building profitable businesses with LaunchFlow.ai
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your business goals. All plans include a 14-day free trial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative ${plan.popular ? "ring-2 ring-blue-500 shadow-lg scale-105" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-500">{plan.period}</span>
                  </div>
                  <CardDescription className="mt-2">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full mt-6 ${
                      plan.popular ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-900 hover:bg-gray-800"
                    }`}
                  >
                    Start Free Trial
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Build Your Dream Business?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of entrepreneurs who are already building profitable businesses with LaunchFlow.ai. Start
            your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Play className="h-5 w-5 mr-2" />
                Try Demo Mode - Free
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Schedule a Demo
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Rocket className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">LaunchFlow.ai</span>
              </div>
              <p className="text-gray-400">The AI-powered platform for building and launching profitable businesses.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#features" className="hover:text-white">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    API
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Integrations
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Status
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2024 LaunchFlow.ai. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white">
                Privacy
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Terms
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Security
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
