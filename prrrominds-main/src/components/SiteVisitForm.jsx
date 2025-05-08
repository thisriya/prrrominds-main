// import React, { useState } from 'react';
// import PropTypes from 'prop-types';

// const SiteVisitForm = ({ propertyImage, propertyName }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     consent: false
//   });

//   const [submissionState, setSubmissionState] = useState({
//     loading: false,
//     success: false,
//     error: null
//   });

//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSubmissionState({ loading: true, success: false, error: null });

//     try {
//       // Replace with your actual Web3Forms endpoint
//       const response = await fetch('https://api.web3forms.com/submit', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           access_key: 'YOUR_WEB3FORMS_ACCESS_KEY',
//           ...formData,
//           subject: `Site Visit Request for ${propertyName}`
//         })
//       });

//       const data = await response.json();

//       if (data.success) {
//         setSubmissionState({ loading: false, success: true, error: null });
//         setFormData({ name: '', phone: '', consent: false });
//       } else {
//         throw new Error(data.message || 'Form submission failed');
//       }
//     } catch (error) {
//       setSubmissionState({ loading: false, success: false, error: error.message });
//     }
//   };

//   return (
//     <div className="site-visit-form-container bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
//           Schedule a Site Visit for {propertyName}
//         </h2>

//         <div className="bg-white rounded-xl shadow-lg overflow-hidden">
//           <div className="flex flex-col md:flex-row">
//             {/* Property Image - Left Side */}
//             <div className="md:w-1/2 p-6 bg-gray-100 flex items-center justify-center">
//               <img 
//                 src={propertyImage} 
//                 alt={`${propertyName} property`}
//                 className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-md"
//               />
//             </div>

//             {/* Form - Right Side */}
//             <div className="md:w-1/2 p-6 sm:p-8">
//               {submissionState.success ? (
//                 <div className="success-message text-center py-8">
//                   <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
//                     <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
//                     </svg>
//                   </div>
//                   <h3 className="text-xl font-semibold text-gray-900 mb-2">Request Submitted!</h3>
//                   <p className="text-gray-600 mb-6">
//                     Thank you for your interest. Our representative will contact you shortly to schedule your visit.
//                   </p>
//                   <button
//                     onClick={() => setSubmissionState({ loading: false, success: false, error: null })}
//                     className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
//                   >
//                     Submit Another Request
//                   </button>
//                 </div>
//               ) : (
//                 <form onSubmit={handleSubmit} className="space-y-5">
//                   <div>
//                     <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
//                       Full Name
//                     </label>
//                     <input
//                       type="text"
//                       id="name"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleInputChange}
//                       required
//                       className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
//                       placeholder="Enter your name"
//                     />
//                   </div>

//                   <div>
//                     <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
//                       Mobile Number
//                     </label>
//                     <div className="flex">
//                       <span className="inline-flex items-center px-3 border border-r-0 border-gray-300 bg-gray-50 text-gray-500 rounded-l-md">
//                         +91
//                       </span>
//                       <input
//                         type="tel"
//                         id="phone"
//                         name="phone"
//                         value={formData.phone}
//                         onChange={handleInputChange}
//                         required
//                         pattern="[0-9]{10}"
//                         maxLength="10"
//                         className="w-full px-4 py-3 border border-gray-300 rounded-r-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
//                         placeholder="Enter 10-digit number"
//                       />
//                     </div>
//                   </div>

//                   <div className="flex items-start">
//                     <div className="flex items-center h-5">
//                       <input
//                         id="consent"
//                         name="consent"
//                         type="checkbox"
//                         checked={formData.consent}
//                         onChange={handleInputChange}
//                         required
//                         className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
//                       />
//                     </div>
//                     <label htmlFor="consent" className="ml-2 block text-sm text-gray-700">
//                       I consent to Propertypistol Realty Private Limited and its representatives contacting me via call, SMS, email or WhatsApp regarding products and offers. This overrides any DNC/NDNC registration.
//                     </label>
//                   </div>

