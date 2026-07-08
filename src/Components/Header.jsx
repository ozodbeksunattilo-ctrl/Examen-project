import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import Flag from "../assets/flag.png";
function Header() {
  return (
  
  <div className="max-w-[1300px] mx-auto">

 
  <div className="flex justify-between items-center py-[24px] border-b border-black mx-auto">
    <img src={Logo} alt="" className="w-[350px] mx-auto mr-[300px]" />

    <div className="flex flex-col items-end gap-4">
      <div className="flex items-center gap-3">
        <select>
          <option>Rus</option>
          <option>Uzb</option>
        </select>

        <span>+998 (90)-606-66-66</span>
      </div>

      <button type="submit" className="py-[10px] px-[20px] bg-[#01AEE7] text-white active:bg-blue-800 ">
        оставить заявку
      </button>
    </div>
  </div>


  <div className="flex gap-[112px] py-[16px] items-center justify-center">
    <NavLink className= "active:text-indigo-900 hover:mt-[-3px] hover:border-b-2  border-black hover:text-blue-900"  to="/">Home</NavLink>
    <NavLink className= "active:text-indigo-900 hover:mt-[-3px] hover:border-b-2  border-black hover:text-blue-900" to="/diyor">о бренде</NavLink>
    <NavLink className= "active:text-indigo-900 hover:mt-[-3px] hover:border-b-2  border-black hover:text-blue-900" to="/axror">преимущества</NavLink>
    <NavLink className= "active:text-indigo-900 hover:mt-[-3px] hover:border-b-2  border-black hover:text-blue-900" to="/isroil">открыть клуб</NavLink>
    <NavLink className= "active:text-indigo-900 hover:mt-[-3px] hover:border-b-2  border-black hover:text-blue-900" to="/ramazon">контакты</NavLink>
  </div>

</div>
  );
}

export default Header;
