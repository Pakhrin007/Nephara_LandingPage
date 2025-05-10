import { useState } from "react"
import { Play } from "lucide-react"

export default function TestimonialSection({testimonials}) {
  const [hoveredId, setHoveredId] = useState(null)

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden relative h-[400px] cursor-pointer"
              onMouseEnter={() => setHoveredId(testimonial.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Text Card */}
              <div
                className={`transition-opacity duration-300 h-full ${
                  hoveredId === testimonial.id ? "opacity-0" : "opacity-100"
                }`}
              >
                <div className="p-6 flex flex-col h-full">
                  <div className="flex justify-start mb-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden">
                      <img
                        src={testimonial.avatar}
                        alt={`${testimonial.name} avatar`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <p className="text-gray-800 text-sm leading-relaxed mb-4">
                      "{testimonial.quote}"
                    </p>
                  </div>
                  <div className="mt-auto">
                    <p className="font-medium text-lg text-gray-800">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.title}</p>
                  </div>
                </div>
              </div>

              {/* Image Hover Card */}
              <div
                className={`absolute inset-0 transition-opacity duration-300 ${
                  hoveredId === testimonial.id ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="relative w-full h-full">
                  <img
                    src={testimonial.fullImage}
                    alt={testimonial.name}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white bg-opacity-30 flex items-center justify-center">
                      <Play className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
