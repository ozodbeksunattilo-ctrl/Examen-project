import { useState } from "react";

function Ramazon() {
  const images = [
    "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1200",
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200",
    "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=1200",
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((current + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((current - 1 + images.length) % images.length);
  };

  return (
    <div className="w-full">

      <section className="bg-sky-500 py-8 text-center text-white">
        <p className="text-yellow-300 text-sm font-semibold uppercase">
          Контакты
        </p>

        <h1 className="mt-2 text-4xl font-bold uppercase">
          ШОУ РУМ TRUE В ТАШКЕНТЕ
        </h1>

        <p className="mt-3 text-lg font-medium">
          ПОСЕТИТЕ НАШ ВЫСТАВОЧНЫЙ ЗАЛ В ТАШКЕНТ СИТИ, BOULEVARD
        </p>
      </section>

      <section className="relative mx-auto my-12 max-w-6xl px-4">

        <img
          src={images[current]}
          alt=""
          className="h-[550px] w-full rounded-lg object-cover shadow-xl"
        />

        <button
          onClick={prevSlide}
          className="absolute left-8 top-1/2 -translate-y-1/2 rounded-full bg-sky-500 p-4 text-2xl text-white hover:bg-sky-600"
        >
          ❮
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-8 top-1/2 -translate-y-1/2 rounded-full bg-sky-500 p-4 text-2xl text-white hover:bg-sky-600"
        >
          ❯
        </button>

        <div className="mt-6 flex justify-center gap-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-4 w-4 rounded-full ${
                current === index ? "bg-yellow-400" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

      </section>
            <section className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2">

          <iframe
            src="https://www.google.com/maps?q=Tashkent%20City&output=embed"
            className="w-full h-[450px]"
            loading="lazy"
            title="map"
          />

          <div className="bg-[#E8E8E8] h-[450px] flex items-center">

            <div className="px-14">

              <h2 className="text-[#00AEEF] text-3xl font-bold uppercase leading-10">
                ОФИЦИАЛЬНЫЙ ДИСТРИБЬЮТЕР
                <br />
                В УЗБЕКИСТАНЕ - PROWELLNESS
              </h2>

              <div className="mt-10 space-y-3">

                <p className="text-lg text-gray-700">
                  +998 (90)-606-66-66
                </p>

                <p className="text-[#00AEEF] hover:underline cursor-pointer">
                  info@prowellness.uz
                </p>

                <p className="text-gray-600 leading-7">
                  Адрес: Ташкент Сити, Бульвар,
                  <br />
                  Ул. Фурката 2А
 *;               </p>

                <div className="pt-8">
                  <p className="text-[#00AEEF] font-bold uppercase">
                    ПН-СБ С 9:00-19:00
                  </p>

                  <p className="text-[#00AEEF] font-bold uppercase">
                    ВС НЕ РАБОЧИЙ
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>
 
    </div>
  );
}

export default Ramazon;