//                   <div className="pt-2">
//                     <button
//                       type="submit"
//                       disabled={submissionState.loading}
//                       className={`w-full flex justify-center items-center py-3 px-4 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 ${
//                         submissionState.loading ? 'opacity-75 cursor-not-allowed' : ''
//                       }`}
//                     >
//                       {submissionState.loading ? (
//                         <>
//                           <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                             <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                           </svg>
//                           Processing...
//                         </>
//                       ) : 'Submit Request'}
//                     </button>
//                   </div>

//                   {submissionState.error && (
//                     <div className="rounded-md bg-red-50 p-4">
//                       <div className="flex">
//                         <div className="flex-shrink-0">
//                           <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                             <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
//                           </svg>
//                         </div>
//                         <div className="ml-3">
//                           <h3 className="text-sm font-medium text-red-800">Error submitting form</h3>
//                           <p className="text-sm text-red-700 mt-1">{submissionState.error}</p>
//                         </div>
//                       </div>
//                     </div>
//                   )}
//                 </form>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// SiteVisitForm.propTypes = {
//   propertyImage: PropTypes.string.isRequired,
//   propertyName: PropTypes.string.isRequired
// };

// export default SiteVisitForm;

















// import React, { useState } from 'react';

// const SiteVisitForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     consent: false
//   });

//   const [submissionState, setSubmissionState] = useState({
//     loading: false,
//     success: false,
//     error: null
//   });

//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSubmissionState({ loading: true, success: false, error: null });

//     try {
//       // Replace with your actual form submission logic
//       console.log('Form submitted:', formData);
//       // Simulate API call
//       await new Promise(resolve => setTimeout(resolve, 1000));
      
//       setSubmissionState({ loading: false, success: true, error: null });
//       setFormData({ name: '', phone: '', consent: false });
//     } catch (error) {
//       setSubmissionState({ loading: false, success: false, error: error.message });
//     }
//   };

//   return (
//     <>
//     <div className='bg-gray-100'>
//     <div className="w-full max-w-8xl mx-auto px-10 py-8 bg-gray-100">
//       <div className="w-full md:w-3/4  md:pl-8 justify-center">
//         <div className="flex flex-col lg:flex-row">
//           {/* Left Side - Image */}
//           <div className="lg:w-1/2 p-6  flex items-center justify-center">
//             <img 
//               src="/img4.webp" // Replace with your image path
//               alt="Property"
//               className="w-full h-auto max-h-[600px] object-cover rounded-lg"
//             />
//           </div>

//           {/* Right Side - Form */}
//           <div className="lg:w-2/3 p-4 ">
//             <h2 className="text-3xl font-bold text-red-500 mb-6">
//               Schedule a Site Visit
//             </h2>

//             {submissionState.success ? (
//               <div className="success-message text-center py-8">
//                 <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
//                   <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
//                   </svg>
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-900 mb-2">Request Submitted!</h3>
//                 <p className="text-gray-600 mb-6">
//                   Thank you for your interest. Our representative will contact you shortly.
//                 </p>
//                 <button
//                   onClick={() => setSubmissionState({ loading: false, success: false, error: null })}
//                   className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
//                 >
//                   Submit Another Request
//                 </button>
//               </div>
//             ) : (
//               <form onSubmit={handleSubmit} className="space-y-4">
//                 <div>
//                   <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
//                     placeholder="Enter your name"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
//                     Mobile Number
//                   </label>
//                   <div className="flex">
//                     <span className="inline-flex items-center px-3 border border-r-0 border-gray-300 bg-gray-50 text-gray-500 rounded-l-md">
//                       +91
//                     </span>
//                     <input
//                       type="tel"
//                       id="phone"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleInputChange}
//                       required
//                       pattern="[0-9]{10}"
//                       maxLength="10"
//                       className="w-full px-4 py-3 border border-gray-300 rounded-r-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
//                       placeholder="Enter 10-digit number"
//                     />
//                   </div>
//                 </div>

