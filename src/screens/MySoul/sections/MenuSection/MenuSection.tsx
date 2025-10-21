import { useNavigate } from "react-router-dom";

export const MenuSection = (): JSX.Element => {
  const navigate = useNavigate();

  const handleMenuClick = () => {
    navigate('/menu');
  };

  return (
    <section className="relative w-full bg-gradient-to-br from-[#c69d7f] to-[#b8916f] py-16 lg:py-24 px-4 md:px-8 overflow-hidden">
      {/* Декоративные элементы фона */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#c69d7f]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-[#c69d7f]/8 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#c69d7f]/5 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Левая колонка - текст */}
          <div className="flex flex-col gap-8 lg:gap-12 order-2 lg:order-1">
            {/* Заголовок с улучшенным дизайном */}
            <div className="space-y-4 animate-slide-in-left">
              <h1 className="font-heading-display text-white text-3xl md:text-4xl lg:text-5xl tracking-wide leading-tight">
                О НАС
              </h1>
              <div className="w-16 h-1 bg-gradient-to-r from-[#c69d7f] to-[#b8916f] rounded-full animate-pulse-glow"></div>
            </div>

            {/* Основной текст */}
            <div className="space-y-6 animate-slide-in-left animation-delay-200">
              <p className="text-white/95 text-lg lg:text-xl xl:text-2xl font-body-text leading-relaxed">
                Добро пожаловать в нашу кофейню — место, где каждая чашка кофе 
                рассказывает свою историю. Мы создаем уютную атмосферу, где 
                традиции встречаются с современностью.
              </p>
              
              <p className="text-white/80 text-base lg:text-lg font-body-text leading-relaxed">
                Наша команда состоит из настоящих ценителей кофе, которые ежедневно 
                работают над тем, чтобы подарить вам незабываемый опыт.
              </p>
              
              {/* Кнопка меню */}
              <div className="pt-4 animate-slide-in-left animation-delay-400">
                <button
                  onClick={handleMenuClick}
                  className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-heading-subtitle text-lg hover:bg-white/30 transition-all duration-300 hover-lift hover-glow border border-white/30"
                >
                  СМОТРЕТЬ МЕНЮ
                </button>
              </div>
            </div>


          </div>

          {/* Правая колонка - изображения */}
          <div className="relative flex justify-center items-center order-1 lg:order-2">
            {/* Основное изображение с улучшенным дизайном */}
            <div className="relative group animate-slide-in-right animation-delay-400">
              {/* Декоративные фоны */}
              <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-[#c69d7f]/20 to-[#c69d7f]/5 rounded-2xl rotate-3 group-hover:rotate-6 transition-transform duration-500 animate-rotate-slow"></div>
              <div className="absolute -top-2 -left-2 w-full h-full bg-[#c69d7f]/30 rounded-2xl rotate-1 group-hover:rotate-3 transition-transform duration-500"></div>
              
              {/* Основное изображение */}
              <div className="relative bg-gradient-to-br from-[#c69d7f]/10 to-[#b8916f]/5 rounded-2xl p-4 shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-105 border border-[#c69d7f]/20 hover-lift">
                <img
                  className="w-full max-w-[500px] h-auto object-cover rounded-xl animate-float"
                  alt="О нашей кофейне"
                  src="/img-6805-1.png"
                />
              </div>
              
 
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
