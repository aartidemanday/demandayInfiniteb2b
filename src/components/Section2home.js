import React from 'react'
import FeaturedSolutionf from './FeaturedSolutionf'

const Section2home = () => {
  return (
    <div className="relative bg-cover bg-center" style={{ backgroundImage: 'url(../assets/Infinite-b2b-1-scaled.png)' }}>
      <div className="absolute inset-0 opacity-40"></div> 
      <div className="relative z-10 text-center p-4 md:p-10">
        <h1 className="mt-4 text-[#4702a2] text-3xl md:text-5xl lg:text-4xl font-bold mx-2">
          POWERING YOUR BUSINESS WITH IN-DEPTH B2B RESOURCES
        </h1>
        <p className="flex justify-center items-center text-lg md:text-2xl lg:text-lg text-left leading-relaxed tracking-wide mx-2">
          Leverage our extensive platform to access the best whitepapers for your needs
        </p>
        <div className='flex w-full'>
          <FeaturedSolutionf />
        </div>
      </div>
    </div>
  )
}

export default Section2home




// import React from 'react'
// import FeaturedSolutionf from './FeaturedSolutionf'

// const Section2home = () => {
//   return (
//     <div>
       
// <div>
// <h1 className="mt-4 text-[#4702a2] text-3xl md:text-5xl lg:text-4xl font-bold mx-2 text-center">
 
//   POWERING YOUR BUSINESS WITH IN-DEPTH BB2 RESOURCES

// </h1>
// <p className="flex justify-center items-center text-lg md:text-2xl lg:text-lg text-left leading-relaxed tracking-wide mx-2">

// Leverage our extensive platform to access the best whitepapers for your needs. 
// </p><div className='flex w-full'>

//  <FeaturedSolutionf/>

       
//         </div>
// </div>
//     </div>
//   )
// }

// export default Section2home
