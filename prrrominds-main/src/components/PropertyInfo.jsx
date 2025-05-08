// import React, { useState, useEffect } from 'react';
// import { FaPhoneAlt, FaCar, FaRupeeSign } from 'react-icons/fa';

// export default function PropertyInfo() {
//   const [showEnquiry, setShowEnquiry] = useState(false);

//   useEffect(() => {
//     document.body.style.overflow = showEnquiry ? 'hidden' : 'auto';
//   }, [showEnquiry]);

//   return (
//     <>
//       {/* Enquiry Modal */}
//       {showEnquiry && (
//         <div className="fixed left-0 w-screen h-screen z-30 flex items-center justify-center">
//           <div className="bg-white rounded-xl w-full max-w-sm mx-2 p-5 relative">
//             <button
//               className="absolute top-2 right-3 text-gray-600 text-xl"
//               onClick={() => setShowEnquiry(false)}
//             >
//               ×
//             </button>

//             <div className="flex flex-col items-center gap-4">
//               {/* Header */}
//               <div className="bg-red-600 text-white text-sm py-1 px-3 rounded font-semibold">
//                 WE PROMISE
//               </div>

//               {/* Promise Info */}
//               <div className="text-xs text-gray-800 w-full space-y-2">
//                 <div className="flex items-center gap-2">
//                   <FaPhoneAlt className="text-red-600 text-sm" />
//                   <span><b className="text-red-600">INSTANT</b> CALL BACK</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <FaCar className="text-red-600 text-sm" />
//                   <span><b className="text-red-600">FREE</b> SITE VISIT</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <FaRupeeSign className="text-red-600 text-sm" />
//                   <span><b className="text-red-600">UNMATCHED</b> PRICE</span>
//                 </div>
//               </div>

//               {/* Form */}
//               <div className="w-full">
//                 <h2 className="text-lg font-bold text-red-600 mb-2 text-center">ENQUIRY NOW</h2>
//                 <input
//                   type="text"
//                   placeholder="Name"
//                   className="w-full border border-gray-300 rounded px-3 py-1 text-sm mb-2"
//                 />
//                 <div className="flex items-center border border-gray-300 rounded px-3 py-1 text-sm mb-2">
//                   <span className="mr-2">🇮🇳 +91</span>
//                   <input
//                     type="tel"
//                     placeholder="Mobile Number"
//                     className="w-full outline-none text-sm"
//                   />
//                 </div>
//                 <label className="flex items-start text-[10px] text-gray-600 mb-2 gap-2">
//                   <input type="checkbox" defaultChecked className="mt-1" />
//                   <span>
//                     I Consent to data use per
//                     <a href="#" className="text-blue-600 ml-1">Privacy</a> &
//                     <a href="#" className="text-blue-600 ml-1">Terms</a>.
//                   </span>
//                 </label>
//                 <button className="bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-4 py-1.5 rounded-full w-full mb-3">
//                   Submit
//                 </button>
//               </div>

//               {/* Footer Info */}
//               <div className="border border-red-600 rounded px-3 py-2 text-center w-full">
//                 <div className="bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-t mb-3 inline-block">
//                   GET INFORMATION
//                 </div>
//                 <div className="flex justify-around text-xs text-gray-800">
//                   <div className="flex items-center gap-1">🧱 Units</div>
//                   <div className="flex items-center gap-1">💳 Payment</div>
//                   <div className="flex items-center gap-1">📐 Plans</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Main Container - Added flex and min-h-screen for vertical centering */}
//       <div className="flex items-center justify-center min-h-screen shadow-lg lg:min-h-0 pt-10"> 
//         {/* Card - Added responsive height */}
//         <div className="relative w-75 lg:h-[32rem] h-auto mt-20"> 
//           <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 z-10">
//             <div className="bg-red-600 text-white text-sm font-semibold py-1 px-4 rounded-t-xl rounded-b-sm shadow-md">
//               NEW LAUNCH
//             </div>
//           </div>

