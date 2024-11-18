import React, { useState, useEffect } from 'react';
import { Archive, User, Layers, Tag } from 'react-feather';
import { motion, useAnimation } from 'framer-motion';

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
      className="flex flex-col items-center justify-center p-6 rounded-lg text-center border border-gray-100 cursor-pointer"
      style={{
        boxShadow: '0px 4px 15px rgba(128, 0, 128, 0.5)', // Default purple shadow
      }}
      animate={controls}
      whileHover={{
        scale: 1.05,
        boxShadow: '0px 0px 25px rgba(128, 0, 128, 0.7)', // Intensified purple shadow on hover
      }}
    >
      <div className="text-center">
        <div className="text-teal-600 mb-4 flex items-center justify-center">
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
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let currentValue = 0;
    const increment = Math.ceil(value / 100); // Adjust speed with this value
    const interval = setInterval(() => {
      currentValue += increment;
      if (currentValue >= value) {
        currentValue = value;
        clearInterval(interval);
      }
      setDisplayValue(currentValue);
    }, 20); // Controls the animation speed
    return () => clearInterval(interval);
  }, [value]);

  return (
    <motion.span
      key={displayValue} // Triggers re-animation on each count update
      initial={{ y: -20, opacity: 0 }} // Start above and invisible
      animate={{ y: 0, opacity: 1 }} // Animate downwards
      exit={{ y: 20, opacity: 0 }} // Optionally, animate out to below
      transition={{ duration: 0.3 }}
      style={{ display: 'inline-block' }}
    >
      {displayValue.toLocaleString()}
    </motion.span>
  );
};

export default StateSection;

// import React, { useState, useEffect } from 'react';
// import { Archive, User, Layers, Tag } from 'react-feather';
// import { motion, useAnimation } from 'framer-motion';

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
//       className="flex flex-col items-center justify-center p-6 shadow-lg rounded-lg text-center border border-gray-100 cursor-pointer"
//       style={{ boxShadow: '0px 4px 8px rgba(128, 0, 128, 0.3)' }} // Purple shadow
//       animate={controls}
//       whileHover={{
//         scale: 1.05,
//         boxShadow: '0px 0px 20px rgba(128, 0, 128, 0.7)', // Purple shadow on hover
//       }}
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
//   const [displayValue, setDisplayValue] = useState(0);

//   useEffect(() => {
//     let currentValue = 0;
//     const increment = Math.ceil(value / 100); // Adjust speed with this value
//     const interval = setInterval(() => {
//       currentValue += increment;
//       if (currentValue >= value) {
//         currentValue = value;
//         clearInterval(interval);
//       }
//       setDisplayValue(currentValue);
//     }, 20); // Controls the animation speed
//     return () => clearInterval(interval);
//   }, [value]);

//   return (
//     <motion.span
//       key={displayValue} // Triggers re-animation on each count update
//       initial={{ y: -20, opacity: 0 }} // Start above and invisible
//       animate={{ y: 0, opacity: 1 }} // Animate downwards
//       exit={{ y: 20, opacity: 0 }} // Optionally, animate out to below
//       transition={{ duration: 0.3 }}
//       style={{ display: 'inline-block' }}
//     >
//       {displayValue.toLocaleString()}
//     </motion.span>
//   );
// };

// export default StateSection;



// // import React, { useState, useEffect } from 'react';
// // import { Archive, User, Layers, Tag } from 'react-feather';
// // import { motion, useAnimation } from 'framer-motion';

// // const StateSection = () => {
// //   const stats = [
// //     { label: 'B2B ASSETS', value: 367433, icon: <Archive /> },
// //     { label: 'VENDORS', value: 24748, icon: <User /> },
// //     { label: 'INDUSTRIES', value: 400, icon: <Layers /> },
// //     { label: 'VENDOR OFFERINGS', value: 600, icon: <Tag /> },
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
// //   const controls = useAnimation();

// //   useEffect(() => {
// //     controls.start({
// //       opacity: [0, 1],
// //       scale: [0.5, 1],
// //       transition: { duration: 1, ease: 'easeInOut' },
// //     });
// //   }, [controls]);

// //   return (
// //     <motion.div
// //       className="flex flex-col items-center justify-center p-6 shadow-lg rounded-lg text-center border border-gray-100 cursor-pointer"
// //       style={{ boxShadow: '0px 4px 8px rgba(128, 0, 128, 0.3)' }} // Purple shadow
// //       animate={controls}
// //       whileHover={{
// //         scale: 1.05,
// //         boxShadow: '0px 0px 20px rgba(128, 0, 128, 0.7)', // Purple shadow on hover
// //       }}
// //     >
// //       <div className="text-center">
// //         <div className="text-purple-600 mb-4 flex items-center justify-center">
// //           {React.cloneElement(icon, { size: 48 })}
// //         </div>
// //         <motion.p
// //           className="text-3xl font-semibold text-gray-800"
// //           initial={{ opacity: 0 }}
// //           animate={{ opacity: 1 }}
// //           transition={{ duration: 0.8 }}
// //         >
// //           <AnimatedNumber value={value} />
// //         </motion.p>
// //         <p className="text-lg font-medium text-gray-800">{label}</p>
// //       </div>
// //     </motion.div>
// //   );
// // };

