import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Priya Devi",
    location: "Assam",
    role: "Family Traveler",
    content:
      "Aathithya Guest House exceeded our expectations! Clean rooms, friendly staff, and excellent value for money. Perfect for our family vacation.",
    rating: 5,
  },
  {
    name: "Ahmed Hassan",
    location: "Delhi",
    role: "Business Traveler",
    content:
      "Great location on NH-31, comfortable rooms with all amenities. The hospitality was warm and welcoming. Definitely staying again next visit!",
    rating: 5,
  },
  {
    name: "Surajit Nath",
    location: "Assam",
    role: "Tourist",
    content:
      "Best budget guest house in the area. Good condition rooms, well-maintained facilities, and the staff is very cooperative. Highly recommended!",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-[#2C3E50] tracking-tight">Guest Reviews</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Hear from our happy guests</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#E74C3C]"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#E74C3C] text-[#E74C3C]" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed italic">{`"${testimonial.content}"`}</p>

              <div className="border-t pt-4">
                <h4 className="font-bold text-[#2C3E50]">{testimonial.name}</h4>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
                <p className="text-xs text-gray-500">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
