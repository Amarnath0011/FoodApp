// import { useState } from "react";
// import { LOGO_URL } from "../utils/constants";
//  export const Header = () =>{
// const  [btnName,setButtonName]= useState("Login");
// console.log("Header rendered ")
//     return(
//       <>
//       <div className='h-[100px] flex sticky bg-amber-200 items-center justify-between'>
//         <div className=' w-[80px] mx-20'>
//           <img src={LOGO_URL}></img>
//         </div>
//         <div>
//           <ul className='flex gap-5 items-center text-2xl'>
//             <li className=' hover:text-white'>Home</li>
//             <li className=' hover:text-white'>About us</li>
//             <li className=' hover:text-white'>Contact us</li>
//             <li className=' hover:text-white'>  🛒 </li>
//             <li><button className="p-3 cursor-pointer w-24 transition-all duration-300 bg-amber-400 rounded-2xl hover:outline-2 outline-red-200 mx-2" onClick={()=>{
//              btnName === "Login"? setButtonName("Logout"):setButtonName("Login")}} >{btnName}</button></li>
//           </ul>
//         </div>
//       </div>
//       </>
//     )
//   }
//   export default Header;
import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

export const Header = () => {
  const [btnName, setButtonName] = useState("Login");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 useEffect(()=>{
  console.log("UseEffect Called : ")
 
 },[btnName])

  return (
    <>
      <div className="h-[80px] flex sticky top-0 z-50 bg-amber-200 items-center justify-between px-4 md:px-12 shadow-md">
        {/* Logo */}
        <div className="w-[60px] md:w-[80px]">
          <img src={LOGO_URL} alt="Logo" className="w-full h-auto" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex">
          <ul className="flex gap-6 items-center text-lg md:text-2xl">
            <li className="hover:text-white cursor-pointer"><Link to="/">Home</Link></li>
            <li className="hover:text-white cursor-pointer"><Link to="about">About Us</Link></li>
            <li className="hover:text-white cursor-pointer"><Link to="contactUs">Contact Us</Link></li>
            <li className="hover:text-white cursor-pointer">🛒</li>
            <li>
              <button
                className="p-2 md:p-3 cursor-pointer w-20 md:w-24 transition-all duration-300 bg-amber-400 rounded-2xl hover:outline-2 outline-red-200"
                onClick={() => {
                  btnName === "Login"
                    ? setButtonName("Logout")
                    : setButtonName("Login");
                }}
              >
                {btnName}
              </button>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            className="text-3xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-amber-100 shadow-md py-4 px-6 space-y-4 text-lg">
          <p className="hover:text-white cursor-pointer">Home</p>
          <p className="hover:text-white cursor-pointer">About us</p>
          <p className="hover:text-white cursor-pointer">Contact us</p>
          <p className="hover:text-white cursor-pointer">🛒</p>
          <button
            className="p-2 w-full transition-all duration-300 bg-amber-400 rounded-2xl hover:outline-2 outline-red-200"
            onClick={() => {
              btnName === "Login"
                ? setButtonName("Logout")
                : setButtonName("Login");
              setIsMenuOpen(false);
            }}
          >
            {btnName}
          </button>
        </div>
      )}
    </>
  );
};

export default Header;
