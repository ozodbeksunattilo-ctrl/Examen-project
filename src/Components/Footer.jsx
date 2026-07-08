import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { FaPaperPlane } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

import { SiYoutube } from "react-icons/si";


function Footer() {
  return (
    <div className='bg-[#01AEE7] '>
<div className='max-w-[1300px] mx-auto flex'>
<div className='py-[44px] px-[50px] flex-col items-center'>
<div className='flex flex-col gap-[5px]'>
    <h1 className='text-[white]'>КАТАЛОГ ТОВАРОВ</h1>
  <NavLink className="text-[13px] text-[white] mt-[20px]">Кардио тренажеры</NavLink>
  <NavLink className="text-[13px] text-[white] w-[150px]">Composite Strength</NavLink>
  <NavLink className="text-[13px] text-[white]">Stretch</NavLink>
  <NavLink className="text-[13px] text-[white]">Сайклинг</NavLink>
  <NavLink className="text-[13px] text-[white]">Групповые тренировки</NavLink>
  <NavLink className="text-[13px] text-[white]">Силовые тренажеры</NavLink>
  <NavLink className="text-[13px] text-[white]">Консоли</NavLink>
  <p className='py-[15px] text-[white]'>© TRUE FITNESS</p>

</div>

</div>
<div className='py-[44px] px-[100px] flex-col items-center'>
  <div className='flex flex-col gap-[5px]'>
    <h1 className='text-[white]'>ИНФОРМАЦИЯ</h1>
  <NavLink className="text-[13px] text-[white] mt-[20px]" to={"/"}>Home</NavLink>
  <NavLink className="text-[13px] text-[white] " to="/diyor" >Преимущества</NavLink>
  <NavLink className="text-[13px] text-[white]" to="/axror">открыть клуб</NavLink>
  <NavLink className="text-[13px] text-[white]" to="/isroil">продукции</NavLink>
  <NavLink className="text-[13px] text-[white]" to="/ramazon">контакты</NavLink>
  

</div>
</div>

<div>

<div className='py-[44px] px-[100px] flex-col items-center'>
  <div className='flex flex-col gap-[5px]'>
    <h1 className='text-[white]'>КОНТАКТЫ</h1>
  <NavLink className="text-[13px] text-[white] mt-[20px]">Политика конфиденциальности</NavLink>
  <NavLink className="text-[13px] text-[white] ">Контакты</NavLink>
 
  

</div>
</div>
</div>
<div className='py-[34px] px-[100px] flex-col items-center'>
  <h1 className='text-[white]'>ПОДПИСАТЬСЯ НА НОВОСТИ И АКЦИИ</h1>
  <div className='flex items-center gap-[8px] mt-[32px] '>
    <input className='bg-[white] py-[10px] px-[10px]' placeholder='e - mail' type="email" />
    <button className=' bg-[yellow] py-[15px] px-[20px] text-[20px] text-black'>
    <FaPaperPlane />
    </button>
  </div>
<div className='flex items-center gap-[10px] text-[white] text-[25px] py-[10px]'>
  <NavLink className="text-[20px]" ><FaFacebookF /></NavLink>
  <NavLink className="text-[25px]"><AiFillInstagram /></NavLink>
  <NavLink className="text-[25px]"><SiYoutube /></NavLink>
  
  


</div>

</div>
</div>




    </div>
  )
}

export default Footer