import React from 'react'
import { CheckCircle, DollarSign, TrendingUp, Home, Users, Zap, Globe, Shield, Truck, FlaskConical, Star, ChevronDown, Wrench, Building2 } from 'lucide-react'
import './App.css'

const presentationData = {
  client: "John Haney",
  date: "May 12, 2026",
  consultant: {
    name: "Maria Rogers",
    email: "maria@franment.com",
    phone: "(704) 451-4885",
  },
  brands: [
    {
      id: "rapid-hose",
      name: "Rapid Hose",
      emoji: "🔧",
      accentColor: "#DC2626",
      accentLight: "#fff1f2",
      tagline: "B2B Mobile Hydraulic Hose Franchise",
      description:
        "Rapid Hose is a B2B mobile van-based franchise for onsite hydraulic hose replacement. It provides a critical emergency service to the construction, heavy equipment, and manufacturing sectors — no brick and mortar required.",
      services: [
        "Onsite Hydraulic Hose Replacement",
        "Emergency Mobile Service",
        "Construction Equipment Support",
        "Heavy Equipment & Manufacturing Service",
        "Multi-Van Territory Scaling",
      ],
      investment: "$167,333 – $260,491",
      liquidCapital: "$52,000+",
      netWorth: "$168,000+",
      franchiseFee: "$50,000",
      whyOwn: [
        { icon: <Truck className="w-6 h-6" />, title: "Mobile-Based, No Brick & Mortar" },
        { icon: <Zap className="w-6 h-6" />, title: "Critical Emergency Service" },
        { icon: <TrendingUp className="w-6 h-6" />, title: "B2B Recurring Revenue" },
        { icon: <Shield className="w-6 h-6" />, title: "Proprietary Dispatch Software" },
      ],
      financials: [
        { label: "Item 19 Performance Data Included in FDD", value: "Disclosed" },
        { label: "Veterans Discount on Initial Franchise Fee", value: "5% Off" },
      ],
      idealOwner: [
        "Mechanically Inclined or Knowledgeable",
        "People Skills / Customer Relationship Driven",
        "Positive Attitude & Reliable",
        "Driven & Focused on Long-Term Commitment",
      ],
      support: [
        "Proprietary Dispatch & Tracking Software",
        "Well-Established Operations Processes",
        "Fast Startup — Operational in Months",
        "Scalable via Additional Vans & Territories",
      ],
      fddNote: "*Per 2026 FDD Requirements. Results may vary. Item 19 shared in FDD.",
    },
    {
      id: "gatsby-glass",
      name: "Gatsby Glass",
      emoji: "🪟",
      accentColor: "#1E3A5F",
      accentLight: "#f0f4f9",
      tagline: "Premium Glass Solutions Franchise",
      description:
        "Gatsby Glass is the premier destination for custom glass solutions — frameless shower enclosures, glass railings, custom mirrors, partitions, and storefronts. Ranked a Top New & Emerging Franchise by Entrepreneur Magazine in 2024 and 2025.",
      services: [
        "Frameless Glass Showers & Enclosures",
        "Glass Railings, Stairs & Balconies",
        "Accordion Doors",
        "Custom Mirrors & Frames",
        "Commercial Glass Partitions & Walls",
        "Store Front Windows & Doors",
      ],
      investment: "$195,691 – $255,716",
      liquidCapital: "$150,000",
      netWorth: "$500,000",
      franchiseFee: "$59,500",
      whyOwn: [
        { icon: <Star className="w-6 h-6" />, title: "Low Competition, Untapped Market" },
        { icon: <TrendingUp className="w-6 h-6" />, title: "Tiered Royalty — Starts at 5%" },
        { icon: <Building2 className="w-6 h-6" />, title: "Premium Vendor Partnerships" },
        { icon: <Shield className="w-6 h-6" />, title: "Award-Winning Emerging Brand" },
      ],
      financials: [
        { label: "Avg. Gross Sales — Top Location", value: "$2,738,808" },
        { label: "Avg. Gross Sales — Top 50%", value: "$1,559,539" },
        { label: "Avg. Gross Sales — Total System", value: "$1,132,746" },
        { label: "Average Close Ratio", value: "58.2%" },
      ],
      idealOwner: [
        "Driven to Build Long-Term",
        "Executive Skillset — Manages People & KPIs",
        "Community-Focused with Local Presence",
        "No Industry Experience Required",
      ],
      support: [
        "Configuration Suite — 3D Rendering & Live Pricing",
        "Virtual Showroom for Interactive Client Experience",
        "Visualizer Tool — Real-Time Custom Blueprint",
        "Digital Sales Process + Smart Glass Technology",
      ],
      fddNote: "*Financial performance per FDD Item 19. Refer to FDD for full details. Results may vary.",
    },
    {
      id: "trublue",
      name: "TruBlue",
      emoji: "🏠",
      accentColor: "#1565C0",
      accentLight: "#eff6ff",
      tagline: "Home Service Ally — Seniors & Busy Adults",
      description:
        "TruBlue is the only national brand focused on ongoing home maintenance for seniors and busy adults. Home-based, low overhead, and backed by 30+ years of franchising experience. Entrepreneur Franchise 500 Ranked — Top Home-Based & Top Low-Cost Franchise.",
      services: [
        "Home Safety Assessments & Modifications",
        "Handyman Services & Repairs",
        "Yard & Outdoor Services",
        "Home Maintenance Plans (Recurring)",
        "Home Watch Services",
        "Realtor & Commercial Property Services",
      ],
      investment: "$70,050 – $96,400",
      liquidCapital: "$50,000",
      netWorth: "$50,000",
      franchiseFee: "$49,900",
      whyOwn: [
        { icon: <Home className="w-6 h-6" />, title: "Home-Based, Minimal Overhead" },
        { icon: <Users className="w-6 h-6" />, title: "Two Fast-Growing Markets" },
        { icon: <DollarSign className="w-6 h-6" />, title: "Recurring Revenue Model" },
        { icon: <Shield className="w-6 h-6" />, title: "30+ Years Franchising Experience" },
      ],
      financials: [
        { label: "Aging-in-Place Remodeling Market (NAHB Projection)", value: "$20–25B" },
        { label: "Adults 65+ expected to reach by 2040", value: "22% of U.S. Pop." },
      ],
      idealOwner: [
        "Desire to Help Seniors & Busy Adults",
        "Community-Focused & People-Oriented",
        "Business Management & Leadership Skills",
        "No Home Services Experience Required",
      ],
      support: [
        "Online Training + 1-Week Corporate Workshop",
        "Dedicated Franchise Business Coach",
        "Full Marketing & Digital Advertising Program",
        "National Partnerships (Honor, Helper Bees, Comfort Keepers)",
      ],
      fddNote: "*Entrepreneur Franchise 500 Ranked. Top Home-Based & Top Low-Cost Franchise. Review FDD for investment details.",
    },
    {
      id: "complete-mobile-drug-testing",
      name: "Complete Mobile Drug Testing",
      emoji: "🧪",
      accentColor: "#0F766E",
      accentLight: "#f0fdfa",
      tagline: "B2B Mobile Drug Testing Franchise",
      description:
        "Complete Mobile Drug Testing brings on-site drug and alcohol testing directly to businesses — no lab, no storefront. Serves employers with DOT compliance, pre-employment screening, and ongoing random testing programs. Fully mobile, low overhead, recurring B2B clients.",
      services: [
        "On-Site Employee Drug & Alcohol Testing",
        "DOT Compliance Testing",
        "Pre-Employment Screening",
        "Random Drug Testing Programs",
        "Court-Ordered & Reasonable Suspicion Testing",
      ],
      investment: "$72,350 – $123,150",
      liquidCapital: "$100,000",
      netWorth: "$150,000",
      franchiseFee: "$50,000",
      whyOwn: [
        { icon: <Truck className="w-6 h-6" />, title: "Fully Mobile, No Storefront" },
        { icon: <Building2 className="w-6 h-6" />, title: "Mandatory B2B Compliance Market" },
        { icon: <DollarSign className="w-6 h-6" />, title: "Recurring Corporate Clients" },
        { icon: <TrendingUp className="w-6 h-6" />, title: "Low Investment, High Margin" },
      ],
      financials: [
        { label: "Total Investment Range", value: "$72K–$123K" },
        { label: "Franchise Fee", value: "$50,000" },
      ],
      idealOwner: [
        "Sales-Focused & B2B Relationship Builder",
        "Process-Driven & Detail-Oriented",
        "Compliance & Professionalism Minded",
        "Comfortable Calling on Local Businesses",
      ],
      support: [
        "Testing Protocol & Compliance Training",
        "Sales Systems & Business Development Tools",
        "Territory Support & Lead Generation",
        "Ongoing Operational & Marketing Guidance",
      ],
      fddNote: "*Investment data sourced from FDD disclosures. Review current FDD for full details. Results may vary.",
    },
    {
      id: "donutnv",
      name: "DonutNV",
      emoji: "🍩",
      accentColor: "#EA580C",
      accentLight: "#fff7ed",
      tagline: "America's Sweetest Mobile Donut Franchise",
      description:
        "DonutNV is a fully mobile mini donut franchise operated from a custom-branded trailer — no real estate, no build-out, and no waiting. Franchisees can launch and start selling within hours of receiving their turnkey trailer. 145+ units and growing.",
      services: [
        "Fresh Mini Donuts — Made to Order",
        "Custom Flavors, Glazes & Toppings",
        "Farmers Markets & Weekend Events",
        "Festivals, Fairs & Pop-Up Events",
        "Corporate Events & Private Catering",
      ],
      investment: "$185,075 – $253,525",
      liquidCapital: "$100,000",
      netWorth: "$250,000",
      franchiseFee: "$59,500",
      whyOwn: [
        { icon: <Truck className="w-6 h-6" />, title: "No Real Estate or Build-Out Costs" },
        { icon: <Zap className="w-6 h-6" />, title: "Launch & Sell Within Hours" },
        { icon: <Globe className="w-6 h-6" />, title: "Go Anywhere — Flexible Schedule" },
        { icon: <TrendingUp className="w-6 h-6" />, title: "145+ Units & Growing Fast" },
      ],
      financials: [
        { label: "Total Units (2025)", value: "145+" },
        { label: "Monthly Royalty (Flat Fee)", value: "$750/mo" },
      ],
      idealOwner: [
        "Community & Event-Oriented Personality",
        "Customer-Facing & Energetic",
        "Entrepreneurial Self-Starter",
        "Flexible & Willing to Work Events & Markets",
      ],
      support: [
        "Turnkey Branded Trailer — Ready to Operate",
        "Training on Operations & Recipes",
        "Protected Territory & Marketing Support",
        "Flat-Fee Monthly Royalty Model",
      ],
      fddNote: "*Data sourced from FDD disclosures and franchise review sources (2025–2026). Review current FDD for full details.",
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

        <div className="mt-8 text-sm text-gray-400">
          {data.consultant.name} &nbsp;·&nbsp; {data.consultant.email} &nbsp;·&nbsp; {data.consultant.phone}
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {data.brands.map((b) => (
            <button
              key={b.id}
              onClick={() => document.getElementById(b.id)?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors rounded-full px-4 py-2 text-sm"
            >
              <span>{b.emoji}</span>
              <span>{b.name}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 animate-bounce">
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  )
}

function BrandSlide({ brand }) {
  const isContactOnly = false

  return (
    <section className="py-20 border-b border-gray-100" id={brand.id}>
      <div className="max-w-5xl mx-auto px-6">
        {/* Brand Header */}
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
            {isContactOnly ? (
              <div className="space-y-3">
                <div
                  className="rounded-xl p-4 text-center"
                  style={{ backgroundColor: brand.accentLight }}
                >
                  <p className="text-xl font-bold" style={{ color: brand.accentColor }}>
                    Low-Cost, Home-Based Investment
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Entrepreneur Franchise 500 — Top Low-Cost Franchise
                  </p>
                </div>
                <p className="text-sm text-gray-500 text-center">
                  Contact for current investment details & FDD
                </p>
              </div>
            ) : (
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
            )}
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
          <div className={`grid gap-4 ${brand.financials.length <= 2 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-2'}`}>
            {brand.financials.map((f, i) => (
              <div
                key={i}
                className="rounded-xl p-6"
                style={{ backgroundColor: brand.accentColor }}
              >
                <p className="text-3xl font-black text-white mb-1">{f.value}</p>
                <p className="text-sm text-white/80 leading-snug">{f.label}</p>
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
                <li key={i} className="flex items-start gap-3 text-gray-800 font-medium">
                  <span
                    className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs mt-0.5"
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

        <div className="border border-white/10 rounded-2xl px-8 py-6 inline-block text-left space-y-3">
          <p className="text-white font-bold text-lg">{data.consultant.name}</p>
          <a href={`mailto:${data.consultant.email}`} className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
            <span className="text-blue-400">✉</span>
            {data.consultant.email}
          </a>
          <a href={`tel:${data.consultant.phone.replace(/\D/g, '')}`} className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
            <span className="text-blue-400">📞</span>
            {data.consultant.phone}
          </a>
        </div>
      </div>
    </section>
  )
}

function App() {
  return (
    <div className="bg-white font-sans">
      {/* Sticky side nav */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
        {presentationData.brands.map((b) => (
          <button
            key={b.id}
            onClick={() => document.getElementById(b.id)?.scrollIntoView({ behavior: 'smooth' })}
            title={b.name}
            className="group flex items-center gap-2"
          >
            <span
              className="block w-2.5 h-2.5 rounded-full transition-all duration-200 hover:scale-150"
              style={{ backgroundColor: b.accentColor }}
            />
            <span className="text-xs text-gray-500 hidden group-hover:block whitespace-nowrap bg-white shadow px-2 py-1 rounded">
              {b.name}
            </span>
          </button>
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
