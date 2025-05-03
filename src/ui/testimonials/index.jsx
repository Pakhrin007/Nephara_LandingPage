import React, { useState } from 'react';
import avatarImg from '../../assets/images/logo.png'; // Adjust path as needed

function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviewsPerPage = 3;

  const reviews = [
    { userName: 'Alice', rating: 5, description: 'Amazing recipe! Easy to follow and delicious results.' },
    { userName: 'Bob', rating: 4, description: 'Really enjoyed this dish. Will make it again!' },
    { userName: 'Charlie', rating: 3, description: 'It was okay, maybe needs more spice for my taste.' },
    { userName: 'Diana', rating: 5, description: 'Perfect for a quick dinner. My family loved it!' },
    { userName: 'Ethan', rating: 4, description: 'Great balance of flavors. Easy to make!' },
    { userName: 'Fiona', rating: 5, description: 'Loved it! Will be a staple in my kitchen.' },
  ];

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - reviewsPerPage;
      return newIndex < 0 ? Math.floor((reviews.length - 1) / reviewsPerPage) * reviewsPerPage : newIndex;
    });
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + reviewsPerPage;
      return newIndex >= reviews.length ? 0 : newIndex;
    });
  };

  const currentReviews = reviews.slice(currentIndex, currentIndex + reviewsPerPage);

  return (
    <section id="testimonial" className="py-12 px-4">
      <h2 className="text-center text-3xl font-semibold font-title mb-8">
        What Our <span className="text-red-500">Users Say</span>
      </h2>
      <div className="flex items-center justify-center gap-4">
        <button onClick={handlePrevClick} className="text-lg px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
          ←
        </button>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl w-full">
          {currentReviews.map((review, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-xl shadow-md flex flex-col items-center text-center  w-full min-h-[260px]"
            >
              <img
                src={avatarImg}
                alt="user"
                className="w-16 h-16 rounded-full object-cover mb-3"
              />
              <h3 className="text-lg font-semibold">{review.userName}</h3>
              <div className="text-yellow-400 text-xl my-1">
                {'★'.repeat(Math.round(review.rating))}
              </div>
              <p className="text-sm text-gray-700">{review.description}</p>
            </div>
          ))}
        </div>
        <button onClick={handleNextClick} className="text-lg px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
          →
        </button>
      </div>
    </section>
  );
}

export default Testimonial;
