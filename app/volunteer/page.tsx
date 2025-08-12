'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Users, Clock, MapPin, Heart, CheckCircle, Calendar } from 'lucide-react'

const volunteerOpportunities = [
  {
    id: 1,
    title: "Education Support Volunteer",
    location: "Lagos, Nigeria",
    time: "Weekends",
    commitment: "3-6 months",
    description: "Help children with homework, reading, and educational activities.",
    skills: ["Teaching", "Patience", "Communication"],
    spots: 5
  },
  {
    id: 2,
    title: "Healthcare Assistant",
    location: "Abuja, Nigeria",
    time: "Flexible",
    commitment: "6+ months",
    description: "Assist healthcare professionals during medical outreach programs.",
    skills: ["Healthcare background", "First Aid", "Compassion"],
    spots: 3
  },
  {
    id: 3,
    title: "Community Outreach Coordinator",
    location: "Port Harcourt, Nigeria",
    time: "Full-time",
    commitment: "1+ year",
    description: "Organize and coordinate community events and programs.",
    skills: ["Event Planning", "Leadership", "Communication"],
    spots: 2
  },
  {
    id: 4,
    title: "Fundraising Volunteer",
    location: "Remote",
    time: "Part-time",
    commitment: "3+ months",
    description: "Help with fundraising campaigns and donor outreach.",
    skills: ["Marketing", "Social Media", "Networking"],
    spots: 10
  }
]

export default function VolunteerPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    availability: '',
    interests: [],
    experience: '',
    motivation: ''
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleInterestChange = (interest: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      interests: checked 
        ? [...prev.interests, interest]
        : prev.interests.filter(i => i !== interest)
    }))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-0">
              Join Our Team
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Become a Volunteer
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Make a direct impact in children's lives. Join our community of dedicated volunteers working to create positive change.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Volunteer Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Users className="w-6 h-6 text-amber-600 mr-2" />
                  Volunteer Application
                </CardTitle>
                <CardDescription>
                  Fill out this form to join our volunteer community and start making a difference.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input 
                      id="firstName" 
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      required 
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input 
                      id="lastName" 
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      required 
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required 
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      required 
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="location">Location *</Label>
                    <Select value={formData.location} onValueChange={(value) => handleInputChange('location', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="lagos">Lagos</SelectItem>
                        <SelectItem value="abuja">Abuja</SelectItem>
                        <SelectItem value="port-harcourt">Port Harcourt</SelectItem>
                        <SelectItem value="kano">Kano</SelectItem>
                        <SelectItem value="ibadan">Ibadan</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="availability">Availability *</Label>
                    <Select value={formData.availability} onValueChange={(value) => handleInputChange('availability', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select availability" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="weekends">Weekends Only</SelectItem>
                        <SelectItem value="weekdays">Weekdays</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                        <SelectItem value="full-time">Full-time</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Areas of Interest */}
                <div>
                  <Label className="text-base font-medium mb-3 block">Areas of Interest *</Label>
                  <div className="grid md:grid-cols-2 gap-3">
                    {['Education Support', 'Healthcare', 'Community Outreach', 'Fundraising', 'Event Planning', 'Administrative Support'].map((interest) => (
                      <div key={interest} className="flex items-center space-x-2">
                        <Checkbox 
                          id={interest}
                          checked={formData.interests.includes(interest)}
                          onCheckedChange={(checked) => handleInterestChange(interest, checked as boolean)}
                        />
                        <Label htmlFor={interest} className="text-sm">{interest}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Experience */}
                <div>
                  <Label htmlFor="experience">Relevant Experience</Label>
                  <Textarea 
                    id="experience"
                    placeholder="Tell us about any relevant experience, skills, or qualifications..."
                    value={formData.experience}
                    onChange={(e) => handleInputChange('experience', e.target.value)}
                    rows={4}
                  />
                </div>

                {/* Motivation */}
                <div>
                  <Label htmlFor="motivation">Why do you want to volunteer with us? *</Label>
                  <Textarea 
                    id="motivation"
                    placeholder="Share your motivation for volunteering..."
                    value={formData.motivation}
                    onChange={(e) => handleInputChange('motivation', e.target.value)}
                    rows={4}
                    required
                  />
                </div>

                {/* Agreement */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="background-check" />
                    <Label htmlFor="background-check" className="text-sm">
                      I agree to undergo a background check if required
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="commitment" />
                    <Label htmlFor="commitment" className="text-sm">
                      I understand the time commitment required for volunteering
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms" className="text-sm">
                      I agree to the volunteer terms and conditions
                    </Label>
                  </div>
                </div>

                {/* Submit Button */}
                <Button 
                  size="lg" 
                  className="w-full bg-amber-600 hover:bg-amber-700 text-lg py-6"
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Submit Application
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Volunteer Benefits */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Volunteer Benefits</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <div className="font-medium text-sm">Make Real Impact</div>
                    <div className="text-xs text-gray-600">Directly improve children's lives</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <div className="font-medium text-sm">Skill Development</div>
                    <div className="text-xs text-gray-600">Gain valuable experience and skills</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <div className="font-medium text-sm">Community</div>
                    <div className="text-xs text-gray-600">Join a supportive volunteer network</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <div className="font-medium text-sm">Recognition</div>
                    <div className="text-xs text-gray-600">Volunteer certificates and awards</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Current Opportunities */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Current Opportunities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {volunteerOpportunities.slice(0, 3).map((opportunity) => (
                  <div key={opportunity.id} className="border-l-4 border-amber-600 pl-4">
                    <div className="font-medium text-sm">{opportunity.title}</div>
                    <div className="flex items-center space-x-4 text-xs text-gray-600 mt-1">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-3 h-3" />
                        <span>{opportunity.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{opportunity.time}</span>
                      </div>
                    </div>
                    <div className="text-xs text-amber-600 mt-1">
                      {opportunity.spots} spots available
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Questions?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Have questions about volunteering? We're here to help!
                </p>
                <div className="space-y-2 text-sm">
                  <div>Email: volunteers@uniquesafe.org</div>
                  <div>Phone: +234 XXX XXX XXXX</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Volunteer Opportunities Section */}
        <section className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Current Volunteer Opportunities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find the perfect volunteer opportunity that matches your skills and availability.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {volunteerOpportunities.map((opportunity) => (
              <Card key={opportunity.id} className="hover:shadow-lg transition-shadow border-0 shadow-md">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl">{opportunity.title}</CardTitle>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mt-2">
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{opportunity.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{opportunity.time}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{opportunity.commitment}</span>
                        </div>
                      </div>
                    </div>
                    <Badge className="bg-amber-100 text-amber-800">
                      {opportunity.spots} spots
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    {opportunity.description}
                  </CardDescription>
                  <div className="mb-4">
                    <div className="text-sm font-medium text-gray-700 mb-2">Required Skills:</div>
                    <div className="flex flex-wrap gap-2">
                      {opportunity.skills.map((skill, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button className="w-full bg-amber-600 hover:bg-amber-700">
                    Apply for This Role
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
