import React from 'react';
import { Navigate } from 'react-router-dom';

const TrustedVender = () => {
  return (
    <>
      <div className="relative bg-teal-700 rounded-lg shadow-xl flex flex-col items-center justify-center text-center text-white space-y-2 md:p-4 md:space-y-3">
        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500 md:text-3xl lg:text-4xl">
          TRUSTED VENDORS
        </span>
      </div>

      <div className="">
        <span className="flex justify-center p-4 text-lg md:text-xl lg:text-2xl font-bold text-left leading-relaxed tracking-wide italic" style={{ fontFamily: 'Roboto, sans-serif' }}>
          Learn from reputable B2B brands about the products and solutions that can help your business grow
        </span>

        <button
          className="flex bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-400 transition duration-300 ml-16"
          onClick={() => Navigate('/get-started')} 
        >
          EXPLORE VENDORS
        </button>
      </div>

      {/* Scrolling Display Below the Button */}
      <div className="overflow-hidden mt-6 relative">
        <div className="flex animate-scroll space-x-4">
          <img
            src={require('../assets/img/scoller/1.jpg')}
            alt="Image 1"
            className="w-64 h-48 object-cover rounded-lg shadow-lg"
          />
          <img
            src={require('../assets/img/scoller/2.jpg')}
            alt="Image 2"
            className="w-64 h-48 object-cover rounded-lg shadow-lg"
          />
          <img
            src={require('../assets/img/scoller/3.jpg')}
            alt="Image 3"
            className="w-64 h-48 object-cover rounded-lg shadow-lg"
          />
          <img
            src={require('../assets/img/scoller/4.jpg')}
            alt="Image 4"
            className="w-64 h-48 object-cover rounded-lg shadow-lg"
          />
          <img
            src={require('../assets/img/scoller/5.jpg')}
            alt="Image 5"
            className="w-64 h-48 object-cover rounded-lg shadow-lg"
          />
          <img
            src={require('../assets/img/scoller/1.jpg')}
            alt="Image 1"
            className="w-64 h-48 object-cover rounded-lg shadow-lg"
          />
          <img
            src={require('../assets/img/scoller/2.jpg')}
            alt="Image 2"
            className="w-64 h-48 object-cover rounded-lg shadow-lg"
          />
          <img
            src={require('../assets/img/scoller/3.jpg')}
            alt="Image 3"
            className="w-64 h-48 object-cover rounded-lg shadow-lg"
          />
          <img
            src={require('../assets/img/scoller/4.jpg')}
            alt="Image 4"
            className="w-64 h-48 object-cover rounded-lg shadow-lg"
          />
          <img
            src={require('../assets/img/scoller/5.jpg')}
            alt="Image 5"
            className="w-64 h-48 object-cover rounded-lg shadow-lg"
          />
              <img
            src={require('../assets/img/scoller/2.jpg')}
            alt="Image 2"
            className="w-64 h-48 object-cover rounded-lg shadow-lg"
          />
          <img
            src={require('../assets/img/scoller/3.jpg')}
            alt="Image 3"
            className="w-64 h-48 object-cover rounded-lg shadow-lg"
          />
          <img
            src={require('../assets/img/scoller/4.jpg')}
            alt="Image 4"
            className="w-64 h-48 object-cover rounded-lg shadow-lg"
          />
          <img
            src={require('../assets/img/scoller/5.jpg')}
            alt="Image 5"
            className="w-64 h-48 object-cover rounded-lg shadow-lg"
          />
          <img
            src={require('../assets/img/scoller/1.jpg')}
            alt="Image 1"
            className="w-64 h-48 object-cover rounded-lg shadow-lg"
          />
          <img
            src={require('../assets/img/scoller/2.jpg')}
            alt="Image 2"
            className="w-64 h-48 object-cover rounded-lg shadow-lg"
          />
          <img
            src={require('../assets/img/scoller/3.jpg')}
            alt="Image 3"
            className="w-64 h-48 object-cover rounded-lg shadow-lg"
          />
          <img
            src={require('../assets/img/scoller/4.jpg')}
            alt="Image 4"
            className="w-64 h-48 object-cover rounded-lg shadow-lg"
          />
          <img
            src={require('../assets/img/scoller/5.jpg')}
            alt="Image 5"
            className="w-64 h-48 object-cover rounded-lg shadow-lg"
          />
          {/* Duplicate images for seamless scroll */}
          {/* <img
            src={require('../assets/img/scoller/1.jpg')}
            alt="Image 6"
            className="w-64 h-48 object-cover rounded-lg shadow-lg"
          />
          <img
            src={require('../assets/img/scoller/1.jpg')}
            alt="Image 7"
            className="w-64 h-48 object-cover rounded-lg shadow-lg"
          /> */}
        </div>
      </div>
    </>
  );
};

export default TrustedVender;


// import React from 'react'
// import { Navigate } from 'react-router-dom'

// const TrustedVender = () => {
//   return (
//     <>
//     <div className="relative bg-teal-700 rounded-lg shadow-xl flex flex-col items-center justify-center text-center text-white space-y-2 md:p-4 md:space-y-3">
//     <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500 md:text-3xl lg:text-4xl">
//     TRUSTED VENDORS
//     </span>
 
//   </div>
//      <div className="">
//      <span className="flex justify-center p-4 text-lg md:text-xl lg:text-2xl font-bold text-left leading-relaxed tracking-wide" style={{ fontFamily: 'Roboto, sans-serif' }}>
//      Learn from reputable B2B brands about the products and solutions that can help your business grow
//      </span>
    
//                <button
//               className="flex bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-400 transition duration-300 ml-16"
//               onClick={() => Navigate('/get-started')} 
//             >
//              EXPLORE VENDORS
//             </button>
 
//    </div>
//    </>
//   )
// }

// export default TrustedVender