//           <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 pt-6 h-full">
//             <div className="px-4 pb-4 text-center h-full flex flex-col justify-between">
//               <div>
//                 <h2 className="text-3xl font-bold text-gray-900">GOEL GANGA NEW TOWN</h2>
//                 <p className="text-xl text-gray-900 font-semibold">At Dhanori, Pune</p>
//                 <p className="text-lg text-gray-900 mb-2">By Goel Ganga Developments</p>

//                 <div className="bg-gray-100 rounded-md px-3 py-2 text-xs text-center mb-2">
//                   <div className="flex justify-between"><span>Land Parcel</span><b>14 Acres</b></div>
//                   <div className="flex justify-between"><span>Storey</span><b>B1+ B2 +13</b></div>
//                   <div className="flex justify-between"><span>Possession</span><b>Dec 2027</b></div>
//                 </div>

//                 <ul className="text-[18px] text-white bg-red-500  mb-2 divide-y ">
//                   <li className="py-1">Dhanori's Biggest Township</li>
//                   <li className="py-1">NO EMI Till Possession</li>
//                   <li className="py-1">Pay ₹1 Lacs*</li>
//                   <li className="py-1">10 Min to Airport</li>
//                 </ul>
//               </div>

//               <div>
//                 <p className="text-lg font-semibold text-gray-900">2, 3 BHK & Penthouses Starts At</p>
//                 <p className="text-2xl font-bold text-red-700 mb-2">
//                   ₹ 87.35 Lacs* <span className="text-xs text-red-500">All Incl.</span>
//                 </p>

//                 <button
//   className="relative bg-red-500 text-white text-sm px-4 py-1.5 rounded-lg 
//              border border-transparent
//              transition-all duration-300 ease-in-out
//              hover:scale-105 hover:shadow-lg
//              active:scale-95 active:bg-red-600
//              focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-opacity-50
//              overflow-visible"
//   onClick={() => setShowEnquiry(true)}
// >
//   {/* Persistent animated blur border using after pseudo-element */}
//   <span className="absolute inset-0 rounded-lg border-2 border-black 
//                   animate-[pulse_1.5s_cubic-bezier(0.4,0,0.6,1)_infinite] 
//                   pointer-events-none" />
  
//   Enquire Now
// </button>
//                 <p className="text-[12px] text-gray-900 mt-1">RERA : P52100019275</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }



















// import React, { useState, useEffect } from 'react';
// import { FaPhoneAlt, FaCar, FaRupeeSign } from 'react-icons/fa';

// export default function PropertyInfo() {
//   const [showEnquiry, setShowEnquiry] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     consent: true
//   });
//   const [formSubmitted, setFormSubmitted] = useState(false);

//   useEffect(() => {
//     document.body.style.overflow = showEnquiry ? 'hidden' : 'auto';
//   }, [showEnquiry]);

//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     try {
//       const response = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json"
//         },
//         body: JSON.stringify({
//           access_key: "4e9faa02-cb51-4253-98e6-b5794f4ece3a", 
//           name: formData.name,
//           phone: formData.phone,
//           subject: "New Enquiry for Goel Ganga New Town",
//           from_name: "PropertyPistol Website",
//           consent: formData.consent ? "Yes" : "No"
//         })
//       });

//       const result = await response.json();
//       if (result.success) {
//         setFormSubmitted(true);
//         // Reset form after successful submission
//         setFormData({
//           name: '',
//           phone: '',
//           consent: true
//         });
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//     }
//   };

//   return (
//     <>
//       {/* Main Container */}
//       <div className="flex items-center justify-center min-h-screen shadow-lg lg:min-h-0 pt-10">
//   {/* Card */}
//   <div className="relative w-75 lg:h-[32rem] h-auto mt-20">
//     <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 z-10">
//       <div className="bg-red-600 text-white text-sm font-semibold py-1 px-4 rounded-t-xl rounded-b-sm shadow-md">
//         NEW LAUNCH
//       </div>
//     </div>

