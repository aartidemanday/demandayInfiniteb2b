
import React from 'react';
import Img1 from '../assets/img/AI_img/Big Data.png';
import Img2 from '../assets/img/AI_img/Internet of Things (IoT).png';
import Img3 from '../assets/img/AI_img/Talent Management.png';
import { useNavigate } from 'react-router-dom';


const Curated = () => {
  const navigate = useNavigate()
  const images = [
    { src: Img1, alt: "Big Data", title: "Big Data" },
    { src: Img2, alt: "Internet of Things", title: "Internet of Things", shortTitle: "IoT" },
    { src: Img3, alt: "Talent Management", title: "Talent Management", shortTitle: "TM" },
  ];

  return (
    <>

      
      <div className="flex flex-col lg:flex-row w-full p-4 lg:space-x-6 lg:space-y-0 space-y-6 items-start">
        {/* Images Section */}
        <div className="lg:w-3/5">
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
        <div className="m-4 lg:mt-4 lg:w-2/5 flex-col justify-center items-center">
        <span className="lg:mt-20 text-2xl font-bold bg-clip-text text-[#4702a2] md:text-3xl lg:text-4xl">
    CURATED WHITEPAPERS
  </span>
          <p className="flex m-4 justify-center items-center text-lg md:text-2xl lg:text-lg text-left leading-relaxed tracking-wide mx-2">

            Save time with our expertly curated collection of proven solutions to industry challenges, designed to streamline your workflow, enhance productivity, and accelerate your success. Unlock the power of innovation with resources that are tailored to solve your unique problems and drive sustainable growth.
          </p>
          <button
            className="lg:w-1/4 w-auto py-2 bg-[#4702a2] text-white rounded-2xl p-4"
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
