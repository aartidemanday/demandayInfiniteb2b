import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { categoryData, featuredSolutionData } from '../solutionSets/enum';
import { ChevronRight, Download, Home, Search } from 'react-feather';
import PdfPreview from '../../../components/pdfPreview';
import BannerImg from '../../../assets/img/Img7.jpg'
import IconImg from '../../../assets/img/Img2.jpg'
import FeaturedSolution from '../../../components/FeaturedSolution';
import Card from '../../../components/Card';



const Category = () => {
  const { category } = useParams();
  const [selectedCategory, setSelectedCategory] = useState({})
  const {state} = useLocation();
  console.log("state",state)
 useEffect(()=>{
  const {bannerImage,iconImage,id,name,solutionSetCount} = state.category;
  setSelectedCategory({id,name,
    iconImage:iconImage ?? require('../../../assets/img/AI_img/Cloud Platform as a Service (PaaS).png'),
    bannerImage: bannerImage ?? require('../../../assets/img/Img2.jpg'), 
    solutionSetCount,
    description:"Learn about the latest in marketing automation for personalized and scalable customer engagement." })
 },[state])

  const { imgSrc, description, solutions } = categoryData[category] || {};
  
  console.log("imgsrc",imgSrc)
  console.log("selectedCategory",selectedCategory.bannerImage)
  return (
    <>
    
       <header className="w-full bg-white shadow-lg rounded-lg p-3 px-4">
      <div className="flex items-center gap-2 text-gray-700">
        <Link to="/home">
          <Home className="text-gray-700" size={20} />
        </Link>
        <ChevronRight className="text-gray-700" size={20} />
        <Link to="/whitepapers" className="text-sm text-gray-700 no-underline">
          WHITEPAPERS
        </Link>
        <ChevronRight className="text-gray-700" size={20} />
        <Link to={`/category/${category}`} className="text-gray-700 text-sm no-underline">
          CATEGORY
        </Link>
      </div>
    </header>

  <div className='p-3'>
   <div className="object-contain relative w-full h-[70vh] overflow-hidden p-6 rounded-3xl">
    {selectedCategory.bannerImage && (
      <img 
        src={selectedCategory.bannerImage} 
        alt={selectedCategory.name} 
        className="w-full h-auto object-cover rounded-3xl"
      />
    )}
   
    <div className="mb-10 absolute inset-0 bg-opacity-90 p-6 sm:p-8 flex flex-col justify-end rounded-3xl">
      <div className="text-white space-y-2 w-full sm:w-2/3 mb-4">
        <h1 className="mx-2 text-2xl sm:text-4xl font-bold">{selectedCategory.name}</h1>
        <p className="mx-2 text-sm sm:text-base">
          {selectedCategory.description || "Description not available."}
        </p>
      </div>
      <div className="absolute mx-2 flex items-center w-full">
        <button className="px-4 py-2 bg-teal-500 text-white rounded-full text-sm sm:text-base hover:bg-teal-600">
          Subscribe
        </button>
        <div className="text-white text-sm sm:text-base ml-4">
           {selectedCategory.solutionSetCount} WHITEPAPERS
        </div>
      </div>
    </div>
  </div>

<div className="bg-teal-700 w-full p-4 flex flex-col md:flex-row justify-between items-center rounded-md space-y-4 md:space-y-0">
  <div className="text-white text-lg md:text-xl font-semibold">
    113 SOLUTIONS
  </div>

  <div className="flex items-center bg-white rounded-full px-3 py-2 w-full max-w-xs md:max-w-sm">
    <input
      type="text"
      placeholder="Search..."
      className="bg-transparent outline-none text-gray-700 flex-grow"
    />
    <Search className="text-gray-500" size={20} />
  </div>
</div>

<PdfPreview/>
<FeaturedSolution/>

    <h3 className='p-3'> Solutions</h3>
    <div className='flex flex-wrap '>
    {featuredSolutionData.map(featureCard=><Card key={featureCard.title} featureCard={featureCard}/>)}
    </div>
 </div>
</>

  );
};

export default Category;




// import React from 'react';
// import { Link, useParams } from 'react-router-dom';
// import { categoryData } from '../solutionSets/enum';
// import { ChevronRight, Download, Home } from 'react-feather';

// const Category = () => {
//   const { category } = useParams();
//   const { imgSrc, description, solutions } = categoryData[category] || {};


