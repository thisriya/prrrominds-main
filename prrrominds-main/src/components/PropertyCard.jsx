import React, { useState, useEffect } from 'react';

const PropertyCard = () => {
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

  // Responsive cards per page
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  const totalPages = Math.ceil(propertyData.length / cardsPerPage);
  const [currentPage, setCurrentPage] = useState(0);

  // Update window width and cards per page based on screen size
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

    // Initial call
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Ensure current page is valid after cards per page changes
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

  const currentCards = propertyData.slice(
    currentPage * cardsPerPage,
    currentPage * cardsPerPage + cardsPerPage
  );

  return (
    <div className="w-full mx-auto px-4 py-8">
      <div className="flex justify-center items-center mb-6">
      <h3 className="text-center text-red-600 text-lg sm:text-xl md:text-2xl font-semibold">
          Goel Ganga New Town Dhanori - Area & Pricing
        </h3>
      </div>

      <div className="flex flex-col w-full">
        {/* Cards Container */}
        <div className="grid grid-cols-1 gap-4 md:gap-6 max-w-4xl"
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
              className="bg-white border rounded-lg shadow p-4 transition-all duration-300 hover:shadow-lg"
              style={{
                minWidth: windowWidth < 480 ? '100%' : 'auto',
                scrollSnapAlign: windowWidth < 480 ? 'start' : 'none',
              }}
            >
              <h2 className="text-base sm:text-lg font-bold">{property.type}</h2>
              <p className="text-xs sm:text-sm text-gray-600">{property.area}</p>
              <p className="text-red-600 font-bold text-base sm:text-lg mt-2">{property.price}</p>
              <button className="mt-4 w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition-colors text-sm sm:text-base">
                Complete Costing Details
              </button>
            </div>
          ))}
        </div>

        {/* Navigation Controls - Only show if more than one page */}
        {totalPages > 1 && (
          <div className="flex justify-between items-center mt-8 max-w-4xl">
            <button
              onClick={prevPage}
              disabled={currentPage === 0}
              className={`bg-red-600 text-white p-2 rounded-full shadow hover:bg-red-700 transition-colors ${
                currentPage === 0 ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              aria-label="Previous"
            >
              ◀
            </button>
            
            {/* Pagination Dots */}
            <div className="flex justify-center gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    i === currentPage ? 'bg-red-600' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to page ${i + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextPage}
              disabled={currentPage === totalPages - 1}
              className={`bg-red-600 text-white p-2 rounded-full shadow hover:bg-red-700 transition-colors ${
                currentPage === totalPages - 1 ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              aria-label="Next"
            >
              ▶
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyCard;