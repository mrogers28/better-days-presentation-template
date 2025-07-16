import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { CheckCircle, DollarSign, Users, Shield, TrendingUp, Star, Phone, Mail } from 'lucide-react'
import './App.css'

// Brand configuration - easily customizable for different franchises
const brandConfig = {
  name: "76 Fence",
  logo: "🛡️", // Placeholder - replace with actual logo
  industry: "Fencing",
  tagline: "Premium Fencing Solutions",
  phone: "866-872-1776",
  
  hero: {
    headline: "START A RECESSION-PROOF BUSINESS WHILE BUILDING YOUR COMMUNITY",
    subheadline: "With a 76 Fence franchise, you can tap into the essential home improvement market, generate strong revenues, and provide security solutions families truly need.",
    backgroundImage: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",
    ctaPrimary: "CHECK TERRITORY AVAILABILITY",
    ctaSecondary: "LEARN MORE"
  },
  
  businessModel: {
    title: "WHAT IS A 76 FENCE FRANCHISE?",
    description: "As a 76 Fence franchise owner, you'll manage and grow a fencing business by coordinating projects and overseeing skilled subcontractors who handle the installation. Your role focuses on customer service, project management, and building relationships—without needing to install fences yourself."
  },
  
  financials: {
    earnings: {
      title: "HOW MUCH CAN I EARN?",
      multiUnitSales: "$500,000+",
      multiUnitProfit: "$150,000+",
      note: "Multi-Unit Performance*"
    },
    investment: {
      title: "HOW MUCH TO LAUNCH?",
      initialRange: "$75,000 - $125,000",
      liquidCapital: "$50,000",
      netWorth: "$200,000"
    }
  },
  
  benefits: [
    {
      icon: <TrendingUp className="w-8 h-8 text-green-600" />,
      title: "RECESSION-RESISTANT BUSINESS",
      description: "Fencing is an essential home improvement, not a luxury. Even during economic downturns, homeowners need security, privacy, and property protection."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "NO EMPLOYEES REQUIRED",
      description: "Work with skilled subcontractors instead of managing employees. Lower overhead costs and reduced HR complexity while maintaining quality control."
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-600" />,
      title: "PROTECTED TERRITORY",
      description: "Your business will be the only 76 Fence franchise in your designated market area. No competition from other franchisees in your territory."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-green-600" />,
      title: "COMPREHENSIVE SUPPORT",
      description: "From initial training to ongoing operations, marketing support, and business development. We're with you every step of the way."
    }
  ],
  
  services: [
    "Fence Installation",
    "Fence Repairs", 
    "Fence Staining",
    "Maintenance Services"
  ],
  
  idealOwner: [
    {
      title: "SALES & MANAGEMENT EXPERIENCE",
      description: "Your ability to drive sales, manage subcontractors, and oversee operations will be essential to your franchise's growth and success."
    },
    {
      title: "CUSTOMER SERVICE ORIENTED", 
      description: "Providing excellent customer service and building lasting relationships is crucial for repeat business and referrals."
    },
    {
      title: "BUSINESS SAVVY",
      description: "You don't need to install fences, but you must be passionate about managing operations and ensuring customer satisfaction."
    },
    {
      title: "ABILITY TO MULTI-TASK",
      description: "Efficiently handle various responsibilities, from managing crews to addressing customer needs while keeping the business running smoothly."
    }
  ]
}

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center text-white"
        style={{ background: brandConfig.hero.backgroundImage }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
          {/* Logo */}
          <div className="mb-8">
            <div className="text-6xl mb-4">{brandConfig.logo}</div>
            <div className="flex items-center justify-center gap-2 mb-4">
              <Star className="w-6 h-6 fill-current" />
              <Star className="w-8 h-8 fill-current" />
              <Star className="w-6 h-6 fill-current" />
            </div>
            <h2 className="text-2xl font-bold tracking-wider">{brandConfig.name.toUpperCase()}</h2>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            {brandConfig.hero.headline}
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed">
            {brandConfig.hero.subheadline}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold">
              {brandConfig.hero.ctaPrimary}
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg font-semibold">
              {brandConfig.hero.ctaSecondary}
            </Button>
          </div>
        </div>
      </section>

      {/* What Is Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Video/Image Placeholder */}
            <div className="relative">
              <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
                <div className="text-center text-white">
                  <Users className="w-16 h-16 mx-auto mb-4" />
                  <p className="text-lg">Franchise Owner Success Story</p>
                  <p className="text-sm opacity-75">Video Testimonial</p>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                {brandConfig.businessModel.title.split(' ').map((word, index) => (
                  <span key={index} className={word === brandConfig.name.toUpperCase() ? 'text-red-600' : 'text-gray-900'}>
                    {word}{' '}
                  </span>
                ))}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {brandConfig.businessModel.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Information Section */}
      <section className="py-20 bg-red-600 text-white relative overflow-hidden">
        {/* Curved Design Element */}
        <div className="absolute top-0 left-0 w-full h-20 bg-gray-50 rounded-b-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-white rounded-t-[100px]"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Earnings Card */}
            <Card className="bg-white text-gray-900 shadow-xl">
              <CardHeader className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4 mx-auto">
                  <DollarSign className="w-8 h-8 text-green-600" />
                </div>
                <Badge className="bg-green-500 text-white mb-4">{brandConfig.financials.earnings.title}</Badge>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <div>
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    {brandConfig.financials.earnings.multiUnitSales}
                  </div>
                  <p className="text-gray-600">Multi-Unit Gross Sales</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    {brandConfig.financials.earnings.multiUnitProfit}
                  </div>
                  <p className="text-gray-600">Multi-Unit Direct Gross Profit</p>
                </div>
              </CardContent>
            </Card>

            {/* Investment Card */}
            <Card className="bg-white text-gray-900 shadow-xl">
              <CardHeader className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 mx-auto">
                  <TrendingUp className="w-8 h-8 text-blue-600" />
                </div>
                <Badge className="bg-red-600 text-white mb-4">{brandConfig.financials.investment.title}</Badge>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <div>
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    {brandConfig.financials.investment.initialRange}
                  </div>
                  <p className="text-gray-600">Initial Investment Range</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    {brandConfig.financials.investment.liquidCapital}
                  </div>
                  <p className="text-gray-600">Liquid Capital Required</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    {brandConfig.financials.investment.netWorth}
                  </div>
                  <p className="text-gray-600">Net Worth Required</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            WHY OWN A <span className="text-red-600">{brandConfig.name.toUpperCase()}</span> FRANCHISE?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {brandConfig.benefits.map((benefit, index) => (
              <Card key={index} className="p-8 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4 mb-4">
                    {benefit.icon}
                    <h3 className="text-xl font-bold">{benefit.title}</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold">
              CHECK TERRITORY AVAILABILITY
            </Button>
          </div>
        </div>
      </section>

      {/* Your Role Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            YOUR ROLE AS A <span className="text-red-600">{brandConfig.name.toUpperCase()}</span> FRANCHISE OWNER
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {brandConfig.services.map((service, index) => (
              <Card key={index} className="text-center p-6 shadow-lg">
                <CardContent>
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service}</h3>
                  <p className="text-gray-600">Manage and coordinate professional {service.toLowerCase()} services for residential and commercial clients.</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              As an owner, your day-to-day will be focused on driving growth, delivering excellence, and building lasting relationships. 
              You'll conduct in-home estimates, manage subcontractor performance, track key metrics, and oversee project scheduling 
              to ensure every customer receives exceptional service.
            </p>
          </div>
        </div>
      </section>

      {/* Ideal Owner Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            ARE YOU THE IDEAL <span className="text-red-600">{brandConfig.name.toUpperCase()}</span> FRANCHISE OWNER?
          </h2>
          
          <p className="text-xl text-center text-gray-600 mb-12 max-w-4xl mx-auto">
            If the traits below sound like you, this might just be the franchise opportunity you've been looking for.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {brandConfig.idealOwner.map((trait, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">{trait.title}</h3>
                <p className="text-gray-700 leading-relaxed">{trait.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            READY TO START YOUR FRANCHISE JOURNEY?
          </h2>
          <p className="text-xl mb-12">
            Take our free franchise matching quiz to discover if {brandConfig.name} is the right opportunity for you.
          </p>
          <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
            TAKE THE FREE FRANCHISE QUIZ →
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">{brandConfig.name}</h3>
              <p className="text-gray-400">{brandConfig.tagline}</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>{brandConfig.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>franchise@{brandConfig.name.toLowerCase().replace(' ', '')}.com</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Disclaimer</h4>
              <p className="text-sm text-gray-400">
                *For the most accurate and current information, please review the latest Franchise Disclosure Document (FDD). 
                The details provided here may have been updated since publication.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

