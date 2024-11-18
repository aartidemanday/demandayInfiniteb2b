
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Bell, Menu, ChevronDown, User, LogOut } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../app/slices/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [showInput, setShowInput] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navigate = useNavigate();
  const token = useSelector((state) => state.user.token);
  const username = useSelector((state) => state.user.username);

  const handleClickOutside = (e) => {
    if (
      !e.target.closest(".menu-container") &&
      !e.target.closest(".menu-toggle") &&
      !e.target.closest(".dropdown-container")
    ) {
      setMenuOpen(false);
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <header className="bg-gradient-to-r from-[#4702a2] to-teal-500 px-4 py-3 relative">
      <div className="flex justify-between items-center">
        {/* Left Side: Logo and Navigation Links ... */}
        <div className="flex items-center space-x-8">
          <img
            src={require("../assets/Infinite-b2b-1-scaled.png")}
            alt="Logo"
            className="h-12 w-auto cursor-pointer"
            onClick={() => navigate("/home")}
          />
          <nav className="hidden lg:flex space-x-6">
            <button
              className="text-white hover:underline font-poppins"
              onClick={() => navigate("/home")}
            >
              HOME
            </button>
            <button
              className="text-white hover:underline font-poppins"
              onClick={() => navigate("/whitepapers")}
            >
              WHITEPAPERSET
            </button>
            <button
              className="text-white hover:underline font-poppins"
              onClick={() => navigate("/newsletters")}
            >
              NEWSLETTERS
            </button>
          </nav>
        </div>

        {/* Right Side: Search, Bell Icon, Profile, and Signup n alll */}
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

          {token && (
            <div className="relative text-white">
              <Bell className="h-5 w-5 cursor-pointer" />
              <div className="font-poppins absolute -top-2 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                3
              </div>
            </div>
          )}

          {token && (
            <div className="relative flex items-center space-x-2 dropdown-container">
              <div className="p-[2px] rounded-full">
                <User className="rounded-full text-gray-400 bg-gray-50" />
              </div>
              <div
                className="flex items-center space-x-1 cursor-pointer"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <span className="text-white font-semibold font-poppins">{username}</span>
                <ChevronDown className="w-5 h-5 text-white" />
              </div>

              {dropdownOpen && (
                <div className="absolute top-12 right-0 bg-white shadow-lg rounded-md w-48 p-1 z-50">
             
                  <button
                    className="block text-left w-full text-red-500 hover:bg-red-100 px-3 py-2 rounded-md"
                    onClick={() => {
                      console.log("Logged out");
                      dispatch(clearUser());
                      navigate("/login");
                    }}
                  >
                    <div className="flex gap-2">  <LogOut className="w-5 h-5 mt-1"/>  Log Out</div>
                
                  </button>
                </div>
              )}
            </div>
          )}

          {!token && (
            <button
              className="bg-white text-[#4702a2] text-sm font-semibold px-6 py-2 rounded-full hover:bg-gray-100 lg:block hidden"
              onClick={() => navigate("/login")}
            >
              SIGN UP
            </button>
          )}

          {/* for Mobile icon */}
          <div className="lg:hidden menu-toggle">
            <Menu
              className="mr-1 h-6 w-6 text-white cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden menu-container absolute top-16 left-0 w-full bg-gradient-to-r from-teal-500 to-[#4702a2] p-4 z-10">
          <nav className="space-y-4">
            <button
              className="text-white hover:underline w-full"
              onClick={() => {setMenuOpen(!menuOpen);
                navigate("/home");

              }}
            >
              HOME
            </button>
            <button
              className="text-white hover:underline w-full"
              onClick={() =>  {setMenuOpen(!menuOpen);
                navigate("/whitepapers")}}
            >
              WHITEPAPERS
            </button>
            <button
              className="text-white hover:underline w-full"
              onClick={() => {setMenuOpen(!menuOpen);
                 navigate("/newsletters")}}
            >
              NEWSLETTERS
            </button>





            {!token && (
              <button
                className="bg-white text-[#4702a2] text-sm font-semibold w-full mt-2 py-2 rounded-full hover:bg-gray-100"
                onClick={() => navigate("/login")}
              >
                SIGN UP
              </button>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;  