//     const handleDownload = () => {
     
//       const fileUrl = '../../../assets/enterprise-augmented-reality-improves-manufacturing-efficiency.pdf';
      
//       const fileName = 'downloaded-file.pdf';
  
   
//       const link = document.createElement('a');
//       link.href = fileUrl;
//       link.download = fileName;
//       link.click();
//     };
  
  
//   return (
//     <>
    
//        <header className="w-full bg-white shadow-lg rounded-lg p-3 px-4">
//       <div className="flex items-center gap-2 text-[#4702a2]">
//         <Link to="/home">
//           <Home className="text-[#4702a2]" size={20} />
//         </Link>
//         <ChevronRight className="text-[#4702a2]" size={20} />
//         <Link to="/whitepapers" className="text-sm hover:underline">
//           WHITEPAPERS
//         </Link>
//         <ChevronRight className="text-[#4702a2]" size={20} />
//         <Link to={/category/${category}} className="text-sm hover:underline">
//           CATEGORY
//         </Link>
//       </div>
//     </header>
//     <div className="relative w-full h-[70vh] overflow-hidden p-6 rounded-3xl">
//     {imgSrc && (
//       <img 
//         src={imgSrc} 
//         alt={category} 
//         className="w-full h-full object-cover rounded-3xl"
//       />
//     )}
//     <div className="absolute inset-0 bg-opacity-90 p-6 sm:p-8 flex flex-col justify-end rounded-3xl">
//       <div className="text-white space-y-2 w-full sm:w-2/3 mb-4">
//         <h1 className="text-2xl sm:text-4xl font-bold">{category}</h1>
//         <p className="text-sm sm:text-base">
//           {description || "Description not available."}
//         </p>
//       </div>
//       <div className="flex items-center w-full">
//         <button className="px-4 py-2 bg-teal-500 text-white rounded-full text-sm sm:text-base hover:bg-teal-600">
//           Subscribe
//         </button>
//         <div className="text-white text-sm sm:text-base ml-4">
//            {solutions} Solutions
//         </div>
//       </div>
//     </div>
//   </div>
//   <div onClick={handleDownload}>
//       <Download className="ml-20 transition-all duration-300 ease-in-out cursor-pointer" size={20} />
//     </div>
 
// </>

//   );
// };

// export default Category;

// import React from 'react';
// import { Link, useParams } from 'react-router-dom';
// import { categoryData } from '../solutionSets/enum';
// import { ChevronRight, Download, Home } from 'react-feather';

// const Category = () => {
//   const { category } = useParams();
//   const { imgSrc, description, solutions } = categoryData[category] || {};


//     const handleDownload = () => {
     
//       const fileUrl = '../../../assets/enterprise-augmented-reality-improves-manufacturing-efficiency.pdf';
      
//       const fileName = 'downloaded-file.pdf';
  
   
//       const link = document.createElement('a');
//       link.href = fileUrl;
//       link.download = fileName;
//       link.click();
//     };
  
  
//   return (
//     <>
    
//        <header className="w-full bg-white shadow-lg rounded-lg p-3 px-4">
//       <div className="flex items-center gap-2 text-[#4702a2]">
//         <Link to="/home">
//           <Home className="text-[#4702a2]" size={20} />
//         </Link>
//         <ChevronRight className="text-[#4702a2]" size={20} />
//         <Link to="/whitepapers" className="text-sm hover:underline">
//           WHITEPAPERS
//         </Link>
//         <ChevronRight className="text-[#4702a2]" size={20} />
//         <Link to={`/category/${category}`} className="text-sm hover:underline">
//           CATEGORY
//         </Link>
//       </div>
//     </header>
//     {/* <div className="relative w-full h-[70vh] overflow-hidden p-6 rounded-3xl">
//     {imgSrc && (
//       <img 
//         src={imgSrc} 
//         alt={category} 
//         className="w-full h-full object-cover rounded-3xl"
//       />
//     )}
//     <div className="absolute inset-0 bg-opacity-90 p-6 sm:p-8 flex flex-col justify-end rounded-3xl">
//       <div className="text-white space-y-2 w-full sm:w-2/3 mb-4">
//         <h1 className="text-2xl sm:text-4xl font-bold">{category}</h1>
//         <p className="text-sm sm:text-base">
//           {description || "Description not available."}
//         </p>
//       </div>
//       <div className="flex items-center w-full">
//         <button className="px-4 py-2 bg-teal-500 text-white rounded-full text-sm sm:text-base hover:bg-teal-600">
//           Subscribe
//         </button>
//         <div className="text-white text-sm sm:text-base ml-4">
//            {solutions} Solutions
//         </div>
//       </div>
//     </div>
//   </div> */}
//    <div className="relative w-full h-[70vh] overflow-hidden p-6 rounded-3xl">
//     {imgSrc && (
//       <img 
//         src={imgSrc} 
//         alt={category} 
//         className="w-full h-full object-cover rounded-3xl"
//       />
//     )}
//     <div className="absolute inset-0 bg-opacity-90 p-6 sm:p-8 flex flex-col justify-end rounded-3xl">
//       <div className="text-white space-y-2 w-full sm:w-2/3 mb-4">
//         <h1 className="mx-2 text-2xl sm:text-4xl font-bold">{category}</h1>
//         <p className="mx-2 text-sm sm:text-base">
//           {description || "Description not available."}
//         </p>
//       </div>
//       <div className="mx-2 mb-2 flex items-center w-full">
//         <button className="px-4 py-2 bg-teal-500 text-white rounded-full text-sm sm:text-base hover:bg-teal-600">
//           Subscribe
//         </button>
//         <div className="text-white text-sm sm:text-base ml-4">
//            {solutions} Solutions
//         </div>
//       </div>
//     </div>
//   </div>
 

