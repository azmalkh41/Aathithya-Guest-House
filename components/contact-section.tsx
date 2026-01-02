"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react"
import { useState } from "react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    checkInDate: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `Hi Aathithya Guest House, I'm interested in booking. Name: ${formData.firstName} ${formData.lastName}, Email: ${formData.email}, Phone: ${formData.phone}, Check-in: ${formData.checkInDate}, Message: ${formData.message}`
    window.open(`https://wa.me/918135955400?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-[#2C3E50] tracking-tight">Get In Touch</h2>
          <p className="text-lg text-gray-600">Contact us for instant booking and inquiries</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-[#2C3E50] mb-6">Contact Information</h3>
            </div>

            <div className="flex gap-4 p-5 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
              <Phone className="w-6 h-6 text-[#E74C3C] flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-[#2C3E50] mb-1">Call Us</h4>
                <a href="tel:+918135955400" className="text-gray-700 hover:text-[#E74C3C] font-medium">
                  +91-8135955400
                </a>
              </div>
            </div>

            <div className="flex gap-4 p-5 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
              <MessageCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-[#2C3E50] mb-1">WhatsApp</h4>
                <a
                  href="https://wa.me/918135955400"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-green-600 font-medium"
                >
                  +91-8135955400
                </a>
              </div>
            </div>

            <div className="flex gap-4 p-5 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
              <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-[#2C3E50] mb-1">Address</h4>
                <p className="text-gray-700 leading-relaxed">
                  Aathithya Guest House
                  <br />
                  Howly To Simlaguri, NH-31
                  <br />
                  Nagarjar, Assam 781316, India
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-5 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
              <Clock className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-[#2C3E50] mb-1">Check-in / Check-out</h4>
                <p className="text-gray-700">
                  Check-in: 1:00 PM
                  <br />
                  Check-out: 11:00 AM
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <h3 className="text-2xl font-bold text-[#2C3E50] mb-6">Send us a Message</h3>

            <div className="grid sm:grid-cols-2 gap-4">
              <Input
                placeholder="First Name"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                required
                className="border-gray-300"
              />
              <Input
                placeholder="Last Name"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                required
                className="border-gray-300"
              />
            </div>

            <Input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="border-gray-300"
            />

            <Input
              type="tel"
              placeholder="Phone"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
              className="border-gray-300"
            />

            <Input
              type="date"
              placeholder="Check-in Date"
              value={formData.checkInDate}
              onChange={(e) => setFormData({ ...formData, checkInDate: e.target.value })}
              required
              className="border-gray-300"
            />

            <Textarea
              placeholder="Message (Optional)"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="border-gray-300"
            />

            <Button
              type="submit"
              className="w-full bg-[#E74C3C] hover:bg-[#C0392B] text-white text-lg py-6 font-semibold"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
