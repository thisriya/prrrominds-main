import React from "react";

const AboutGoelGanga = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-8 px-6 py-12 bg-white">
      {/* Text Content */}
      <div className="md:w-1/2">
        <h2 className="text-red-600 text-2xl font-bold mb-4">
          About Goel Ganga New Town
        </h2>
        <p className="text-gray-500 text-base mb-4">
          Ganga New Town is the biggest township of Dhanori. Dhanori is one of
          the most popular locations in Pune and is developing at an
          exponential rate when it comes to infrastructure improvements.
        </p>
        <a
          href="#"
          className="text-blue-600 underline text-sm inline-block mb-6"
        >
          Read more
        </a>
        <button className="flex items-center gap-2 bg-red-600 text-white font-semibold py-2 px-4 rounded-full shadow hover:bg-red-700 transition">
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
  className="w-32 md:w-80"
  style={{
    borderRadius: '40px 0 40px 0',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  }}
/>

        </div>
      </div>
    </section>
  );
};

export default AboutGoelGanga;