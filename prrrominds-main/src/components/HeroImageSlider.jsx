// import React, { useEffect, useState } from 'react';

// const images = [
//   '/img1.webp',
//   '/img2.webp',
//   '/gall1.webp',
//   '/img4.webp',
//   '/gall3.webp',
// ];

// const ImageCarousel = ({ interval = 3500 }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const autoSlide = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, interval);

//     return () => clearInterval(autoSlide);
//   }, [interval]);

//   const goToNextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const goToPrevSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//   };

//   return (
//     <>
//     {/* Added mb-8 (or your preferred spacing) to prevent overlap */}
//     <div className="relative w-full h-[500px] sm:h-[600px] lg:h-[700px] xl:h-[800px] overflow-hidden mb-8">
//       {/* Slider track */}
//       <div
//         className="flex transition-transform duration-1000 ease-in-out h-full"
//         style={{
//           width: `${images.length * 100}%`,
//           transform: `translateX(-${currentIndex * (100 / images.length)}%)`,
//         }}
//       >
//         {images.map((src, index) => (
//           <img
//             key={index}
//             src={src}
//             alt={`Slide ${index}`}
//             className="w-full h-full object-cover flex-shrink-0"
//             style={{ width: `${100 / images.length}%` }}
//           />
//         ))}
//       </div>

//       {/* Dots */}
//       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             className={`w-3 h-3 rounded-full transition-colors ${currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'}`}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>

//       {/* Navigation buttons */}
//       <button
//         onClick={goToPrevSlide}
//         className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full z-10 hover:bg-opacity-70 transition"
//         aria-label="Previous slide"
//       >
//         &#8592;
//       </button>
//       <button
//         onClick={goToNextSlide}
//         className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full z-10 hover:bg-opacity-70 transition"
//         aria-label="Next slide"
//       >
//         &#8594;
//       </button>
//     </div>

//     </>
//   );
// };

// export default ImageCarousel;

import React, { useEffect, useState } from 'react';
import { FaPhoneAlt, FaCar, FaRupeeSign } from 'react-icons/fa';

