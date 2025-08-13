"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Heart, Home, Utensils, Users, ArrowRight, GraduationCap, Stethoscope, Shield, Apple, Target, Award, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from 'framer-motion'

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

export default function ProgramsPage() {
  const programs = [
    {
      id: "education",
      title: "Education Support",
      icon: BookOpen,
      description: "Providing quality education and learning opportunities for underprivileged children",
      image: "/images/education-program.jpg",
      stats: [
        { number: "150+", label: "Students Supported" },
        { number: "25", label: "Schools Partnered" },
        { number: "95%", label: "Graduation Rate" }
      ],
      features: [
        "School fee assistance and scholarships",
        "Educational materials and supplies",
        "After-school tutoring programs",
        "Digital literacy training",
        "Career guidance and mentorship"
      ],
      impact: "Our education program has helped over 150 children access quality education, with 95% successfully completing their studies and moving on to higher education or vocational training."
    },
    {
      id: "healthcare",
      title: "Healthcare",
      icon: Heart,
      description: "Ensuring access to essential healthcare services and medical support",
      image: "/images/healthcare-program.jpg",
      stats: [
        { number: "500+", label: "Children Treated" },
        { number: "12", label: "Health Centers" },
        { number: "100%", label: "Vaccination Rate" }
      ],
      features: [
        "Regular health checkups and screenings",
        "Vaccination and immunization programs",
        "Emergency medical assistance",
        "Nutrition and wellness education",
        "Mental health support services"
      ],
      impact: "Through our healthcare initiatives, we've provided medical care to over 500 children, ensuring 100% vaccination coverage and significantly reducing preventable diseases in our communities."
    },
    {
      id: "housing",
      title: "Safe Housing",
      icon: Home,
      description: "Creating safe, secure living environments for children in need",
      image: "/images/housing-program.jpg",
      stats: [
        { number: "75", label: "Children Housed" },
        { number: "8", label: "Safe Homes" },
        { number: "24/7", label: "Care Support" }
      ],
      features: [
        "Emergency shelter and temporary housing",
        "Long-term residential care facilities",
        "Family reunification programs",
        "Life skills training and support",
        "Educational and recreational activities"
      ],
      impact: "Our safe housing program provides secure homes for 75 children, offering 24/7 care and support while working towards family reunification or long-term placement solutions."
    },
    {
      id: "nutrition",
      title: "Nutrition",
      icon: Utensils,
      description: "Fighting malnutrition and ensuring proper dietary support for healthy development",
      image: "/images/nutrition-program.jpg",
      stats: [
        { number: "300+", label: "Daily Meals" },
        { number: "85%", label: "Nutrition Improvement" },
        { number: "15", label: "Community Kitchens" }
      ],
      features: [
        "Daily nutritious meal programs",
        "Nutritional education and awareness",
        "Community kitchen initiatives",
        "Food security programs",
        "Growth monitoring and support"
      ],
      impact: "Our nutrition program serves over 300 daily meals and has achieved 85% improvement in nutritional status among participating children, significantly reducing malnutrition rates."
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Badge className="mb-4 bg-white/20 text-white border-0">
                Our Programs
              </Badge>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Transforming Lives Through Action
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl mb-8 opacity-90"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Discover our comprehensive programs designed to provide education, healthcare, safe housing, and nutrition support to children in need.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Programs Overview */}
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
              Program Areas
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Four Pillars of Support</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our comprehensive approach addresses the fundamental needs of children through four key program areas.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {programs.map((program, index) => {
              const IconComponent = program.icon
              return (
                <motion.div key={program.id} variants={cardVariants}>
                  <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg h-full group">
                    <CardHeader className="pb-4">
                      <motion.div 
                        className="w-14 h-14 sm:w-16 sm:h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-amber-200 transition-colors"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-amber-600" />
                      </motion.div>
                      <CardTitle className="text-lg sm:text-xl">{program.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <CardDescription className="mb-4 text-sm sm:text-base">
                        {program.description}
                      </CardDescription>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button 
                          variant="outline" 
                          className="w-full border-amber-200 text-amber-600 hover:bg-amber-50 text-sm sm:text-base py-2 sm:py-3"
                          asChild
                        >
                          <Link href={`#${program.id}`}>
                            Learn More
                            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
                          </Link>
                        </Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Individual Program Sections */}
      {programs.map((program, index) => {
        const IconComponent = program.icon
        const isEven = index % 2 === 0
        
        return (
          <section key={program.id} id={program.id} className={`py-20 ${isEven ? 'bg-white' : 'bg-gray-50'}`}>
            <div className="container mx-auto px-4">
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                <motion.div
                  className={isEven ? '' : 'lg:col-start-2'}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  variants={isEven ? fadeInLeft : fadeInRight}
                >
                  <Badge className="mb-4 bg-amber-100 text-amber-800 border-amber-200">
                    <IconComponent className="w-4 h-4 mr-2" />
                    {program.title}
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">{program.title}</h2>
                  <p className="text-lg text-gray-600 mb-8">{program.impact}</p>
                  
                  {/* Program Features */}
                  <div className="space-y-4 mb-8">
                    {program.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        className="flex items-start space-x-3"
                        initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                      >
                        <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Program Stats */}
                  <motion.div 
                    className="grid grid-cols-3 gap-4 mb-8"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                  >
                    {program.stats.map((stat, statIndex) => (
                      <motion.div
                        key={statIndex}
                        className="text-center p-4 bg-amber-50 rounded-lg"
                        variants={cardVariants}
                      >
                        <div className="text-2xl font-bold text-amber-600 mb-1">{stat.number}</div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button className="bg-amber-600 hover:bg-amber-700" asChild>
                      <Link href="/volunteer">
                        Get Involved
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </motion.div>
                </motion.div>
                
                <motion.div 
                  className={`relative ${isEven ? '' : 'lg:col-start-1'}`}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  variants={isEven ? fadeInRight : fadeInLeft}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={program.image}
                      alt={`${program.title} program`}
                      width={600}
                      height={500}
                      className="rounded-2xl shadow-2xl"
                    />
                  </motion.div>
                  <motion.div 
                    className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <IconComponent className="w-8 h-8 text-amber-600 mb-2" />
                    <div className="text-lg font-bold text-gray-800">{program.title}</div>
                    <div className="text-sm text-gray-600">Active Program</div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>
        )
      })}

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Make a Difference Today
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 max-w-3xl mx-auto opacity-90"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Your support helps us expand these vital programs and reach more children in need. 
            Join us in creating lasting change in communities across the region.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-4 text-lg" asChild>
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
              <Button size="lg" variant="outline" className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-4 text-lg" asChild>
                <Link href="/volunteer">
                  <Users className="w-5 h-5 mr-2" />
                  Become a Volunteer
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
