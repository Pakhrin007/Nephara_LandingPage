import React, { useState } from 'react';
import messi from '../../assets/Images/messi.jpg'; // Placeholder avatar
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Using react-icons for arrows

const testimonials = [
  {
    name: 'Patrick Nawrocki',
    role: 'UX Manager at Superhabits',
    text: "The lovely team at DesignMe has provided our startup with significant leverage. Their work is exceptionally professional, and Adrian is always attentive to our needs, taking the time to understand our briefs and offer valuable direction. Additionally, their turnaround times are impressively fast!",
      avatar: messi,
    type: 'text',
  },
  {
    name: 'Patrick Nawrocki',
    role: 'UX Manager at Superhabits',
    text: "The lovely team at DesignMe has provided our startup with significant leverage. Their work is exceptionally professional, and Adrian is always attentive to our needs, taking the time to understand our briefs and offer valuable direction. Additionally, their turnaround times are impressively fast!",
      avatar: messi,
    type: 'text',
  },
  {
    name: 'Patrick Nawrocki',
    role: 'UX Manager at Superhabits',
    text: "The lovely team at DesignMe has provided our startup with significant leverage. Their work is exceptionally professional, and Adrian is always attentive to our needs, taking the time to understand our briefs and offer valuable direction. Additionally, their turnaround times are impressively fast!",
      avatar: messi,
    type: 'text',
  },
  {
    name: 'Patrick Nawrocki',
    role: 'UX Manager at Superhabits',
    text: "The lovely team at DesignMe has provided our startup with significant leverage. Their work is exceptionally professional, and Adrian is always attentive to our needs, taking the time to understand our briefs and offer valuable direction. Additionally, their turnaround times are impressively fast!",
    avatar: messi,
    type: 'text',
  },
  {
    name: 'Rob West',
    role: 'CEO of Kingdom Advisors',
    text: "DesignMe has greatly exceeded our expectations. The communication is always excellent, the turnaround is extremely quick, and the designs are fresh, innovative, and spot on!",
    avatar: messi,
    type: 'text',
  },
];

function Testimonial() {
  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - 3, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) => Math.min(prev + 3, testimonials.length - 3));
  };

  const visibleTestimonials = testimonials.slice(startIndex, startIndex + 3);

  return (
    <section id="testimonial" className="py-16 px-4 bg-gray-50">
      <h2 className="text-center text-3xl font-bold mb-12">
        What Our <span className="text-red-500">Clients Say</span>
      </h2>
      <div className="relative max-w-[1600px] mx-auto">
        <div className="grid gap-8 md:grid-cols-3 ">
          {visibleTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden relative p-6 flex flex-col justify-between h-[400px] w-[520px]"
            >
              {testimonial.type === 'text' ? (
                <div className="flex flex-col h-full gap-y-4">
                        <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  <div className="flex items-center gap-4 mb-6">
              
                    <div>
                      <p className="font-normal text-gray-900 tracking-wide text-justify leading-[28px] mt-2">{testimonial.text}</p>
                      <p className="text-sm text-gray-500 mt-4">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="mt-auto">
                    <p
                      className="text-gray-900 font-cursive italic text-xl"
                      style={{ fontFamily: 'cursive, "Brush Script MT", cursive' }}
                    >
                      {testimonial.name}
                    </p>
                  </div>
                </div>
              ) : (
                <div
                  className="relative h-full bg-cover bg-center text-white flex items-end"
                  style={{
                    backgroundImage: `url(${testimonial.image})`,
                    minHeight: '360px',
                  }}
                ></div>
              )}
            </div>
          ))}
        </div>
        <button
          onClick={handlePrev}
          className={`absolute top-1/2 -left-12 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 ${
            startIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={startIndex === 0}
        >
          <FaChevronLeft className="text-gray-600" />
        </button>
        <button
          onClick={handleNext}
          className={`absolute top-1/2 -right-12 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 ${
            startIndex >= testimonials.length - 3 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={startIndex >= testimonials.length - 3}
        >
          <FaChevronRight className="text-gray-600" />
        </button>
      </div>
    </section>
  );
}

export default Testimonial;