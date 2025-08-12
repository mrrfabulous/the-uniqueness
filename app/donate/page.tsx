'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Heart, CreditCard, Shield, Users, GraduationCap, Home } from 'lucide-react'
import Image from "next/image"

export default function DonatePage() {
  const [donationType, setDonationType] = useState('one-time')
  const [amount, setAmount] = useState('50')
  const [customAmount, setCustomAmount] = useState('')

  const predefinedAmounts = ['25', '50', '100', '250', '500', '1000']

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-0">
              Make a Difference
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transform Lives Through Your Generosity
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Every donation helps us provide essential support, education, and care to children who need it most.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Donation Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Heart className="w-6 h-6 text-amber-600 mr-2" />
                  Make Your Donation
                </CardTitle>
                <CardDescription>
                  Choose your donation amount and frequency to support our mission.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Donation Type */}
                <div>
                  <Label className="text-base font-medium mb-3 block">Donation Type</Label>
                  <RadioGroup value={donationType} onValueChange={setDonationType} className="flex space-x-6">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="one-time" id="one-time" />
                      <Label htmlFor="one-time">One-time</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="monthly" id="monthly" />
                      <Label htmlFor="monthly">Monthly</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Amount Selection */}
                <div>
                  <Label className="text-base font-medium mb-3 block">Select Amount (USD)</Label>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {predefinedAmounts.map((presetAmount) => (
                      <Button
                        key={presetAmount}
                        variant={amount === presetAmount ? "default" : "outline"}
                        className={amount === presetAmount ? "bg-amber-600 hover:bg-amber-700" : ""}
                        onClick={() => {
                          setAmount(presetAmount)
                          setCustomAmount('')
                        }}
                      >
                        ${presetAmount}
                      </Button>
                    ))}
                  </div>
                  <div>
                    <Label htmlFor="custom-amount" className="text-sm text-gray-600">Custom Amount</Label>
                    <Input
                      id="custom-amount"
                      type="number"
                      placeholder="Enter custom amount"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value)
                        setAmount('')
                      }}
                      className="mt-1"
                    />
                  </div>
                </div>

                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" required />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" required />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" type="email" required />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" />
                </div>

                {/* Payment Method */}
                <div>
                  <Label className="text-base font-medium mb-3 block">Payment Method</Label>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="card" defaultChecked />
                      <Label htmlFor="card" className="flex items-center">
                        <CreditCard className="w-4 h-4 mr-2" />
                        Credit/Debit Card
                      </Label>
                    </div>
                  </div>
                </div>

                {/* Card Details */}
                <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
                  <div>
                    <Label htmlFor="cardNumber">Card Number *</Label>
                    <Input id="cardNumber" placeholder="1234 5678 9012 3456" required />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="expiry">Expiry Date *</Label>
                      <Input id="expiry" placeholder="MM/YY" required />
                    </div>
                    <div>
                      <Label htmlFor="cvv">CVV *</Label>
                      <Input id="cvv" placeholder="123" required />
                    </div>
                  </div>
                </div>

                {/* Additional Options */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="anonymous" />
                    <Label htmlFor="anonymous">Make this donation anonymous</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="newsletter" defaultChecked />
                    <Label htmlFor="newsletter">Subscribe to our newsletter</Label>
                  </div>
                </div>

                {/* Submit Button */}
                <Button 
                  size="lg" 
                  className="w-full bg-amber-600 hover:bg-amber-700 text-lg py-6"
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Donate ${customAmount || amount} {donationType === 'monthly' ? 'Monthly' : 'Now'}
                </Button>

                <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                  <Shield className="w-4 h-4" />
                  <span>Your donation is secure and encrypted</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Impact Card */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Your Impact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <GraduationCap className="w-5 h-5 text-amber-600 mt-1" />
                  <div>
                    <div className="font-medium">$25</div>
                    <div className="text-sm text-gray-600">Provides school supplies for one child</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Heart className="w-5 h-5 text-amber-600 mt-1" />
                  <div>
                    <div className="font-medium">$50</div>
                    <div className="text-sm text-gray-600">Covers healthcare for one child for a month</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Home className="w-5 h-5 text-amber-600 mt-1" />
                  <div>
                    <div className="font-medium">$100</div>
                    <div className="text-sm text-gray-600">Provides safe housing support for a family</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Donors */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Recent Supporters</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-amber-600" />
                  </div>
                  <div>
                    <div className="font-medium text-sm">Anonymous</div>
                    <div className="text-xs text-gray-600">Donated $100 • 2 hours ago</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-amber-600" />
                  </div>
                  <div>
                    <div className="font-medium text-sm">Sarah M.</div>
                    <div className="text-xs text-gray-600">Donated $50 • 5 hours ago</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-amber-600" />
                  </div>
                  <div>
                    <div className="font-medium text-sm">Michael K.</div>
                    <div className="text-xs text-gray-600">Donated $250 • 1 day ago</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Trust Indicators */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Why Donate With Us?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Shield className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <div className="font-medium text-sm">100% Secure</div>
                    <div className="text-xs text-gray-600">Your payment is encrypted and secure</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Heart className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <div className="font-medium text-sm">Direct Impact</div>
                    <div className="text-xs text-gray-600">95% goes directly to programs</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <div className="font-medium text-sm">Transparent</div>
                    <div className="text-xs text-gray-600">Regular updates on your impact</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
