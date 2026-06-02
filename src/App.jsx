import React, { useState } from 'react'
import { CheckCircle, DollarSign, TrendingUp, Home, Users, Zap, Globe, Shield, Star, Phone, ChevronDown } from 'lucide-react'
import './App.css'

const presentationData = {
  client: "John Haney",
  date: "May 12, 2026",
  consultant: "Better Days Franchise Consulting",
  brands: [
    {
      id: "speedy-freight",
      name: "Speedy Freight",
      emoji: "🚚",
      accentColor: "#E63946",
      accentLight: "#fff1f2",
      tagline: "B2B Logistics Franchise",
      description:
        "Speedy Freight is a low-overhead, home-based logistics franchise helping small and midsize businesses ship smarter. With no trucks, no warehouses, and no inventory, franchisees grow recurring B2B revenue as strategic shipping consultants.",
      services: [
        "Full Truckload (FTL) Shipping",
        "Less-Than-Truckload (LTL) Solutions",
        "Expedited & Same-Day Delivery",
        "Cross-Border Shipping",
        "Logistics & Warehousing Support",
      ],
      investment: "$71,900 – $163,000",
      liquidCapital: "$50,000",
      netWorth: "$175,000",
      whyOwn: [
        { icon: <TrendingUp className="w-6 h-6" />, title: "Low-Overhead, High-Margin Model" },
        { icon: <DollarSign className="w-6 h-6" />, title: "Recurring B2B Revenue" },
        { icon: <Users className="w-6 h-6" />, title: "No Logistics Experience Needed" },
        { icon: <Shield className="w-6 h-6" />, title: "Corporate Handles Billing & Invoicing" },
      ],
      financials: [
        { label: "Avg. Revenue (Top 21%)*", value: "$2,104,765" },
        { label: "Avg. Gross Margin (Top 21%)*", value: "$883,034" },
      ],
      idealOwner: [
        "Sales-Oriented & Client-Focused",
        "Process-Driven Strategic Thinker",
        "Growth-Minded with Leadership Skills",
        "Willing to Commit to Full-Time Scaling",
      ],
      support: [
        "Initial Training + Onboarding",
        "CRM & Real-Time Tracking Tech",
        "Back Office Support (Billing & AR)",
        "Lead Lists, Coaching, & Marketing Tools",
      ],
      fddNote: "*Refer to the 2025 Speedy Freight FDD. Results may vary.",
    },
    {
      id: "preservan",
      name: "Preservan",
      emoji: "🪵",
      accentColor: "#2D6A4F",
      accentLight: "#f0faf5",
      tagline: "Wood Care & Preservation Franchise",
      description:
        "Preservan is a wood care and preservation franchise that repairs, restores, and protects rotted wood using non-invasive, EPA-approved treatments. With a fully home-based model, proprietary systems, and centralized support, franchisees operate lean, profitable businesses in a specialty niche with very little competition.",
      services: [
        "Wood Rot Repair & Preservation",
        "Window & Door Trim Restoration",
        "Porch, Deck, and Railing Repairs",
        "Preventative Maintenance",
      ],
      investment: "$117,300 – $185,900",
      liquidCapital: "$50,000",
      netWorth: "$150,000",
      franchiseFee: "$54,000",
      whyOwn: [
        { icon: <TrendingUp className="w-6 h-6" />, title: "Low Investment, High Margin" },
        { icon: <Home className="w-6 h-6" />, title: "Home-Based, No Brick & Mortar" },
        { icon: <Users className="w-6 h-6" />, title: "Centralized Lead Management" },
        { icon: <Star className="w-6 h-6" />, title: "Specialty Niche with Little Competition" },
      ],
      financials: [
        { label: "Direct Gross Profit After Select Disclosed Expenses and Franchise Related Expenses", value: "$401,054" },
      ],
      idealOwner: [
        "Mission-Driven Leader",
        "Process-Focused Operator",
        "Financially-Minded",
        "Ready to Build",
      ],
      support: [
        "Centralized Contact Center",
        "Franchisee Onboarding & Field Training",
        "Technology, Scheduling & CRM Tools",
        "Marketing Support + Grand Opening Playbook",
      ],
      fddNote: "*For the most accurate and current information, please review the latest Franchise Disclosure Document (FDD).",
    },
    {
      id: "pinks-window",
      name: "Pink's Window Services",
      emoji: "🪟",
      accentColor: "#D63384",
      accentLight: "#fff0f7",
      tagline: "Residential Window & Exterior Cleaning Franchise",
      description:
        "Pink's Window Services is a home-based franchise delivering professional window cleaning, pressure washing, and gutter services to residential clients.",
      services: [
        "Window Cleaning (Interior & Exterior)",
        "Pressure Washing",
        "Gutter Cleaning & Protection",
        "Screen Repair & Hard Water Removal",
      ],
      investment: "$101,000 – $162,700",
      liquidCapital: "$50,000",
      netWorth: "$150,000",
      whyOwn: [
        { icon: <Home className="w-6 h-6" />, title: "Low Overhead, Home-Based Model" },
        { icon: <DollarSign className="w-6 h-6" />, title: "High Recurring Revenue & Repeat Clients" },
        { icon: <Zap className="w-6 h-6" />, title: "Fast Ramp-Up with Centralized Call Center" },
        { icon: <Globe className="w-6 h-6" />, title: "Flexible, Lifestyle-Friendly Schedule" },
      ],
      financials: [
        { label: "Gross Profit", value: "$632,411" },
        { label: "Net Income", value: "$314,857" },
      ],
      idealOwner: [
        "Sales-Oriented & Coachable",
        "Comfortable Leading a Crew",
        "Client-Focused Communicator",
        "Driven to Grow Multiple Territories",
      ],
      support: [
        "CRM & Call Center Handling Inbound Leads",
        "In-Person Training + Ongoing Field Support",
        "Proprietary Software for Scheduling & Billing",
        "Local Marketing & Community Launch Strategy",
      ],
      fddNote: "*For the most accurate and current information, please review the latest Franchise Disclosure Document (FDD).",
    },
  ],
}

