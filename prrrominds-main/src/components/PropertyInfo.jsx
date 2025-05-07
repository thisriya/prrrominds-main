import React, { useState, useEffect } from 'react';
import { FaPhoneAlt, FaCar, FaRupeeSign } from 'react-icons/fa';

export default function PropertyInfo() {
  const [showEnquiry, setShowEnquiry] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showEnquiry ? 'hidden' : 'auto';
  }, [showEnquiry]);

  return (
    <>
      {/* Enquiry Modal */}
      {showEnquiry && (
  <div className="fixed left-0 w-screen h-screen z-30 flex items-center justify-center">
    <div className="bg-white rounded-xl w-full max-w-sm mx-2  p-5 relative">
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
              <div className="w-full">
                <h2 className="text-lg font-bold text-red-600 mb-2 text-center">ENQUIRY NOW</h2>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border border-gray-300 rounded px-3 py-1 text-sm mb-2"
                />
                <div className="flex items-center border border-gray-300 rounded px-3 py-1 text-sm mb-2">
                  <span className="mr-2">🇮🇳 +91</span>
                  <input
                    type="tel"
                    placeholder="Mobile Number"
                    className="w-full outline-none text-sm"
                  />
                </div>
                <label className="flex items-start text-[10px] text-gray-600 mb-2 gap-2">
                  <input type="checkbox" defaultChecked className="mt-1" />
                  <span>
                    I Consent to data use per
                    <a href="#" className="text-blue-600 ml-1">Privacy</a> &
                    <a href="#" className="text-blue-600 ml-1">Terms</a>.
                  </span>
                </label>
                <button className="bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-4 py-1.5 rounded-full w-full mb-3">
                  Submit
                </button>
              </div>

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

      {/* Card */}
      <div className="relative w-72">
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
          <div className="bg-red-600 text-white text-xs font-semibold py-1 px-4 rounded-t-xl rounded-b-sm shadow-md">
            NEW LAUNCH
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 pt-6">
          <div className="px-4 pb-4 text-center">
            <h2 className="text-xl font-bold text-gray-900">GOEL GANGA NEW TOWN</h2>
            <p className="text-sm text-gray-700">At Dhanori, Pune</p>
            <p className="text-xs text-gray-600 mb-2">By Goel Ganga Developments</p>

            <div className="bg-gray-100 rounded-md px-3 py-2 text-xs text-left mb-2">
              <div className="flex justify-between"><span>Land Parcel</span><b>14 Acres</b></div>
              <div className="flex justify-between"><span>Storey</span><b>B1+ B2 +13</b></div>
              <div className="flex justify-between"><span>Possession</span><b>Dec 2027</b></div>
            </div>

            <ul className="text-[10px] text-white bg-red-600 rounded-md mb-2 divide-y divide-white/20">
              <li className="py-1">Dhanori's Biggest Township</li>
              <li className="py-1">NO EMI Till Possession</li>
              <li className="py-1">Pay ₹1 Lacs*</li>
              <li className="py-1">10 Min to Airport</li>
            </ul>

            <p className="text-xs font-semibold text-gray-700">2, 3 BHK & Penthouses Starts At</p>
            <p className="text-lg font-bold text-red-700 mb-2">
              ₹ 87.35 Lacs* <span className="text-xs text-gray-500">All Incl.</span>
            </p>

            <button
              className="bg-red-500 text-white text-sm px-4 py-1.5 rounded-full"
              onClick={() => setShowEnquiry(true)}
            >
              Enquire Now
            </button>
            <p className="text-[10px] text-gray-500 mt-1">RERA : P52100019275</p>
          </div>
        </div>
      </div>
      
    </>
  );
}
