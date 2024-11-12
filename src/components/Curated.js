
import React from 'react';
import Img1 from '../assets/img/AI_img/Big Data.png';
import Img2 from '../assets/img/AI_img/Internet of Things (IoT).png';
import Img3 from '../assets/img/AI_img/Talent Management.png';
import { Navigate } from 'react-router-dom';

const Curated = () => {
  // Define images array with paths, alt text, and titles
  const images = [
    { src: Img1, alt: "Big Data", title: "Big Data" },
    { src: Img2, alt: "Internet of Things", title: "Internet of Things", shortTitle: "IoT" },
    { src: Img3, alt: "Talent Management", title: "Talent Management", shortTitle: "TM" },
  ];

  return (
    <>
      <div className="mt-4 relative bg-teal-700 rounded-lg shadow-xl flex flex-col items-center justify-center text-center text-white space-y-2 md:p-4 md:space-y-3">
        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500 md:text-3xl lg:text-4xl">
          CURATED SOLUTION SETS
        </span>
      </div>
      
      <div className="flex w-full p-4 space-x-6 items-start">
        {/* Images Section */}
        <div className="w-1/2">
          {/* First Row */}
          <div className="flex w-full p-1 space-x-2 items-start">
            {/* Large Image Container */}
            <div className="relative w-2/3 h-[200px]">
              <img
                src={images[0].src}
                alt={images[0].alt}
                className="w-full h-full object-cover rounded-lg"
                title={images[0].title}
              />
              <button
                className="absolute bottom-2 left-2 px-2 py-1 bg-purple-600 text-white text-xs rounded"
              >
                {images[0].title}
              </button>
            </div>

            {/* Small Images Container */}
            <div className="flex flex-col space-y-2 w-1/3">
              {images.slice(1).map((image, index) => (
                <div key={index} className="relative w-full h-[97px]">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover rounded-lg"
                    title={image.title}
                  />
                  <button
                    className="absolute bottom-2 left-2 px-2 py-1 bg-purple-600 text-white text-xs rounded"
                  >
                    {/* Short title for mobile view */}
                    <span className="md:hidden">{image.shortTitle}</span>
                    <span className="hidden md:block">{image.title}</span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Second Row */}
          <div className="flex w-full p-1 space-x-2 items-start">
            {/* Small Images Container */}
            <div className="flex flex-col space-y-2 w-1/3">
              {images.slice(1).map((image, index) => (
                <div key={index} className="relative w-full h-[97px]">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover rounded-lg"
                    title={image.title}
                  />
                  <button
                    className="absolute bottom-2 left-2 px-2 py-1 bg-purple-600 text-white text-xs rounded"
                  >
                    {/* Short title for mobile view */}
                    <span className="md:hidden">{image.shortTitle}</span>
                    <span className="hidden md:block">{image.title}</span>
                  </button>
                </div>
              ))}
            </div>

            {/* Large Image Container */}
            <div className="relative w-2/3 h-[200px]">
              <img
                src={images[0].src}
                alt={images[0].alt}
                className="w-full h-full object-cover rounded-lg"
                title={images[0].title}
              />
              <button
                className="absolute bottom-2 left-2 px-2 py-1 bg-purple-600 text-white text-xs rounded"
              >
                {images[0].title}
              </button>
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div className="w-1/2 flex justify-center items-center">
          <p className="text-lg md:text-2xl lg:text-2xl text-left leading-relaxed tracking-wide mt-20 italic font-bold mx-2">
            Save time with our uniquely organized collections of tried and tested solutions to industry challenges.
          </p>
        </div>
      </div>
    </>
  );
};

export default Curated;

// import React from 'react';
// import Img1 from '../assets/img/AI_img/Big Data.png';
// import Img2 from '../assets/img/AI_img/Internet of Things (IoT).png';
// import Img3 from '../assets/img/AI_img/Talent Management.png';
// import { Navigate } from 'react-router-dom';


// const Curated = () => {
//   // Define images array with paths, alt text, and titles
//   const images = [
//     { src: Img1, alt: "Big Data", title: "Big Data" },
//     { src: Img2, alt: "Internet of Things", title: "Internet of Things" },
//     { src: Img3, alt: "Talent Management", title: "Talent Management" },
    
//   ];

//   return (
//     <>    <div className="mt-4 relative bg-teal-700 rounded-lg shadow-xl flex flex-col items-center justify-center text-center text-white space-y-2 md:p-4 md:space-y-3">
//     <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500 md:text-3xl lg:text-4xl">
//     CURATED
// SOLUTION SETS
//     </span>
  
//   </div>
//     <div className="flex w-full p-4 space-x-6 items-start">
//       {/* Images Section */}
//       <div className="w-1/2">
//         {/* First Row */}
//         <div className="flex w-full p-1 space-x-2 items-start">
//           {/* Large Image Container */}
//           <div className="relative w-2/3 h-[200px]">
//             <img
//               src={images[0].src}
//               alt={images[0].alt}
//               className="w-full h-full object-cover rounded-lg"
//               title={images[0].title}
//             />
//             <button
//               className="absolute bottom-2 left-2 px-2 py-1 bg-purple-600 text-white text-xs rounded"
//             //   onClick={()=>Navigate(/category/Big%20Data)}
//             >
//               {images[0].title}
//             </button>
//           </div>

//           {/* Small Images Container */}
//           <div className="flex flex-col space-y-2 w-1/3">
//             {images.slice(1).map((image, index) => (
//               <div key={index} className="relative w-full h-[97px]">
//                 <img
//                   src={image.src}
//                   alt={image.alt}
//                   className="w-full h-full object-cover rounded-lg"
//                   title={image.title}
//                 />
//                 <button
//                   className="absolute bottom-2 left-2 px-2 py-1 bg-purple-600 text-white text-xs rounded"
//                 >
//                   {image.title}
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Second Row */}
//         <div className="flex w-full p-1 space-x-2 items-start">
//           {/* Small Images Container */}
//           <div className="flex flex-col space-y-2 w-1/3">
//             {images.slice(1).map((image, index) => (
//               <div key={index} className="relative w-full h-[97px]">
//                 <img
//                   src={image.src}
//                   alt={image.alt}
//                   className="w-full h-full object-cover rounded-lg"
//                   title={image.title}
//                 />
//                 <button
//                   className="absolute bottom-2 left-2 px-2 py-1 bg-purple-600 text-white text-xs rounded"
//                 >
//                   {image.title}
//                 </button>
//               </div>
//             ))}
//           </div>

//           {/* Large Image Container */}
//           <div className="relative w-2/3 h-[200px]">
//             <img
//               src={images[0].src}
//               alt={images[0].alt}
//               className="w-full h-full object-cover rounded-lg"
//               title={images[0].title}
//             />
//             <button
//               className="absolute bottom-2 left-2 px-2 py-1 bg-purple-600 text-white text-xs rounded"
//             >
//               {images[0].title}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Text Section */}
//       <div className="w-1/2 flex justify-center items-center">
//         <p className="text-lg md:text-2xl lg:text-2xl text-left leading-relaxed tracking-wide mt-20 italic font-bold mx-2">
//           Save time with our uniquely organized collections of tried and tested solutions to industry challenges.
//         </p>
//       </div>
//     </div>
//     </>

//   );
// };

// export default Curated;
