import React, { useState, useEffect } from 'react';
import { FaPhoneAlt, FaCar, FaRupeeSign } from 'react-icons/fa';

const PropertyCard = () => {
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

  useEffect(() => {
    if (currentPage >= totalPages) {
      setCurrentPage(Math.max(0, totalPages - 1));
    }
  }, [cardsPerPage, totalPages, currentPage]);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };
  const isTablet = windowWidth < 1024;
  const currentCards = propertyData.slice(
    currentPage * cardsPerPage,
    currentPage * cardsPerPage + cardsPerPage
  );

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
                    <h2 className="text-lg font-bold text-red-600 mb-2 text-center">COMPLETE DETAILS</h2>
                    
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


<div className="px-4 py-6">
  <div className={`w-full ${isTablet ? 'mx-auto px-4' : 'md:w-3/4 pr-4 pl-4 md:pl-8 justify-center'}`}>
    <h3 className="text-3xl font-bold text-center text-red-600 mb-10">
      Goel Ganga New Town Dhanori - Area & Pricing
    </h3>
    
    {/* Cards Container */}
    <div className="relative">
      <div
        className="grid grid-cols-1 gap-4 md:gap-2 w-full justify-center md:justify-start max-w-7xl mx-auto relative lg:pl-4 lg:pr-4"
        style={{
          gridTemplateColumns: `repeat(${cardsPerPage}, minmax(0, 1fr))`,
          display: windowWidth < 480 ? 'flex' : 'grid',
          flexDirection: windowWidth < 480 ? 'column' : 'unset',
          overflowX: windowWidth < 480 ? 'auto' : 'visible',
          scrollSnapType: windowWidth < 480 ? 'x mandatory' : 'none',
        }}
      >
        {currentCards.map((property, idx) => (
          <div
            key={idx}
            className="bg-white border rounded-xl shadow p-6 transition-all duration-300 hover:shadow-lg w-full max-w-[700px] sm:max-w-[750px] md:max-w-[800px] lg:max-w-[400px] mx-auto"
            style={{
              minWidth: windowWidth < 480 ? '100%' : 'auto',
              scrollSnapAlign: windowWidth < 480 ? 'start' : 'none',
            }}
          >
            
            <h2 className="lg:text-3xl md:text-xl  text-center font-bold">{property.type}</h2>
            <p className="text-lg text-center text-gray-600">{property.area}</p>
            <p className="text-red-600 font-bold lg:text-3xl md:text-xl text-center mt-2">
              {property.price}
            </p>
            <div className="flex justify-center mt-5">
              <button 
                className="relative w-full sm:w-[350px] bg-red-600 border border-black text-white py-2 rounded-lg hover:bg-red-700 transition-all text-sm sm:text-base animate-heartbeat"
                onClick={() => setShowEnquiry(true)}
                >
                <span className="absolute inset-0 rounded opacity-0 animate-pulseBorder pointer-events-none" />
                Complete Costing Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls - Adjusted for small screens */}
      {totalPages > 1 && (
        <>
          <button
            onClick={prevPage}
            disabled={currentPage === 0}
            className={`hidden sm:flex absolute -left-6 sm:-left-10 top-1/2 transform -translate-y-1/2 bg-gray-500 border border-white text-white w-10 h-10 items-center justify-center rounded-full shadow transition-colors ${
              currentPage === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-600'
            }`}
            aria-label="Previous"
          >
            <span className="relative -left-[1px]">&lt;</span>
          </button>

          <button
            onClick={nextPage}
            disabled={currentPage === totalPages - 1}
            className={`hidden sm:flex absolute -right-6 sm:-right-10 top-1/2 transform -translate-y-1/2 border border-white bg-gray-500 text-white w-10 h-10 items-center justify-center rounded-full shadow transition-colors ${
              currentPage === totalPages - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-600'
            }`}
            aria-label="Next"
          >
            <span className="relative -right-[1px]">&gt;</span>
          </button>
        </>
      )}
    </div>

    {/* Mobile navigation buttons - visible only on small screens */}
    {totalPages > 1 && windowWidth < 640 && (
      <div className="flex justify-center gap-4 mt-4">
        <button
          onClick={prevPage}
          disabled={currentPage === 0}
          className={`bg-gray-500 border border-white text-white w-10 h-10 flex items-center justify-center rounded-full shadow transition-colors ${
            currentPage === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-600'
          }`}
          aria-label="Previous"
        >
          &lt;
        </button>
        
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages - 1}
          className={`bg-gray-500 border border-white text-white w-10 h-10 flex items-center justify-center rounded-full shadow transition-colors ${
            currentPage === totalPages - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-600'
          }`}
          aria-label="Next"
        >
          &gt;
        </button>
      </div>
    )}

    {/* Pagination Dots */}
    {totalPages > 1 && (
      <div className="flex justify-center gap-2 mt-4 sm:mt-8">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i)}
            className={`w-3 h-3 rounded-full transition-colors ${
              i === currentPage
                ? 'bg-red-600'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to page ${i + 1}`}
          />
        ))}
      </div>
    )}
  </div>
</div>
</>
  );
};

export default PropertyCard;