const FDD_DISCLAIMER =
  "For the most accurate and current information, please review the latest Franchise Disclosure Document (FDD). The details provided here may have been updated since publication. Before making any investment decisions, confirm all terms, fees, and requirements directly with the franchisor."

function CoverSlide({ data }) {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-900/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-sm font-medium tracking-wider uppercase mb-6">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
            Franchise Opportunity Overview
          </div>
          <h1 className="text-6xl md:text-7xl font-black tracking-tight mb-4">
            BRAND
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
              PRESENTATION
            </span>
          </h1>
        </div>

        <div className="border-t border-white/10 pt-8 mt-8 space-y-2">
          <p className="text-gray-400 text-sm uppercase tracking-widest">Prepared Exclusively For</p>
          <p className="text-3xl font-bold">{data.client}</p>
          <p className="text-gray-400">{data.date}</p>
        </div>

        <div className="mt-12 text-gray-500 text-sm">{data.consultant}</div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 animate-bounce">
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  )
}

function BrandSlide({ brand }) {
  return (
    <section className="py-20 border-b border-gray-100" id={brand.id}>
      {/* Brand Header */}
      <div className="max-w-5xl mx-auto px-6">
        <div
          className="rounded-2xl p-8 md:p-12 mb-10"
          style={{ backgroundColor: brand.accentColor }}
        >
          <div className="flex items-start gap-6">
            <div className="text-5xl flex-shrink-0">{brand.emoji}</div>
            <div className="text-white">
              <p className="text-sm font-semibold uppercase tracking-widest opacity-75 mb-1">
                {brand.tagline}
              </p>
              <h2 className="text-4xl md:text-5xl font-black mb-4">{brand.name}</h2>
              <p className="text-lg leading-relaxed opacity-90 max-w-2xl">{brand.description}</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {/* Services */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Services</h3>
            <ul className="space-y-2">
              {brand.services.map((s, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-800 font-medium">
                  <span
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ backgroundColor: brand.accentColor }}
                  />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Investment Requirements */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">
              Investment Requirements
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-3xl font-black text-gray-900">{brand.investment}</p>
                <p className="text-sm text-gray-500 mt-0.5">Total Investment</p>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-2 border-t border-gray-100">
                <div>
                  <p className="text-xl font-bold text-gray-900">{brand.liquidCapital}</p>
                  <p className="text-xs text-gray-500">Liquid Capital</p>
                </div>
                <div>
                  <p className="text-xl font-bold text-gray-900">{brand.netWorth}</p>
                  <p className="text-xs text-gray-500">Net Worth</p>
                </div>
                {brand.franchiseFee && (
                  <div>
                    <p className="text-xl font-bold text-gray-900">{brand.franchiseFee}</p>
                    <p className="text-xs text-gray-500">Franchise Fee</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Why Own */}
        <div className="mb-10">
          <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Why Own?</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {brand.whyOwn.map((item, i) => (
              <div
                key={i}
                className="rounded-xl p-5 text-center"
                style={{ backgroundColor: brand.accentLight }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 text-white"
                  style={{ backgroundColor: brand.accentColor }}
                >
                  {item.icon}
                </div>
                <p className="text-sm font-semibold text-gray-800 leading-snug">{item.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Financials */}
        <div className="mb-10">
          <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">
            Disclosed Financials
          </h3>
          <div className={`grid gap-4 ${brand.financials.length === 1 ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'}`}>
            {brand.financials.map((f, i) => (
              <div
                key={i}
                className="rounded-xl p-6"
                style={{ backgroundColor: brand.accentColor }}
              >
                <p className="text-4xl font-black text-white mb-1">{f.value}</p>
                <p className="text-sm text-white/80">{f.label}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-3 italic">{brand.fddNote}</p>
          <p className="text-xs text-gray-400 mt-1 italic">{FDD_DISCLAIMER}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Ideal Owner */}
          <div className="bg-gray-50 rounded-2xl p-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Ideal Owner</h3>
            <ul className="space-y-3">
              {brand.idealOwner.map((trait, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-800 font-medium">
                  <span
                    className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs font-bold"
                    style={{ backgroundColor: brand.accentColor }}
                  >
                    ●
                  </span>
                  {trait}
                </li>
              ))}
            </ul>
          </div>

          {/* Franchisor Support */}
          <div className="bg-gray-50 rounded-2xl p-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">
              Franchisor Support
            </h3>
            <ul className="space-y-3">
              {brand.support.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-800 font-medium">
                  <CheckCircle
                    className="w-5 h-5 flex-shrink-0 mt-0.5"
                    style={{ color: brand.accentColor }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function ThankYouSlide({ data }) {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black" />
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        <div className="text-6xl mb-8">🤝</div>
        <h2 className="text-6xl md:text-7xl font-black mb-6">
          THANK{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
            YOU
          </span>
        </h2>
        <p className="text-xl text-gray-400 leading-relaxed mb-12">
          We appreciate the opportunity to share these brand opportunities with you, {data.client.split(' ')[0]}.
          We look forward to helping you find the right fit.
        </p>
        <div className="border-t border-white/10 pt-8 text-gray-500 text-sm">
          {data.consultant}
        </div>
      </div>
    </section>
  )
}

function NavDot({ brandId, label, color, active, onClick }) {
  return (
    <button
      onClick={onClick}
      title={label}
      className="group flex items-center gap-2"
    >
      <span
        className="block w-2.5 h-2.5 rounded-full transition-all duration-200"
        style={{
          backgroundColor: active ? color : '#d1d5db',
          transform: active ? 'scale(1.4)' : 'scale(1)',
        }}
      />
      <span className="text-xs text-gray-500 hidden group-hover:block whitespace-nowrap">{label}</span>
    </button>
  )
}

function App() {
  const [activeBrand, setActiveBrand] = useState(null)

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setActiveBrand(id)
  }

  return (
    <div className="bg-white font-sans">
      {/* Sticky side nav dots */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
        {presentationData.brands.map((b) => (
          <NavDot
            key={b.id}
            brandId={b.id}
            label={b.name}
            color={b.accentColor}
            active={activeBrand === b.id}
            onClick={() => scrollTo(b.id)}
          />
        ))}
      </div>

      <CoverSlide data={presentationData} />

      {presentationData.brands.map((brand) => (
        <BrandSlide key={brand.id} brand={brand} />
      ))}

      <ThankYouSlide data={presentationData} />
    </div>
  )
}

export default App
