"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, Wifi, Droplets, Wind, Tv } from "lucide-react"

const rooms = [
  {
    id: 1,
    name: "Standard Room",
    description: "Comfortable room with basic modern amenities",
    features: ["AC", "WiFi", "Bathroom", "TV"],
    image: "/images/aathithya-room-1.jpg",
  },
  {
    id: 2,
    name: "Comfort Room",
    description: "Spacious room perfect for families and groups",
    features: ["AC", "WiFi", "Bathroom", "TV", "Spacious"],
    image: "/images/aathithya-room-2.jpg",
  },
  {
    id: 3,
    name: "Premium Room",
    description: "Best comfort with premium amenities and modern decor",
    features: ["AC", "WiFi", "Attached Bath", "Smart TV", "Best View"],
    image: "/images/aathithya-room-3.jpg",
  },
]

const featureIcons = {
  AC: <Wind className="w-4 h-4" />,
  WiFi: <Wifi className="w-4 h-4" />,
  Bathroom: <Droplets className="w-4 h-4" />,
  TV: <Tv className="w-4 h-4" />,
  Spacious: <Wifi className="w-4 h-4" />,
  "Best View": <Wifi className="w-4 h-4" />,
  "Attached Bath": <Droplets className="w-4 h-4" />,
  "Smart TV": <Tv className="w-4 h-4" />,
}

export function RoomsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-[#2C3E50] tracking-tight">Our Rooms</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience our modern, clean, and comfortable rooms designed for your perfect stay
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <Card
              key={room.id}
              className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-0 bg-white"
            >
              <div
                className="w-full h-56 bg-cover bg-center relative overflow-hidden group"
                style={{ backgroundImage: `url(${room.image})` }}
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-[#E74C3C]">{room.name}</CardTitle>
                <CardDescription className="text-gray-600">{room.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {room.features.map((feature) => (
                    <span
                      key={feature}
                      className="flex items-center gap-2 px-3 py-1.5 bg-orange-100/60 text-orange-700 text-sm rounded-full font-medium"
                    >
                      {featureIcons[feature as keyof typeof featureIcons]}
                      {feature}
                    </span>
                  ))}
                </div>
                <Button
                  className="w-full bg-[#E74C3C] hover:bg-[#C0392B] text-white font-semibold py-6"
                  onClick={() =>
                    window.open(
                      "https://wa.me/918135955400?text=Hi%20I%20am%20interested%20in%20the%20" +
                        room.name +
                        "%20at%20Aathithya%20Guest%20House",
                      "_blank",
                    )
                  }
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Check Availability
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
