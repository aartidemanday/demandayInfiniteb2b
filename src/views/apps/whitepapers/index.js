import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Bell, ChevronRight, Home, Search } from 'react-feather';
import { Link, useNavigate } from 'react-router-dom';
// import { fetchCategories } from '../../../app/services/categoryAction';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../../app/servies/categoryAction';

const Whitepapers = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [letterFilter, setLetterFilter] = useState('');
const topCategory = useSelector(state=>state.category.category)
  const navigate = useNavigate();
 const dispatch =useDispatch()
 
  const images = [
    { src: require('../../../assets/img/AI_img/Big Data.png'), alt: "Big Data", title: "Big Data" },
    { src: require('../../../assets/img/AI_img/Internet of Things (IoT).png'), alt: "Internet of Things", title: "Internet of Things" },
    { src: require('../../../assets/img/AI_img/Talent Management.png'), alt: "Talent Management", title: "Talent Management" },
    { src: require('../../../assets/img/AI_img/Marketing Automation.png'), alt: "Marketing Automation", title: "Marketing Automation" },
    { src: require('../../../assets/img/AI_img/Cloud Platform as a Service (PaaS).png'), alt: "Cloud Platform as a Service", title: "Cloud Platform as a Service" },
    { src: require('../../../assets/img/AI_img/ABM (Account Based Marketing).png'), alt: "Account Based Marketing", title: "Account Based Marketing" },
    { src: require('../../../assets/img/AI_img/Artificial Intelligence (AI).png'), alt: "Artificial Intelligence", title: "Artificial Intelligence" },
    { src: require('../../../assets/img/AI_img/Healthcare Industry.png'), alt: "Healthcare Industry", title: "Healthcare Industry" },
    { src: require('../../../assets/img/AI_img/Augmented Reality & Virtual Reality.png'), alt: "Augmented Reality & Virtual Reality", title: "Augmented Reality & Virtual Reality" },
    { src: require('../../../assets/img/AI_img/Cybersecurity - Ransomware.png'), alt: "Cybersecurity - Ransomware", title: "Cybersecurity - Ransomware" },
  ];

  useEffect(() => {
    dispatch(fetchCategories(dispatch));
    // fetchCategory();
  }, [])
