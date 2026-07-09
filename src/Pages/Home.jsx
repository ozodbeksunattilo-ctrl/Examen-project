import React from "react";
import { useState } from "react";
import { FaRegCirclePlay } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Swipper from "../assets/swipper.png";
import Swipper1 from "../assets/swipper1.png";
import Swipper2 from "../assets/swipper2.png";
import Swipper3 from "../assets/Swipper3.png";
import Swipper4 from "../assets/swipper4.png";
import Bg from "../assets/bg.png";
import Bg2 from "../assets/bg2.png";
import Run from "../assets/run.png";
import Mask from "../assets/Mask.png";
import Mask2 from "../assets/Mask2.png";
import Mask3 from "../assets/Mask3.png";
import Mask4 from "../assets/Mask4.png";
import Mask5 from "../assets/Mask5.png";
import Mask6 from "../assets/Mask6.png";
import Bg3 from "../assets/Bg3.png";
function Card({ img, name, text, width }) {
  return (
    <div className="flex flex-col items-start gap-[10px]">
      <img src={img} alt="" />
      <h1 className="font-bold text-[18px] w-[250px]">{name}</h1>
      <p className={`text-["15px"] ${width}`}>{text}</p>
    </div>
  );
}
function Home() {
  const [play,setPlay] = useState(false)
  return (
    <div>
      <div className="relative ">
        <video
          className="w-full h-[1090px]"
          controls
          muted
          playsInline
          src="/Video.mp4"
          onPlay={()=> setPlay(true)}
          onPause={()=> setPlay(false)}
          onEnded={()=> setPlay(false) }
        ></video>
        {!play &&(
<div  className="absolute top-[600px] left-[640px]">
          <div className="absolute top-[-100px] left-[280px] text-[white] text-[80px]">
            <FaRegCirclePlay />
          </div>

          <h1 className="text-[white] text-[50px] text-center w-[700px] font-bold">
            TRUE FITNESS - ПРЕМИУМ ТРЕНАЖЕРЫ ИЗ США
          </h1>
        </div>
        )}
        <div className="bg-[#01AEE7] backdrop-filter: blur(220px) py-[104px] px-[274px] flex flex-col">
          <p className="w-[237px] h-[2px] bg-[yellow] text-center] mx-auto"></p>
          <div className="flex items-center justify-center">
            <h1 className="text-center py-[20px] text-[45px] w-[790px] text-[white] font-bold ">
              TRUE - ведущий мировой производитель премиального фитнес
              оборудования
            </h1>
          </div>
          <p className="w-[237px] h-[2px] bg-[yellow] text-center] mx-auto"></p>
        </div>
        <div className="max-w-[1300px] mx-auto flex items-center gap-[390px] mt-[55px]">
          <div className="w-[300px]">
            <h1 className="text-[60px] font-bold">
              TRUE <span className="text-[#01AEE7]">FITNESS</span>
            </h1>

            <p className="w-[237px] h-[5px] bg-yellow-400 mt-[40px]"></p>

            <p className="text-[30px] w-[350px] py-[24px] font-bold">
              Современное и надежное оборудование для фитнес-клубо
            </p>

            <div className="flex items-center gap-[20px]">
              <p className="text-[#01AEE7] text-[30px] w-[240px] font-bold">
                КАРдио Тренажеры
              </p>

              <FaArrowRightLong className="text-[#01AEE7] text-[40px]" />
            </div>
          </div>

          <div className="w-[700px]">
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              className="w-full h-[500px]"
            >
              <SwiperSlide>
                <img src={Swipper} alt="" className="w-[500px] mx-auto" />
              </SwiperSlide>

              <SwiperSlide>
                <img src={Swipper1} alt="" className="w-[600px] mx-auto" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Swipper2} alt="" className="w-[600px] mx-auto" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Swipper3} alt="" className="w-[600px] mx-auto" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Swipper4} alt="" className="w-[600px] mx-auto" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="bg-[#F5F5F5]">
          <div className="max-w-[1300px] mx-auto  mt-[70px] py-[70px] flex justify-between gap-[40px]">
            <div
              className=" w-[684px] h-[426px] bg-cover bg-center "
              style={{ backgroundImage: `url(${Bg})` }}
            >
              <div className="flex flex-col py-[60px]">
                <h1 className="text-[30px] font-bold w-[300px] mt-[80px] px-[75px] text-white">
                  Лучшие характеристики
                </h1>
                <p className="w-[237px] h-[5px] bg-yellow-400  ml-[75px] mt-[30px]"></p>
                <p className="px-[75px] text-[white] w-[600px] py-[40px]">
                  Наши тренажеры имеют самые совершенные характеристики в
                  классе, от более мощных технических показателей до расширенных
                  функциональных возможностей
                </p>
                <div className="bg-[#01AEE7] w-[684px] h-[250px]">
                  <h1 className="text-[30px] text-[white] font-bold w-[400px] py-[20px] px-[40px]">
                    ВЫСОКОЕ КАЧЕСТВО И НАДЕЖНОСТЬ
                  </h1>
                  <p className="w-[237px] h-[5px] bg-yellow-400 ml-[40px] "></p>
                  <p className="w-[550px] text-[white] px-[40px] py-[20px]">
                    Наши тренажеры имеют самые совершенные характеристики в
                    классе, от более мощных технических показателей до
                    расширенных функциональных возможностей
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-[#01AEE7] w-[684px] h-[250px]">
                <h1 className="text-[30px] text-[white] font-bold w-[400px] py-[20px] px-[40px]">
                  Низкая СТОИМОСТЬ ВЛАДЕНИЕ
                </h1>
                <p className="w-[237px] h-[5px] bg-yellow-400 ml-[40px] "></p>
                <p className="w-[550px] text-[white] px-[40px] py-[20px]">
                  Надежность оборудования обеспечивает низкие затраты на
                  сервисное обслуживание, так по стоимости затрат на
                  эксплуатацию TRUE выигрывает у конкурентов.
                </p>
              </div>
              <div
                className=" w-[684px] h-[426px] bg-cover bg-center mt-[20px] "
                style={{ backgroundImage: `url(${Bg2})` }}
              >
                <div className="flex flex-col py-[60px]">
                  <h1 className="text-[30px] font-bold w-[600px] mt-[80px] px-[75px] text-white">
                    КАЧЕСТВЕННЫЕ И ОПЕРАТИВНЫЙ СЕРВИС
                  </h1>
                  <p className="w-[237px] h-[5px] bg-yellow-400  ml-[75px] mt-[30px]"></p>
                  <p className="px-[75px] text-[white] w-[590px] py-[40px]">
                    Оборудование должно работать бесперебойно, поэтому мы
                    уделяем особое внимание наличию всех необходимых запчастей и
                    высокой срочности технического реагирования.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#EEEEEE] mt-[50px]">
          <div className=" mx-auto ">
            <div className="flex justify-between  ">
              <div className="max-w-[1300px] mx-auto">
                <h1 className="py-[90px  mt-[100px] text-[#01AEE7] text-[30px] w-[380px] font-bold">
                  Мы предлагаем полный комплекс услуг
                </h1>
                <div className="mt-[128px] flex  gap-[220px] ">
                  <Card
                    img={Mask}
                    name="КОНСАЛТИНГ"
                    width="w-[200px]"
                    text="Помогаем в разработке концепции клуба, зонировании, оснащении и расчете финансовых показателей."
                  />
                  <Card
                    img={Mask2}
                    width="w-[250px]"
                    name="МОНТАЖ И СЕРВИСНОЕ ОБСЛУЖИВАНИЕ"
                    text="Полный цикл пуско-наладочных работ, а также сервисного обслуживания тренажеров. "
                  />
                </div>
                <div className="mt-[90px] flex  gap-[220px] ">
                  <Card
                    img={Mask3}
                    name="ПОДБОР ОБОРУДОВАНИЯ И 3D ПРОЕКТ"
                    width="w-[250px]"
                    width="w-[250px]"
                    text="Помогаем подобрать оборудование, сделать расстановку на плане и показать 3D визуализацию вашего будущего проекта."
                  />
                  <Card
                    img={Mask4}
                    width="w-[180px]"
                    name="ФИРМЕННЫЙ SHOW-ROOM"
                    text="Пройдите тест-драйв оборудования перед приобретением."
                  />
                </div>
                <div className="mt-[90px] flex  gap-[220px] ">
                  <Card
                    img={Mask5}
                    name="ПОСТАВКА ЗАПЧАСТЕЙ"
                    width="w-[250px]"
                    text="Поставка как гарантийных, так и постгарантийных запчастей."
                  />
                  <Card
                    img={Mask6}
                    width="w-[250px]"
                    name="Доставка по всему Узбекистану"
                    text="Мы доставляем оборудование по всему Узбекистану."
                  />
                </div>
              </div>
              <img src={Run} alt="" />
            </div>
          </div>
        </div>
        <div
          className="bg-cover bg-center  h-[100vh]"
          style={{ backgroundImage: `url(${Bg3})` }}
        >
          <div className="max-w-[1300px] mx-auto py-[150px] px-[470px] relative">
            <div className="bg-[white] flex flex-col items-start  gap-[30px] w-[505px] ">
              <h1 className="font-bold text-[20px] w-[370px] mt-[50px] px-[28px]">
                Получите эксклюзивное предложение на тренажеры TRUE FITNESS
              </h1>
              <p className="text-[13px] font-extralight w-[300px] px-[28px]">
                Мы будем рады проконсультировать Вас и помочь с подбором
                оборудования
              </p>

              <div className="flex flex-col items-center gap-[22px] ]">
                <input
                  className="  w-[450px] ml-[28px] py-[10px] px-[20px] font-bold text-[18px] bg-[#F0F0F0]"
                  placeholder="имя"
                  type="text"
                />
                <input
                  className=" w-[450px] ml-[28px] py-[10px] px-[20px] font-bold text-[18px] bg-[#F0F0F0]"
                  placeholder="EMail"
                  type="email"
                />
                <input
                  className=" w-[450px] ml-[30px] py-[10px] px-[60px] font-bold text-[18px] bg-[#F0F0F0]"
                  placeholder="+998"
                  type="number"
                />
              </div>
              <select
                className="absolute top-[540px] left-[510px]"
                name=""
                id=""
              >
                <option value="uz">Uz</option>
                <option value="rus">Rus</option>
              </select>

              <button
                type="submit"
                className="py-[12px] px-[180px] bg-[#01AEE7] ml-[28px] text-[white] hover:bg-[blue] active:bg-[black] font-bold"
              >
                ОТПРАВИТЬ
              </button>
              <p className="text-[13px] text-[whiet] py-[22px] w-[400px] ml-[28px]">
                Нажимая на кнопку, вы даете согласие на обработку персональных
                данных и соглашаетесь c политикой конфиденциальности
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
