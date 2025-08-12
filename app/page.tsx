import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, GraduationCap, Home, ArrowRight, Calendar, MapPin } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hero-bg.png"
          alt="Children playing and learning"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <Badge className="mb-6 bg-amber-600/90 text-white border-0">
            Transforming Lives Since 2019
          </Badge>
          <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
            Getting the Marred Child a <span className="text-amber-400">Life</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            To be the Numero Uno in providing basic support for the less privileged child across the black race
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg" asChild>
              <Link href="/donate">
                <Heart className="w-5 h-5 mr-2" />
                Donate Now
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg" asChild>
              <Link href="/programs">
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-amber-600 mb-2">1,200+</div>
              <div className="text-gray-700 font-medium">Children Supported</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-amber-600 mb-2">85+</div>
              <div className="text-gray-700 font-medium">Communities Reached</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-amber-600 mb-2">250+</div>
              <div className="text-gray-700 font-medium">Active Volunteers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-amber-600 mb-2">5+</div>
              <div className="text-gray-700 font-medium">Years of Impact</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-amber-100 text-amber-800 border-amber-200">
                Our Purpose
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Transforming Lives Through Compassionate Action
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Vision</h3>
                    <p className="text-gray-700">
                      To be the Numero Uno in providing basic support for the less privileged child across the black race.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Mission</h3>
                    <p className="text-gray-700">
                      Getting the marred child a life - providing hope, support, and opportunities for a brighter future through comprehensive care and community engagement.
                    </p>
                  </div>
                </div>
              </div>
              <Button className="mt-8 bg-amber-600 hover:bg-amber-700" asChild>
                <Link href="/about">
                  Learn Our Story
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/images/outreach-1.jpeg"
                alt="Foundation team with children"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-amber-600">5+ Years</div>
                <div className="text-gray-600">of dedicated service</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-amber-100 text-amber-800 border-amber-200">
              Our Programs
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Support for Every Child
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer holistic programs designed to address the unique needs of each child and community we serve.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-amber-600 transition-colors">
                  <GraduationCap className="w-8 h-8 text-amber-600 group-hover:text-white transition-colors" />
                </div>
                <CardTitle className="text-xl">Education Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">
                  Providing school supplies, uniforms, scholarships, and educational resources to ensure children can attend and succeed in school.
                </CardDescription>
                <Button variant="ghost" className="text-amber-600 hover:text-amber-700 p-0" asChild>
                  <Link href="/programs/education">
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-amber-600 transition-colors">
                  <Heart className="w-8 h-8 text-amber-600 group-hover:text-white transition-colors" />
                </div>
                <CardTitle className="text-xl">Healthcare & Nutrition</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">
                  Ensuring children receive proper medical care, nutritious meals, and health education for their overall wellbeing.
                </CardDescription>
                <Button variant="ghost" className="text-amber-600 hover:text-amber-700 p-0" asChild>
                  <Link href="/programs/healthcare">
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-amber-600 transition-colors">
                  <Home className="w-8 h-8 text-amber-600 group-hover:text-white transition-colors" />
                </div>
                <CardTitle className="text-xl">Safe Housing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">
                  Providing safe, secure living environments where children can grow and thrive in a nurturing atmosphere.
                </CardDescription>
                <Button variant="ghost" className="text-amber-600 hover:text-amber-700 p-0" asChild>
                  <Link href="/programs/housing">
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700" asChild>
              <Link href="/programs">
                View All Programs
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Impact Showcase */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/images/outreach-2.jpeg"
                alt="Community outreach event"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-6 -right-6 bg-amber-600 text-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">1,200+</div>
                <div className="text-amber-100">Lives Changed</div>
              </div>
            </div>
            <div>
              <Badge className="mb-4 bg-amber-100 text-amber-800 border-amber-200">
                Real Impact
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Creating Lasting Change in Communities
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Through our dedicated programs and community partnerships, we've been able to transform lives 
                and create sustainable change across multiple communities. Every child we support represents 
                a future full of possibilities.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="text-3xl font-bold text-amber-600 mb-1">95%</div>
                  <div className="text-gray-600">School Enrollment Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-amber-600 mb-1">88%</div>
                  <div className="text-gray-600">Health Improvement</div>
                </div>
              </div>
              <Button className="bg-amber-600 hover:bg-amber-700" asChild>
                <Link href="/impact">
                  View Impact Report
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-amber-100 text-amber-800 border-amber-200">
              Get Involved
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Upcoming Events
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join us in our mission to support children through various community events and initiatives.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2 text-amber-600 mb-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">March 15, 2024</span>
                </div>
                <CardTitle className="text-xl">Annual Fundraising Gala</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2 text-gray-600 mb-3">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Lagos, Nigeria</span>
                </div>
                <CardDescription className="mb-4">
                  Join us for an evening of celebration and fundraising to support our programs.
                </CardDescription>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/events">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2 text-amber-600 mb-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">March 22, 2024</span>
                </div>
                <CardTitle className="text-xl">Community Outreach</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2 text-gray-600 mb-3">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Abuja, Nigeria</span>
                </div>
                <CardDescription className="mb-4">
                  Volunteer with us to distribute supplies and support local families.
                </CardDescription>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/events">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2 text-amber-600 mb-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">April 5, 2024</span>
                </div>
                <CardTitle className="text-xl">Educational Workshop</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2 text-gray-600 mb-3">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Port Harcourt, Nigeria</span>
                </div>
                <CardDescription className="mb-4">
                  Training session for teachers and educational support staff.
                </CardDescription>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/events">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Every Child Deserves a Chance
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Your support can transform a child's life forever. Join us in our mission to provide hope, 
            education, and care to those who need it most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-4 text-lg" asChild>
              <Link href="/donate">
                <Heart className="w-5 h-5 mr-2" />
                Donate Today
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-amber-600 px-8 py-4 text-lg" asChild>
              <Link href="/volunteer">
                Become a Volunteer
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
