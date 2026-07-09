import React from 'react'
import Home from "../assets/Hoem.png"
function Isroil() {
  return (
    <div >
      <div className='bg-[#01AEE7]'>
        <div className='max-w-[1300px] mx-auto'>
          <p className='text-[#FFF500] text-[20xp] text-center font-bold py-[30px]'>КЛУБ TRUE</p>
        <h1 className='text-[white] text-[40px] text-center pb-[30px]' >Открыть клуб вместе с TRUE</h1>
        </div>
       
      </div>
       <div className='max-w-[1300px] mx-auto py-[77px]' >
          <img src={Home} alt="" />
        </div>

<div className='bg-[#D9D9D9] flex flex-col items-start relative'>
  <div className='max-w-[1300px] mx-auto'>
<h1 className='text-center text-[30px] font-bold mt-[60px]'>Отправить заявку</h1>
<div className='flex flex-col items-center gap-[35px] mt-[60px]'>
  <div>
<label htmlFor="ism">
  <p className='text-[18px] font-bold'>Ваше имя</p>
    <input className='py-[26px] pr-[254px] text-[20px] font-bold border-b-1 border-black'  placeholder='имя' type="text" id='ism' />
</label>
</div>
<div>
<label htmlFor="email">  <p className='text-[18px] font-bold'>Е-mail:</p>
  <input className='py-[26px] pr-[254px] text-[20px] font-bold border-b-1 border-black' placeholder='Е-mail:' type="email" id='email' /></label>
</div>
<div>
<label htmlFor="number">
    <p className='text-[18px] font-bold'>Номер телефона</p>
  <input className='py-[26px] pr-[254px] gap-[10px] text-[20px] font-bold border-b-1 border-black text-right' placeholder='+998' type="text" id='number' />
</label>
<select className='absolute right-[1160px] top-[510px]' name="" id="">
  <option value="uzb">Uzb</option>
  <option value="rus">Rus</option>
</select>
</div>
<div>
<label htmlFor="gorod">
    <p className='text-[18px] font-bold'>Город</p>
  <input className='py-[26px] pr-[254px] text-[20px] font-bold border-b-1 border-black' placeholder='Город' type="text" id='gorod' />
</label>
</div>
</div>
 <div className='flex flex-col items-start mt-[82px]'>
  <div className='flex flex-col gap-[10px]' >
    <h1 className='text-[18px] font-bold'>Хотите открыть:</h1>
    <label className='flex items-center gap-[5px]' htmlFor="fitness">
      <input type="radio" name="club" id="fitness"placeholder='Фитнес студия' /> 
      Фитнес студия
    </label>
  <label className='flex items-center gap-[5px]' htmlFor="gym">
      <input type="radio" name="club" id="gym"placeholder='Фитнес студия' /> 
      Фитнес клуб
    </label>
  <label className='flex items-center gap-[5px]' htmlFor="studiya">
      <input type="radio" name="club" id="studiya"placeholder='Фитнес студия' /> 
      Домашний спортзал
    </label>
  <label className='flex items-center gap-[5px]' htmlFor="fitnes">
      <input type="radio" name="club" id="fitnes"placeholder='Фитнес студия' /> 
     Тренажерный зал в отеле, санатории
    </label>
  <label className='flex items-center gap-[5px]' htmlFor="sport">
      <input type="radio" name="club" id="sport"placeholder='Фитнес студия' /> 
     Корпоративный спортзал
    </label>
 
  </div>
  </div>
  <div className='flex flex-col items-start mt-[50px]'>
  <div className='flex flex-col gap-[10px]' >
    <h1 className='text-[18px] font-bold'>Планируемый срок запуска проекта:</h1>
    <label className='flex items-center gap-[5px]' htmlFor="fitnesss">
      <input type="radio" name="club" id="fitnesss"placeholder='Фитнес студия' /> 
      Фитнес студия
    </label>
  <label className='flex items-center gap-[5px]' htmlFor="boks">
      <input type="radio" name="club" id="boks"placeholder='Фитнес студия' /> 
      Фитнес клуб
    </label>
  <label className='flex items-center gap-[5px]' htmlFor="kurash">
      <input type="radio" name="club" id="kurash"placeholder='Фитнес студия' /> 
      Домашний спортзал
    </label>
  <label className='flex items-center gap-[5px]' htmlFor="yugurish">
      <input type="radio" name="club" id="yugurish"placeholder='Фитнес студия' /> 
     Тренажерный зал в отеле, санатории
    </label>
  <label className='flex items-center gap-[5px]' htmlFor="running">
      <input type="radio" name="club" id="running"placeholder='Фитнес студия' /> 
     Корпоративный спортзал
    </label>
 
  </div>
  
  </div>
  <div className='flex flex-col items-start mt-[50px]'>
  <div className='flex flex-col gap-[10px]' >
    <h1 className='text-[18px] font-bold'>Какие услуги Вас интересуют:</h1>
    <label className='flex items-center gap-[5px]' htmlFor="chek">
      <input type="checkbox"  id='chek' /> 
    Консультация
    </label>
  <label className='flex items-center gap-[5px]' htmlFor="box">
      <input type="checkbox" id='box'  /> 
      Подбор оборудования
    </label>
  <label className='flex items-center gap-[5px]' htmlFor="oxtagon">
      <input type="checkbox" id='oxtagon'  /> 
      Расстановка тренажеров на плане
    </label>
  <label className='flex items-center gap-[5px]' htmlFor="octagon">
      <input type="checkbox"  id='octagon' /> 
     Лизинг
    </label>
  
 
  </div>
  <div className='flex flex-col items-start gap-[10px]'>
    <h1 className='mt-[30px] font-bold text-[18px]'>Загрузить план помещения</h1>
<label className='bg-[#01AEE7] py-[6px] px-[12px] text-white hover:bg-[blue] active:bg-[black]' htmlFor="fayl">
<input className='hidden   text-[18px] text-[#FFFFFF]' type="file" name="" id="fayl" />ADD FILES
   
</label>
<label className='py-[30px]' htmlFor="text">
  <textarea className='w-[400px] h-[103px] text-[black] text-[18px] border-b-1 border-black' placeholder='  Комментарий' name="" id="text"></textarea>

</label>
  </div>
<div className='flex justify-center items-center ml-[130px]'> <button className='text-[white] bg-[#01AEE7] py-[9px] px-[30px] mb-[66px] text-[18px] font-bold hover:bg-[blue] active:bg-[black]'>отпрвить</button></div>
  </div>
  </div>
 
</div>

    </div>
  )
}

export default Isroil