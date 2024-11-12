// // import React, { useState } from 'react';
// // import Img1 from '../assets/img/AI_img/ABM (Account Based Marketing).png';
// // import Img2 from '../assets/img/AI_img/Artificial Intelligence (AI).png'; // Add other images as necessary
// // import Img3 from '../assets/img/AI_img/Internet of Things (IoT).png'; // Add other images as necessary
// // import Img4 from '../assets/img/AI_img/Marketing Automation.png'; // Add other images as necessary
// // import Img5 from '../assets/img/AI_img/Cloud Platform as a Service (PaaS).png'; // Add other images as necessary
// // import Img6 from '../assets/img/AI_img/Talent Management.png'; // Add other images as necessary

// // const Curated = () => {
// //   // Define images array with paths, alt text, and titles
// //   const images = [
// //     { src: Img1, alt: "", title: "Account Based Marketing" },
// //     { src: Img2, alt: "", title: "Artificial Intelligence" },
// //     { src: Img3, alt: "", title: "Internet of Things" },
// //     { src: Img4, alt: "", title: "Marketing Automation" },
// //     { src: Img5, alt: "", title: "Cloud Platform as a Service" },
// //     { src: Img6, alt: "", title: "Talent Management" },
   
// //   ];

// //   // State to track the selected image
// //   const [selectedImage, setSelectedImage] = useState(images[0]);

// //   // Handle button click to change the selected image
// //   const handleImageChange = (image) => {
// //     setSelectedImage(image);
// //   };

// //   return (
// //     <>
// //       <div className="mt-4 relative bg-teal-700 rounded-lg shadow-xl flex flex-col items-center justify-center text-center text-white space-y-2 md:p-4 md:space-y-3">
// //         <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500 md:text-3xl lg:text-4xl">
// //           CURATED SOLUTION SETS
// //         </span>
// //       </div>

// //       <div className="flex w-full p-4 space-x-6 items-start">
// //         {/* Images Section */}
// //         <div className="w-1/2">
// //           {/* First Row */}
// //           <div className="flex w-full p-1 space-x-2 items-start">
// //             {/* Large Image Container */}
// //             <div className="relative w-2/3 h-[200px]">
// //               <img
// //                 src={selectedImage.src}
// //                 alt={selectedImage.alt}
// //                 className="w-full h-full object-cover rounded-lg"
// //                 title={selectedImage.title}
// //               />
// //               <button
// //                 className="absolute bottom-2 left-2 px-2 py-1 bg-purple-600 text-white text-xs rounded"
// //               >
// //                 {selectedImage.title}
// //               </button>
// //             </div>

// //             {/* Small Images Container */}
// //             <div className="flex flex-col space-y-2 w-1/3">
// //               {images.slice(1).map((image, index) => (
// //                 <div key={index} className="relative w-full h-[97px]">
// //                   <img
// //                     src={image.src}
// //                     alt={image.alt}
// //                     className="w-full h-full object-cover rounded-lg"
// //                     title={image.title}
// //                   />
// //                   <button
// //                     onClick={() => handleImageChange(image)} // Set selected image when button clicked
// //                     className="absolute bottom-2 left-2 px-2 py-1 bg-purple-600 text-white text-xs rounded"
// //                   >
// //                     {image.title}
// //                   </button>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>

// //           {/* Second Row */}
// //           <div className="flex w-full p-1 space-x-2 items-start">
// //             {/* Small Images Container */}
// //             <div className="flex flex-col space-y-2 w-1/3">
// //               {images.slice(1).map((image, index) => (
// //                 <div key={index} className="relative w-full h-[97px]">
// //                   <img
// //                     src={image.src}
// //                     alt={image.alt}
// //                     className="w-full h-full object-cover rounded-lg"
// //                     title={image.title}
// //                   />
// //                   <button
// //                     onClick={() => handleImageChange(image)} // Set selected image when button clicked
// //                     className="absolute bottom-2 left-2 px-2 py-1 bg-purple-600 text-white text-xs rounded"
// //                   >
// //                     {image.title}
// //                   </button>
// //                 </div>
// //               ))}
// //             </div>

// //             {/* Large Image Container */}
// //             <div className="relative w-2/3 h-[200px]">
// //               <img
// //                 src={selectedImage.src}
// //                 alt={selectedImage.alt}
// //                 className="w-full h-full object-cover rounded-lg"
// //                 title={selectedImage.title}
// //               />
// //               <button
// //                 className="absolute bottom-2 left-2 px-2 py-1 bg-purple-600 text-white text-xs rounded"
// //               >
// //                 {selectedImage.title}
// //               </button>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Text Section */}
// //         <div className="w-1/2 flex justify-center items-center">
// //           <p className="text-lg md:text-xl lg:text-2xl font-bold text-left leading-relaxed tracking-wide mt-20">
// //             Save time with our uniquely organized collections of tried and tested solutions to industry challenges.
// //           </p>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default Curated;


// import React from 'react';

