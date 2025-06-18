"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Copy, Download } from "lucide-react"

interface LandingPagePreviewProps {
  pageData: {
    title: string
    subtitle: string
    features: string[]
    cta: string
    generated: boolean
  }
}

export function LandingPagePreview({ pageData }: LandingPagePreviewProps) {
  const handleCopyCode = () => {
    const htmlCode = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${pageData.title}</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
    <div class="container mx-auto px-4 py-16">
        <div class="text-center max-w-4xl mx-auto">
            <h1 class="text-5xl font-bold text-gray-900 mb-6">
                ${pageData.title}
            </h1>
            <p class="text-xl text-gray-600 mb-8">
                ${pageData.subtitle}
            </p>
            <div class="grid md:grid-cols-3 gap-6 mb-8">
                ${pageData.features
                  .map(
                    (feature) => `
                <div class="bg-white p-6 rounded-lg shadow-lg">
                    <h3 class="font-semibold text-gray-900 mb-2">${feature}</h3>
                </div>
                `,
                  )
                  .join("")}
            </div>
            <button class="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
                ${pageData.cta}
            </button>
        </div>
    </div>
</body>
</html>`

    navigator.clipboard.writeText(htmlCode)
    alert("✅ HTML code copied to clipboard!")
  }

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>🎉 Landing Page Generated!</span>
          <div className="flex gap-2">
            <Button size="sm" variant="outline" onClick={handleCopyCode}>
              <Copy className="h-4 w-4 mr-1" />
              Copy HTML
            </Button>
            <Button size="sm" variant="outline">
              <Download className="h-4 w-4 mr-1" />
              Download
            </Button>
            <Button size="sm">
              <ExternalLink className="h-4 w-4 mr-1" />
              Preview
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Landing Page Preview */}
        <div className="border rounded-lg overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="p-8 text-center">
            <h1 className="text-3xl font-bold text-slate-900 mb-4">{pageData.title}</h1>
            <p className="text-lg text-slate-600 mb-6">{pageData.subtitle}</p>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {pageData.features.map((feature, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-slate-900 text-sm">{feature}</h3>
                </div>
              ))}
            </div>

            <Button className="bg-blue-600 hover:bg-blue-700">{pageData.cta}</Button>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <Badge variant="secondary">Responsive Design</Badge>
          <Badge variant="secondary">SEO Optimized</Badge>
          <Badge variant="secondary">Fast Loading</Badge>
          <Badge variant="secondary">Mobile Friendly</Badge>
        </div>

        <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
          <h4 className="font-semibold text-green-900 mb-2">✨ What's Included:</h4>
          <ul className="text-sm text-green-700 space-y-1">
            <li>• Complete HTML/CSS code</li>
            <li>• Tailwind CSS styling</li>
            <li>• Mobile-responsive design</li>
            <li>• Contact form integration</li>
            <li>• Analytics tracking setup</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
