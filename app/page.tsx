"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, GraduationCap, Home, ArrowRight, Calendar, MapPin } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { motion } from 'framer-motion'
import { AnimatedStats } from '@/components/ui/animated-stats'

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
}

const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
}

const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const cardVariants = {
  initial: { opacity: 0, y: 50, scale: 0.95 },
  animate: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
  }
}

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
        <motion.div 
          className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Badge className="mb-6 bg-amber-600/90 text-white border-0">
              Transforming Lives
            </Badge>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Getting the Marred Child a <span className="text-amber-400">Life</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            To be the Numero Uno in providing basic support for the less privileged child across the black race
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg" asChild>
                <Link href="/donate">
                  <Heart className="w-5 h-5 mr-2" />
                  Donate Now
                </Link>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="hover:bg-white hover:text-gray-900 px-8 py-4 text-lg" asChild>
                <Link href="/programs">
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Animated Stats Section */}
      <AnimatedStats />

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInLeft}
            >
              <Badge className="mb-4 bg-amber-100 text-amber-800 border-amber-200">
                Our Purpose
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Transforming Lives Through Compassionate Action
              </h2>
              <div className="space-y-6">
                <motion.div 
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Mission</h3>
                    <p className="text-gray-700">
                      Getting the marred child a life - providing hope, support, and opportunities for a brighter future through comprehensive care and community engagement.
                    </p>
                  </div>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Button className="mt-8 bg-amber-600 hover:bg-amber-700" asChild>
                  <Link href="/about">
                    Learn Our Story
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInRight}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/images/outreach-1.jpeg"
                  alt="Foundation team with children"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                />
              </motion.div>
              <motion.div 
                className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="text-2xl font-bold text-amber-600">2+ Years</div>
                <div className="text-gray-600">of dedicated service</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Badge className="mb-4 bg-amber-100 text-amber-800 border-amber-200">
              Our Programs
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Support for Every Child
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer holistic programs designed to address the unique needs of each child and community we serve.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={cardVariants}>
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg h-full">
                <CardHeader className="pb-4">
                  <motion.div 
                    className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-amber-600 transition-colors"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <GraduationCap className="w-8 h-8 text-amber-600 group-hover:text-white transition-colors" />
                  </motion.div>
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
            </motion.div>
            
            <motion.div variants={cardVariants}>
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg h-full">
                <CardHeader className="pb-4">
                  <motion.div 
                    className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-amber-600 transition-colors"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Heart className="w-8 h-8 text-amber-600 group-hover:text-white transition-colors" />
                  </motion.div>
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
            </motion.div>
            
            <motion.div variants={cardVariants}>
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg h-full">
                <CardHeader className="pb-4">
                  <motion.div 
                    className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-amber-600 transition-colors"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Home className="w-8 h-8 text-amber-600 group-hover:text-white transition-colors" />
                  </motion.div>
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
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Impact Showcase */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="relative"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInLeft}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/images/outreach-2.jpeg"
                  alt="Community outreach event"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                />
              </motion.div>
              <motion.div 
                className="absolute -top-6 -right-6 bg-amber-600 text-white p-6 rounded-xl shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="text-2xl font-bold">200+</div>
                <div className="text-amber-100">Lives Changed</div>
              </motion.div>
            </motion.div>
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInRight}
            >
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
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="text-3xl font-bold text-amber-600 mb-1">95%</div>
                  <div className="text-gray-600">School Enrollment Rate</div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <div className="text-3xl font-bold text-amber-600 mb-1">88%</div>
                  <div className="text-gray-600">Health Improvement</div>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Button className="bg-amber-600 hover:bg-amber-700" asChild>
                  <Link href="/impact">
                    View Impact Report
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Badge className="mb-4 bg-amber-100 text-amber-800 border-amber-200">
              Get Involved
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Upcoming Events
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join us in our mission to support children through various community events and initiatives.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={cardVariants}>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <motion.div 
                    className="flex items-center space-x-2 text-amber-600 mb-2"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-medium">March 15, 2024</span>
                  </motion.div>
                  <CardTitle className="text-xl">Annual Fundraising Gala</CardTitle>
                </CardHeader>
                <CardContent>
                  <motion.div 
                    className="flex items-center space-x-2 text-gray-600 mb-3"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">Lagos, Nigeria</span>
                  </motion.div>
                  <CardDescription className="mb-4">
                    Join us for an evening of celebration and fundraising to support our programs.
                  </CardDescription>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/events">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={cardVariants}>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <motion.div 
                    className="flex items-center space-x-2 text-amber-600 mb-2"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-medium">March 22, 2024</span>
                  </motion.div>
                  <CardTitle className="text-xl">Community Outreach</CardTitle>
                </CardHeader>
                <CardContent>
                  <motion.div 
                    className="flex items-center space-x-2 text-gray-600 mb-3"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">Abuja, Nigeria</span>
                  </motion.div>
                  <CardDescription className="mb-4">
                    Volunteer with us to distribute supplies and support local families.
                  </CardDescription>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/events">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={cardVariants}>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <motion.div 
                    className="flex items-center space-x-2 text-amber-600 mb-2"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-medium">April 5, 2024</span>
                  </motion.div>
                  <CardTitle className="text-xl">Educational Workshop</CardTitle>
                </CardHeader>
                <CardContent>
                  <motion.div 
                    className="flex items-center space-x-2 text-gray-600 mb-3"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">Port Harcourt, Nigeria</span>
                  </motion.div>
                  <CardDescription className="mb-4">
                    Training session for teachers and educational support staff.
                  </CardDescription>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/events">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Every Child Deserves a Chance
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 max-w-3xl mx-auto opacity-90"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Your support can transform a child's life forever. Join us in our mission to provide hope, 
            education, and care to those who need it most.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-4 text-lg" asChild>
                <Link href="/donate">
                  <Heart className="w-5 h-5 mr-2" />
                  Donate Today
                </Link>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" variant="outline" className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-4 text-lg" asChild>
                <Link href="/volunteer">
                  Become a Volunteer
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
