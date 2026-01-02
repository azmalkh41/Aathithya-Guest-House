import { MapPin, Phone, Mail, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#2C3E50] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#E74C3C]">Aathithya Guest House</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Comfortable, affordable accommodation on NH-31 with modern amenities and warm hospitality.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <a href="#rooms" className="hover:text-[#E74C3C] transition-colors">
                  Rooms
                </a>
              </li>
              <li>
                <a href="#amenities" className="hover:text-[#E74C3C] transition-colors">
                  Amenities
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#E74C3C] transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#E74C3C] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Contact</h4>
            <div className="space-y-3 text-gray-300 text-sm">
              <div className="flex gap-2">
                <Phone className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#E74C3C]" />
                <a href="tel:+918135955400" className="hover:text-[#E74C3C] transition-colors">
                  +91-8135955400
                </a>
              </div>
              <div className="flex gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#E74C3C]" />
                <span>NH-31, Nagarjar, Assam 781316</span>
              </div>
              <div className="flex gap-2">
                <Mail className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#E74C3C]" />
                <span>Available 24/7</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Hours</h4>
            <div className="space-y-2 text-gray-300 text-sm">
              <p>Check-in: 1:00 PM</p>
              <p>Check-out: 11:00 AM</p>
              <p className="pt-2 text-xs">Open 24 hours for emergencies</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>&copy; 2026 Aathithya Guest House. All rights reserved.</p>
            <div className="flex items-center gap-1">
              <span>Built with</span>
              <Heart className="w-4 h-4 text-[#E74C3C] fill-[#E74C3C]" />
              <span>by</span>
              <a
                href="https://codemistri.lovable.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E74C3C] hover:text-white transition-colors font-semibold"
              >
                Codemistri
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
