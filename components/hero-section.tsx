"use client"

import { Button } from "@/components/ui/button"
import { Phone, MessageCircle } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative w-full h-screen min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/images/aathithya-building-night.jpg)",
          backgroundAttachment: "fixed",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light mb-4 tracking-tight text-balance">
          Aathithya Guest House
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl font-light mb-8 text-white/95">
          Comfortable rooms • Modern amenities • Warm hospitality
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-white text-[#E74C3C] hover:bg-white/90 px-8 py-6 text-lg font-semibold"
            onClick={() =>
              window.open(
                "https://wa.me/918135955400?text=Hi%20I%20would%20like%20to%20book%20a%20room%20at%20Aathithya%20Guest%20House",
                "_blank",
              )
            }
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Book on WhatsApp
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/20 px-8 py-6 text-lg font-semibold bg-transparent"
            onClick={() => (window.location.href = "tel:+918135955400")}
          >
            <Phone className="w-5 h-5 mr-2" />
            +91-8135955400
          </Button>
        </div>
      </div>
    </section>
  )
}