//   {/* <div onClick={handleDownload}>
//       <Download className="ml-20 transition-all duration-300 ease-in-out cursor-pointer" size={20} />
//     </div> */}
 
// </>

//   );
// };

// export default Category;




// // import React from 'react';
// // import { Link, useParams } from 'react-router-dom';
// // import { categoryData } from '../solutionSets/enum';
// // import { ChevronRight, Download, Home } from 'react-feather';

// // const Category = () => {
// //   const { category } = useParams();
// //   const { imgSrc, description, solutions } = categoryData[category] || {};


// //     const handleDownload = () => {
     
// //       const fileUrl = '../../../assets/enterprise-augmented-reality-improves-manufacturing-efficiency.pdf';
      
// //       const fileName = 'downloaded-file.pdf';
  
   
// //       const link = document.createElement('a');
// //       link.href = fileUrl;
// //       link.download = fileName;
// //       link.click();
// //     };
  
  
// //   return (
// //     <>
    
// //        <header className="w-full bg-white shadow-lg rounded-lg p-3 px-4">
// //       <div className="flex items-center gap-2 text-[#4702a2]">
// //         <Link to="/home">
// //           <Home className="text-[#4702a2]" size={20} />
// //         </Link>
// //         <ChevronRight className="text-[#4702a2]" size={20} />
// //         <Link to="/whitepapers" className="text-sm hover:underline">
// //           WHITEPAPERS
// //         </Link>
// //         <ChevronRight className="text-[#4702a2]" size={20} />
// //         <Link to={`/category/${category}`} className="text-sm hover:underline">
// //           CATEGORY
// //         </Link>
// //       </div>
// //     </header>
// //     <div className="relative w-full h-[70vh] overflow-hidden p-6 rounded-3xl">
// //     {imgSrc && (
// //       <img 
// //         src={imgSrc} 
// //         alt={category} 
// //         className="w-full h-full object-cover rounded-3xl"
// //       />
// //     )}
// //     <div className="absolute inset-0 bg-opacity-90 p-6 sm:p-8 flex flex-col justify-end rounded-3xl">
// //       <div className="text-white space-y-2 w-full sm:w-2/3 mb-4">
// //         <h1 className="text-2xl sm:text-4xl font-bold">{category}</h1>
// //         <p className="text-sm sm:text-base">
// //           {description || "Description not available."}
// //         </p>
// //       </div>
// //       <div className="flex items-center w-full">
// //         <button className="px-4 py-2 bg-teal-500 text-white rounded-full text-sm sm:text-base hover:bg-teal-600">
// //           Subscribe
// //         </button>
// //         <div className="text-white text-sm sm:text-base ml-4">
// //            {solutions} Solutions
// //         </div>
// //       </div>
// //     </div>
// //   </div>
// //   <div onClick={handleDownload}>
// //       <Download className="ml-20 transition-all duration-300 ease-in-out cursor-pointer" size={20} />
// //     </div>
 
// // </>

// //   );
// // };

// // export default Category;

