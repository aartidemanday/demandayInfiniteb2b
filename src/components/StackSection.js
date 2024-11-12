import React from 'react';
import { animated, useSpring } from '@react-spring/web';

const StateSection = () => {
    const stats = [
        { label: 'B2B ASSETS', value: '367,433' },
        { label: 'VENDORS', value: '24,748' },
        { label: 'INDUSTRIES', value: '400 +' },
        { label: 'VENDOR OFFERINGS', value: '600 +' },
      ];
      

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} label={stat.label} value={stat.value} />
        ))}
      </div>
    </div>
  );
};

const StatCard = ({ label, value }) => {
  const [styles, api] = useSpring(() => ({
    rotateZ: 0,
    config: { tension: 500, friction: 8 },
  }));

  const handleMouseOver = () => {
    api.start({
      to: [{ rotateZ: 360 }, { rotateZ: 0 }],
    });
  };

  return (
    <animated.div
      className="flex-col items-center justify-center p-6 bg-gradient-to-r from-purple-300 to-teal-300 shadow-lg rounded-lg text-center border border-gray-100
                 transition duration-200 ease-in-out hover:shadow-[0px_0px_20px_rgba(128,0,128,0.7)] transform hover:scale-105"
    //   onMouseOver={handleMouseOver}
      style={{
        ...styles,
        cursor: 'pointer',
      }}
    >
      <div className="text-center">
        <p className="text-3xl font-semibold text-gray-800">{value}</p>
        <p className="text-lg font-medium text-gray-800">{label}</p>
      </div>
    </animated.div>
  );
};

export default StateSection;


// import React from 'react';

// const StateSection = () => {
//   const stats = [
//     { label: 'B2B Assets', value: '367,433' },
//     { label: 'Vendors', value: '24,748' },
//     { label: 'Industries', value: '400 +' },
//     { label: 'Vendor Offerings', value: '600 +' },
//   ];

//   return (
//     <div className="p-6">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {stats.map((stat, index) => (
//           <div
//             key={index}
//             className="flex flex-col items-center justify-center p-6 bg-white shadow-lg rounded-lg text-center border border-gray-100
//                        hover:shadow-[0px_0px_20px_rgba(128,0,128,0.5)] transition-shadow duration-300 ease-in-out"
//           >
//             <p className="text-3xl font-semibold text-gray-800">{stat.value}</p>
//             <p className="text-lg font-medium text-gray-600">{stat.label}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default StateSection;