//     <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 pt-6 h-full">
//       <div className="px-4 pb-4 text-center h-full flex flex-col justify-between">
//         <div>
//           <h2 className="text-3xl font-bold text-gray-900">GOEL GANGA NEW TOWN</h2>
//           <p className="text-xl text-gray-900 font-semibold">At Dhanori, Pune</p>
//           <p className="text-lg text-gray-900 mb-2">By Goel Ganga Developments</p>

//           <div className="bg-gray-100 rounded-md px-3 py-2 text-xs text-center mb-2">
//             <div className="flex justify-between"><span>Land Parcel</span><b>14 Acres</b></div>
//             <div className="flex justify-between"><span>Storey</span><b>B1+ B2 +13</b></div>
//             <div className="flex justify-between"><span>Possession</span><b>Dec 2027</b></div>
//           </div>

//           <ul className="text-[18px] text-white bg-red-500 mb-2 divide-y">
//             <li className="py-1">Dhanori's Biggest Township</li>
//             <li className="py-1">NO EMI Till Possession</li>
//             <li className="py-1">Pay ₹1 Lacs*</li>
//             <li className="py-1">10 Min to Airport</li>
//           </ul>
//         </div>

//         <div>
//           <p className="text-lg font-semibold text-gray-900">2, 3 BHK & Penthouses Starts At</p>
//           <p className="text-2xl font-bold text-red-700 mb-2">
//             ₹ 87.35 Lacs* <span className="text-xs text-red-500">All Incl.</span>
//           </p>

//           <button
//             className="relative bg-red-500 text-white text-sm px-4 py-1.5 rounded-lg 
//                      border border-transparent
//                      transition-all duration-300 ease-in-out
//                      hover:scale-105 hover:shadow-lg
//                      active:scale-95 active:bg-red-600
//                      focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-opacity-50
//                      overflow-visible"
//             onClick={() => setShowEnquiry(true)}
//           >
//             <span className="absolute inset-0 rounded-lg border-2 border-black 
//                           animate-[pulse_1.5s_cubic-bezier(0.4,0,0.6,1)_infinite] 
//                           pointer-events-none" />
//             Enquire Now
//           </button>
//           <p className="text-[12px] text-gray-900 mt-1">RERA : P52100019275</p>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>



























// {/* Enquiry Modal - Fixed position to center of screen */}
// {showEnquiry && (
//   <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
//     <div className="bg-white rounded-xl w-full max-w-sm mx-auto p-5 relative">
//       <button
//         className="absolute top-3 right-3 text-gray-600 text-xl hover:text-gray-800"
//         onClick={() => {
//           setShowEnquiry(false);
//           setFormSubmitted(false);
//         }}
//       >
//         ×
//       </button>
    
//       {formSubmitted ? (
//         <div className="text-center py-8">
//           <div className="text-green-500 text-5xl mb-4">✓</div>
//           <h3 className="text-xl font-bold text-gray-800 mb-2">Thank You!</h3>
//           <p className="text-gray-600 mb-4">Your enquiry has been submitted successfully.</p>
//           <p className="text-sm text-gray-500">Our representative will contact you shortly.</p>
//           <button
//             onClick={() => setShowEnquiry(false)}
//             className="mt-6 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-full"
//           >
//             Close
//           </button>
//         </div>
//       ) : (
//         <div className="flex flex-col items-center justify-center gap-4">
//           {/* Header */}
//           <div className="bg-red-600 text-white text-sm py-1 px-3 rounded font-semibold">
//             WE PROMISE
//           </div>
    