// // const AnimatedNumber = ({ value }) => {
// //   const [displayValue, setDisplayValue] = useState(0);

// //   useEffect(() => {
// //     let currentValue = 0;
// //     const increment = Math.ceil(value / 100); // Adjust speed with this value
// //     const interval = setInterval(() => {
// //       currentValue += increment;
// //       if (currentValue >= value) {
// //         currentValue = value;
// //         clearInterval(interval);
// //       }
// //       setDisplayValue(currentValue);
// //     }, 20); // Controls the animation speed
// //     return () => clearInterval(interval);
// //   }, [value]);

// //   return (
// //     <motion.span
// //       key={displayValue} // Triggers re-animation on each count update
// //       initial={{ y: -20, opacity: 0 }} // Start above and invisible
// //       animate={{ y: 0, opacity: 1 }} // Animate downwards
// //       exit={{ y: 20, opacity: 0 }} // Optionally, animate out to below
// //       transition={{ duration: 0.3 }}
// //       style={{ display: 'inline-block' }}
// //     >
// //       {displayValue.toLocaleString()}
// //     </motion.span>
// //   );
// // };

// // export default StateSection;


// // // import React, { useState, useEffect } from 'react';
// // // import { Archive, User, Layers, Tag } from 'react-feather';
// // // import { motion, useAnimation } from 'framer-motion';

// // // const StateSection = () => {
// // //   const stats = [
// // //     { label: 'B2B ASSETS', value: 367433, icon: <Archive /> },
// // //     { label: 'VENDORS', value: 24748, icon: <User /> },
// // //     { label: 'INDUSTRIES', value: 400, icon: <Layers /> },
// // //     { label: 'VENDOR OFFERINGS', value: 600, icon: <Tag /> },
// // //   ];

// // //   return (
// // //     <div className="p-6">
// // //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
// // //         {stats.map((stat, index) => (
// // //           <StatCard key={index} label={stat.label} value={stat.value} icon={stat.icon} />
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // const StatCard = ({ label, value, icon }) => {
// // //   const controls = useAnimation();

// // //   useEffect(() => {
// // //     controls.start({
// // //       opacity: [0, 1],
// // //       scale: [0.5, 1],
// // //       transition: { duration: 1, ease: 'easeInOut' },
// // //     });
// // //   }, [controls]);

// // //   return (
// // //     <motion.div
// // //       className="flex flex-col items-center justify-center p-6 box-shadow-gray shadow-lg rounded-lg text-center border border-gray-100 cursor-pointer"
// // //       animate={controls}
// // //       whileHover={{
// // //         scale: 1.05,
// // //         boxShadow: '0px 0px 20px rgba(128, 0, 128, 0.7)',
// // //       }}
// // //     >
// // //       <div className="text-center">
// // //         <div className="text-purple-600 mb-4 flex items-center justify-center">
// // //           {React.cloneElement(icon, { size: 48 })}
// // //         </div>
// // //         <motion.p
// // //           className="text-3xl font-semibold text-gray-800"
// // //           initial={{ opacity: 0 }}
// // //           animate={{ opacity: 1 }}
// // //           transition={{ duration: 0.8 }}
// // //         >
// // //           <AnimatedNumber value={value} />
// // //         </motion.p>
// // //         <p className="text-lg font-medium text-gray-800">{label}</p>
// // //       </div>
// // //     </motion.div>
// // //   );
// // // };

// // // const AnimatedNumber = ({ value }) => {
// // //   const [displayValue, setDisplayValue] = useState(0);

// // //   useEffect(() => {
// // //     let currentValue = 0;
// // //     const increment = Math.ceil(value / 100); // Adjust speed with this value
// // //     const interval = setInterval(() => {
// // //       currentValue += increment;
// // //       if (currentValue >= value) {
// // //         currentValue = value;
// // //         clearInterval(interval);
// // //       }
// // //       setDisplayValue(currentValue);
// // //     }, 20); // Controls the animation speed
// // //     return () => clearInterval(interval);
// // //   }, [value]);

// // //   return (
// // //     <motion.span
// // //       key={displayValue} // Triggers re-animation on each count update
// // //       initial={{ y: -20, opacity: 0 }} // Start above and invisible
// // //       animate={{ y: 0, opacity: 1 }} // Animate downwards
// // //       exit={{ y: 20, opacity: 0 }} // Optionally, animate out to below
// // //       transition={{ duration: 0.3 }}
// // //       style={{ display: 'inline-block' }}
// // //     >
// // //       {displayValue.toLocaleString()}
// // //     </motion.span>
// // //   );
// // // };

// // // export default StateSection;


