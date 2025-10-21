
export const AboutSection = (): JSX.Element => {
  return (
    <section className="w-full bg-gradient-to-br from-[#c69d7f] to-[#b8916f] py-16 px-4 lg:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Заголовок */}
        <div className="text-left mb-12 lg:mb-16 animate-fade-in-up">
          <h2 className="font-heading-display text-white text-3xl md:text-4xl lg:text-5xl tracking-wide leading-tight mb-4">
            НАША ФИЛОСОФИЯ
          </h2>
          <div className="w-16 h-1 bg-white rounded-full animate-pulse-glow"></div>
        </div>

        {/* Основной контент */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Левая колонка - текст */}
          <div className="space-y-8 animate-slide-in-left animation-delay-200">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/20 hover-lift">
              <h3 className="text-2xl lg:text-3xl font-heading-subtitle text-white mb-4">
                Кофе как искусство
              </h3>
              <p className="text-lg lg:text-xl text-white/95 leading-relaxed font-body-text">
                Кофе — это не просто напиток. Это утренний ритуал, в котором мир ещё
                тихий, мысли свежие, а время будто останавливается. В эти минуты всё
                становится проще, честнее и ближе к душе.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/20 hover-lift">
              <h3 className="text-2xl lg:text-3xl font-heading-subtitle text-white mb-4">
                Наша миссия
              </h3>
              <p className="text-lg lg:text-xl text-white/95 leading-relaxed font-body-text">
                Мы создаем пространство, где каждый глоток кофе превращается в 
                момент наслаждения и умиротворения. Наша цель — подарить вам 
                неповторимый опыт вкуса и атмосферы.
              </p>
            </div>
          </div>

          {/* Правая колонка - изображения и особенности */}
          <div className="space-y-8">
            {/* Карточки с особенностями */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-white mb-2 font-['Inter',Helvetica]">
                  Премиум качество
                </h4>
                <p className="text-white/80 text-sm">
                  Только отборные зерна высшего качества
                </p>
              </div>

              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-white mb-2 font-['Inter',Helvetica]">
                  С любовью
                </h4>
                <p className="text-white/80 text-sm">
                  Каждая чашка готовится с особой заботой
                </p>
              </div>
            </div>

            {/* Блок с изображением */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-white mb-4 font-['Inter',Helvetica]">
                  Свежий подход
                </h4>
                <p className="text-white/90 leading-relaxed">
                  Мы постоянно совершенствуем наши рецепты и технологии,
                  чтобы предложить вам лучший кофе
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Нижняя секция с статистикой */}
        <div className="mt-16 lg:mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2 font-['Inter',Helvetica]">
                5+
              </div>
              <div className="text-white/80 text-sm lg:text-base">
                Лет опыта
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2 font-['Inter',Helvetica]">
                1000+
              </div>
              <div className="text-white/80 text-sm lg:text-base">
                Довольных клиентов
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2 font-['Inter',Helvetica]">
                50+
              </div>
              <div className="text-white/80 text-sm lg:text-base">
                Видов кофе
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2 font-['Inter',Helvetica]">
                24/7
              </div>
              <div className="text-white/80 text-sm lg:text-base">
                Поддержка
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
