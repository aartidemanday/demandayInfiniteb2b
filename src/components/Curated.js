import React, { useEffect } from 'react';
import Img1 from '../assets/img/AI_img/Big Data.png';
import Img2 from '../assets/img/AI_img/Internet of Things (IoT).png';
import Img3 from '../assets/img/AI_img/Talent Management.png';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../app/servies/categoryAction';


const Curated = () => {
  const topCategory = useSelector(state=>state.category.category)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const images = ["https://www.bigscal.com/wp-content/uploads/2022/02/Artificial-Intelligence-and-Big-Data.webp",
    "https://www.cloudblue.com/wp-content/uploads/2024/06/what-is-the-internet-of-things-iot.png",
    "https://www.humanresourcesmba.net/wp-content/uploads/2023/03/talent-management.jpg",
    "https://www.simplilearn.com/ice9/free_resources_article_thumb/Why-get-certified-in-Artificial-Intelligence.jpg",
    "https://media.licdn.com/dms/image/D5612AQGzkD5qMUPVww/article-cover_image-shrink_720_1280/0/1722583544895?e=2147483647&v=beta&t=zWvDxa2u9iTARX71GuVd35HoORlrHzxCIpXrrM1dwOw",
    "https://media.licdn.com/dms/image/D4D12AQGkBjxItk5DRA/article-cover_image-shrink_720_1280/0/1692777569313?e=2147483647&v=beta&t=swx9AJY-KUMjze5k8nWPOpHMVWjJD0tqi3v67p2OErQ",
  ];
  useEffect(() => {
    dispatch(fetchCategories(dispatch,(data)=>{
      // console.log("category Data",data)
      // setCuratedCateg(data.splice(0,5))
    }));
  }, [])

  const navigateToCategory = (category) => { 
    navigate(`/category/${category.name}`,{state:{category}}); 
  };

  return (
    <>

      
      <div className="flex flex-col-reverse items-center lg:flex-row w-full p-4 lg:space-x-6 lg:space-y-0 space-y-6 lg:items-start">
        {/* Images Section */}
        <div className="lg:w-screen h-full grid  lg:grid-cols-4 md:cols-3 grid-cols-2 gap-4">
    {topCategory.slice(0,6).map((category, index) => {
      const isFirstOrLast = index === 0 || index === 5;
      const imageSrc = category.bannerImage || images[index]; 

      return (
        <div
          key={category.id}
          className={`relative ${isFirstOrLast ? 'col-span-2' : ''} w-full h-[200px]`}
        >
          {/* Image Container */}
          <img
            src={imageSrc}
            alt={category.name}
            className="w-full h-full object-cover rounded-lg"
            title={category.name}
          />
          <button
            onClick={()=>navigateToCategory(category)}
            className="absolute bottom-2 left-2 px-2 py-1 bg-purple-600 text-white text-xs rounded"
          >
            {category.name}
          </button>
        </div>
      );
    })}
  </div>

        {/* Text Section */}
        <div className="lg:mt-4 lg:w-2/5 flex-col justify-center items-center">
        <span className="lg:mt-20 text-2xl font-bold bg-clip-text text-[#4702a2] md:text-3xl lg:text-4xl">
 
    
     EXPLORE TOPICS THAT MATTER TO YOU

  </span>
          <p className="flex m-2 my-3 text-lg md:text-2xl lg:text-lg text-left leading-relaxed tracking-wide">
          Stay Ahead with Key B2B Topics.!
          </p>
          <button
            className="lg:w-1/4 w-auto py-2 bg-[#4702a2] text-white rounded-2xl p-4 my-2  "
          onClick={()=>navigate("/whitepapers")}
          >
            View More
          </button>
        

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
// import { useNavigate } from 'react-router-dom';


// const Curated = () => {
//   const navigate = useNavigate()
//   const images = [
//     { src: "https://www.bigscal.com/wp-content/uploads/2022/02/Artificial-Intelligence-and-Big-Data.webp", alt: "Big Data", title: "Big Data" },
//     { src: "https://www.cloudblue.com/wp-content/uploads/2024/06/what-is-the-internet-of-things-iot.png", alt: "Internet of Things", title: "Internet of Things", shortTitle: "IoT" },
//     { src: "https://www.humanresourcesmba.net/wp-content/uploads/2023/03/talent-management.jpg", alt: "Talent Management", title: "Talent Management", shortTitle: "TM" },
//   ];

//   return (
//     <>

      
//       <div className="flex flex-col lg:flex-row w-full p-4 lg:space-x-6 lg:space-y-0 space-y-6 items-start">
    
//         <div className="lg:w-screen h-full">
     
//           <div className="flex w-full p-1 space-x-2 items-start">
          
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
                 
//                     <span className="md:hidden">{image.shortTitle}</span>
//                     <span className="hidden md:block">{image.title}</span>
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>

    
//           <div className="flex w-full p-1 space-x-2 items-start">
  
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
               
//                     <span className="md:hidden">{image.shortTitle}</span>
//                     <span className="hidden md:block">{image.title}</span>
//                   </button>
//                 </div>
//               ))}
//             </div>

       
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

      
//         <div className="lg:mt-4 lg:w-2/5 flex-col justify-center items-center">
//         <span className="lg:mt-20 text-2xl font-bold bg-clip-text text-[#4702a2] md:text-3xl lg:text-4xl">
 
    
//      EXPLORE TOPICS THAT MATTER TO YOU

//   </span>
//           <p className="flex m-2 my-3 text-lg md:text-2xl lg:text-lg text-left leading-relaxed tracking-wide">
//           Stay Ahead with Key B2B Topics.!
//           </p>
//           <button
//             className="lg:w-1/4 w-auto py-2 bg-[#4702a2] text-white rounded-2xl p-4"
//           onClick={()=>navigate("/whitepapers")}
//           >
//             View More
//           </button>
        

//         </div>

//       </div>
//     </>
//   );
// };

// export default Curated;
