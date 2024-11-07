import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Reviews = () => {
  // Sample review data
  const reviews = [
    {
      id: 1,
      name: "John Doe",
      review: "This service was amazing! The ride was comfortable and the driver was friendly.",
      rating: 5,
    },
    {
      id: 2,
      name: "Jane Smith",
      review: "I had a great experience. The app is user-friendly and the prices are reasonable.",
      rating: 4,
    },
    {
      id: 3,
      name: "Michael Johnson",
      review: "Fast and reliable service. I will definitely use it again!",
      rating: 5,
    },
  ];

  // Slider settings for auto-change and improved design
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: "linear",
  };

  return (
    <div className="reviews-section max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-center text-3xl font-bold mb-6 text-gray-800">Customer Reviews</h2>
      <div className=" border-gray-300 rounded-lg shadow-xl overflow-hidden"> {/* Added a border and shadow around the slider */}
        <Slider {...settings}>
          {reviews.map((review) => (
            <div
              key={review.id}
              className="review-slide p-6 bg-white text-center relative"
            >
              <p className="text-lg italic text-gray-700">"{review.review}"</p>
              <h4 className="font-semibold mt-4 text-xl text-gray-900">{review.name}</h4>
              <div className="rating text-yellow-500 mt-2">
                {"⭐".repeat(review.rating)}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Reviews;
