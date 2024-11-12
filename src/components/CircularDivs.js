

import React from 'react';
import { useNavigate } from 'react-router-dom';


const titles = [
  "Big Data",
  "Internet of Things",
  "Talent Management",
  "Marketing Automation",
  "Cloud Platform as a Service",
  "Account Based Marketing",
  "Artificial Intelligence",
  "Healthcare Industry",
  "Augmented Reality & Virtual Reality",
  "Cybersecurity - Ransomware"
];

const CircularDivs = () => {
  const navigate = useNavigate();
  return (
    <div className="">
  {/* Main Introductory Section   bg-gradient-to-br from-purple-500 via-teal-500 to-blue-500 */}
  <div className="relative bg-teal-700 rounded-lg shadow-xl flex flex-col items-center justify-center text-center text-white space-y-2 md:p-4 md:space-y-8">
    <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500 md:text-3xl lg:text-4xl">
      Discover Topics That Inspire You
    </span>
  
  </div>

  <div className="md:mb-8 w-full flex flex-col md:flex-row justify-between items-center md:space-x-12  mr-20 px-12">
  {/* Left Side: Text Content */}


<div className="w-1/3 flex-1">
  <p className="text-lg md:text-xl lg:text-2xl font-bold text-left leading-relaxed tracking-wide italic" style={{ fontFamily: 'Roboto, sans-serif' }}>
    Effortlessly save, share, and curate solutions in personalized collections, ensuring instant access to what matters most.
  </p>
  
<button
              className="flex bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-400 transition duration-300"
              // onClick={() => Navigate('/get-started')} 
              onClick={() => navigate('/login')}
            >
              GET STARTED
            </button>

</div>


  {/* Right Side: Circular Topic Section */}
  <div className="w-2/3 relative h-80 md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] mx-auto rounded-full flex items-center md:justify-center">
    {titles.map((title, index) => {
      const angle = (index * 360) / titles.length;
      const delay = `${index * 0.1}s`; // Stagger each item by 0.1 seconds

      return (
        <div
          key={index}
          className="absolute sm:w-10 sm:h-10 w-20 h-20 bg-gradient-to-r from-purple-600 to-teal-400 text-white flex items-center justify-center rounded-full shadow-lg md:w-20 md:h-20 lg:w-24 lg:h-24 text-xs font-semibold p-2 text-center animate-pulse"
          style={{
            transform: `rotate(${angle}deg) translateY(-160px) rotate(-${angle}deg)`,
            top: "50%",
            left: "50%",
            transformOrigin: "center center",
            animationDelay: delay,
          }}
        >
          {title}
        </div>
      );
    })}
  </div>
</div>



  
</div>

  
  );
};

export default CircularDivs;
