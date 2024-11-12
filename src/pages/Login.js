

import React, { useState } from 'react';
import {  Mail, Lock, User, Phone, Briefcase, Home, Link } from 'react-feather';

const LoginSignin = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [countryCode, setCountryCode] = useState('+1'); 
  const toggleSignUp = () => setIsSignUp(!isSignUp);
  const handleCountryCodeChange = (e) => {
    setCountryCode(e.target.value);
  };
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="relative w-full max-w-4xl mb-5 h-[500px] flex overflow-hidden bg-white rounded-lg shadow-lg transition-all duration-1000">
        <div
          className={`w-1/2 h-full flex flex-col justify-center items-center p-8 transform transition-all duration-1000 ease-in-out ${
            isSignUp ? '-translate-x-full opacity-0 scale-95' : 'translate-x-0 opacity-100 scale-100'
          }`}
        >
   

<div className="absolute top-8 justify-center animate-bounce">
  <img 
    src={require('../assets/Infinite-b2b-1-scaled.png')} 
    alt="Logo" 
    className="h-8 w-auto"
  />
</div>


          <h2 className="text-2xl font-bold mb-6">Sign In</h2>
      
          <p className="mb-4 text-gray-600">or use your account</p>
          <div className="w-full mb-4 p-2 border rounded flex items-center">
            <Mail size={20} className="mr-2 text-gray-600" />
            <input type="email" placeholder="Email" className="w-full outline-none" />
          </div>
          <div className="w-full mb-4 p-2 border rounded flex items-center">
            <Lock size={20} className="mr-2 text-gray-600" />
            <input type="password" placeholder="Password" className="w-full outline-none" />
          
          </div>
          <button className="text-sm text-blue-600 mb-4">Forgot your password?</button>
          <button
            className="w-full py-2 bg-gradient-to-r from-teal-400 to-purple-500 text-white rounded-full"
            onClick={toggleSignUp}
          >
            Sign In
          </button>
        </div>

        {/* Right Side (Welcome) */}
        <div
          className={`w-1/2 h-full flex flex-col justify-center items-center p-8 bg-gradient-to-r from-teal-400 to-purple-500 text-white transform transition-all duration-1000 ease-in-out ${
            isSignUp ? '-translate-x-full opacity-0 scale-95' : 'translate-x-0 opacity-100 scale-100'
          }`}
        >
          <h2 className="text-2xl font-bold mb-6">Hello, Friend</h2>
          <p className="mb-6">Enter your personal details and start your journey with us</p>
          <button
            className="w-full py-2 bg-white text-blue-500 font-semibold rounded-full"
            onClick={toggleSignUp}
          >
            Sign Up
          </button>
        </div>

        {/* Sign Up and Welcome Divs............ */}
        <div
          className={`absolute inset-0 w-full h-full flex transform transition-all duration-1000 ease-in-out ${
            isSignUp ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
      
      <div className="w-full sm:w-1/2 h-full flex flex-col justify-center items-center p-4 sm:p-8 bg-gradient-to-r from-teal-400 to-purple-500 text-white transform transition-all duration-1000 ease-in-out">
  <h2 className="text-xl sm:text-2xl font-bold mb-4">Welcome Back!</h2>
  <p className="mb-4 text-sm sm:text-base">To stay connected with us, please login with your personal info</p>
  <button
    className="w-full py-2 bg-white text-blue-500 font-semibold rounded-full"
    onClick={toggleSignUp}
  >
    Sign In
  </button>
</div>

<div className="w-full sm:w-1/2 h-full flex flex-col justify-center items-center p-4 sm:p-8 transform transition-all duration-1000 ease-in-out">
  <h2 className="text-xl sm:text-2xl font-bold mb-2 mt-3">Create Account</h2>
  <div className='flex flex-col sm:flex-row gap-2 w-full'>
    <div className="w-full sm:w-1/2 mb-1 px-2 border rounded flex items-center">
      <User size={18} className="mr-2 text-gray-600" />
      <input type="text" placeholder="First Name" className="w-full outline-none" />
    </div>
    <div className="w-full sm:w-1/2 mb-1 p-2 border rounded flex items-center">
      <User size={18} className="mr-2 text-gray-600" />
      <input type="text" placeholder="Last Name" className="w-full outline-none" />
    </div>
  </div>
  
  <div className="w-full mb-2 mt-1 border rounded flex items-center">
    <select
      value={countryCode}
      onChange={handleCountryCodeChange}
      className="w-1/4 p-2 border-r-2 border-gray-300 text-gray-600 bg-white rounded-l"
    >
      <option value="+1">+1 (US)</option>
      <option value="+44">+44 (UK)</option>
      <option value="+91">+91 (India)</option>
      <option value="+61">+61 (Australia)</option>
      <option value="+33">+33 (France)</option>
    </select>
    <div className="w-2/3 flex items-center ml-2">
      <Phone size={18} className="mr-2 text-gray-600" />
      <input
        type="text"
        value=""
        onChange=""
        placeholder="(201) 555 5555"
        className="w-full outline-none p-1"
      />
    </div>
  </div>

  <div className="w-full mb-2 p-2 border rounded flex items-center">
    <Home size={18} className="mr-2 text-gray-600" />
    <input type="email" placeholder="Company Name" className="w-full outline-none" />
  </div>

  <div className="w-full mb-2 p-2 border rounded flex items-center">
    <Briefcase size={18} className="mr-2 text-gray-600" />
    <input type="email" placeholder="Job Title" className="w-full outline-none" />
  </div>

  <div className="w-full mb-2 p-2 border rounded flex items-center">
    <Mail size={18} className="mr-2 text-gray-600" />
    <input type="email" placeholder="Email" className="w-full outline-none" />
  </div>

  <div className="w-full mb-2 p-2 border rounded flex items-center">
    <Lock size={18} className="mr-2 text-gray-600" />
    <input type="password" placeholder="Password" className="w-full outline-none" />
  </div>
  <div className="space-y-2 text-sm font-poppins text-gray-600">
  <div className="flex items-start">
    <input type="checkbox" id="ageCheckbox" className="mr-2 mt-1" />
    <label htmlFor="ageCheckbox" className="leading-tight">
      By clicking this checkbox you confirm that you are 18 years of age or older.
    </label>
  </div>

  <div className="flex">
    <input type="checkbox" id="termsCheckbox" className="mr-2 mt-1" />
    <label htmlFor="termsCheckbox" className="leading-tight">
      By clicking this checkbox you agree to the{' '}
      <p className="text-blue-600 underline">Terms of Service & Privacy Policy.</p>
     
    </label>

  </div>
</div>

  <button
    className="w-full py-2 mb-4 bg-gradient-to-r from-teal-400 to-purple-500 text-white rounded-full"
    onClick={toggleSignUp}
  >
    Sign Up
  </button>
  
</div>

        </div>
      </div>
    </div>
  );
};

export default LoginSignin;


// import React, { useState } from 'react';
// import { Facebook, GitHub, Linkedin, Mail, Lock, User } from 'react-feather';

// const LoginSignin = () => {
//   const [isSignUp, setIsSignUp] = useState(false);

//   const toggleSignUp = () => setIsSignUp(!isSignUp);

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100 relative">
//       {/* Logo at the top left */}
//       <div className="absolute top-4 left-4">
//         <img src={require('../assets/Infinite-b2b-1-scaled.png')} alt="Logo" className="h-12 w-auto" />
//       </div>

//       <div className="relative w-full max-w-4xl h-[500px] flex overflow-hidden bg-white rounded-lg shadow-lg transition-all duration-1000">
//         {/* Left Side (Sign In) */}
//         <div
//           className={`w-1/2 h-full flex flex-col justify-center items-center p-8 transform transition-all duration-1000 ease-in-out ${
//             isSignUp ? '-translate-x-full opacity-0 scale-95' : 'translate-x-0 opacity-100 scale-100'
//           }`}
//         >
//           <h2 className="text-2xl font-bold mb-6">Sign In</h2>
//           {/* <div className="flex space-x-4 mb-6">
//             <Facebook size={24} className="text-gray-600 cursor-pointer" />
//             <GitHub size={24} className="text-gray-600 cursor-pointer" />
//             <Linkedin size={24} className="text-gray-600 cursor-pointer" />
//           </div> */}
//           <p className="mb-4 text-gray-600">or use your account</p>
//           <div className="w-full mb-4 p-2 border rounded flex items-center">
//             <Mail size={20} className="mr-2 text-gray-600" />
//             <input type="email" placeholder="Email" className="w-full p-1 outline-none" />
//           </div>
//           <div className="w-full mb-4 p-2 border rounded flex items-center">
//             <Lock size={20} className="mr-2 text-gray-600" />
//             <input type="password" placeholder="Password" className="w-full p-1 outline-none" />
//           </div>
//           <button className="text-sm text-blue-600 mb-4">Forgot your password?</button>
//           <button
//             className="w-full py-2 bg-gradient-to-r from-teal-400 to-purple-500 text-white rounded-full"
//             onClick={toggleSignUp}
//           >
//             Sign In
//           </button>
//         </div>

//         {/* Right Side (Welcome) */}
//         <div
//           className={`w-1/2 h-full flex flex-col justify-center items-center p-8 bg-gradient-to-r from-teal-400 to-purple-500 text-white transform transition-all duration-1000 ease-in-out ${
//             isSignUp ? '-translate-x-full opacity-0 scale-95' : 'translate-x-0 opacity-100 scale-100'
//           }`}
//         >
//           <h2 className="text-2xl font-bold mb-6">Hello, Friend</h2>
//           <p className="mb-6">Enter your personal details and start your journey with us</p>
//           <button
//             className="w-full py-2 bg-white text-blue-500 font-semibold rounded-full"
//             onClick={toggleSignUp}
//           >
//             Sign Up
//           </button>
//         </div>

//         {/* Sign Up and Welcome Divs */}
//         <div
//           className={`absolute inset-0 w-full h-full flex transform transition-all duration-1000 ease-in-out ${
//             isSignUp ? 'translate-x-0' : '-translate-x-full'
//           }`}
//         >
//           {/* Welcome Div */}
//           <div className="w-1/2 h-full flex flex-col justify-center items-center p-8 bg-gradient-to-r from-teal-400 to-purple-500 text-white transform transition-all duration-1000 ease-in-out">
//             <h2 className="text-2xl font-bold mb-6">Welcome Back!</h2>
//             <p className="mb-6">To stay connected with us, please login with your personal info</p>
//             <button
//               className="w-full py-2 bg-white text-blue-500 font-semibold rounded-full"
//               onClick={toggleSignUp}
//             >
//               Sign In
//             </button>
//           </div>

//           {/* Create Account Div */}
//           <div className="w-1/2 h-full flex flex-col justify-center items-center p-8 transform transition-all duration-1000 ease-in-out">
//             <h2 className="text-2xl font-bold mb-6">Create Account</h2>
//             {/* <div className="flex space-x-4 mb-6">
//               <Facebook size={24} className="text-gray-600 cursor-pointer" />
//               <GitHub size={24} className="text-gray-600 cursor-pointer" />
//               <Linkedin size={24} className="text-gray-600 cursor-pointer" />
//             </div> */}
//             <div className="w-full mb-4 p-2 border rounded flex items-center">
//               <User size={20} className="mr-2 text-gray-600" />
//               <input type="text" placeholder="Name" className="w-full p-1 outline-none" />
//             </div>
//             <div className="w-full mb-4 p-2 border rounded flex items-center">
//               <Mail size={20} className="mr-2 text-gray-600" />
//               <input type="email" placeholder="Email" className="w-full p-1 outline-none" />
//             </div>
//             <div className="w-full mb-4 p-2 border rounded flex items-center">
//               <Lock size={20} className="mr-2 text-gray-600" />
//               <input type="password" placeholder="Password" className="w-full p-1 outline-none" />
//             </div>
//             <button
//               className="w-full py-2 bg-gradient-to-r from-teal-400 to-purple-500 text-white rounded-full"
//               onClick={toggleSignUp}
//             >
//               Sign Up
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginSignin;
