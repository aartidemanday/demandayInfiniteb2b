import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Bell, Menu, ChevronDown, User } from 'react-feather';
import { useSelector } from 'react-redux';

const Header = () => {
    const [showInput, setShowInput] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    const token = useSelector(state=>state.user.token)
    const username = useSelector(state=>state.user.username)
    // const name = useSelector(state=>state.user.name)
// console.log("user..........", name)
    const handleClickOutside = (e) => {
        if (!e.target.closest('.menu-container') && !e.target.closest('.mr-1')) {
            setMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    return (
        <header className="bg-gradient-to-r from-[#4702a2] to-teal-500 px-4 py-3">
            <div className="flex justify-between items-center">
                
                {/* Left Side: Logo and Navigation Links */}
                <div className="flex items-center space-x-8">
                    <img 
                        src={require('../assets/Infinite-b2b-1-scaled.png')} 
                        alt="Logo" 
                        className="h-12 w-auto" 
                    />
                    <nav className="hidden lg:flex space-x-6">
                        <button 
                            className="text-white hover:underline font-poppins"
                            onClick={() => navigate('/home')}
                        >
                            HOME
                        </button>
                        <button 
                            className="text-white hover:underline font-poppins"
                            onClick={() => navigate('/whitepapers')}
                        >
                            WHITEPAPERS
                        </button>
                        <button 
                            className="text-white hover:underline font-poppins"
                            onClick={() => navigate('/newsletters')}
                        >
                            NEWSLETTERS
                        </button>
                    </nav>
                </div>

                {/* Right Side: Search, Bell Icon, Profile, and Signup */}
                <div className="flex items-center space-x-4">
                    <div className="flex items-center text-white">
                        {showInput && (
                            <input 
                                type="text" 
                                placeholder="Search..." 
                                className="bg-transparent border-b border-white text-white text-sm outline-none mr-2"
                                autoFocus
                            />
                        )}
                        <div onClick={() => setShowInput(!showInput)} className="cursor-pointer">
                            <Search className="h-5 w-5" />
                        </div>
                    </div>

          { token &&         <div className="relative text-white">
                        <Bell className="h-5 w-5 cursor-pointer" />
                        <div className="font-poppins absolute -top-2 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                            3
                        </div>
                    </div>}

                 { token && <div className="flex items-center space-x-2">
                        <div className="p-[2px] rounded-full">
                            {/* <img 
                                src={require('../assets/img/aarti3.jpeg')} 
                                alt="User" 
                                className="h-8 w-8 rounded-full object-cover" 
                            /> */}
                            <User  className="rounded-full text-gray-400 bg-gray-50" />
                        </div>
                        <div className="flex items-center space-x-1">
                            <span className="text-white font-semibold font-poppins">{username} </span>
                            <ChevronDown className="w-5 h-5" />
                        </div>
                    </div>}

              {  !token &&    <button 
                        className="bg-white text-[#4702a2] text-sm font-semibold px-6 py-2 rounded-full hover:bg-gray-100 lg:block hidden" 
                        onClick={() => navigate('/login')}
                    >
                        SIGN UP
                    </button>}

                    {/* Mobile Menu Icon */}
                    <div className="lg:hidden">
                        <Menu 
                            className="mr-1 h-6 w-6 text-white cursor-pointer"
                            onClick={() => setMenuOpen(!menuOpen)}
                        />
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden ${menuOpen ? 'block' : 'hidden'} absolute top-0 left-0 w-full bg-gradient-to-r from-teal-500 to-[#4702a2] p-4 menu-container z-10`}>
                <nav className="space-y-4">
                    <button 
                        className="text-white hover:underline w-full"
                        onClick={() => navigate('/home')}
                    >
                        HOME
                    </button>
                    <button 
                        className="text-white hover:underline w-full"
                        onClick={() => navigate('/whitepapers')}
                    >
                        WHITEPAPERS
                    </button>
                    <button 
                        className="text-white hover:underline w-full"
                        onClick={() => navigate('/newsletters')}
                    >
                        NEWSLETTERS
                    </button>
                  { !token && <button 
                        className="bg-white text-[#4702a2] text-sm font-semibold w-full mt-2 py-2 rounded-full hover:bg-gray-100" 
                        onClick={() => navigate('/login')}
                    >
                        SIGN UP
                    </button>}
                </nav>
            </div>
        </header>
    );
};

export default Header;

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Search, Bell, Menu, ArrowDown, Frown, ChevronDown } from 'react-feather';
// const Header = () => {
//     const [showInput, setShowInput] = useState(false);
//     const navigate = useNavigate();
//     const [menuOpen, setMenuOpen] = useState(false);

    
//     const handleClickOutside = (e) => {
//         if (!e.target.closest('.menu-container') && !e.target.closest('.mr-1')) {
//             setMenuOpen(false);
//         }
//     };

//     useEffect(() => {
//         document.addEventListener('click', handleClickOutside);
//         return () => document.removeEventListener('click', handleClickOutside);
//     }, []);

//     return (
//         <header className="bg-gradient-to-r to-teal-500 from-[#4702a2] px-2">
//             <div className="mx-auto p-2">
//                 <div className="flex justify-between items-center">
//                     <div className="flex items-center space-x-4">
//                         <div>
//                             <img 
//                                 src={require('../assets/Infinite-b2b-1-scaled.png')} 
//                                 alt="Logo" 
//                                 className="h-1/3 w-1/3" 
//                             />
//                         </div>
                     
//                         <div className="lg:hidden">
//                             <Menu 
//                                 className="mr-1 h-6 w-6 text-white cursor-pointer"
//                                 onClick={() => setMenuOpen(!menuOpen)}
//                             />
//                         </div>

//                         {/* Desktop Menu */}
//                         <nav className="hidden lg:flex space-x-6">
//                             <button 
//                                 className="text-white hover:underline font-poppins"
//                                 onClick={() => navigate('/home')}
//                             >
//                                HOME
//                             </button>
//                             <button 
//                                 className="text-white hover:underline font-poppins"
//                                 onClick={() => navigate('/whitepapers')}
//                             >
//                                  WHITEPAPERS
//                             </button>
//                             <button 
//                                 className="text-white hover:underline font-poppins"
//                                 onClick={() => navigate('/newsletters')}
//                             >
//                              NEWSLETTERS
//                             </button>
//                         </nav>
//                     </div>

//                     <div className="flex items-center space-x-4">
//                         <div className="flex items-center text-white">
//                             {showInput && (
//                                 <input 
//                                     type="text" 
//                                     placeholder="Search..." 
//                                     className="bg-transparent border-b border-white text-white text-sm outline-none mr-2"
//                                     autoFocus
//                                 />
//                             )}
//                             <div onClick={() => setShowInput(!showInput)} className="cursor-pointer">
//                                 <Search className="h-5 w-5" />
//                             </div>
//                         </div>

//                         <div className="relative text-white">
//                             <Bell className="h-5 w-5 cursor-pointer" />
//                             <div className="font-poppins absolute -top-2 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
//                                 3
//                             </div>
//                         </div>

//                         <div className="flex items-center space-x-2 text-white">
//     <div className="bg-white p-[2px] rounded-full">
//         <img 
//             src={require('../assets/img/aarti3.jpeg')} 
//             alt="User" 
//             className="h-8 w-8 rounded-full object-cover" 
//         />
//     </div>
//     <div className="flex items-center space-x-1">
//         <span className="text-white font-semibold font-poppins">Aarti More</span>
//         <ChevronDown className="w-5 h-5" />
//     </div>
// </div>


//                         <button 
//                             className="bg-white text-[#4702a2] text-sm font-semibold px-6 py-2 rounded-full hover:bg-gray-100 lg:block hidden" 
//                             onClick={() => navigate('/login')}
//                         >
//                             {/* Create Account 
//                              */}
//                            SIGN UP
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* Mobile Menu */}
//             <div className={`lg:hidden ${menuOpen ? 'block' : 'hidden'} absolute top-0 left-0 w-full bg-gradient-to-r from-teal-500 to-[#4702a2] p-4 menu-container z-10`}>
//                 <nav className="space-y-4">
//                     <button 
//                         className="text-white hover:underline w-full"
//                         onClick={() => navigate('/home')}
//                     >
//                         Home
//                     </button>
//                     <button 
//                         className="text-white hover:underline w-full"
//                         onClick={() => navigate('/whitepapers')}
//                     >
//                         WhitePapers
//                     </button>
//                     <button 
//                         className="text-white hover:underline w-full"
//                         onClick={() => navigate('/newsletter')}
//                     >
//                         Newsletter
//                     </button>
//                     {/* "Create Account" button in the mobile menu */}
//                     <button 
//                         className="bg-white text-[#4702a2] text-sm font-semibold w-full mt-2 py-2 rounded-full hover:bg-gray-100" 
//                         onClick={() => navigate('/login')}
//                     >
//                         Create Account
//                     </button>
//                 </nav>
//             </div>
//         </header>
//     );
// };

// export default Header;
