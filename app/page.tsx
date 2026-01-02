import { HeroSection } from "@/components/hero-section"
import { RoomsSection } from "@/components/rooms-section"
import { AmenitiesSection } from "@/components/amenities-section"
import { GallerySection } from "@/components/gallery-section"
import { LocationSection } from "@/components/location-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { StickyContactButtons } from "@/components/sticky-contact-buttons"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <HeroSection />
      <RoomsSection />
      <AmenitiesSection />
      <GallerySection />
      <TestimonialsSection />
      <AboutSection />
      <LocationSection />
      <ContactSection />
      <Footer />
      <StickyContactButtons />
    </main>
  )
}
