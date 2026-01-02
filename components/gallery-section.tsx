"use client"

import { useState } from "react"
import { X } from "lucide-react"

const galleryImages = [
  {
    id: 1,
    alt: "Aathithya Guest House building night view",
    src: "/images/aathithya-building-night.jpg",
  },
  {
    id: 2,
    alt: "Common area reception",
    src: "/images/aathithya-reception.jpg",
  },
  {
    id: 3,
    alt: "Room with comfortable bed",
    src: "/images/aathithya-room-1.jpg",
  },
  {
    id: 4,
    alt: "Modern room interior",
    src: "/images/aathithya-room-2.jpg",
  },
  {
    id: 5,
    alt: "Large common area space",
    src: "/images/aathithya-common-hall.jpg",
  },
  {
    id: 6,
    alt: "Room with TV and modern decor",
    src: "/images/aathithya-room-3.jpg",
  },
  {
    id: 7,
    alt: "Building exterior front view",
    src: "/images/aathithya-building-exterior.jpg",
  },
  {
    id: 8,
    alt: "Information board check-in times",
    src: "/images/aathithya-info-board.jpg",
  },
  {
    id: 9,
    alt: "Double bed room with window",
    src: "/images/aathithya-double-room.jpg",
  },
]

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const selectedImageData = galleryImages.find((img) => img.id === selectedImage)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-[#2C3E50] tracking-tight">Gallery</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Explore our clean, comfortable, and modern spaces</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="cursor-pointer overflow-hidden rounded-lg aspect-square group relative"
              onClick={() => setSelectedImage(image.id)}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && selectedImageData && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full h-auto max-h-[90vh]">
              <button
                className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-8 h-8" />
              </button>
              <img
                src={selectedImageData.src || "/placeholder.svg"}
                alt={selectedImageData.alt}
                className="w-full h-auto rounded-lg max-h-[85vh] object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