//                 <div className="flex items-start pt-2">
//                   <div className="flex items-center h-5">
//                     <input
//                       id="consent"
//                       name="consent"
//                       type="checkbox"
//                       checked={formData.consent}
//                       onChange={handleInputChange}
//                       required
//                       className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
//                     />
//                   </div>
//                   <label htmlFor="consent" className="ml-2 block text-sm text-gray-700">
//                     I consent to Propertypistol Realty Private Limited and its representatives contacting me via call, SMS, email or WhatsApp regarding products and offers. This overrides any DNC/NDNC registration.
//                   </label>
//                 </div>

//                 <div className="pt-4">
//                 <button
//   type="submit"
//   disabled={submissionState.loading}
//   className={`relative w-[100px] flex justify-center items-center border border-black  py-3 px-4 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all ${
//     submissionState.loading ? 'opacity-75 cursor-not-allowed' : 'animate-heartbeat'
//   }`}
// >
//   {!submissionState.loading && (
//     <span className="absolute inset-0 rounded-md  opacity-0 animate-pulseBorder pointer-events-none"></span>
//   )}
//   {submissionState.loading ? (
//     <>
//       <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//       </svg>
//       Processing...
//     </>
//   ) : 'Submit'}
// </button>
//                 </div>

//                 {submissionState.error && (
//                   <div className="rounded-md bg-red-50 p-4">
//                     <div className="flex">
//                       <div className="flex-shrink-0">
//                         <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                           <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
//                         </svg>
//                       </div>
//                       <div className="ml-3">
//                         <h3 className="text-sm font-medium text-red-800">Error submitting form</h3>
//                         <p className="text-sm text-red-700 mt-1">{submissionState.error}</p>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </form>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//     </div>
//     </>
//   );
// };

// export default SiteVisitForm;



import React, { useState } from 'react';