//           {/* Promise Info */}
//           <div className="text-xs text-gray-800 w-full space-y-2">
//             <div className="flex items-center gap-2">
//               <FaPhoneAlt className="text-red-600 text-sm" />
//               <span><b className="text-red-600">INSTANT</b> CALL BACK</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <FaCar className="text-red-600 text-sm" />
//               <span><b className="text-red-600">FREE</b> SITE VISIT</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <FaRupeeSign className="text-red-600 text-sm" />
//               <span><b className="text-red-600">UNMATCHED</b> PRICE</span>
//             </div>
//           </div>
    
//           {/* Form */}
//           <form onSubmit={handleSubmit} className="w-full">
//             <h2 className="text-lg font-bold text-red-600 mb-2 text-center">ENQUIRY NOW</h2>
//             <input
//               type="text"
//               name="name"
//               placeholder="Name"
//               className="w-full border border-gray-300 rounded px-3 py-2 text-sm mb-3"
//               value={formData.name}
//               onChange={handleInputChange}
//               required
//             />
//             <div className="flex items-center border border-gray-300 rounded px-3 py-2 text-sm mb-3">
//               <span className="mr-2">🇮🇳 +91</span>
//               <input
//                 type="tel"
//                 name="phone"
//                 placeholder="Mobile Number"
//                 className="w-full outline-none text-sm"
//                 value={formData.phone}
//                 onChange={handleInputChange}
//                 pattern="[0-9]{10}"
//                 required
//               />
//             </div>
//             <label className="flex items-start text-[14px] text-gray-600 mb-3 gap-2">
//               <input
//                 type="checkbox"
//                 name="consent"
//                 checked={formData.consent}
//                 onChange={handleInputChange}
//                 className="mt-1"
//               />
//               <span>
//                 I Consent to data use per
//                 <a href="#" className="text-blue-600 ml-1">Privacy</a> &
//                 <a href="#" className="text-blue-600 ml-1">Terms</a>.
//               </span>
//             </label>
//             <button
//               type="submit"
//               className="bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-4 py-2 rounded-full w-full mb-3 transition-colors duration-300"
//             >
//               Submit
//             </button>
//           </form>
    
//           {/* Footer Info */}
//           <div className="border border-red-600 rounded px-3 py-2 text-center w-full">
//             <div className="bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-t mb-3 inline-block">
//               GET INFORMATION
//             </div>
//             <div className="flex justify-around text-xs text-gray-800">
//               <div className="flex items-center gap-1">🧱 Available Units</div>
//               <div className="flex items-center gap-1">💳 Payment Plan</div>
//               <div className="flex items-center gap-1">📐 Floor Plans</div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   </div>
// )}
//     </>
//   );
// }





































import React, { useState, useEffect } from 'react';
import { FaPhoneAlt, FaCar, FaRupeeSign } from 'react-icons/fa';

export default function PropertyInfo() {
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
          subject: "Enquiry for Goel Ganga New Town",
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

      {/* Main Container */}
      <div className="flex items-center justify-center min-h-screen shadow-lg lg:min-h-0 pt-10"> 
        {/* Card */}
        <div className="relative w-75 lg:h-[32rem] h-auto mt-20"> 
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

                <ul className="text-[18px] text-white bg-red-500  mb-2 divide-y ">
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

                {/* <button
  className="relative bg-red-500 text-white text-sm px-4 py-1.5 rounded-lg 
             border border-transparent
             transition-all duration-300 ease-in-out
             hover:scale-105 hover:shadow-lg
             active:scale-95 active:bg-red-600
             focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-opacity-50
             overflow-visible
             animate-[pop_2s_cubic-bezier(0.4,0,0.6,1)_infinite]"
  onClick={() => setShowEnquiry(true)}
>
  <span className="absolute inset-0 rounded-lg border-2 border-black 
                  opacity-0
                  animate-[pulseBorder_2s_cubic-bezier(0.4,0,0.6,1)_infinite] 
                  pointer-events-none" />
  Enquire Now
</button> */}

{/* heartbeat vala */}
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
    </>
  );
}