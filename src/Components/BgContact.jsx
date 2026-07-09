import React from "react";
import Bg5 from "../assets/Bg5.png";
import Bg6 from "../assets/Bg6.png";
function BgContact() {
  return (
    <div>

      <div
        className=" bg-cover bg-top h-screen flex justify-center mt-[100px]"
        style={{ backgroundImage: `url(${Bg5})` }}
      >
        <div className=" mx-auto pt-[55px] ">
          <div
            className="bg-cover bg-center h-[720px] w-[1740px]"
            style={{ backgroundImage: `url(${Bg6})` }}
          >
            <div className="max-w-[1300px] mx-auto relative">
              <div className="flex flex-col items-center gap-[20px]">
                <h1 className="py-[38px] text-[#FFFF19] text-[20px] font-bold">
                  TRUE FITNESS
                </h1>
                <h2 className="text-[40px] w-[501px] font-bold text-[white] text-center">
                  Получите{" "}
                  <span className="text-[#01AEE7]">
                    эксклюзивное предложение{" "}
                  </span>
                  на тренажеры{" "}
                  <span className="text-[#01AEE7]">TRUE FITNESS</span>
                </h2>
                <p className="text-[#CDC848] font-bold ">
                  Мы будем рады проконсультировать Вас и помочь с подбором
                  оборудования
                </p>
              </div>
              <div className="flex items-center justify-center gap-[20px] mt-[84px] ">
                <input
                  className="py-[15px] px-[15px] bg-[#D9D9D9] pr-[100px] font-bold text-[20px]"
                  placeholder="имя"
                  type="text"
                />
                <input
                  className="py-[15px] px-[15px] bg-[#D9D9D9] pr-[100px] font-bold text-[20px] text-end"
                  placeholder="+998 (99)-999-99-99"
                  type="number"
                />
                <select
                  className="absolute top-[452px] left-[320px]"
                  name=""
                  id=""
                >
                  <option value="uz">Uz</option>
                  <option value="rus">Rus</option>
                </select>

                <input
                  className="py-[15px] px-[15px] bg-[#D9D9D9] pr-[100px] font-bold text-[20px]"
                  placeholder="e-mail"
                  type="email"
                />
                <button className="py-[15px] px-[80px] bg-[#01AEE7] text-[white] text-[20px] font-bold hover:bg-[blue] active:bg-[black]">
                  отправить
                </button>
              </div>
              <div className="flex items-center justify-center">
                <p className="text-center py-[20px] text-[white] w-[767px]">
                  «Нажимая на кнопку, вы даете согласие на обработку
                  персональных данных и соглашаетесь c политикой
                  конфиденциальности»
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

     
    </div>
  );
}


export default BgContact;
