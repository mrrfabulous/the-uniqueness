import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, Target, Award, ArrowRight } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Daniel Abbah",
      role: "Founder & Executive Director",
      image: "/placeholder-qoqte.png",
      bio: "With over 15 years in child welfare and community development, Dr. Okafor founded the organization to address the critical needs of underprivileged children."
    },
    {
      name: "JosepjInnocent",
      role: "Program Director",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Joseph oversees all our programs and ensures they meet the highest standards of care and effectiveness."
    },
    {
      name: "Fatima Abdullahi",
      role: "Community Outreach Manager",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Fatima leads our community engagement efforts and builds partnerships with local organizations."
    },
    {
      name: "Matthew",
      role: "Media Director",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Content creator."
    }
  ]

  const milestones = [
    { year: "2019", event: "Foundation established in Lagos, Nigeria" },
    { year: "2020", event: "First 100 children supported through education program" },
    { year: "2021", event: "Healthcare program launched, serving 500+ children" },
    { year: "2022", event: "Expanded to 5 states across Nigeria" },
    { year: "2023", event: "Reached 1,000+ children milestone" },
    { year: "2024", event: "International recognition and partnerships established" }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-0">
              Our Story
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About Our Foundation
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Learn about our journey, mission, and the dedicated team working to transform children's lives across communities.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-amber-100 text-amber-800 border-amber-200">
                Our Foundation
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Transforming Lives Since 2019
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                The Unique & Safe Child Foundation was born from a simple yet powerful belief: 
                every child deserves a chance at a better life, regardless of their circumstances. 
                Founded in Lagos, Nigeria, we have grown from a small community initiative to 
                a recognized organization serving children across multiple states.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
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
                    <Target className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Mission</h3>
                    <p className="text-gray-700">
                      Getting the marred child a life - providing hope, support, and opportunities for a brighter future.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="/images/outreach-1.jpeg"
                alt="Foundation team with children during outreach"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-amber-600">1,200+</div>
                <div className="text-gray-600">Children Supported</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-amber-100 text-amber-800 border-amber-200">
              Our Values
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Drives Us Forward
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our core values guide every decision we make and every program we implement.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardHeader>
                <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-amber-600" />
                </div>
                <CardTitle className="text-xl">Compassion</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We approach every child with empathy, understanding, and unconditional love.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardHeader>
                <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-amber-600" />
                </div>
                <CardTitle className="text-xl">Community</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We believe in the power of community and work together to create lasting change.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardHeader>
                <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-amber-600" />
                </div>
                <CardTitle className="text-xl">Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We strive for excellence in all our programs and maintain the highest standards.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardHeader>
                <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-amber-600" />
                </div>
                <CardTitle className="text-xl">Integrity</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We operate with transparency, honesty, and accountability in everything we do.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-amber-100 text-amber-800 border-amber-200">
              Our Journey
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Milestones & Achievements
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From humble beginnings to transforming thousands of lives - here's our journey.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-amber-200"></div>
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center mb-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <div className="text-2xl font-bold text-amber-600 mb-2">{milestone.year}</div>
                      <div className="text-gray-700">{milestone.event}</div>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-amber-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-amber-100 text-amber-800 border-amber-200">
              Our Team
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Leadership
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dedicated professionals committed to making a difference in children's lives.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-shadow border-0 shadow-lg">
                <CardHeader>
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-amber-600 font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button className="bg-amber-600 hover:bg-amber-700" asChild>
              <Link href="/about/team">
                View Full Team
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Be part of our story. Whether through donations, volunteering, or spreading awareness, 
            you can help us transform more children's lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-4 text-lg" asChild>
              <Link href="/volunteer">
                <Users className="w-5 h-5 mr-2" />
                Become a Volunteer
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-amber-600 px-8 py-4 text-lg" asChild>
              <Link href="/donate">
                Support Our Cause
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
