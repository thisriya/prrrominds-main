import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.svg';
import { FaHome, FaDollarSign, FaMap, FaSwimmingPool, FaImages, FaMapMarkerAlt, FaFileAlt, FaBars, FaTimes } from 'react-icons/fa';

// Custom hook to detect screen size
const useScreenSize = () => {
  // Initial state based on window size
  const [screenSize, setScreenSize] = useState({
    isMobile: window.innerWidth < 640,
    isTablet: window.innerWidth >= 640 && window.innerWidth < 1024,
    isDesktop: window.innerWidth >= 1024 && window.innerWidth<=1200,
    ismediumDesktop: window.innerWidth > 1200 && window.innerWidth < 1400,
    isLargeDesktop: window.innerWidth >= 1400 && window.innerWidth < 1500,
    isLargerDesktop: window.innerWidth >= 1500,
    width: window.innerWidth
  });

  useEffect(() => {
    // Function to update screen size
    const handleResize = () => {
      setScreenSize({
        isMobile: window.innerWidth < 640,
        isTablet: window.innerWidth >= 640 && window.innerWidth < 1024,
        isDesktop: window.innerWidth >= 1024 && window.innerWidth <= 1200,
        ismediumDesktop: window.innerWidth >= 1200 && window.innerWidth <= 1400,
        isLargeDesktop: window.innerWidth >= 1400 && window.innerWidth < 1500,
        isLargerDesktop: window.innerWidth >= 1500,
        width: window.innerWidth
      });
    };

    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return screenSize;
};

// const Sidebar = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     consent: false
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitSuccess, setSubmitSuccess] = useState(false);
//   const [submitError, setSubmitError] = useState('');

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setSubmitError('');
    
//     try {
//       const response = await fetch('https://api.web3forms.com/submit', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           access_key: '4e9faa02-cb51-4253-98e6-b5794f4ece3a', // Replace with your actual access key
//           name: formData.name,
//           phone: formData.phone,
//           consent: formData.consent ? 'Yes' : 'No',
//           subject: 'New Enquiry from Website',
//           from_name: 'Website Sidebar Form',
//           redirect: false
//         }),
//       });

//       const result = await response.json();
      
//       if (result.success) {
//         setSubmitSuccess(true);
//         setFormData({
//           name: '',
//           phone: '',
//           consent: false
//         });
//         // Reset success message after 5 seconds
//         setTimeout(() => setSubmitSuccess(false), 5000);
//       } else {
//         throw new Error(result.message || 'Failed to submit form');
//       }
//     } catch (error) {
//       setSubmitError(error.message || 'Something went wrong. Please try again.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleCallBackRequest = () => {
//     window.location.href = 'tel:+919606970803';
//   };

//   return (
//     <aside className="hidden lg:block w-72 bg-white shadow-xl border-l border-gray-200 fixed right-0 top-0 h-screen overflow-y-auto z-50">
//       <div className="p-4">
//         {/* Organize Site Visit Header */}
//         <div className="flex justify-between bg-red-600 divide-x items-center mb-4">
//           <span className="bg-red-600 text-white px-3 py-1 text-xs rounded">Organize Site Visit</span>
//           <a 
//             href="tel:+919606970803" 
//             className="bg-red-600 text-white px-3 py-1 text-xs rounded font-semibold hover:bg-red-700 transition"
//           >
//             +91 9606970803
//           </a>
//         </div>

//         {/* Request Call Back Button */}
//         <button 
//           onClick={handleCallBackRequest}
//           className="w-full bg-red-600 text-white py-2 font-semibold rounded mb-4 hover:bg-red-700 transition shadow-md"
//         >
//           Request Call Back
//         </button>

//         {/* ENQUIRE NOW Form */}
//         <div className="mb-6">
//           <div className="flex items-center justify-center mb-3">
//             <h3 className="text-lg font-semibold text-center">ENQUIRE NOW</h3>
//             <a 
//               href="https://wa.me/919606970803" 
//               target="_blank" 
//               rel="noopener noreferrer" 
//               className="ml-2"
//             >
//               <img src="/what1.webp" alt="WhatsApp" className="w-6 h-6" />
//             </a>
//           </div>
          
//           {submitSuccess && (
//             <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
//               Thank you! Your enquiry has been submitted successfully.
//             </div>
//           )}
          
//           {submitError && (
//             <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
//               {submitError}
//             </div>
//           )}

//           <form onSubmit={handleSubmit} className="space-y-3">
//             <input 
//               type="text" 
//               name="name"
//               placeholder="Name" 
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500" 
//             />
//             <div className="flex border border-gray-300 rounded overflow-hidden focus-within:ring-2 focus-within:ring-red-500">
//               <span className="bg-gray-100 px-3 py-2 flex items-center">+91</span>
//               <input 
//                 type="tel" 
//                 name="phone"
//                 placeholder="Mobile Number" 
//                 value={formData.phone}
//                 onChange={handleChange}
//                 required
//                 pattern="[0-9]{10}"
//                 className="w-full px-2 py-2 focus:outline-none" 
//               />
//             </div>
//             <div className="flex items-start">
//               <input 
//                 type="checkbox" 
//                 id="consent"
//                 name="consent"
//                 checked={formData.consent}
//                 onChange={handleChange}
//                 required
//                 className="mt-1 mr-2"
//               />
//               <label htmlFor="consent" className="text-xs text-gray-600">
//                 I Consent to The Processing of Provided Data According To{' '}
//                 <a href="#" className="text-blue-600 underline hover:text-blue-800">Privacy Policy</a>,{' '}
//                 <a href="#" className="text-blue-600 underline hover:text-blue-800">Terms & Conditions</a>.
//               </label>
//             </div>
//             <button 
//               type="submit" 
//               disabled={isSubmitting}
//               className="w-full bg-red-600 text-white py-2 font-semibold rounded hover:bg-red-700 transition shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
//             >
//               {isSubmitting ? 'Submitting...' : 'Submit'}
//             </button>
//           </form>
//         </div>

//         {/* WhatsApp Image Section */}
//         <div className="mt-4">
//           <img
//             src="/place1.webp"
//             alt="Pickup Service"
//             className="w-full h-auto object-contain rounded"
//           />
//         </div>
//       </div>
//     </aside>
//   );
// };




const Sidebar = () => {
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submitStatus, setSubmitStatus] = useState(null); // For modal form

  useEffect(() => {
    document.body.style.overflow = showEnquiry ? 'hidden' : 'auto';
    if (!showEnquiry) {
      setSubmitStatus(null);
    }
  }, [showEnquiry]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '4e9faa02-cb51-4253-98e6-b5794f4ece3a',
          name: formData.name,
          phone: formData.phone,
          consent: formData.consent ? 'Yes' : 'No',
          subject: 'New Enquiry from Website',
          from_name: 'Website Sidebar Form',
          redirect: false
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        setSubmitSuccess(true);
        setFormData({
          name: '',
          phone: '',
          consent: false
        });
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        throw new Error(result.message || 'Failed to submit form');
      }
    } catch (error) {
      setSubmitError(error.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleModalSubmit = async (e) => {
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

  const handleCallBackRequest = (e) => {
    e.preventDefault();
    setShowEnquiry(true);
  };

  return (
    <>
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
              <form onSubmit={handleModalSubmit} className="w-full">
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
                      onChange={handleChange}
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
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <label className="flex items-start text-[10px] text-gray-600 mb-2 gap-2">
                      <input 
                        type="checkbox" 
                        name="consent"
                        checked={formData.consent}
                        onChange={handleChange}
                        className="mt-1" 
                      />
                      <span>
                        I Consent to data use per
                        <a href="#" className="text-blue-600 ml-1">Privacy</a> &
                        <a href="#" className="text-blue-600 ml-1">Terms</a>.
                      </span>
                    </label>
                    <button 
                      type="submit"
                      className="bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-4 py-1.5 rounded-full w-full mb-3 disabled:opacity-50"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
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

      <aside className="hidden lg:block w-72 bg-white shadow-xl border-l border-gray-200 fixed right-0 top-0 h-screen overflow-y-auto z-50">
        <div className="p-4">
          {/* Organize Site Visit Header */}
          <div className="flex justify-between bg-red-600 divide-x items-center mb-4">
            <span className="bg-red-600 text-white px-3 py-1 text-xs rounded">Organize Site Visit</span>
            <a 
              href="tel:+919606970803" 
              className="bg-red-600 text-white px-3 py-1 text-xs rounded font-semibold hover:bg-red-700 transition"
            >
              +91 9606970803
            </a>
          </div>

          {/* Request Call Back Button */}
          <div className="flex justify-center mb-4">
  <button 
    onClick={() => setShowEnquiry(true)}
    className="relative bg-red-600 text-white border border-black py-2 px-6 font-semibold rounded-lg 
             hover:bg-red-700 transition-all duration-300 shadow-md
             animate-[pop_2s_ease-in-out_infinite]"
  >
    <span className="absolute inset-0 rounded-lg border-2 border-red-300 
                    opacity-0
                    animate-[pulseBorder_2s_ease-in-out_infinite] 
                    pointer-events-none" />
    Request Call Back
  </button>
</div>

          

          {/* ENQUIRE NOW Form */}
          <div className="mb-6">
            <div className="flex items-center justify-center mb-3">
              <h3 className="text-lg font-semibold text-center">ENQUIRE NOW</h3>
              <a 
                href="https://wa.me/919606970803" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="ml-2"
              >
                <img src="/what1.webp" alt="WhatsApp" className="w-6 h-6" />
              </a>
            </div>
            
            {submitSuccess && (
              <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
                Thank you! Your enquiry has been submitted successfully.
              </div>
            )}
            
            {submitError && (
              <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
                {submitError}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3">
              <input 
                type="text" 
                name="name"
                placeholder="Name" 
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500" 
              />
              <div className="flex border border-gray-300 rounded overflow-hidden focus-within:ring-2 focus-within:ring-red-500">
                <span className="bg-gray-100 px-3 py-2 flex items-center">+91</span>
                <input 
                  type="tel" 
                  name="phone"
                  placeholder="Mobile Number" 
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  pattern="[0-9]{10}"
                  className="w-full px-2 py-2 focus:outline-none" 
                />
              </div>
              <div className="flex items-start">
                <input 
                  type="checkbox" 
                  id="consent"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  required
                  className="mt-1 mr-2"
                />
                <label htmlFor="consent" className="text-xs text-gray-600">
                  I Consent to The Processing of Provided Data According To{' '}
                  <a href="#" className="text-blue-600 underline hover:text-blue-800">Privacy Policy</a>,{' '}
                  <a href="#" className="text-blue-600 underline hover:text-blue-800">Terms & Conditions</a>.
                </label>
              </div>
              <div className="flex justify-center">
  <button 
    type="submit"
    disabled={isSubmitting}
    className={`relative w-[100px] border border-black  bg-red-600 text-white py-2 px-6 font-semibold rounded-lg 
              hover:bg-red-700 transition-all duration-300 shadow-md
              disabled:opacity-70 disabled:cursor-not-allowed
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
</div>
            </form>
          </div>

          {/* WhatsApp Image Section */}
          <div className="mt-4">
            <img
              src="/place1.webp"
              alt="Pickup Service"
              className="w-full h-auto object-contain rounded"
            />
          </div>
        </div>
      </aside>
    </>
  );
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const screenSize = useScreenSize();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Function to determine navbar height based on screen size
  const getNavbarHeight = () => {
    if (screenSize.isMobile) return 'h-12';
    if (screenSize.isTablet) return 'h-12';
    return 'h-20'; // Default for desktop
  };

  // Function to determine logo size based on screen size
  const getLogoSize = () => {
    if (screenSize.isMobile) return 'h-10 w-[150px]';
    if (screenSize.isTablet) return 'h-12 w-[175px]';
    if (screenSize.isDesktop) return 'h-12 w-[100px]';
    if (screenSize.ismediumDesktop) return 'h-12 w-[120px]';
    if (screenSize.isLargeDesktop) return 'h-12 w-[200px]';
    if (screenSize.isLargerDesktop) return 'h-12 w-[250px]';
    return 'h-16 w-[100px]'; // Default for desktop
  };

  // Function to determine text size for nav items
  const getNavTextSize = () => {
    if (screenSize.isLargeDesktop) return 'text-lg';
    if (screenSize.isLargerDesktop) return 'text-xl';
    if (screenSize.isDesktop) return 'text-xs';
    if (screenSize.ismediumDesktop) return 'text-lg';
    return 'text-xs';
  };
  
  const getNavGap = () => {
    if (screenSize.isLargeDesktop) return 'gap-6';
    if (screenSize.isLargerDesktop) return 'gap-6';
    if (screenSize.isDesktop) return 'gap-2';
    if (screenSize.ismediumDesktop) return 'gap-3';
    if (screenSize.isTablet) return 'gap-3';
    return 'gap-3';
  };
  // Function to determine icon size for nav items
  const getIconSize = () => {
    if (screenSize.isLargeDesktop) return 'text-lg';
    if (screenSize.isDesktop) return 'text-xl';
    
    return 'text-xl';
  };

  // Function to determine spacing between nav items
  const getNavSpacing = () => {
    if (screenSize.isLargeDesktop) return 'gap-8';
    if (screenSize.isDesktop) return 'gap-3';
    return 'gap-4';
  };

  return (
    <>
      <div className="flex w-full items-start">
        {/* Main Navbar - dynamic size based on screen */}
        <nav className={`bg-white p-4 text-red-800 flex justify-between items-center font-sans shadow-md w-full fixed top-0 left-0 z-50 ${getNavbarHeight()}`}>
          {/* Logo - dynamic size */}
          <div className={`flex items-center shrink-0 ${getLogoSize()}`}>
            <img src={logo} alt="Logo" className="h-full w-full" />
          </div>

          {/* Navigation Links - with dynamic sizing */}
          <div className="hidden lg:flex flex-grow justify-center items-center px-4">
          <ul className={`flex justify-center ${getNavGap()} w-full max-w-4xl`}>
              <li>
                <a href="#home" className={`flex items-center text-black hover:text-red-600 px-2 py-1 rounded transition-all group ${getNavTextSize()}`}>
                  <FaHome className={`mr-1 ${getIconSize()}`} /> 
                  <span className="pb-1 group-hover:border-b-2 group-hover:border-red-600">
                    Home
                  </span>
                </a>
              </li>
              <li>
                <a href="#price" className={`flex items-center text-black hover:text-red-600 px-2 py-1 rounded transition-all group ${getNavTextSize()}`}>
                  <FaDollarSign className={`mr-1 ${getIconSize()}`} />
                  <span className="pb-1 group-hover:border-b-2 group-hover:border-red-600">Price</span>
                </a>
              </li>
              <li>
                <a href="#siteplan" className={`flex items-center text-black hover:text-red-600 px-2 py-1 rounded transition-all group ${getNavTextSize()}`}>
                  <FaMap className={`mr-1 ${getIconSize()}`} />
                  <span className="pb-1 group-hover:border-b-2 group-hover:border-red-600">Layout</span>
                </a>
              </li>
              <li>
                <a href="#amenities" className={`flex items-center text-black hover:text-red-600 px-2 py-1 rounded transition-all group ${getNavTextSize()}`}>
                  <FaSwimmingPool className={`mr-1 ${getIconSize()}`} />
                  <span className="pb-1 group-hover:border-b-2 group-hover:border-red-600">Amenities</span>
                </a>
              </li>
              <li>
                <a href="#gallery" className={`flex items-center text-black hover:text-red-600 px-2 py-1 rounded transition-all group ${getNavTextSize()}`}>
                  <FaImages className={`mr-1 ${getIconSize()}`} />
                  <span className="pb-1 group-hover:border-b-2 group-hover:border-red-600">Gallery</span>
                </a>
              </li>
              <li>
                <a href="#location" className={`flex items-center text-black hover:text-red-600 px-2 py-1 rounded transition-all group ${getNavTextSize()}`}>
                  <FaMapMarkerAlt className={`mr-1 ${getIconSize()}`} />
                  <span className="pb-1 group-hover:border-b-2 group-hover:border-red-600">Location</span>
                </a>
              </li>
              <li>
                <a href="#brochure" className={`flex items-center text-black hover:text-red-600 px-2 py-1 rounded transition-all group ${getNavTextSize()}`}>
                  <FaFileAlt className={`mr-1 ${getIconSize()}`} />
                  <span className="pb-1 group-hover:border-b-2 group-hover:border-red-600">Brochure</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Right side spacer - fixed width */}
          <div className="hidden lg:block w-[200px] shrink-0"></div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="lg:hidden text-2xl text-red-800 focus:outline-none"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </nav>

        {/* Add padding for fixed navbar - dynamic based on navbar height */}
        <div className={`pt-14 md:pt-16 lg:pt-20 w-full`}>
          {/* Sidebar - now fixed */}
          <Sidebar />

          {/* Mobile Navigation Links */}
          {menuOpen && (
            <div className="lg:hidden fixed top-12 left-0 right-0 bg-white shadow-lg z-40">
              <ul className="flex flex-col space-y-2 p-4">
                <li><a href="#home" className="flex items-center text-black hover:text-red-600 hover:bg-gray-100 px-3 py-2 rounded transition-all"> <FaHome className="mr-2" /> Home</a></li>
                <li><a href="#price" className="flex items-center text-black hover:text-red-600 hover:bg-gray-100 px-3 py-2 rounded transition-all"><FaDollarSign className="mr-2" /> Price</a></li>
                <li><a href="#siteplan" className="flex items-center text-black hover:text-red-600 hover:bg-gray-100 px-3 py-2 rounded transition-all"><FaMap className="mr-2" /> Site Plan</a></li>
                <li><a href="#amenities" className="flex items-center text-black hover:text-red-600 hover:bg-gray-100 px-3 py-2 rounded transition-all"><FaSwimmingPool className="mr-2" /> Amenities</a></li>
                <li><a href="#gallery" className="flex items-center text-black hover:text-red-600 hover:bg-gray-100 px-3 py-2 rounded transition-all"><FaImages className="mr-2" /> Gallery</a></li>
                <li><a href="#location" className="flex items-center text-black hover:text-red-600 hover:bg-gray-100 px-3 py-2 rounded transition-all"><FaMapMarkerAlt className="mr-2" /> Location</a></li>
                <li><a href="#brochure" className="flex items-center text-black hover:text-red-600 hover:bg-gray-100 px-3 py-2 rounded transition-all"><FaFileAlt className="mr-2" /> Brochure</a></li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;