const ImageCarousel = ({ interval = 3500 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    consent: true
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const images = [
    '/img1.webp',
    '/img2.webp',
    '/gall1.webp',
    '/img4.webp',
    '/gall3.webp',
  ];

  // Carousel controls
  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(autoSlide);
  }, [interval, images.length]);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Enquiry form controls
  useEffect(() => {
    document.body.style.overflow = showEnquiry ? 'hidden' : 'auto';
    if (!showEnquiry) {
      setSubmitStatus(null);
    }
  }, [showEnquiry]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "4e9faa02-cb51-4253-98e6-b5794f4ece3a",
          name: formData.name,
          phone: formData.phone,
          subject: "Enquiry for Goel Ganga New Town",
          from_name: "Property Website",
          consent: formData.consent ? "Yes" : "No"
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          phone: '',
          consent: true
        });
        setTimeout(() => {
          setShowEnquiry(false);
        }, 3000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Slider */}
      <div className="relative w-full pb-30 h-[500px] sm:h-[600px] lg:h-[700px] xl:h-[800px] overflow-hidden">
        {/* Slider track */}
        <div
          className="flex transition-transform duration-1000 ease-in-out h-full"
          style={{
            width: `${images.length * 100}%`,
            transform: `translateX(-${currentIndex * (100 / images.length)}%)`,
          }}
        >
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover flex-shrink-0"
              style={{ width: `${100 / images.length}%` }}
            />
          ))}
        </div>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation buttons */}
        <button
          onClick={goToPrevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full z-10 hover:bg-opacity-70 transition"
          aria-label="Previous slide"
        >
          &#8592;
        </button>
        <button
          onClick={goToNextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full z-10 hover:bg-opacity-70 transition"
          aria-label="Next slide"
        >
          &#8594;
        </button>

        {/* Property Info Card - Desktop */}
        <div className="hidden lg:block absolute top-1/2 left-8 transform -translate-y-1/2 z-10">
          <div className="relative w-75 h-[32rem]">
            <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 z-10">
              <div className="bg-red-600 text-white text-sm font-semibold py-1 px-4 rounded-t-xl rounded-b-sm shadow-md">
                NEW LAUNCH
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 pt-6 h-full">
              <div className="px-4 pb-4 text-center h-full flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">GOEL GANGA NEW TOWN</h2>
                  <p className="text-xl text-gray-900 font-semibold">At Dhanori, Pune</p>
                  <p className="text-lg text-gray-900 mb-2">By Goel Ganga Developments</p>

                  <div className="bg-gray-100 rounded-md px-3 py-2 text-xs text-center mb-2">
                    <div className="flex justify-between"><span>Land Parcel</span><b>14 Acres</b></div>
                    <div className="flex justify-between"><span>Storey</span><b>B1+ B2 +13</b></div>
                    <div className="flex justify-between"><span>Possession</span><b>Dec 2027</b></div>
                  </div>

                  <ul className="text-[18px] text-white bg-red-500 mb-2 divide-y">
                    <li className="py-1">Dhanori's Biggest Township</li>
                    <li className="py-1">NO EMI Till Possession</li>
                    <li className="py-1">Pay ₹1 Lacs*</li>
                    <li className="py-1">10 Min to Airport</li>
                  </ul>
                </div>

                <div>
                  <p className="text-lg font-semibold text-gray-900">2, 3 BHK & Penthouses Starts At</p>
                  <p className="text-2xl font-bold text-red-700 mb-2">
                    ₹ 87.35 Lacs* <span className="text-xs text-red-500">All Incl.</span>
                  </p>

                  <button
                    className="relative bg-red-500 text-white border border-black text-sm px-4 py-1.5 rounded-lg 
                               transition-all duration-300 ease-in-out
                               hover:scale-105 hover:shadow-lg
                               active:scale-95 active:bg-red-600
                               focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-opacity-50
                               overflow-visible
                               animate-popBounce"
                    onClick={() => setShowEnquiry(true)}
                  >
                    <span className="absolute inset-0 rounded-lg 
                                    opacity-0
                                    animate-borderPulse 
                                    pointer-events-none" />
                    Enquire Now
                  </button>

                  <p className="text-[12px] text-gray-900 mt-1">RERA : P52100019275</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      

      {/* Enquiry Modal */}
      {showEnquiry && (
        <div className="fixed left-0 top-0 w-screen h-screen z-30 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-xl w-full max-w-sm mx-2 p-5 relative">
            <button
              className="absolute top-2 right-3 text-gray-600 text-xl"
              onClick={() => setShowEnquiry(false)}
            >
              ×
            </button>

            <div className="flex flex-col items-center gap-4">
              <div className="bg-red-600 text-white text-sm py-1 px-3 rounded font-semibold">
                WE PROMISE
              </div>

              <div className="text-xs text-gray-800 w-full space-y-2">
                <div className="flex items-center gap-2">
                  <FaPhoneAlt className="text-red-600 text-sm" />
                  <span><b className="text-red-600">INSTANT</b> CALL BACK</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCar className="text-red-600 text-sm" />
                  <span><b className="text-red-600">FREE</b> SITE VISIT</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaRupeeSign className="text-red-600 text-sm" />
                  <span><b className="text-red-600">UNMATCHED</b> PRICE</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="w-full">
                <h2 className="text-lg font-bold text-red-600 mb-2 text-center">ENQUIRY NOW</h2>
                
                {submitStatus === 'success' ? (
                  <div className="text-center py-4">
                    <p className="text-green-600 font-semibold">Thank you for your enquiry!</p>
                    <p className="text-sm text-gray-600 mt-1">We'll contact you shortly.</p>
                  </div>
                ) : (
                  <>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="w-full border border-gray-300 rounded px-3 py-1 text-sm mb-2"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                    <div className="flex items-center border border-gray-300 rounded px-3 py-1 text-sm mb-2">
                      <span className="mr-2">🇮🇳 +91</span>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Mobile Number"
                        className="w-full outline-none text-sm"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <label className="flex items-start text-[14px] text-gray-600 mb-2 gap-2">
                      <input 
                        type="checkbox" 
                        name="consent"
                        checked={formData.consent}
                        onChange={handleInputChange}
                        className="mt-1" 
                      />
                      <span>
                        I Consent to data use per
                        <a href="#" className="text-blue-600 ml-1">Privacy</a> &
                        <a href="#" className="text-blue-600 ml-1">Terms</a>.
                      </span>
                    </label>

                    <div className="flex justify-center mb-3 mt-5">
                      <button 
                        type="submit"
                        disabled={isSubmitting}
                        className={`relative max-w-[130px] border border-black bg-red-600 hover:bg-red-700 text-white text-lg font-semibold px-4 py-1.5 rounded-lg w-full
                                  transition-all duration-300 shadow-md
                                  disabled:opacity-50 disabled:cursor-not-allowed
                                  ${!isSubmitting ? 'animate-popBounce' : ''}`}
                      >
                        {!isSubmitting && (
                          <span className="absolute inset-0 rounded-lg  
                                          opacity-0
                                          animate-borderPulse 
                                          pointer-events-none" />
                        )}
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                      </button>
                    </div>
                  </>
                )}

                {submitStatus === 'error' && (
                  <p className="text-red-500 text-xs text-center mb-2">
                    Failed to submit. Please try again.
                  </p>
                )}
              </form>

              <div className="border border-red-600 rounded px-3 py-2 text-center w-full">
                <div className="bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-t mb-3 inline-block">
                  GET INFORMATION
                </div>
                <div className="flex justify-around text-xs text-gray-800">
                  <div className="flex items-center gap-1">🧱 Units</div>
                  <div className="flex items-center gap-1">💳 Payment</div>
                  <div className="flex items-center gap-1">📐 Plans</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </>
  );
};

export default ImageCarousel;