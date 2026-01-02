"use client"

import { MapPin, Navigation, Clock } from "lucide-react"

export function LocationSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-[#2C3E50] tracking-tight">Our Location</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Conveniently located on NH-31 highway near Nagarjar for easy access and travel
          </p>
        </div>

        <div className="rounded-xl overflow-hidden shadow-xl h-96 mb-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.8932474844526!2d92.0745!3d26.4073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1sAathithya%20Guest%20House%2C%20Nagarjar!2e0!5e0!3m2!1sen!2sin!4v1704281400000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Aathithya Guest House Location"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <Navigation className="w-8 h-8 text-[#E74C3C] mx-auto mb-3" />
            <h3 className="font-semibold text-[#2C3E50] mb-2 text-lg">Highway Access</h3>
            <p className="text-gray-600">Directly on NH-31</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <MapPin className="w-8 h-8 text-[#E74C3C] mx-auto mb-3" />
            <h3 className="font-semibold text-[#2C3E50] mb-2 text-lg">Easy Access</h3>
            <p className="text-gray-600">Howly To Simlaguri Road</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <Clock className="w-8 h-8 text-[#E74C3C] mx-auto mb-3" />
            <h3 className="font-semibold text-[#2C3E50] mb-2 text-lg">Check-in / Check-out</h3>
            <p className="text-gray-600">1:00 PM / 11:00 AM</p>
          </div>
        </div>
      </div>
    </section>
  )
}