const SiteVisitForm = () => {
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    countryCode: '91', // Default to India
    consent: false
  });

  const [submissionState, setSubmissionState] = useState({
    loading: false,
    success: false,
    error: null
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const countries = [
    { code: '91', name: 'India', flag: '🇮🇳' },
    { code: '1', name: 'USA', flag: '🇺🇸' },
    { code: '44', name: 'UK', flag: '🇬🇧' },
    { code: '971', name: 'UAE', flag: '🇦🇪' },
    { code: '65', name: 'Singapore', flag: '🇸🇬' },
    { code: '60', name: 'Malaysia', flag: '🇲🇾' },
    // Add more countries as needed
  ];
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionState({ loading: true, success: false, error: null });

    try {
      // Web3Forms submission
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "4e9faa02-cb51-4253-98e6-b5794f4ece3a", // Replace with your actual access key
          name: formData.name,
          phone: formData.phone,
          consent: formData.consent ? "Yes" : "No",
          subject: "New Site Visit Request",
          from_name: "Site Visit Form",
          // You can add more fields if needed
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        setSubmissionState({ loading: false, success: true, error: null });
        setFormData({ name: '', phone: '', consent: false });
      } else {
        throw new Error(result.message || "Failed to submit form");
      }
    } catch (error) {
      setSubmissionState({ loading: false, success: false, error: error.message });
    }
  };

  const selectCountry = (code) => {
    setFormData(prev => ({ ...prev, countryCode: code }));
    setShowCountryDropdown(false);
  };


  return (
    <>
    <div className='bg-[#f1f2f2]'>
    <div className="w-full max-w-8xl mx-auto px-4 py-8 bg-gray-100">
      <div className="w-full md:w-3/4  md:pl-8 justify-center">
        <div className="flex flex-col lg:flex-row">
          {/* Left Side - Image */}
          <div className="lg:w-2/3 p-6  flex items-center justify-center">
            <img 
              src="/img4.webp" // Replace with your image path
              alt="Property"
              className="w-full h-auto max-h-[600px] object-cover rounded-xl"
            />
          </div>

          {/* Right Side - Form */}
          <div className="lg:w-2/3 lg:p-4 md:lg-5 sm:p-0">
            <h2 className="text-3xl font-bold text-red-500 mb-6">
              Schedule a Site Visit
            </h2>

            {submissionState.success ? (
              <div className="success-message text-center py-8">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                  <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Request Submitted!</h3>
                <p className="text-gray-600 mb-6">
                  Thank you for your interest. Our representative will contact you shortly.
                </p>
                <button
                  onClick={() => setSubmissionState({ loading: false, success: false, error: null })}
                  className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="hidden" name="access_key" value="4e9faa02-cb51-4253-98e6-b5794f4ece3a" /> {/* Replace with your actual access key */}
                <input type="hidden" name="subject" value="New Site Visit Request" />
                <input type="hidden" name="from_name" value="Site Visit Form" />
                <input type="checkbox" name="botcheck" className="hidden" />
                
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-red-500 focus:border-2 focus:outline-none transition-all"
                    placeholder="Enter your name"
                  />
                </div>

                {/* <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Mobile Number
                  </label>
                  <div className="flex">
                    <span className="inline-flex rounded-xl items-center px-3 border border-r-0 border-gray-300 bg-gray-50 text-gray-500 rounded-l-md">
                      +91
                    </span>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      pattern="[0-9]{10}"
                      maxLength="10"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 rounded-r-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      placeholder="Enter 10-digit number"
                    />
                  </div>
                </div> */}

<div className="pt-4">
  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
    Mobile Number
  </label>
  <div className="flex rounded-xl overflow-hidden">
    {/* Country code selector */}
    <div className="relative">
      <button
        type="button"
        onClick={() => setShowCountryDropdown(!showCountryDropdown)}
        className="inline-flex items-center px-3 py-3 border border-r-0 border-gray-300 bg-gray-50 text-gray-700 rounded-l-xl hover:bg-gray-100 focus:outline-none"
      >
        <span className="mr-2">{countries.find(c => c.code === formData.countryCode)?.flag || '🇮🇳'}</span>
        <span>+{formData.countryCode}</span>
        <svg
          className="ml-2 h-4 w-4 text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      
      {showCountryDropdown && (
        <div className="absolute z-50 mt-1 w-56 rounded-xl bg-white shadow-lg border border-gray-200 max-h-60 overflow-auto">
          <ul className="py-1">
            {countries.map((country) => (
              <li
                key={country.code}
                className="px-3 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
                onClick={() => selectCountry(country.code)}
              >
                <span className="mr-2">{country.flag}</span>
                <span className="mr-2">+{country.code}</span>
                <span className="text-gray-600">{country.name}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>

    {/* Phone number input */}
    <input
      type="tel"
      id="phone"
      name="phone"
      value={formData.phone}
      onChange={handleInputChange}
      required
      pattern="[0-9]{10}"
      maxLength="10"
      className="flex-1 px-4 py-3 border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-500 focus:border-2 focus:outline-none"
      placeholder="Enter phone number"
    />
  </div>
</div>

                <div className="flex items-start pt-2">
                  <div className="flex items-center h-5">
                    <input
                      id="consent"
                      name="consent"
                      type="checkbox"
                      checked={formData.consent}
                      onChange={handleInputChange}
                      required
                      className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                    />
                  </div>
                  <label htmlFor="consent" className="ml-2 block text-sm text-gray-700">
                    I consent to Propertypistol Realty Private Limited and its representatives contacting me via call, SMS, email or WhatsApp regarding products and offers. This overrides any DNC/NDNC registration.
                  </label>
                </div>

                <div className="pt-4">
                <button
  type="submit"
  disabled={submissionState.loading}
  className={`relative w-[120px] flex justify-center items-center border border-black  py-3 px-4 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all ${
    submissionState.loading ? 'opacity-75 cursor-not-allowed' : 'animate-heartbeat'
  }`}
>
  {!submissionState.loading && (
    <span className="absolute inset-0 rounded-md  opacity-0 animate-pulseBorder pointer-events-none"></span>
  )}
  {submissionState.loading ? (
    <>
      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      Processing...
    </>
  ) : 'Submit'}
</button>
                </div>

                {submissionState.error && (
                  <div className="rounded-md bg-red-50 p-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-red-800">Error submitting form</h3>
                        <p className="text-sm text-red-700 mt-1">{submissionState.error}</p>
                      </div>
                    </div>
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default SiteVisitForm;