import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Twitter, Linkedin, Mail, Code, Zap, Rocket } from "lucide-react"
import Link from "next/link"

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iIzlDOTJBQyIgZmlsbC1vcGFjaXR5PSIwLjEiPgo8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxIi8+CjwvZz4KPC9nPgo8L3N2Zz4K')]"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="container mx-auto px-4 py-6">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Code className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold text-white">DevPortfolio</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="https://github.com/ni3mumbaikar" className="text-gray-300 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </Link>
              <Link href="https://www.linkedin.com/in/ni3mumbaikar/" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-12 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            {/* Status Badge */}
            <Badge className="mb-8 bg-purple-500/20 text-purple-300 border-purple-500/30 hover:bg-purple-500/30 hover:text-purple-200">
              <Zap className="w-3 h-3 mr-1" />
              Currently in Development
            </Badge>

            {/* Hero Section */}
            <div className="space-y-6 mb-12">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Something{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Amazing
                </span>
                <br />
                is Coming Soon
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                I'm crafting a new digital experience that showcases my passion for clean code, innovative solutions,
                and cutting-edge technology.
              </p>
            </div>

            {/* Features Preview */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Clean Code</h3>
                  <p className="text-gray-400 text-sm">
                    Showcasing projects built with modern frameworks and best practices
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Innovation</h3>
                  <p className="text-gray-400 text-sm">
                    Exploring the latest technologies and pushing creative boundaries
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Performance</h3>
                  <p className="text-gray-400 text-sm">
                    Optimized experiences that are fast, accessible, and user-friendly
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Email Signup */}
            <div className="max-w-md mx-auto mb-12">
              <h3 className="text-2xl font-semibold text-white mb-4">Get Notified</h3>
              <p className="text-gray-300 mb-6">Be the first to know when my new portfolio goes live</p>
              <form className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-500"
                />
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6">
                  <Mail className="w-4 h-4 mr-2" />
                  Notify Me
                </Button>
              </form>
              <p className="text-xs text-gray-400 mt-3">No spam, just updates on my latest projects and launch news.</p>
            </div>

            {/* Progress Indicator */}
            <div className="max-w-md mx-auto mb-8">
              <div className="flex justify-between text-sm text-gray-300 mb-2">
                <span>Progress</span>
                <span>75%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full w-3/4 transition-all duration-500"></div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              <Link
                href="https://github.com/ni3mumbaikar"
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Github className="w-5 h-5" />
                </div>
                <span className="hidden sm:inline">GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/ni3mumbaikar/"
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
                <span className="hidden sm:inline">LinkedIn</span>
              </Link>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="container mx-auto px-4 py-8 border-t border-white/10">
          <div className="text-center text-gray-400">
            <p className="text-sm">
              © {new Date().getFullYear()} DevPortfolio. Crafted with passion and lots of coffee ☕
            </p>
            <p className="text-xs mt-2">Expected launch: Q2 2025</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