console.log("topCategory",topCategory)

  // img click function 
  const handleImageClick = (category) => { 
    navigate(`/category/${category.name}`,{state:{category}}); 
  };

  // Filtered images based on search and filter 
  const filteredImages = images.filter((image) => {
    const matchesLetter = letterFilter ? image.title.startsWith(letterFilter) : true;
    const matchesSearch = searchQuery
      ? image.title.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    return matchesLetter && matchesSearch;
  });

  return (
    <>
      <header className="w-full bg-white shadow-lg rounded-lg p-3 px-4"> 
        <div className="flex items-center gap-2 text-[#4702a2]">
          <Link to="/home">
            <Home className="text-[#4702a2]" size={20} />
          </Link>
          <ChevronRight className="text-[#4702a2]" size={20} />
          <Link to="/whitepapers" className="text-sm hover:underline">
            WHITEPAPERS
          </Link>
          <ChevronRight className="text-[#4702a2]" size={20} />
        </div>
      </header>
      
      <div className="flex flex-col lg:flex-row lg:justify-start items-center space-y-4 lg:space-y-0 p-6">
        <div className="flex items-center bg-[#4702a2] text-white p-3 rounded-lg w-full lg:w-auto lg:flex-grow-0">
          <span className="font-semibold mr-4">FILTER:</span>
          <div className="flex flex-wrap gap-1">
            {Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ").map((letter) => (
              <button
                key={letter}
                className={`p-1 rounded-lg text-sm
                  ${letterFilter === letter ? 'font-bold underline text-green-500' : 'text-white'} 
                  hover:text-xl transition-all duration-300 ease-in-out`}
                onClick={() => setLetterFilter(letter)}
              >
                {letter}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center border-b-2 p-2 w-full lg:w-1/3 lg:ml-16">
          <Search className="mr-2" size={20} />
          <input
            type="text"
            placeholder="Search..."
            className="flex-1 outline-none text-gray-700 placeholder-gray-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 m-2 mt-4 p-2">
        {topCategory?.map((category, index) => (
          <div 
            key={category.id} 
            className="relative w-72 h-48 rounded-lg shadow-lg overflow-hidden group"
            onClick={() => handleImageClick(category)} 
          >
            <img 
              src={images[index < 10 ? index : 0 ].src} 
              alt={images[index < 10 ? index : 0].alt} 
              className="cursor-pointer w-full h-full object-cover"
            />
            <div className="cursor-pointer absolute inset-0  from-teal-400 to-purple-500 opacity-40"></div>
            <div className="absolute bottom-2 left-2 text-white opacity-100 transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:translate-x-2">
              <p className="font-montserrat cursor-pointer flex text-lg font-bold group-hover:text-xl group-hover:font-semibold transition-all duration-300 ease-in-out mt-1">
                {category.name}     
              </p>
              <div className="flex">
                <h2 className="text-xs font-medium group-hover:text-sm transition-all duration-300 ease-in-out">
                  {category.solutionSetCount}
                </h2>
                <Bell className="ml-2 transition-all duration-300 ease-in-out" size={14} /> 
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Whitepapers;


// import React, { useState } from 'react';
// import { Bell, ChevronRight, Home, Search } from 'react-feather';
// import { Link, useNavigate } from 'react-router-dom';

// const Whitepapers = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [letterFilter, setLetterFilter] = useState('');
//   const navigate = useNavigate();

//   const images = [
//     { src: require('../../../assets/img/AI_img/Big Data.png'), alt: "Big Data", title: "Big Data" },
//     { src: require('../../../assets/img/AI_img/Internet of Things (IoT).png'), alt: "Internet of Things", title: "Internet of Things" },
//     { src: require('../../../assets/img/AI_img/Talent Management.png'), alt: "Talent Management", title: "Talent Management" },
//     { src: require('../../../assets/img/AI_img/Marketing Automation.png'), alt: "Marketing Automation", title: "Marketing Automation" },
//     { src: require('../../../assets/img/AI_img/Cloud Platform as a Service (PaaS).png'), alt: "Cloud Platform as a Service", title: "Cloud Platform as a Service" },
//     { src: require('../../../assets/img/AI_img/ABM (Account Based Marketing).png'), alt: "Account Based Marketing", title: "Account Based Marketing" },
//     { src: require('../../../assets/img/AI_img/Artificial Intelligence (AI).png'), alt: "Artificial Intelligence", title: "Artificial Intelligence" },
//     { src: require('../../../assets/img/AI_img/Healthcare Industry.png'), alt: "Healthcare Industry", title: "Healthcare Industry" },
//     { src: require('../../../assets/img/AI_img/Augmented Reality & Virtual Reality.png'), alt: "Augmented Reality & Virtual Reality", title: "Augmented Reality & Virtual Reality" },
//     { src: require('../../../assets/img/AI_img/Cybersecurity - Ransomware.png'), alt: "Cybersecurity - Ransomware", title: "Cybersecurity - Ransomware" },
//   ];

//   // img click function 
//   const handleImageClick = (category) => { 
//     navigate(/category/${category}); 
//   };

//   // Filtered images based on search and filter 
//   const filteredImages = images.filter((image) => {
//     const matchesLetter = letterFilter ? image.title.startsWith(letterFilter) : true;
//     const matchesSearch = searchQuery
//       ? image.title.toLowerCase().includes(searchQuery.toLowerCase())
//       : true;
//     return matchesLetter && matchesSearch;
//   });

//   return (
//     <>
//       <header className="w-full bg-white shadow-lg rounded-lg p-3 px-4"> 
//         <div className="flex items-center gap-2 text-[#4702a2]">
//           <Link to="/home">
//             <Home className="text-[#4702a2]" size={20} />
//           </Link>
//           <ChevronRight className="text-[#4702a2]" size={20} />
//           <Link to="/whitepapers" className="text-sm hover:underline">
//             WHITEPAPERS
//           </Link>
//           <ChevronRight className="text-[#4702a2]" size={20} />
//         </div>
//       </header>
      
//       <div className="flex flex-col lg:flex-row lg:justify-start items-center space-y-4 lg:space-y-0 p-6">
//         <div className="flex items-center bg-[#4702a2] text-white p-3 rounded-lg w-full lg:w-auto lg:flex-grow-0">
//           <span className="font-semibold mr-4">FILTER:</span>
//           <div className="flex flex-wrap gap-1">
//             {Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ").map((letter) => (
//               <button
//                 key={letter}
//                 className={`p-1 rounded-lg text-sm
//                   ${letterFilter === letter ? 'font-bold underline text-green-500' : 'text-white'} 
//                   hover:text-xl transition-all duration-300 ease-in-out`}
//                 onClick={() => setLetterFilter(letter)}
//               >
//                 {letter}
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className="flex items-center border-b-2 p-2 w-full lg:w-1/3 lg:ml-16">
//           <Search className="mr-2" size={20} />
//           <input
//             type="text"
//             placeholder="Search..."
//             className="flex-1 outline-none text-gray-700 placeholder-gray-500"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//           />
//         </div>
//       </div>

//       <div className="flex justify-center flex-wrap gap-6 m-2 mt-4 p-2">
//         {filteredImages.map((image, index) => (
//           <div 
//             key={index} 
//             className="relative w-72 h-48 rounded-lg shadow-lg overflow-hidden group"
//             onClick={() => handleImageClick(image.title)} 
//           >
//             <img 
//               src={image.src} 
//               alt={image.alt} 
//               className="cursor-pointer w-full h-full object-cover"
//             />
//             <div className="cursor-pointer absolute inset-0 bg-gradient-to-r from-teal-400 to-purple-500 opacity-40"></div>
//             <div className="absolute bottom-2 left-2 text-white opacity-100 transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:translate-x-2">
//               <p className="font-montserrat cursor-pointer flex text-lg font-bold group-hover:text-xl group-hover:font-semibold transition-all duration-300 ease-in-out mt-1">
//                 {image.title}     
//               </p>
//               <div className="flex">
//                 <h2 className="text-xs font-medium group-hover:text-sm transition-all duration-300 ease-in-out">
//                   WHITEPAPERS 112
//                 </h2>
//                 <Bell className="ml-2 transition-all duration-300 ease-in-out" size={14} /> 
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Whitepapers;


// import React, { useState } from 'react';
// import { Bell, ChevronRight, Home, Search } from 'react-feather';
// import { Link, useNavigate } from 'react-router-dom';

// const Whitepapers = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [letterFilter, setLetterFilter] = useState('');
//   const navigate = useNavigate();

//   const images = [
//    { src: require('../../../assets/img/AI_img/Big Data.png'), alt: "Big Data", title: "Big Data" },
//     { src: require('../../../assets/img/AI_img/Internet of Things (IoT).png'), alt: "Internet of Things", title: "Internet of Things" },
//     { src: require('../../../assets/img/AI_img/Talent Management.png'), alt: "Talent Management", title: "Talent Management" },
//     { src: require('../../../assets/img/AI_img/Marketing Automation.png'), alt: "Marketing Automation", title: "Marketing Automation" },
//     { src: require('../../../assets/img/AI_img/Cloud Platform as a Service (PaaS).png'), alt: "Cloud Platform as a Service", title: "Cloud Platform as a Service" },
//     { src: require('../../../assets/img/AI_img/ABM (Account Based Marketing).png'), alt: "Account Based Marketing", title: "Account Based Marketing" },
//     { src: require('../../../assets/img/AI_img/Artificial Intelligence (AI).png'), alt: "Artificial Intelligence", title: "Artificial Intelligence" },
//     { src: require('../../../assets/img/AI_img/Healthcare Industry.png'), alt: "Healthcare Industry", title: "Healthcare Industry" },
//     { src: require('../../../assets/img/AI_img/Augmented Reality & Virtual Reality.png'), alt: "Augmented Reality & Virtual Reality", title: "Augmented Reality & Virtual Reality" },
//     { src: require('../../../assets/img/AI_img/Cybersecurity - Ransomware.png'), alt: "Cybersecurity - Ransomware", title: "Cybersecurity - Ransomware" },
//   ];

//   // img click function 
//   const handleImageClick = (category) => { 
//     navigate(`/category/${category}`); 
//   };

//   // Filtered images based on search and filter 
//   const filteredImages = images.filter((image) => {
//     const matchesLetter = letterFilter ? image.title.startsWith(letterFilter) : true;
//     const matchesSearch = searchQuery
//       ? image.title.toLowerCase().includes(searchQuery.toLowerCase())
//       : true;
//     return matchesLetter && matchesSearch;
//   });

//   return (
//     <>
//       <header className="w-full bg-white shadow-lg rounded-lg p-3 px-4"> 
//         <div className="flex items-center gap-2 text-[#4702a2]">
//           <Link to="/home">
//             <Home className="text-[#4702a2]" size={20} />
//           </Link>
//           <ChevronRight className="text-[#4702a2]" size={20} />
//           <Link to="/whitepapers" className="text-sm hover:underline">
//             WHITEPAPERS
//           </Link>
//           <ChevronRight className="text-[#4702a2]" size={20} />
//         </div>
//       </header>
      
//       <div className="flex flex-col lg:flex-row lg:justify-start items-center space-y-4 lg:space-y-0 p-6">
//         <div className="flex items-center bg-[#4702a2] text-white p-3 rounded-lg w-full lg:w-auto lg:flex-grow-0">
//           <span className="font-semibold mr-4">FILTER:</span>
//           <div className="flex flex-wrap gap-1">
//             {Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ").map((letter) => (
//               <button
//                 key={letter}
//                 className={`p-1 rounded-lg text-sm
//                   ${letterFilter === letter ? 'font-bold underline text-green-500' : 'text-white'} 
//                   hover:text-xl transition-all duration-300 ease-in-out`}
//                 onClick={() => setLetterFilter(letter)}
//               >
//                 {letter}
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className="flex items-center border-b-2 p-2 w-full lg:w-1/3 lg:ml-16">
//           <Search className="mr-2" size={20} />
//           <input
//             type="text"
//             placeholder="Search..."
//             className="flex-1 outline-none text-gray-700 placeholder-gray-500"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//           />
//         </div>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 m-2 mt-4 p-2">
//         {filteredImages.map((image, index) => (
//           <div 
//             key={index} 
//             className="relative w-72 h-48 rounded-lg shadow-lg overflow-hidden group"
//             onClick={() => handleImageClick(image.title)} 
//           >
//             <img 
//               src={image.src} 
//               alt={image.alt} 
//               className="cursor-pointer w-full h-full object-cover"
//             />
//             <div className="cursor-pointer absolute inset-0 bg-gradient-to-r from-teal-400 to-purple-500 opacity-40"></div>
//             <div className="absolute bottom-2 left-2 text-white opacity-100 transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:translate-x-2">
//               <p className="font-montserrat cursor-pointer flex text-lg font-bold group-hover:text-xl group-hover:font-semibold transition-all duration-300 ease-in-out mt-1">
//                 {image.title}     
//               </p>
//               <div className="flex">
//                 <h2 className="text-xs font-medium group-hover:text-sm transition-all duration-300 ease-in-out">
//                   WHITEPAPERS 112
//                 </h2>
//                 <Bell className="ml-2 transition-all duration-300 ease-in-out" size={14} /> 
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Whitepapers;
