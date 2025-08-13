import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Home, ArrowLeft, Search, Heart, Users, HelpCircle } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative flex-1 flex items-center justify-center bg-gradient-to-br from-amber-50 via-white to-amber-50 px-4">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          {/* 404 Number */}
          <div className="mb-8">
            <h1 className="text-8xl md:text-9xl font-bold text-amber-600/20 leading-none">
              404
            </h1>
            <div className="relative -mt-16 md:-mt-20">
              <div className="w-24 h-24 md:w-32 md:h-32 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <HelpCircle className="w-12 h-12 md:w-16 md:h-16 text-amber-600" />
              </div>
            </div>
          </div>

          <Badge className="mb-6 bg-amber-600/90 text-white border-0">
            Page Not Found
          </Badge>
          
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Oops! This Child Needs <span className="text-amber-600">Finding</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Just like we help find hope for children in need, let's help you find what you're looking for. 
            The page you're searching for might have moved or doesn't exist.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg" asChild>
              <Link href="/">
                <Home className="w-5 h-5 mr-2" />
                Go Home
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-4 text-lg" asChild>
              <Link href="/about">
                <Users className="w-5 h-5 mr-2" />
                Learn About Us
              </Link>
            </Button>
          </div>

          {/* Helpful Links */}
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <Card className="group hover:shadow-lg transition-all duration-300 border border-amber-100">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-3 group-hover:bg-amber-600 transition-colors">
                  <Heart className="w-6 h-6 text-amber-600 group-hover:text-white transition-colors" />
                </div>
                <CardTitle className="text-lg">Make a Donation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">
                  Help us continue our mission of supporting children in need.
                </CardDescription>
                <Button variant="ghost" className="text-amber-600 hover:text-amber-700 p-0" asChild>
                  <Link href="/donate">
                    Donate Now <ArrowLeft className="w-4 h-4 ml-1 rotate-180" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border border-amber-100">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-3 group-hover:bg-amber-600 transition-colors">
                  <Users className="w-6 h-6 text-amber-600 group-hover:text-white transition-colors" />
                </div>
                <CardTitle className="text-lg">Join as Volunteer</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">
                  Become part of our community and help make a difference.
                </CardDescription>
                <Button variant="ghost" className="text-amber-600 hover:text-amber-700 p-0" asChild>
                  <Link href="/volunteer">
                    Get Involved <ArrowLeft className="w-4 h-4 ml-1 rotate-180" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border border-amber-100">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-3 group-hover:bg-amber-600 transition-colors">
                  <Search className="w-6 h-6 text-amber-600 group-hover:text-white transition-colors" />
                </div>
                <CardTitle className="text-lg">Our Programs</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">
                  Explore our comprehensive support programs for children.
                </CardDescription>
                <Button variant="ghost" className="text-amber-600 hover:text-amber-700 p-0" asChild>
                  <Link href="/programs">
                    View Programs <ArrowLeft className="w-4 h-4 ml-1 rotate-180" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-12 bg-amber-600">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Still Can't Find What You're Looking For?
          </h3>
          <p className="text-amber-100 mb-6 max-w-2xl mx-auto">
            Our team is here to help. Reach out to us and we'll guide you to the right place.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-amber-600 hover:bg-amber-50" asChild>
            <Link href="/contact">
              Contact Us
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
