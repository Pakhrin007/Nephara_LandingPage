import React from 'react';
import avatarImg from '../../assets/Images/logo.png'; // Placeholder avatar

const testimonials = [
  {
    name: 'Patrick Nawrocki',
    role: 'UX Manager at Superhabits',
    text: "The lovely team at DesignMe has provided our startup with significant leverage. Their work is exceptionally professional, and Adrian is always attentive to our needs, taking the time to understand our briefs and offer valuable direction. Additionally, their turnaround times are impressively fast!",
    avatar: avatarImg,
    type: 'text',
  },
  {
    name: 'Patrick Nawrocki',
    role: 'UX Manager at Superhabits',
    text: "The lovely team at DesignMe has provided our startup with significant leverage. Their work is exceptionally professional, and Adrian is always attentive to our needs, taking the time to understand our briefs and offer valuable direction. Additionally, their turnaround times are impressively fast!",
    avatar: avatarImg,
    type: 'text',
  },
  {
    name: 'Patrick Nawrocki',
    role: 'UX Manager at Superhabits',
    text: "The lovely team at DesignMe has provided our startup with significant leverage. Their work is exceptionally professional, and Adrian is always attentive to our needs, taking the time to understand our briefs and offer valuable direction. Additionally, their turnaround times are impressively fast!",
    avatar: avatarImg,
    type: 'text',
  },
  {
    name: 'Patrick Nawrocki',
    role: 'UX Manager at Superhabits',
    text: "The lovely team at DesignMe has provided our startup with significant leverage. Their work is exceptionally professional, and Adrian is always attentive to our needs, taking the time to understand our briefs and offer valuable direction. Additionally, their turnaround times are impressively fast!",
    avatar: avatarImg,
    type: 'text',
  },
 
  {
    name: 'Rob West',
    role: 'CEO of Kingdom Advisors',
    text: "DesignMe has greatly exceeded our expectations. The communication is always excellent, the turnaround is extremely quick, and the designs are fresh, innovative, and spot on!",
    avatar: avatarImg,
    type: 'text',
  },
];

function Testimonial() {
  return (
    <section id="testimonial" className="py-16 px-4 bg-gray-50">
      <h2 className="text-center text-3xl font-bold mb-12">
        What Our <span className="text-red-500">Clients Say</span>
      </h2>
      <div className="grid gap-8 md:grid-cols-3 max-w-7xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden relative flex flex-col justify-between"
          >
            {testimonial.type === 'text' ? (
              <div className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">{testimonial.text}</p>
              </div>
            ) : (
              <div
                className="relative h-full bg-cover bg-center text-white flex items-end"
                style={{
                  backgroundImage: `url(${testimonial.image})`,
                  minHeight: '360px',
                }}
              >
                
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonial;
