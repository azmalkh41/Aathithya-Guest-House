"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Wifi, Droplets, Zap, ParkingCircle, Shield, Sparkles } from "lucide-react"

const amenities = [
  {
    icon: Wifi,
    title: "Free WiFi",
    description: "High-speed internet in all rooms",
  },
  {
    icon: Droplets,
    title: "24×7 Water",
    description: "Uninterrupted water supply throughout the day",
  },
  {
    icon: Zap,
    title: "Power Backup",
    description: "Continuous electricity with backup power",
  },
  {
    icon: ParkingCircle,
    title: "Parking Available",
    description: "Safe and secure parking for guests",
  },
  {
    icon: Sparkles,
    title: "Clean Rooms",
    description: "Daily housekeeping and sanitation",
  },
  {
    icon: Shield,
    title: "CCTV Security",
    description: "24/7 security monitoring for safety",
  },
]

export function AmenitiesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-[#2C3E50] tracking-tight">Our Amenities</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need for a comfortable and hassle-free stay
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon
            return (
              <Card
                key={index}
                className="border-0 bg-gradient-to-br from-white to-slate-50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader className="pb-3">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-100 to-orange-50 flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-[#E74C3C]" />
                  </div>
                  <CardTitle className="text-lg text-[#2C3E50] font-semibold">{amenity.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 leading-relaxed">{amenity.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
