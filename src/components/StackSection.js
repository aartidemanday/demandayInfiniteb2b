import React from 'react';
import { Archive, User, Layers, Tag } from 'react-feather';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const StateSection = () => {
  const stats = [
    { label: 'B2B ASSETS', value: 367433, icon: <Archive /> },
    { label: 'VENDORS', value: 24748, icon: <User /> },
    { label: 'INDUSTRIES', value: 400, icon: <Layers /> },
    { label: 'VENDOR OFFERINGS', value: 600, icon: <Tag /> },
  ];

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} label={stat.label} value={stat.value} icon={stat.icon} />
        ))}
      </div>
    </div>
  );
};

const StatCard = ({ label, value, icon }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: [0, 1],
      scale: [0.5, 1],
      transition: { duration: 1, ease: 'easeInOut' },
    });
  }, [controls]);

  return (
    <motion.div
      className="flex flex-col items-center justify-center p-6 box-shadow-gray shadow-lg rounded-lg text-center border border-gray-100 cursor-pointer"
      animate={controls}
      whileHover={{
        scale: 1.05,
        boxShadow: '0px 0px 20px rgba(128, 0, 128, 0.7)',
      }}
    >
      <div className="text-center">
        <div className="text-purple-600 mb-4 flex items-center justify-center">
          {React.cloneElement(icon, { size: 48 })}
        </div>
        <motion.p
          className="text-3xl font-semibold text-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <AnimatedNumber value={value} />
        </motion.p>
        <p className="text-lg font-medium text-gray-800">{label}</p>
      </div>
    </motion.div>
  );
};

const AnimatedNumber = ({ value }) => {
  const controls = useAnimation();

  return (
    <motion.span
      initial={{ count: 0 }}
      animate={{ count: value }}
      transition={{ duration: 2, ease: 'easeOut' }}
      style={{ display: 'inline-block' }}
    >
      {Math.floor(value)}
    </motion.span>
  );
};

export default StateSection;


// import React from 'react';
// import { Archive, User, Layers, Tag } from 'react-feather';
// import { motion, useAnimation } from 'framer-motion';
// import { useEffect } from 'react';

// const StateSection = () => {
//   const stats = [
//     { label: 'B2B ASSETS', value: 367433, icon: <Archive /> },
//     { label: 'VENDORS', value: 24748, icon: <User /> },
//     { label: 'INDUSTRIES', value: 400, icon: <Layers /> },
//     { label: 'VENDOR OFFERINGS', value: 600, icon: <Tag /> },
//   ];

//   return (
//     <div className="p-6">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {stats.map((stat, index) => (
//           <StatCard key={index} label={stat.label} value={stat.value} icon={stat.icon} />
//         ))}
//       </div>
//     </div>
//   );
// };

// const StatCard = ({ label, value, icon }) => {
//   const controls = useAnimation();

//   useEffect(() => {
//     controls.start({
//       opacity: [0, 1],
//       scale: [0.5, 1],
//       transition: { duration: 1, ease: 'easeInOut' },
//     });
//   }, [controls]);

//   return (
//     <motion.div
//       className="flex flex-col items-center justify-center p-6 box-shadow-gray shadow-lg rounded-lg text-center border border-gray-100
//                  transition duration-200 ease-in-out hover:shadow-[0px_0px_20px_rgba(128,0,128,0.7)] transform hover:scale-105 cursor-pointer"
//       animate={controls}
//     >
//       <div className="text-center">
//         <div className="text-purple-600 mb-4 flex items-center justify-center">
//           {React.cloneElement(icon, { size: 48 })}
//         </div>
//         <motion.p
//           className="text-3xl font-semibold text-gray-800"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.8 }}
//         >
//           <AnimatedNumber value={value} />
//         </motion.p>
//         <p className="text-lg font-medium text-gray-800">{label}</p>
//       </div>
//     </motion.div>
//   );
// };

// const AnimatedNumber = ({ value }) => {
//   const controls = useAnimation();

//   return (
//     <motion.span
//       initial={{ count: 0 }}
//       animate={{ count: value }}
//       transition={{ duration: 2, ease: 'easeOut' }}
//       style={{ display: 'inline-block' }}
//     >
//       {Math.floor(value)}
//     </motion.span>
//   );
// };

// export default StateSection;


// // import React from 'react';
// // import { Archive, User, Layers, Tag } from 'react-feather';

// // const StateSection = () => {
// //   const stats = [
// //     { label: 'B2B ASSETS', value: '367,433', icon: <Archive /> },
// //     { label: 'VENDORS', value: '24,748', icon: <User /> },
// //     { label: 'INDUSTRIES', value: '400 +', icon: <Layers /> },
// //     { label: 'VENDOR OFFERINGS', value: '600 +', icon: <Tag /> },
// //   ];

// //   return (
// //     <div className="p-6">
// //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
// //         {stats.map((stat, index) => (
// //           <StatCard key={index} label={stat.label} value={stat.value} icon={stat.icon} />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // const StatCard = ({ label, value, icon }) => {
// //   return (
// //     <div
// //       className="flex flex-col items-center justify-center p-6 bg-gradient-to-r from-purple-300 to-teal-300 shadow-lg rounded-lg text-center border border-gray-100
// //                  transition duration-200 ease-in-out hover:shadow-[0px_0px_20px_rgba(128,0,128,0.7)] transform hover:scale-105 cursor-pointer"
// //     >
// //       <div className="text-center">
// //         <div className="text-purple-600 mb-4 flex items-center justify-center">
// //           {React.cloneElement(icon, { size: 48 }) /* Centered, larger icon */}
// //         </div>
// //         <p className="text-3xl font-semibold text-gray-800">{value}</p>
// //         <p className="text-lg font-medium text-gray-800">{label}</p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default StateSection;

// // // import React from 'react';
// // // import { animated, useSpring } from '@react-spring/web';

// // // const StateSection = () => {
// // //     const stats = [
// // //         { label: 'B2B ASSETS', value: '367,433' },
// // //         { label: 'VENDORS', value: '24,748' },
// // //         { label: 'INDUSTRIES', value: '400 +' },
// // //         { label: 'VENDOR OFFERINGS', value: '600 +' },
// // //       ];
      

// // //   return (
// // //     <div className="p-6">
// // //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
// // //         {stats.map((stat, index) => (
// // //           <StatCard key={index} label={stat.label} value={stat.value} />
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // const StatCard = ({ label, value }) => {
// // //   const [styles, api] = useSpring(() => ({
// // //     rotateZ: 0,
// // //     config: { tension: 500, friction: 8 },
// // //   }));

// // //   const handleMouseOver = () => {
// // //     api.start({
// // //       to: [{ rotateZ: 360 }, { rotateZ: 0 }],
// // //     });
// // //   };

// // //   return (
// // //     <animated.div
// // //       className="flex-col items-center justify-center p-6 bg-gradient-to-r from-purple-300 to-teal-300 shadow-lg rounded-lg text-center border border-gray-100
// // //                  transition duration-200 ease-in-out hover:shadow-[0px_0px_20px_rgba(128,0,128,0.7)] transform hover:scale-105"
// // //     //   onMouseOver={handleMouseOver}
// // //       style={{
// // //         ...styles,
// // //         cursor: 'pointer',
// // //       }}
// // //     >
// // //       <div className="text-center">
// // //         <p className="text-3xl font-semibold text-gray-800">{value}</p>
// // //         <p className="text-lg font-medium text-gray-800">{label}</p>
// // //       </div>
// // //     </animated.div>
// // //   );
// // // };

// // // export default StateSection;