// const Curated = () => {
//   // Define images array with new paths, alt text, and titles
//   const images = [
//     { src: require('../assets/img/AI_img/Big Data.png'), alt: "Big Data", title: "Big Data" },
//     { src: require('../assets/img/AI_img/Internet of Things (IoT).png'), alt: "Internet of Things", title: "Internet of Things" },
//     { src: require('../assets/img/AI_img/Talent Management.png'), alt: "Talent Management", title: "Talent Management" },
//     { src: require('../assets/img/AI_img/Marketing Automation.png'), alt: "Marketing Automation", title: "Marketing Automation" },
//     { src: require('../assets/img/AI_img/Cloud Platform as a Service (PaaS).png'), alt: "Cloud Platform as a Service", title: "Cloud Platform as a Service" },
//     { src: require('../assets/img/AI_img/ABM (Account Based Marketing).png'), alt: "Account Based Marketing", title: "Account Based Marketing" },
//     { src: require('../assets/img/AI_img/Artificial Intelligence (AI).png'), alt: "Artificial Intelligence", title: "Artificial Intelligence" },
//     { src: require('../assets/img/AI_img/Healthcare Industry.png'), alt: "Healthcare Industry", title: "Healthcare Industry" },
//     { src: require('../assets/img/AI_img/Augmented Reality & Virtual Reality.png'), alt: "Augmented Reality & Virtual Reality", title: "Augmented Reality & Virtual Reality" },
//     { src: require('../assets/img/AI_img/Cybersecurity - Ransomware.png'), alt: "Cybersecurity - Ransomware", title: "Cybersecurity - Ransomware" },
//   ];

//   return (
//     <>
//       <div className="mt-4 relative bg-teal-700 rounded-lg shadow-xl flex flex-col items-center justify-center text-center text-white space-y-2 md:p-4 md:space-y-3">
//         <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500 md:text-3xl lg:text-4xl">
//           CURATED SOLUTION SETS
//         </span>
//       </div>
//       <div className="flex w-full p-4 space-x-6 items-start">
//         {/* Images Section */}
//         <div className="w-1/2">
//           {/* First Row */}
//           <div className="flex w-full p-1 space-x-2 items-start">
//             {/* Large Image Container */}
//             <div className="relative w-2/3 h-[200px]">
//               <img
//                 src={images[0].src}
//                 alt={images[0].alt}
//                 className="w-full h-full object-cover rounded-lg"
//                 title={images[0].title}
//               />
//               <button
//                 className="absolute bottom-2 left-2 px-2 py-1 bg-purple-600 text-white text-xs rounded"
//               >
//                 {images[0].title}
//               </button>
//             </div>

//             {/* Small Images Container */}
//             <div className="flex flex-col space-y-2 w-1/3">
//               {images.slice(1).map((image, index) => (
//                 <div key={index} className="relative w-full h-[97px]">
//                   <img
//                     src={image.src}
//                     alt={image.alt}
//                     className="w-full h-full object-cover rounded-lg"
//                     title={image.title}
//                   />
//                   <button
//                     className="absolute bottom-2 left-2 px-2 py-1 bg-purple-600 text-white text-xs rounded"
//                   >
//                     {image.title}
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Second Row */}
//           <div className="flex w-full p-1 space-x-2 items-start">
//             {/* Small Images Container */}
//             <div className="flex flex-col space-y-2 w-1/3">
//               {images.slice(1).map((image, index) => (
//                 <div key={index} className="relative w-full h-[97px]">
//                   <img
//                     src={image.src}
//                     alt={image.alt}
//                     className="w-full h-full object-cover rounded-lg"
//                     title={image.title}
//                   />
//                   <button
//                     className="absolute bottom-2 left-2 px-2 py-1 bg-purple-600 text-white text-xs rounded"
//                   >
//                     {image.title}
//                   </button>
//                 </div>
//               ))}
//             </div>

//             {/* Large Image Container */}
//             <div className="relative w-2/3 h-[200px]">
//               <img
//                 src={images[0].src}
//                 alt={images[0].alt}
//                 className="w-full h-full object-cover rounded-lg"
//                 title={images[0].title}
//               />
//               <button
//                 className="absolute bottom-2 left-2 px-2 py-1 bg-purple-600 text-white text-xs rounded"
//               >
//                 {images[0].title}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Text Section */}
//         <div className="w-1/2 flex justify-center items-center">
//           <p className="text-lg md:text-xl lg:text-2xl font-bold text-left leading-relaxed tracking-wide mt-20">
//             Save time with our uniquely organized collections of tried and tested solutions to industry challenges.
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Curated;


import React from 'react';
import Img1 from '../assets/img/AI_img/Big Data.png';
import Img2 from '../assets/img/AI_img/Internet of Things (IoT).png';
import Img3 from '../assets/img/AI_img/Talent Management.png';
import { Navigate } from 'react-router-dom';


const Curated = () => {
  // Define images array with paths, alt text, and titles
  const images = [
    { src: Img1, alt: "Big Data", title: "Big Data" },
    { src: Img2, alt: "Internet of Things", title: "Internet of Things" },
    { src: Img3, alt: "Talent Management", title: "Talent Management" },
    
  ];

  return (
    <>    <div className="mt-4 relative bg-teal-700 rounded-lg shadow-xl flex flex-col items-center justify-center text-center text-white space-y-2 md:p-4 md:space-y-3">
    <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500 md:text-3xl lg:text-4xl">
    CURATED
SOLUTION SETS
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
            //   onClick={()=>Navigate(/category/Big%20Data)}
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
                  {image.title}
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
                  {image.title}
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
