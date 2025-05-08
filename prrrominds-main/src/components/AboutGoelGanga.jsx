import React from "react";
import { useState, useEffect } from "react";
import { FaPhoneAlt, FaCar, FaRupeeSign } from 'react-icons/fa';

const AboutGoelGanga = () => {
      const [showEnquiry, setShowEnquiry] = useState(false);
      const [formData, setFormData] = useState({
        name: '',
        phone: '',
        consent: true
      });
      const [isSubmitting, setIsSubmitting] = useState(false);
      const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', or 'error'
    
      useEffect(() => {
        document.body.style.overflow = showEnquiry ? 'hidden' : 'auto';
        // Reset form state when modal is closed
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
              access_key: "4e9faa02-cb51-4253-98e6-b5794f4ece3a", // Replace with your actual access key
              name: formData.name,
              phone: formData.phone,
              subject: "Complete Details",
              from_name: "Property Website",
              consent: formData.consent ? "Yes" : "No"
            }),
          });
    
          const result = await response.json();
          if (result.success) {
            setSubmitStatus('success');
            // Reset form
            setFormData({
              name: '',
              phone: '',
              consent: true
            });
            // Auto-close after 3 seconds
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
    const propertyData = [
      { type: "1 BHK", area: "600-650 Sq.Ft.", price: "₹40 Lacs*" },
      { type: "2 BHK Apartment", area: "900-950 Sq.Ft.", price: "₹60 Lacs*" },
      { type: "3 BHK Villa", area: "1400-1500 Sq.Ft.", price: "₹1.20 Cr*" },
      { type: "2 BHK Duplex", area: "1100-1200 Sq.Ft.", price: "₹85 Lacs*" },
      { type: "1 BHK Studio", area: "450-500 Sq.Ft.", price: "₹35 Lacs*" },
      { type: "4 BHK Penthouse", area: "2000-2200 Sq.Ft.", price: "₹3.50 Cr*" },
      { type: "2 BHK Flat", area: "850-900 Sq.Ft.", price: "₹50 Lacs*" },
      { type: "3 BHK Apartment", area: "1300-1350 Sq.Ft.", price: "₹1.00 Cr*" },
      { type: "5 BHK Villa", area: "2500-2700 Sq.Ft.", price: "₹5.00 Cr*" },
    ];
  
    const [cardsPerPage, setCardsPerPage] = useState(3);
    const [windowWidth, setWindowWidth] = useState(
      typeof window !== 'undefined' ? window.innerWidth : 1024
    );
    const totalPages = Math.ceil(propertyData.length / cardsPerPage);
    const [currentPage, setCurrentPage] = useState(0);
  
    useEffect(() => {
      const handleResize = () => {
        const width = window.innerWidth;
        setWindowWidth(width);
  
        if (width < 480) {
          setCardsPerPage(1);
        } else if (width < 768) {
          setCardsPerPage(2);
        } else if (width < 1024) {
          setCardsPerPage(3);
        } else {
          setCardsPerPage(3);
        }
      };
  
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const fullText = `Ganga New Town is the biggest township of Dhanori. Dhanori is one of the most popular locations in Pune and is developing at an exponential rate when it comes to infrastructure improvements. The township offers modern amenities, green spaces, and excellent connectivity to key areas of Pune. With a focus on sustainable living, Goel Ganga New Town provides a perfect blend of urban convenience and natural surroundings.`;

  const displayedText = isExpanded ? fullText : fullText.split('.').slice(0, 2).join('.') + '.';

  return (
    <>
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
                      {/* Header */}
                      <div className="bg-red-600 text-white text-sm py-1 px-3 rounded font-semibold">
                        WE PROMISE
                      </div>
        
                      {/* Promise Info */}
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
        
                      {/* Form */}
                      <form onSubmit={handleSubmit} className="w-full">
                        <h2 className="text-lg font-bold text-red-600 mb-2 text-center"> Download Brochure</h2>
                        
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
                            {/* <div className="flex justify-center mb-3 mt-5">
          <button 
            type="submit"
            disabled={isSubmitting}
            className={`relative w-[80px] border border-black bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-4 py-1.5 rounded-lg w-full
                      transition-all duration-300 shadow-md
                      disabled:opacity-50 disabled:cursor-not-allowed
                      ${!isSubmitting ? 'animate-[subtlePop_2s_ease-in-out_infinite]' : ''}`}
          >
            {!isSubmitting && (
              <span className="absolute inset-0 rounded-lg border-2 border-red-300 
                              opacity-0
                              animate-[pulseBorder_2s_ease-in-out_infinite] 
                              pointer-events-none" />
            )}
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </div> */}
        
        {/* heartbeat vala */}
        <div className="flex justify-center mb-3 mt-5">
          <button 
            type="submit"
            disabled={isSubmitting}
            className={`relative max-w-[200px] border border-black bg-red-600 hover:bg-red-700 text-white text-lg font-semibold px-4 py-1.5 rounded-lg w-full
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
            {isSubmitting ? 'Submitting...' : 'Start Download'}
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
        
                      {/* Footer Info */}
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


    <section className="flex flex-col md:flex-row items-center px-10 justify-between py-10 bg-white pt-80">
      {/* Text Content */}
      <div className="md:w-1/3 space-y-4">
        <h2 className="text-red-600 text-xl font-bold mb-4">
          About Goel Ganga New Town
        </h2>
        <p className="text-gray-700 text-base  leading-relaxed">
          {displayedText}
        </p>
        <button
          onClick={toggleReadMore}
          className="text-blue-600 hover:text-blue-800 font-medium text-sm sm:text-base transition-colors"
        >
          {isExpanded ? (
            <span className="flex items-center">
              Read less
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          ) : (
            <span className="flex items-center">
              Read more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          )}
        </button>
        <button className="flex items-center gap-2 bg-red-600 border border-black text-white font-semibold py-2 px-4 rounded-lg shadow hover:bg-red-700 transition-all relative animate-heartbeat"  onClick={() => setShowEnquiry(true)}>
  <span className="absolute inset-0 rounded-full opacity-0 animate-pulseBorder pointer-events-none"></span>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
    />
  </svg>
  Download Brochure
</button>
      </div>

      {/* Image with curved border matching reference */}
      <div className="md:w-1/2">
        <div className="relative">
        <img
  src="/gall6.webp"
  alt="Goel Ganga New Town"
  className="w-60 md:w-80"
  style={{
    borderRadius: '40px 0 40px 0',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  }}
/>

        </div>
      </div>
    </section>
    </>
  );
};

export default AboutGoelGanga;