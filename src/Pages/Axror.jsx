import React from 'react'
import BgContact from '../Components/BgContact'
import Images from "../assets/images.png"
import Images2 from "../assets/images2.png"
import Images3 from "../assets/images3.png"
import Rectangle from "../assets/Rectangle.png"
import Rectangle1 from "../assets/Rectangle1.png"
import Rectangle2 from "../assets/Rectangle2.png"
import Rectangle3 from "../assets/Rectangle3.png"
import Rectangle4 from "../assets/Rectangle4.png"
function Card(props) {
  return (
    <div className="flex flex-col items-start text-left">
      <img
        src={props.img}
        alt=""
        className="w-full h-48 object-cover "
      />
      <h2 className="mt-4 text-[22px] font-bold uppercase text-[#01AEE7] text-center leading-snug">
        {props.title}
      </h2>
      <p className="mt-2 text-sm text-[black] text-center">
        {props.text}
      </p>
    </div>
  )
}

function Axror() {
  return (
    <div className="w-full">
      <div className="bg-sky-500 text-white text-center px-6 py-16">
        <h1 className="text-[#FFF500]">
          Наши преимущества
        </h1>
        
        <h1 className="mt-3 text-3xl md:text-4xl font-extrabold uppercase">
          ПРЕИМУЩЕСТВА TRUE FITNESS
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-sm md:text-base text-sky-50">
          Благодаря которым мы являемся мировым лидером в производстве
          фитнес-оборудования
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
        <Card
          img={Rectangle1}
          title="Лучшие характеристики в классе"
          text="Наши тренажеры оснащены самой передовой технологией, обеспечивающей максимальную эффективность тренировок."
        />
        <Card
          img={Rectangle}
          title="Высокая надёжность оборудования"
          text="Каждый тренажёр проходит строгий контроль качества перед выпуском на рынок."
        />
        <Card
          img={Rectangle2}
          title="Низкая стоимость владения"
          text="Долговечность и минимальные затраты на обслуживание делают наше оборудование выгодным."
        />
        <Card
          img={Rectangle3}
          title="Качественный и оперативный сервис"
          text="Наша сервисная служба всегда готова оказать оперативную поддержку клиентам."
        />
        <Card
          img={Rectangle4}
          title="Цены ниже, чем у аналогов"
          text="Мы предлагаем конкурентные цены без потери качества продукции."
        />
        <Card
          img={Images}
          title="Совершенная производительность"
          text="Инновационные решения обеспечивают максимальную отдачу от каждой тренировки."
        />
        <Card
          img={Images2}
          title="Абсолютные лидеры по количеству инноваций"
          text="Мы постоянно внедряем новейшие технологии в наше оборудование."
        />
        <Card
          img={Images3}
          title="Максимальное удобство и функциональность"
          text="Продуманная эргономика делает тренировки комфортными для всех уровней подготовки."
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-16 text-center">
        <button className="inline-block bg-sky-500 text-white text-[16px] font-bold tracking-widest px-[53px] py-[9px] ">
          Top 5
        </button>
        <p className="mt-6 text-lg md:text-xl font-bold uppercase text-gray-900">
          Бренд True Fitness входит в топ 5 крупнейших производителей
          фитнес-оборудования
        </p>
        <hr className="mt-8 border-gray-200" />
      </div>
      <BgContact/>
    </div>
  )
}

export default Axror