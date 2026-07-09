import React from 'react'
import Bg4 from "../assets/Bg4.png"
import Runner from "../assets/Runner.png"
import Runner2 from "../assets/Runner2.png"
import Runner3 from "../assets/Runner3.png"
import Runner4 from "../assets/Runner4.png"
import Runner5 from "../assets/Runner5.png"
import Runner6 from "../assets/Runner6.png"
import Bg5 from "../assets/Bg5.png"
import Bg6 from "../assets/Bg6.png"
import BgContact from '../Components/BgContact'
function Div({img,name, text, width}) {
  return(
<div className='flex flex-col gap-[20px] mt-[70px]'>
<img src={img} alt="" />
  <h1 className={`font-bold text-[20px] w-[300px] text-[white] ${width}`} >{name}</h1>
      <p className={`text-[15px] w-[237px] h-[5px] bg-yellow-400   ${width}`}>{text}</p>

</div>

  )
}

function Brend() {
  return (
    <div>
<div className="bg-[#01AEE7]">
  <div className="max-w-[1300px] mx-auto">
    <div className="flex flex-col items-center gap-6 py-8">
      <p className="text-[#FFF500] font-bold">
        О НАШЕМ БРЕНДЕ
      </p>

      <h1 className="text-white text-[35px] font-bold text-center w-[522px]">
        TRUE - СОВЕРШЕННОE ФИТНЕС-ОБОРУДОВАНИЕ
      </h1>
    </div>
  </div>
</div>

<div
  className="bg-cover bg-top min-h-screen py-[100px]"
  style={{ backgroundImage: `url(${Bg4})` }}
>
  <div className="max-w-[1300px] mx-auto">
    <div className="bg-white  py-[30px] flex flex-col items-center ">
      <div className=" mx-auto flex flex-col items-center gap-[35px]">

        <h1 className="text-[22px] text-[#01AEE7] w-[830px] ">
          Это совершенство обеспечивается высококачественными,
          долговечными материалами и технологиями, которые мы используем
          для производстве наших машин. Но оно также создается и благодаря
          нашей преданности клиентам и их потребностям.
        </h1>

        <p className="text-[22px] w-[830px]">
          Наша опытная команда предлагает комплексное обслуживание,
          начиная от планирования объекта до технического обслуживания и
          оснащения ваших залов новейшими технологиями. Являясь вашим
          надежным партнером, мы делаем все возможное, чтобы ваше
          предприятие продолжало эффективно работать годы и годы.
        </p>

        <p className="text-[22px] w-[830px]">
          Вы можете рассчитывать на нас в предоставлении одних из лучших
          услуг в отрасли. Мы ориентированы на оптимизацию срока службы
          вашего фитнес-оборудования. Мы всегда ищем способы расширить
          сферу взаимодействия с нашими клиентами, будь то предоставление
          учебных материалов для ваших сотрудников и инструкторов, или
          разработка технологических решений, отвечающих потребностям
          современных пользователей.
        </p>

        <h2 className="text-[22px] text-[#01AEE7] font-bold w-[830px]">
          Свяжитесь с нами, чтобы узнать, как партнерство с TRUE может
          помочь вашей компании добиться успеха.
        </h2>

      </div>

    </div>
  </div>
</div>

<div className='bg-[#01AEE7] py-[70px]'>
<h1 className='text-center text-[40px] text-[white]'>Наши инновации</h1>
  <div className='max-w-[1300px] mx-auto'>
<div className='flex items-center gap-[40px]'>
  <Div img={Runner} name={"Тренажер Лестница TRUE Palisade"} text />
  <Div img={Runner2} width={"350px"} name={"Функциональный тренинг с Composite Strength"} text />
  <Div img={Runner3} name={"Рамы для стрейтчинга TRUE Stretch"} text />

</div>
<div className='flex items-center gap-[40px]'>
  <Div img={Runner4} name={"Латеральный тренажер TRUE Traverse"} text />
  <Div img={Runner5} name={"Беговая дорожка TRUE Alpine Runner"} text />
  <Div img={Runner6} name={"Эллиптический тренажер TRUE Spectrum"} text />
</div>
  </div>
  <BgContact/>
</div>
<div>

</div>

    </div>
  )
}

export default Brend