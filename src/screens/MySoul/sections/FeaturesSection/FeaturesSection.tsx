import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

const features = [
  {
    icon: "/free-icon-premium-badge-70535-1.png",
    title: "КАЧЕСТВО СЕРВИСА",
    description: "Качество сервиса всегда на высшем уровне",
  },
  {
    icon: "/free-icon-organic-product-4411211-1.png",
    title: "ПРОДУКТЫ",
    description: "Всегда свежие и качественные продукты",
  },
  {
    icon: "/free-icon-interior-design-2050987-1.png",
    title: "ИНТЕРЬЕР",
    description: "Красивый дизайнерский интерьер",
  },
  {
    icon: "/free-icon-premium-badge-70535-1.png",
    title: "АТМОСФЕРА",
    description: "Уютная и расслабляющая атмосфера для каждого гостя",
  },
];

export const FeaturesSection = (): JSX.Element => {
  return (
    <section className="w-full py-16 lg:py-24 bg-gradient-to-br from-[#fef7e7] to-[#f8f1d8] relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#c69d7f] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#c69d7f] rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-[#c69d7f] rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Заголовок с улучшенным дизайном */}
        <div className="text-left mb-12 lg:mb-16">
          <h2 className="font-heading-display text-black text-3xl md:text-4xl lg:text-5xl tracking-wide leading-tight mb-4">
            ОСОБЕННОСТИ
          </h2>
          <div className="w-16 h-1 bg-[#c69d7f] rounded-full"></div>
          <p className="text-base lg:text-lg text-black/70 mt-4 max-w-2xl font-body-text">
            Мы гордимся тем, что предлагаем нашим гостям
          </p>
        </div>

        {/* Карточки особенностей */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-white/90 to-white/60 backdrop-blur-sm border-2 border-white/50 shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 hover:rotate-1 group overflow-hidden relative"
            >
              {/* Декоративный фон */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#c69d7f]/10 to-transparent rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
              
              <CardContent className="flex flex-row items-center p-6 lg:p-8 h-full relative z-10">
                {/* Контейнер для иконки с новым дизайном */}
                <div className="flex-shrink-0 mr-6 lg:mr-8">
                  <div className="w-24 h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-[#c69d7f] to-[#b8916f] rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
                    <img
                      className="w-12 h-12 lg:w-14 lg:h-14 object-contain relative z-10 filter brightness-0 invert"
                      alt={feature.title}
                      src={feature.icon}
                    />
                  </div>
                </div>

                {/* Контент */}
                <div className="flex-grow">
                  {/* Заголовок */}
                  <h3 className="font-heading-subtitle text-black text-lg lg:text-xl tracking-wide leading-tight mb-3 group-hover:text-[#c69d7f] transition-colors duration-300">
                    {feature.title}
                  </h3>

                  {/* Описание */}
                  <p className="font-body-text text-black/70 text-base lg:text-lg leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Декоративная линия */}
                  <div className="w-12 h-1 bg-gradient-to-r from-[#c69d7f] to-transparent mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:w-20"></div>
                </div>

                {/* Стрелка */}
                <div className="flex-shrink-0 ml-4 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1">
                  <svg className="w-6 h-6 text-[#c69d7f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>


      </div>
    </section>
  );
};
