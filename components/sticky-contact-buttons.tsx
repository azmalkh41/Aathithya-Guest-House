"use client"

import { Phone, MessageCircle } from "lucide-react"

export function StickyContactButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/918135955400?text=Hi%20I%20would%20like%20to%20book%20a%20room%20at%20Aathithya%20Guest%20House"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110 duration-300"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Call Button */}
      <a
        href="tel:+918135955400"
        className="w-14 h-14 rounded-full bg-[#E74C3C] hover:bg-[#C0392B] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110 duration-300"
        title="Call Now"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  )
}
