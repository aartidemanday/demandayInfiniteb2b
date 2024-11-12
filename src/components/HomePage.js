

import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import ImgSlider from './ImgSlider';
import StateSection from './StackSection';
import CircularDivs from './CircularDivs';
import TrustedVender from './TrustedVender';
import Curated from './Curated';
import FeaturedSolutionf from './FeaturedSolutionf';
// import StateSection from './StateSection';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="relative flex h-screen">
        <div className="w-full h-full flex justify-center items-center">
          <video 
            src={require('../assets/AiV5.mp4')}
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          />
        </div>
        {/* Overlay for the title and buttons */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
          <h1 className="text-white text-6xl font-extrabold mb-4">SOLUTIONS FOR EVERY BUSINESS CHALLENGE</h1>
          <div className="flex space-x-4">
            <button
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-400 transition duration-300" // Lighter shade on hover
              // onClick={() => navigate('/get-started')} 
              onClick={() => navigate('/login')}
            >
              GET STARTED
            </button>
            <button
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-400 transition duration-300" // Lighter shade on hover
              onClick={() => navigate('/learn-more')} 
            >
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
   
      <div className="text-black text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 lg:mb-8 mx-4 md:mx-10 text-center m-6 md:m-14">


  END-TO-END B2B SOLUTIONS SERVING <br/>  all INDUSTRIES, VENDORS, AND <br /> PRODUCT NEEDS.
</div>
      {/* <ImgSlider/> */}
      <FeaturedSolutionf/>
      <StateSection />
      <CircularDivs/>
      <TrustedVender/>
      <Curated/>
    </>
  );
};

export default HomePage;
